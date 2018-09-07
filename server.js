const express = require("express");
const actions = require("./data/helpers/actionModel");
const projects = require("./data/helpers/projectModel");
const server = express();
server.use(express.json());


// ___endpoints__

server.get('/projects', (req, res) => {
    projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "The project information could not be retrieved." });
    })
})