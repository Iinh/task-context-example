const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

const tasks = require("./contexts/router");
server.use("/api/tasks", tasks);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
server.listen(3200, () => console.log("API running on port 3200"));
