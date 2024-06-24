const db = require("../db/dbConfig");

const getAllAnimes = async () => {
  try {
    const animes = await db.any("SELECT * FROM animes"); // returns an array
    return animes;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnimes,
};
