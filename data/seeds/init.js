exports.seed = function (knex, Promise) {
  return knex("tasks_contexts")
    .truncate()
    .then(() => knex("contexts").truncate())
    .then(() => knex("tasks").truncate())
    .then(() => {
      return knex("tasks").insert([
        {
          id: 1,
          description: "File Income Taxes",
          notes: "Deadline: November 1st",
          completed: 0,
        },
        {
          id: 2,
          description: "Finish Sprint Challenge",
          notes: "Database Persistence",
          completed: 0,
        },
        { id: 3, description: "Cook Dinner", notes: "Pasta", completed: 0 },
        {
          id: 4,
          description: "June Expense Report",
          notes: "Attn: Boss",
          completed: 0,
        },
        { id: 5, description: "Laundry", notes: "", completed: 0 },
      ]);
    })
    .then(() => {
      return knex("contexts").insert([
        { id: 1, context_description: "At Home" },
        { id: 2, context_description: "At Work" },
        { id: 3, context_description: "At Computer" },
      ]);
    })
    .then(() => {
      return knex("tasks_contexts").insert([
        { task_id: 1, context_id: 3 },
        { task_id: 2, context_id: 3 },
        { task_id: 3, context_id: 1 },
        { task_id: 4, context_id: 2 },
        { task_id: 5, context_id: 1 },
      ]);
    });
};
