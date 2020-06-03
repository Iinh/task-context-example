const express = require("express");
const Tasks = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTask()
    .then((tasks) => res.status(200).json(tasks))
    .catch((error) => res.status(500).json(error));
});

router.get("/context", (req, res) => {
  Tasks.getContext()
    .then((context) => res.status(200).json(context))
    .catch((error) => res.status(500).json(error));
});

router.get("/context/:contextID", (req, res) => {
  const context_id = req.params.contextID;
  Tasks.getTaskByContextId(context_id).then((task) =>
    res.status(200).json(task)
  );
});

router.get("/:taskID", (req, res) => {
  const { taskID } = req.params;
  Tasks.getTask(taskID)
    .then((task) =>
      task
        ? res.status(200).json(task)
        : res.status(404).json({ message: "no task with id" })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "error fetching task" });
    });
});

module.exports = router;
