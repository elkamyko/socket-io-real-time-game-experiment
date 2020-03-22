import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const ioInstance = io(httpServer);

const start = function (port = 3000) {
    httpServer.listen(port, function () {
        console.log(`Example app listening on port ${port}!\n`);
    });
}

ioInstance.on('connection', function(socket) {
    console.log('a user connected');
});

export {
    app,
    start,
    httpServer,
    ioInstance,
}