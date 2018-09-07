const express = require("express");

const actionRoutes = require("./data/actions/routes");
const projectRoutes = require("./data/projects/routes");

const server = express();

server.use(express.json());
server.use("/actions", actionRoutes);
server.use("/projects", projectRoutes);

server.listen(5000, () => console.log("API running on port 5000"));
