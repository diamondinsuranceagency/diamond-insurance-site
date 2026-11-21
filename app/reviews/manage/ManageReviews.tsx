"use client";

import { useEffect, useState, type FormEvent } from "react";
import ReviewForm, { buttonStyle, fieldStyle, reviewApi, type ReviewInput } from "../ReviewForm";

const endpoint = "/api/reviews/manage";
const secondary = "rounded-full border border-teal-800 px-4 py-2 text-sm font-semibold text-teal-900 hover:bg-teal-50 disabled:opacity-50";
type Row = { id: string; displayName: string; rating: number; body: string; source: string; status: string; createdAt: string };
type View = "loading" | "signedOut" | "ready" | "unavailable";

export default function ManageReviews() {
  const [view, setView] = useState<View>("loading");
  const [rows, setRows] = useState<Row[]>([]);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [link, setLink] = useState("");
  const [expires, setExpires] = useState("");

  useEffect(() => {
    let mounted = true;
    reviewApi(endpoint).then((data) => {
      if (!mounted) return;
      setRows(data.reviews);
      setView("ready");
    }, (e) => {
      if (mounted) setView(e.status === 401 ? "signedOut" : "unavailable");
    });
    return () => { mounted = false; };
  }, []);

  async function refresh() {
    const data = await reviewApi(endpoint);
    setRows(data.reviews);
    setView("ready");
  }

  async function run(work: () => Promise<void>) {
    if (busy) return;
    setBusy(true);
    setNotice("");
    setError("");
    try {
      await work();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn’t complete that action.");
    } finally {
      setBusy(false);
    }
  }

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const password = new FormData(form).get("password");
    void run(async () => {
      await reviewApi(endpoint, { action: "login", password });
      form.reset();
      await refresh();
    });
  }

  async function manual(review: ReviewInput) {
    await reviewApi(endpoint, { action: "manual", ...review });
    setNotice("Testimonial saved. It won’t appear publicly until you publish it.");
    await refresh();
  }

  if (view === "loading") return <p role="status" className="mt-8 text-slate-700">Opening review manager…</p>;
  if (view === "unavailable") return <p role="alert" className="mt-8 rounded-xl bg-amber-50 p-4 text-amber-950">The review manager is not available right now.</p>;
  if (view === "signedOut") return (
    <form onSubmit={login} className="mt-8 max-w-md rounded-3xl border border-slate-200 bg-white p-6">
      <label className="block text-sm font-semibold">Owner passphrase
        <input autoComplete="current-password" name="password" type="password" required className={fieldStyle} />
      </label>
      {error && <p role="alert" className="mt-3 text-sm text-red-900">{error}</p>}
      <button className={buttonStyle + " mt-5"} disabled={busy}>Sign in</button>
    </form>
  );

  return (
    <div className="mt-8 space-y-7">
      <div className="flex justify-end"><button type="button" className={secondary} disabled={busy} onClick={() => void run(async () => {
        await reviewApi(endpoint, { action: "logout" }); setRows([]); setLink(""); setView("signedOut");
      })}>Sign out</button></div>
      {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-red-900">{error}</p>}
      {notice && <p role="status" className="rounded-xl bg-teal-50 p-3 text-teal-900">{notice}</p>}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Client review link</h2>
          <p className="mb-5 mt-2 text-sm leading-6 text-slate-600">Generate a new link for each client. Share it with only the intended recipient. It can accept one submission.</p>
          <button type="button" disabled={busy} className={buttonStyle} onClick={() => void run(async () => {
            const data = await reviewApi(endpoint, { action: "invite" });
            setLink(window.location.origin + "/reviews/leave#" + data.token);
            setExpires(data.expiresAt);
          })}>Generate one-time link</button>
          {link && <div className="mt-5">
            <label className="block text-sm font-semibold">Copy this private link
              <input readOnly value={link} onFocus={(e) => e.currentTarget.select()} className={fieldStyle + " text-sm"} />
            </label>
            <p className="mt-2 text-sm text-slate-600">Expires {new Date(expires).toLocaleString()}.</p>
            <button type="button" className={secondary + " mt-3"} onClick={() => void run(async () => {
              await navigator.clipboard.writeText(link); setNotice("Review link copied.");
            })}>Copy link</button>
          </div>}
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Add a client testimonial</h2>
          <p className="mb-5 mt-2 text-sm leading-6 text-slate-600">Use this only if the client already approved what will be published.</p>
          <ReviewForm manual onSubmit={manual} />
        </section>
      </div>
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Review queue</h2>
        <p className="text-sm text-slate-600">Check all ratings by the same standards for privacy, spam and authenticity. Don’t hold back a review because it’s critical.</p>
        {rows.length === 0 && <p className="text-sm text-slate-600">No new submissions yet.</p>}
        {rows.map((row) => <article key={row.id} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
          <div><p className="font-semibold">{row.displayName} · {row.rating}/5</p><p className="text-sm capitalize text-slate-600">{row.status} · {row.source === "owner_entry" ? "Added by owner" : "Client invitation"}</p></div>
          <blockquote className="whitespace-pre-wrap break-words text-slate-700">{row.body}</blockquote>
          <div className="flex flex-wrap gap-2">
            {row.status !== "published" && <button type="button" className={secondary} disabled={busy} onClick={() => void run(async () => {
              await reviewApi(endpoint, { action: "publish", id: row.id });
              setNotice("Review published."); await refresh();
            })}>Publish</button>}
            {row.status !== "withdrawn" && <button type="button" className={secondary} disabled={busy} onClick={() => void run(async () => {
              await reviewApi(endpoint, { action: "withdraw", id: row.id });
              setNotice("Review withdrawn."); await refresh();
            })}>Withdraw</button>}
          </div>
        </article>)}
      </section>
    </div>
  );
}
