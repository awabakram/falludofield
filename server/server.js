var players = [];

var playerTurn = -1;

const io = require("socket.io")(3000, {
    cors: {
        origin: ['http://localhost:8080'],
    },
})

io.on("connection", socket => {
    console.log("Connected: " + socket.id);
    
    socket.on("ready", function() {
        //socket.broadcast.emit("receive-message", message);
        players.push(socket.id);
        if (players.length == 4) {
            // Start the game
            console.log("Time to start");
            console.log("Player " + players.indexOf(socket.id) + "set up");
            
            for (var i = 0; i < 4; ++i) { 
                io.to(players[i]).emit("start", i);
            }
        }
    });

    socket.on("unready", function() {
        players.splice(players.indexOf(socket.id, 1));
    });

    socket.on("disconnect", function() {
        io.emit("re"); // TEMP: ALLOW FOR RECONNECTION
        players = [];
    });

    socket.on("dice-roll-anim", function(dice1, dice2) {
        socket.broadcast.emit("dice-roll-anim-set", dice1, dice2);
    });

    socket.on("dialog-text", function(header, footer) {
        socket.broadcast.emit("dialog-text-set", header, footer);
    });

    socket.on("turnOver", function(wait, turn) {
        socket.broadcast.emit("nextTurn", wait, turn);
    });

    socket.on("pieceToMove", function(pieceI, turn, np, mov) {
        socket.broadcast.emit("movePiece", pieceI, turn, np, mov);
    });

    socket.on("dialog-close", function() {
        socket.broadcast.emit("closeDialog");
    })

    socket.on("victory", turn => {
        socket.broadcast.emit("winner", turn);
    });
});