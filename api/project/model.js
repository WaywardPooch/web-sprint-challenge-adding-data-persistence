// build your `Project` model here
const db = require("./../../data/dbConfig");

const getProjects = async () => {
  const projects = await db("projects");
  return projects;
};

const getProjectById = async (project_id) => {
  const project = await db("projects")
    .where("project_id", project_id)
    .first();
  return project;
};

const addProject = async (project) => {
  const [id] = await db("projects")
    .insert(project);
  const newProject = await getProjectById(id);
  return newProject;
};

module.exports = {
  getProjects,
  getProjectById,
  addProject,
};
