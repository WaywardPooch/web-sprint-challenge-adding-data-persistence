// build your `Task` model here
const db = require("./../../data/dbConfig");

const getTasks = async () => {
  const records = await db("tasks as t")
    .leftJoin("projects as p",
      "p.project_id", "t.project_id")
    .select("t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description");
  const tasks = records.map((record) => {
    return {
      ...record,
      task_completed:
        record.task_completed === 0
          ? false
          : true,
    };
  });
  return tasks;
};

const getTaskById = async (task_id) => {
  const record = await db("tasks")
    .where("task_id", task_id)
    .first();
  return record;
};

const addTask = async (task) => {
  const [id] = await db("tasks")
    .insert(task);
  const newTask = await getTaskById(id);
  return newTask;
};

module.exports = {
  getTasks,
  getTaskById,
  addTask
};