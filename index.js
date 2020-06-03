const express = require("express");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());

const tasks = require("./tasks/router");
server.use("/api/task", tasks);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
server.listen(3200, () => console.log("API running on port 3200"));
