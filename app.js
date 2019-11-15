const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = 80;
const hostName = "127.0.0.1";
const dalType = process.env.DAL_TYPE;

app.get("/", (req, res) => {
    
});

server.listen(port, hostName, () => {
    console.log(`Listening on: http://${hostName}:${port}`);
});