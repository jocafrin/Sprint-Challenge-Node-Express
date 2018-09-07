const express = require("express");
const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel");
const server = express();
server.use(express.json());


// ___endpoints__

