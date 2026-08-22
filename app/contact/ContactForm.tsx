"use client";

import { useActionState } from "react";
import { sendContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactForm,
    initialState,
  );

  return (
    <form action={formAction} className="mt-8 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-slate-700">First name</span>

          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            required
            maxLength={80}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#f8f7f4] px-4 py-3 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-slate-700">Last name</span>

          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            required
            maxLength={80}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#f8f7f4] px-4 py-3 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-slate-700">
            Email address
          </span>

          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={160}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#f8f7f4] px-4 py-3 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-slate-700">
            Phone number
          </span>

          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength={40}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#f8f7f4] px-4 py-3 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-bold text-slate-700">
          What would you like help with?
        </span>

        <select
          name="topic"
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-[#f8f7f4] px-4 py-3 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
        >
          <option value="">Select a topic</option>
          <option value="Whole life insurance">Whole life insurance</option>
          <option value="Term life insurance">Term life insurance</option>
          <option value="Supplemental insurance plans">
            Supplemental insurance plans
          </option>
          <option value="Living benefits">Living benefits</option>
          <option value="General question">General question</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-bold text-slate-700">Message</span>

        <textarea
          name="message"
          rows={6}
          required
          maxLength={3000}
          placeholder="Please do not include Social Security numbers, payment details, or sensitive medical information."
          className="mt-2 w-full resize-y rounded-2xl border border-slate-300 bg-[#f8f7f4] px-4 py-3 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300"
        />

        <span>
          I understand that submitting this form does not create insurance
          coverage or guarantee eligibility.
        </span>
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex rounded-full bg-teal-800 px-8 py-4 font-bold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-1 hover:bg-teal-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.message && (
        <p
          role="status"
          className={`rounded-2xl px-5 py-4 text-sm font-semibold ${
            state.success
              ? "bg-teal-50 text-teal-900"
              : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}