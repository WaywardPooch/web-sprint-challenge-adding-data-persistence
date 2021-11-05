const Task = require("./model");

const validateTaskId = async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.getByTaskId(id);
  if (task) {
    next();
  } else {
    next({
      status: 404,
      message: `task with ID ${id} not found!`
    });
  }
};

const validateTaskPayload = (req, res, next) => {
  const {
    task_id,
    task_description,
    task_notes,
    task_completed,
    project_id
  } = req.body;
  if (task_id !== undefined) {
    next({
      status: 400,
      message: "do not provide a task_id; this will be assigned, automatically"
    });
  } else if (typeof task_description !== "string") {
    next({
      status: 400,
      message: "task_description (required) must be a string"
    });
  } else if (
    task_notes !== undefined &&
    typeof task_notes !== "string"
  ) {
    next({
      status: 400,
      message: "task_notes (optional) must be a string"
    });
  } else if (
    task_completed !== undefined &&
    typeof task_completed === "boolean"
  ) {
    next({
      status: 400,
      message: "task_completed (optional) must be a boolean"
    });
  } else if (typeof project_id !== "number") {
    next({
      status: 400,
      message: "project_id (required) must be a number"
    });
  } else {
    next();
  }
};

module.exports = {
  validateTaskId,
  validateTaskPayload
};