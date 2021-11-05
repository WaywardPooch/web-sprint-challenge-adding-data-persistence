exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: "Acoustic Guitar",
    },
    {
      resource_name: "Computer",
      resource_description: "A desktop PC for work"
    },
    {
      resource_name: "USB Flash Drive",
      resource_description: "8GB+ Storage Stick"
    }
  ]);
}