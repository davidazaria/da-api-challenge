\c da_api_challenge;

DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  duration_minutes BIGINT,
  air_date VARCHAR(255),
  rating BIGINT,
  keywords TEXT []
);

CREATE INDEX ON shows (title);

