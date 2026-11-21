# Diamond Insurance Agency: first-party reviews

- Public reviews: `/reviews`. Previously published static reviews are kept; approved new reviews appear at the top.
- Client invitation: `/reviews/leave#…`. The owner sends it to the intended client. An invitation expires after 14 days and accepts only one successful submission, including simultaneous submissions. Opening or previewing the link does not consume it.
- Owner: `/reviews/manage`. Sign in, generate or copy a link, add a client's original testimonial with permission, or review, publish and withdraw submissions. Use the same privacy, spam and authenticity checks for all ratings. Do not enter policy numbers, medical details or other private information.

## Before promoting the deployment

1. Connect a Postgres 14+ database that the agency is authorized to use. Use a separate database or database branch for preview tests.
2. Apply `db/migrations/001_site_reviews.sql` to the intended database with a migration account. This creates two new review tables and an index; it does not modify other tables. Use a project-specific runtime database role with only the required select, insert and update permissions, not an administrative credential.
3. Set these server-only environment variables on the Vercel project:
   - `DATABASE_URL`: the runtime connection string, normally a managed provider's pooled endpoint. Use TLS for remote databases.
   - `REVIEWS_ADMIN_SECRET`: a new random owner passphrase, e.g. output of `openssl rand -hex 32`. Generate it securely, set it through the host's secret manager, and keep it in the owner's password manager. Do not send it in chat or commit it.
   - `REVIEWS_SITE_ORIGIN`: the exact canonical origin, `https://diamondconsultingadvisory.com`, after verifying the live project and redirect. An existing exact `NEXT_PUBLIC_SITE_URL` can be used as fallback. Set the preview variables to the preview deployment or rely on Vercel's preview URL.
4. Validate on a protected preview: run lint and build; sign in; generate a dummy invitation; submit exactly once; verify it doesn't appear until published; verify reopening is rejected; publish and withdraw; check desktop and phone views. Never use client data in preview. In production smoke tests use synthetic checks only and don't publish demo testimonials.
5. Promote the release to the verified existing site only after the production database is ready. If review settings are absent or unreachable, the review form and owner endpoints refuse writes rather than using an unreliable fallback. Existing static testimonials remain visible.
