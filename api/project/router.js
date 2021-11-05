// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const { validateProjectId } = require("./middleware");
const { handleError } = require("./../middleware");

const ProjectsRouter = express.Router();

ProjectsRouter.get("/",
  async (req, res, next) => {
    try {
      const projects = await Project.getProjects();
      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }
);

ProjectsRouter.get("/:id",
  validateProjectId,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const project = await Project.getProjectById(id);
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }
);

ProjectsRouter.use(handleError);

module.exports = ProjectsRouter;