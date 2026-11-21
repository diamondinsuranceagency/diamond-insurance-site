-- Additive; leaves the existing static public testimonials and other data untouched.
BEGIN;
CREATE TABLE IF NOT EXISTS diamond_review_invites (
  token_hash text PRIMARY KEY CHECK (char_length(token_hash) = 64),
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at timestamptz NOT NULL DEFAULT (CURRENT_TIMESTAMP + INTERVAL '14 days'),
  used_at timestamptz
);
CREATE TABLE IF NOT EXISTS diamond_site_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invite_hash text UNIQUE REFERENCES diamond_review_invites(token_hash),
  source text NOT NULL CHECK (source IN ('client_link', 'owner_entry')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','published','withdrawn')),
  display_name text NOT NULL CHECK (char_length(display_name) BETWEEN 1 AND 80),
  rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body text NOT NULL CHECK (char_length(body) BETWEEN 1 AND 1500),
  consent_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  published_at timestamptz,
  CHECK ((source = 'client_link') = (invite_hash IS NOT NULL)),
  CHECK ((status = 'published') = (published_at IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS diamond_site_reviews_public_order
  ON diamond_site_reviews (published_at DESC, id) WHERE status = 'published';
COMMIT;
