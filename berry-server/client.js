const io = require("socket.io-client"); 
const socket = io("http://localhost:3000"); 

function start(){
    socket.send("coucou je suis le client");
}

socket.on("connect", start);
socket.on("message", console.log);
socket.on(
    "berryEvent", 
    (msg) => {
        console.log("prix de la baie: ", msg);
    }
);