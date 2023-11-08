const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("copameba.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'copameba.db'");
});

module.exports = db;
