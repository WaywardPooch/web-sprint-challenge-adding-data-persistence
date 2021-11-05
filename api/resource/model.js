// build your `Resource` model here
const db = require("./../../data/dbConfig");

const getResources = async () => {
  const records = await db("resources");
  return records;
};

module.exports = {
  getResources
};