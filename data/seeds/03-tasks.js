exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      task_description: "Attend class",
      task_notes: "Show up every day, ready to learn!",
      task_completed: 1,
      project_id: 3
    },
    {
      task_description: "Complete daily module projects",
      task_notes: "Use the skills you learn in GP, and apply them",
      task_completed: 1,
      project_id: 3
    },
    {
      task_description: "Succesfully make your way through Labs",
      task_notes: "Stay on course, and never give up",
      project_id: 3
    },
    {
      task_description: "Practice Chord Switching",
      task_notes: "Learn the major chords, and try moving between them while strumming",
      project_id: 2
    },
    {
      task_description: "Find a simple song that you like",
      task_completed: 1,
      project_id: 2
    },
    {
      task_description: "Stay consistent",
      task_notes: "Pick up your guitar and play every day",
      project_id: 2
    },
    {
      task_description: "Choose a distribution",
      task_notes: "Research different beginner distros, and download one you like",
      task_completed: 1,
      project_id: 1
    },
    {
      task_description: "Burn an ISO to a USB drive",
      task_notes: "Use BalenaEtcher to copy the files to your USB",
      task_completed: 1,
      project_id: 1
    },
    {
      task_description: "Start your installation",
      task_notes: "Boot into your USB, and follow the instructions on screen",
      task_completed: 1,
      project_id: 1
    },
    {
      task_description: "Reboot",
      task_notes: "When the installation is done, reboot and enjoy!",
      task_completed: 1,
      project_id: 1
    }
  ]);
}