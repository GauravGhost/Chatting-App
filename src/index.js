const express = require('express')

const app  = express();

const http = require('http');
const server = http.createServer(app);

const {Server} = require("socket.io");
const io = new Server(server);

const connect = require('./config/db-config');

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket)=>{
    console.log("A user Connected", socket.id)
    socket.on('disconnect', ()=>{
        console.log("A User disconnected")
    });
    socket.on('new_msg', (data)=>{
        io.emit('msg_rcvd', data)
    })
})


server.listen(3000, ()=>{
    console.log('Listening on port 3000');
    connect();
    console.log("Database Connected");
})