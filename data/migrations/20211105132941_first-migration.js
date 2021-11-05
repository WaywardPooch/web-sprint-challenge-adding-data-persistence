exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name");
      table.string("project_description");
      table.boolean("project_completed");
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name");
      table.string("resource_description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description");
      table.string("task_notes");
      table.boolean("task_completed");
      table.integer("project_id");
    })
    .createTable("project_resources", (table) => {
      table.increments("project_resources_id");
      table.integer("project_id");
      table.integer("resource_id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
