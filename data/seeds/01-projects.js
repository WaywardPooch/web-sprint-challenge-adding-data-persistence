exports.seed = function (knex) {
  return knex('projects').insert([
    {
      project_name: "Install Linux",
      project_description: "Put Linux on a computer",
      project_completed: 1
    },
    {
      project_name: "Learn Guitar",
      project_description: "Discover how to play campfire songs"
    },
    {
      project_name: "Graduate from Lambda School",
      project_description: "Become a Full-Stack Web Developer"
    }
  ]);
};
