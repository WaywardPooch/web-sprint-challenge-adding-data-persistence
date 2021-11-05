// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");
const { handleError } = require("./../middleware");
const {
  validateTaskId,
  validateTaskPayload
} = require("./middleware");

const TasksRouter = express.Router();

TasksRouter.get("/",
  async (req, res, next) => {
    try {
      const tasks = await Task.getTasks();
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }
);
TasksRouter.get("/:id",
  validateTaskId,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await Task.getTaskById(id);
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  }
);
TasksRouter.post("/",
  validateTaskPayload,
  async (req, res, next) => {
    try {
      const newTask = await Task.addTask(req.body);
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  }
);

TasksRouter.use(handleError);

module.exports = TasksRouter;
