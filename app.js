const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const port = 80;
const hostName = '127.0.0.1';
const rootRouter = require('./Backend/routes')(app);


app.use(express.static('public'));

server.listen(port, hostName, () => {
    console.log(`Listening on: http://${hostName}:${port}`);
});