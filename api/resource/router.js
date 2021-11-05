// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");
const { handleError } = require("./../middleware");

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

ResourcesRouter.use(handleError);

module.exports = ResourcesRouter;