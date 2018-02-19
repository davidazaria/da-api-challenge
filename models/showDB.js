const pgp = require('pg-promise')({
  query: q => console.log(q.query),
});
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {

  findAll() {
    return db.many(`
      SELECT *
      FROM shows
      ORDER BY id ASC
    `);
  },

  findById(id) {
    return db.one(`
      SELECT *
      FROM shows
      WHERE id = $1
    `, id);
  },

  save(show) {
    return db.one(`
      INSERT INTO shows (title, description, duration_minutes, air_date, rating, keywords)
      VALUES
      ($/title/,
      $/description/,
      $/duration_minutes/,
      $/air_date/,
      $/rating/,
      ARRAY [$/keywords/])
      RETURNING *
      `, show);
  },

  update(show) {
    return db.one(`
      UPDATE shows
      SET
      title = $/title/,
      description = $/description/,
      duration_minutes = $/duration_minutes/,
      air_date = $/air_date/,
      rating = $/rating/,
      keywords = ARRAY [$/keywords/]
      WHERE id = $/id/
      RETURNING *
      `, show);
  },

  destroy(id) {
    return db.none(`
      DELETE
      FROM shows
      WHERE id = $1
    `, id);
  },
};
