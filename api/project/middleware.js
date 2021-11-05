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

module.exports = {
  validateProjectId
};