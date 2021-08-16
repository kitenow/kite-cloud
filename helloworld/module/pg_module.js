const pg = require("pg")

module.exports = {
  getCommentByDB: () =>
    new Promise((resolve, reject) => {
      const { Pool, Client } = require("pg");
      const connectionString = process.env.DB_CONSTRING
      const pool = new Pool({
        connectionString,
      });

      pool.query("SELECT 'PgResult' as col01 ", (err, res) => {
        resolve(res.rows);
        pool.end();
      });
    }),
};
