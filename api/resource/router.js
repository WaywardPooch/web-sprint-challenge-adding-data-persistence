// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const { handleError } = require("./../middleware");
const { validateResourcePayload } = require("./middleware");

const ResourcesRouter = express.Router();

ResourcesRouter.get("/",
  async (req, res, next) => {
    try {
      const resources = await Resource.getResources();
      res.status(200).json(resources);
    } catch (err) {
      next(err);
    }
  }
);
ResourcesRouter.get("/:id",
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const resource = await Resource.getResourceById(id);
      res.status(200).json(resource);
    } catch (err) {
      next(err);
    }
  }
);
ResourcesRouter.post("/",
  validateResourcePayload,
  async (req, res, next) => {
    try {
      const newProject = await Resource.addResource(req.body);
      res.status(201).json(newProject);
    } catch (err) {
      next(err);
    }
  }
);

ResourcesRouter.use(handleError);

module.exports = ResourcesRouter;