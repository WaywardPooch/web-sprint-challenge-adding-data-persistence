// build your `Project` model here
const db = require("./../../data/dbConfig");

const getProjects = async () => {
  const records = await db("projects");
  const projects = records.map((record) => {
    return {
      ...record,
      project_completed:
        record.project_completed === 0
          ? false
          : true,
    };
  });
  return projects;
};

const getProjectById = async (project_id) => {
  const project = await db("projects")
    .where("project_id", project_id)
    .first();
  return {
    ...project,
    project_completed:
      project.project_completed === 0
        ? false
        : true,
  };
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
