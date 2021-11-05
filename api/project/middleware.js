const Project = require("./model");

const validateProjectId = async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.getProjectById(id);
  if (project) {
    next();
  } else {
    next({
      status: 404,
      message: `project with ID ${id} not found!`
    });
  }
};
const validateProjectPayload = (req, res, next) => {
  const {
    project_id,
    project_name,
    project_description,
    project_completed
  } = req.body;
  if (project_id !== undefined) {
    next({
      status: 400,
      message: "do not provide a project_id; this will be assigned, automatically"
    });
  } else if (
    typeof project_name !== "string" ||
    typeof project_name === "undefined"
  ) {
    next({
      status: 400,
      message: `project name "${project_name}" is invalid or missing`
    });
  } else if (
    project_description &&
    typeof project_description !== "string"
  ) {
    next({
      status: 400,
      message: "project_description (optional) must be a string"
    });
  } else if (
    project_completed !== undefined &&
    typeof project_completed == "boolean"
  ) {
    next({
      status: 400,
      message: "project_completed (optional) must have value 0, 1, true, or false"
    });
  } else {
    next();
  }
};

module.exports = {
  validateProjectId,
  validateProjectPayload
};