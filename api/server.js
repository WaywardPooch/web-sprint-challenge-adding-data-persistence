// build your server here and require it from index.js
const express = require("express");
const ProjectsRouter = require("./project/router");
const ResourcesRouter = require("./resource/router");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);

module.exports = server;