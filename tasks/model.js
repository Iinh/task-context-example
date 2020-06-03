const db = require("../data/dbConfig");

module.exports = {
  getContextByTaskId,
  getTask,
  getContext,
  getTaskByContextId,
};

function getContext(id) {
  if (id) {
    return db("contexts").where({ id: id });
  } else {
    return db("contexts");
  }
}

function getContextByTaskId(id) {
  return db("tasks_contexts").where({ task_id: id }).first();
}

async function getTask(id) {
  if (id) {
    const { context_id } = await getContextByTaskId(id).first();
    const contextQuery = await getContext(context_id);
    const taskQuery = await db("tasks").where({ id }).first();
    return Promise.all([taskQuery, contextQuery]).then(([task, context]) => {
      if (task) {
        task.context = context;
        return task;
      } else {
        return null;
      }
    });
  } else {
    return db("tasks");
  }
}

async function getTaskByContextId(id) {
  const task_id = await (
    await db("tasks_contexts").where({ context_id: id })
  ).map((obj) => obj.task_id);
  let tasks = await Promise.all(task_id.map((id) => getTask(id)));
  return tasks;
}
