const options = {
    cors: {
      origin: '*',
    },
  };
const io = require("socket.io")(3000, options); 

function init(socket){
    socket.on("message", console.log);
    socket.send("bonjour, et moi c'est le serveur, je suis enchanté"); 
}

function diffuse(){
    
    const numbers = [];

    for( let i = 0; i < 1000; i++ ){
        numbers.push(Math.random());
    }

    io.emit("berryEvent", numbers );
    setTimeout(diffuse, 1000);
}

io.on("connection", init);
diffuse();
