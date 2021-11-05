// build your `Resource` model here
const db = require("./../../data/dbConfig");

const getResources = async () => {
  const records = await db("resources");
  return records;
};

const getResourceById = async (resource_id) => {
  const record = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return record;
};

const addResource = async (resource) => {
  const [id] = await db("resources")
    .insert(resource);
  const newResource = await getResourceById(id);
  return newResource;
};

module.exports = {
  getResources,
  getResourceById,
  addResource
};