
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

class piece 
{
    constructor(position = 0)
    {
        this.position = position;
    }
}

const init_pos = [
    // Red
    [[200, 200], [400, 200], [200, 400], [400, 400]],
    // Green
    [[1100, 200], [1300, 200], [1100, 400], [1300, 400]],
    // Blue
    [[200, 1100], [400, 1100], [200, 1300], [400, 1300]],
    // Yellow
    [[1100, 1100], [1300, 1100], [1100, 1300], [1300, 1300]]
]

const paths = [
    // Red
    [[2,4],[1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],
    [7,0],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],[14,8],[13,8],[12,8],[11,8],[10,8],[9,8],
    [8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],
    [6,14],[6,13],[6,12],[6,11],[6,10],[6,9],[5,8],
    [4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[1,7],[2,7],
    [3,7],[4,7],[5,7],[6,7]],

    // Green
    [[-1, -1],[8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],[14,8],[13,8],[12,8],[11,8],[10,8],
    [9,8],[8,9],[8,10],[8,11],[8,12],[8,13],
    [8,14],[7,14],[6,14],[6,13],[6,12],[6,11],
    [6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],
    [0,8],[0,7],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],
    [7,1],[7,2],[7,3],[7,4],[7,5],[7,6]],

    // Blue
    [[-1,-1],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],
    [6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
    [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],
    [11,6],[12,6],[13,6],[14,6],[14,7],[14,8],
    [13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],
    [8,11],[8,12],[8,13],[8,14],[7,14],[7,13],
    [7,12],[7,11],[7,10],[7,9],[7,8]],

    // Yellow
    [[-1,-1],[13,8],[12,8],[11,8],[10,8],[9,8],[8,9],
    [8,10],[8,11],[8,12],[8,13],[8,14],[7,14],
    [6,14],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],
    [6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
    [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],
    [11,6],[12,6],[13,6],[14,6],[14,7],[13,7],
    [12,7],[11,7],[10,7],[9,7],[8,7]]
];

const safe_spaces = [
    [6,2], [12,6], [8,12], [2,8]
]

const colours = ["Red", "Green", "Blue", "Yellow"];
var winner = -1;

var player = -1;
var playerTurn = -1;
var started = false;

var pieces = [];

function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

socket.on("start", p => {
    if (!started) {
        player = p;
        console.log("Player: " + player);
        turnOver();
        started = true;
    }
});

socket.on("re", function() {
    window.location.reload();
})

socket.on("dice-roll-anim-set", function(dice1, dice2) {
    $('#die-1').attr("src", "./dice-" +  dice1.toString() + ".svg");
    $('#die-2').attr("src", "./dice-" +  dice2.toString() + ".svg");
});

socket.on("dialog-text-set", function(header, footer) {
    $('#dialog-h').text(header);
    $('#dialog-p').text(footer);
});

socket.on("nextTurn", function(wait, turn) {
    turnOver(wait, turn);
    console.log("Somehow calling you?");
});

socket.on("movePiece", function(pieceI, turn, np, mov) {    
    animatePieceMoving(null, pieceI, turn, np, mov, $('#canvas'));
});

socket.on("closeDialog", function() {    
    document.getElementById("dialog-box").close();
});

socket.on("winner", function(win) {
    victory(win);
});

function rollDice()
{
    $('#roll-button').off("click");

    var random_timer = randomInt(10, 20);
    var roll_timer = 0;
    for (var i = 0; i < random_timer; i++) {
        setTimeout(() => { 
            roll_timer++;
            dice1 = randomInt(1,6);
            dice2 = randomInt(1,6);

        socket.emit("dice-roll-anim", dice1, dice2);
        $('#die-1').attr("src", "./dice-" +  dice1.toString() + ".svg");
        $('#die-2').attr("src", "./dice-" +  dice2.toString() + ".svg");
        if (roll_timer == random_timer) { // Dice done rolling 
            // Check that our turn can continue
            var invalid = true;
            for (var i = 0; i < 4; ++i) {
                if (pieces[playerTurn][i].position != 0 && pieces[playerTurn][i].position != 57)
                    invalid = false;
            }   
            if (invalid) {
                if (dice1 != 6 && dice2 != 6) {
                    socket.emit("dialog-text", "Unlucky", "They must roll a 6 to proceed");
                    
                    $('#dialog-h').text("Unlucky");
                    $('#dialog-p').text("Must roll a 6 to proceed");
                    $('#roll-button').text("Next Turn").off("click").on("click", function() { turnOver(false) });
                }
                else {
                    dice = 6;
                    $('#dialog-h').text("Great!");
                    $('#dialog-p').text("You can now move a piece");
                    $("#roll-button").off("click");
                    $('#roll-button').text("Continue").on("click", function() {
                        document.getElementById("dialog-box").close();
                        socket.emit("dialog-close");
                    });
                }
            }
            else {          
                $('#dialog-p').text("Select a die to use");
                $('#roll-button').hide();       
                $(".dice").hover(function() {
                    $( this ).addClass("dice-shake");
                }, function() { 
                    $( this ).removeClass("dice-shake");
                });
                
                $("#die-1").on("click", function() {
                    dice = dice1;
                    socket.emit("dialog-close");
                    document.getElementById("dialog-box").close();
                });
                $("#die-2").on("click", function() {
                    dice = dice2;
                    socket.emit("dialog-close");
                    document.getElementById("dialog-box").close();
                });
            }

        }
            console.log("die should be done now");
        }, 50 + i*50);
    }
   
}

function drawStar(cx, cy, spikes, radius){
    $('canvas').drawPolygon({
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: cx, y: cy,
        radius: radius,
        sides: spikes,
        concavity: 0.5
    });
}

function drawSquare(x, y, $canvas) {
    var style = "#FFFFFF";
    if ((y > 0 && x == 7 && y < 6) || x == 8 && y == 1) 
        style = "#32CD32";
    else if ((x > 0 && y == 7 && x < 6) || x == 1 && y == 6) 
        style = "#EE2E31";
    else if ((y < 14 && x == 7 && y > 8) || x == 6 && y == 13) 
        style = "#00bfff";
    else if ((x > 8 && y == 7 && x < 14) || x == 13 && y == 8) 
        style = "#fada5e";
    
    $canvas.drawRect({
        fillStyle: style,
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: x*100, y: y*100,
        width: 100,
        height: 100,
    });
}

function callbackPieceClicked(layer, pieceI, $canvas) {
    if (playerTurn != player) 
        return;
    
    var turn = Number(pieceI[0]);
    var np = Number(pieceI[1]);
    if (turn != playerTurn) 
        return;
    
    if (pieces[turn][np].position == 57) 
        return; // We can't move this piece, it's done
    var mov = pieces[turn][np].position + dice;
    if (pieces[turn][np].position == 0) {
        if (dice != 6)
            return; // We can't move this piece out of the home area without a 6
        else 
            mov = 1;
    }
    animatePieceMoving(layer, pieceI, turn, np, mov, $canvas);
    socket.emit("pieceToMove", pieceI, turn, np, mov);
}

function victory(turn) {
    socket.emit("victory", turn);
    winner = turn;
    setTimeout(() => { 
        $('#dialog-h').text(colours[turn] + " wins!"); 
        $('#dialog-p').text("");
        $('#roll-button').show().off("click").text("Back to menu");
        $('.dice').hide();
        if (!document.getElementById("dialog-box").open)
            document.getElementById("dialog-box").showModal();
        }, 1000)
}

function animatePieceMoving(layer, pieceI, turn, np, mov, $canvas) {
    if (mov > 57) mov = 57;
    if (pieces[turn][np].position < mov)
        pieces[turn][np].position += 1
    else {
        var safe = false;
        for (var k = 0; k < 4; ++k) {
            // Iterate through each safe space and check we're not on one
            if (paths[turn][pieces[turn][np].position][0] == safe_spaces[k][0] &&
                paths[turn][pieces[turn][np].position][1] == safe_spaces[k][1]) 
                safe = true;
        }
        if (!safe) {
            for (var i = 0; i < 4; ++i) {
                if (i == turn) continue;
                    for (var j = 0; j < 4; ++j) {
                        if (paths[i][pieces[i][j].position][0] == paths[turn][pieces[turn][np].position][0] &&
                            paths[i][pieces[i][j].position][1] == paths[turn][pieces[turn][np].position][1]) {
                            pieces[i][j].position = 0;
                            var xx = init_pos[i][j][0];
                            var yy = init_pos[i][j][1];
                            $canvas.animateLayer($canvas.getLayerGroup("pieces" + i.toString() + j.toString())[0], {
                                x: xx, y: yy
                            }, 200);
                            $canvas.animateLayer($canvas.getLayerGroup("pieces" + i.toString() + j.toString())[1], {
                                x: xx, y: yy-100
                            }, 200); 
                            $canvas.animateLayer($canvas.getLayerGroup("pieces" + i.toString() + j.toString())[2], {
                                x: xx, y: yy-100
                            }, 200); 
                            $canvas.setLayer($canvas.getLayerGroup("pieces" + i.toString() + j.toString())[2], {
                                text: ""
                            });
                        }
                    }
                }
        }
        if (player == turn) {
            console.log("How many times are we calling this motherfucker");
            turnOver(true, playerTurn);
        }
        return;
    }

    for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            $canvas.setLayer($canvas.getLayerGroup("pieces" + turn.toString() + i.toString())[2], {
                text: ""
            });
            $canvas.setLayer($canvas.getLayerGroup("pieces" + turn.toString() + j.toString())[2], {
                text: ""
            });
        }
    }
    for (var i = 0; i < 4; ++i) {
        for (var j = 0; j < 4; ++j) {
            if (i == j) continue;
            if (pieces[turn][i].position == pieces[turn][j].position) {
                if (pieces[turn][i].position != 0) {
                    var cur = $canvas.measureText($canvas.getLayerGroup("pieces" + turn.toString() + i.toString())[2]).text;
                    if (cur == "") cur = "1";
                    if (pieces[turn][i].position == 57 && cur == "3") { // We've won
                        victory(turn);
                    }
                    $canvas.setLayer($canvas.getLayerGroup("pieces" + turn.toString() + i.toString())[2], {
                        text: (parseInt(cur) + 1).toString()
                    });
                    $canvas.drawLayers();
                }
            }
        } 
    }
    var xx = paths[turn][pieces[turn][np].position][0] * 100;
    var yy = paths[turn][pieces[turn][np].position][1] * 100;
    $canvas.animateLayer($canvas.getLayerGroup("pieces" + pieceI)[0], {
        x: xx+50, y: yy+50
    }, {
        duration: 200,
        complete: function(layer) {
            animatePieceMoving(layer, pieceI, turn, np, mov, $canvas); // Recurse until we move the piece the desired number of places
        }
    });
    $canvas.animateLayer($canvas.getLayerGroup("pieces" + pieceI)[1], {
        x: xx+50, y: yy-50
    }, 200);
    $canvas.animateLayer($canvas.getLayerGroup("pieces" + pieceI)[2], {
        x: xx+50, y: yy-50
    }, 200);}

function turnOver(wait = true, turn = playerTurn) {
    if (started && turn === player) {
        socket.emit("turnOver", wait, turn);
        console.log("How many times is this being called?" + player);
    }
    if (winner != -1) return;
    playerTurn = turn+1;
    if (playerTurn > 3) playerTurn = 0;
    for (var i = 0; i < 4; ++i) {
        var layers = $('canvas').getLayerGroup("pieces" + playerTurn.toString() + i.toString());
        for (var j = 0; j < 3; j++) { 
            $('canvas').moveLayer(layers[j], 999+j); 
        }
    }

    $('canvas').drawLayers();
    setTimeout(() => { 
        $('.dice').show();
        if (playerTurn == player) {
            $('#dialog-h').text("It's your turn!"); 
            $('#dialog-p').text("Please roll the dice:");
            $('#roll-button').show().off("click").text("Roll").on("click", rollDice)
        }
        else {
            $('#dialog-h').text(colours[playerTurn] + "'s turn");
            $('#dialog-p').text("");    
            $('#roll-button').hide().off("click")
        }
        $('.dice').off('mouseenter mouseleave click');
        if (!document.getElementById("dialog-box").open)
            document.getElementById("dialog-box").showModal();
    }, wait ? 1000 : 0);
}

function drawCircle(x, y, radius, ctx) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fill()
    ctx.stroke()
}

function drawPiece(x, y, colour, pieceI, $canvas) {
    $canvas.drawPath({
        groups: ['pieces'+pieceI],
        bringToFront: false,
        fillStyle: colour,
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: x, y: y,
        p1: {
            type: 'arc',
            x: 0, y: 0,
            start: 88, end: 272,
            radius: 40
        },
        p2: {
            type: 'line',
            x1: -40, y1: 0,
            x2: -10, y2: -100,
            x3: 10, y3: -100,
            x4: 40, y4: 0
        },
        click: function(layer) {
            callbackPieceClicked(layer, pieceI, $canvas);
        }
    }).drawArc({
        layer: true,
        groups: ['pieces'+pieceI],
        fromCenter: true,
        fillStyle: colour,
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: x, y: y-100,
        radius: 30,
        click: function(layer) {
            callbackPieceClicked(layer, pieceI, $canvas);
        }
    }).drawText({
        layer: true,
        groups: ['pieces'+pieceI],
        fromCenter: true,
        fillStyle: colour,
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: x, y: y-100,
        text: "",
        fontSize: 36
    });
    
    /*ctx.beginPath()
    ctx.arc(x, y, 40, 0, Math.PI, false)
    ctx.fill();
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x-40, y+1);
    ctx.lineTo(x-10, y-100);
    ctx.lineTo(x+10, y-100);
    ctx.lineTo(x+40, y);
    ctx.fill();
    ctx.stroke()
    ctx.beginPath();
    ctx.arc(x, y-100, 30, 0, 2 * Math.PI, false)
    ctx.fill();
    ctx.stroke()*/
}

function readyUp() {
    $('#roll-button').text("Unready").off("click").on("click", unready);
    $('#dialog-p').text("Game will start when others are ready");
    socket.emit("ready");
}
function unready() {
    $('#roll-button').text("Ready").off("unready").on("click", readyUp);
    $('#dialog-p').text("");
    socket.emit("unready");
}

function initCanvas() {
    
    $.jCanvas.defaults.fromCenter = false;
    $.jCanvas.defaults.layer = true;
    var $canvas = $('canvas');
    
    document.getElementById("canvas").focus();
    $canvas.drawRect({
        fillStyle: "#EE2E31",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 0, y: 0,
        width: 600,
        height: 600,
    });

    $canvas.drawRect({
        fillStyle: "#32CD32",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 900, y: 0,
        width: 600,
        height: 600,
    });

    $canvas.drawRect({
        fillStyle: "#00bfff",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 0, y: 900,
        width: 600,
        height: 600,
    });

    $canvas.drawRect({
        fillStyle: "#fada5e",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 900, y: 900,
        width: 600,
        height: 600,
    });

    $canvas.drawRect({
        fillStyle: "#FFFFFF",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 100, y: 100,
        width: 400,
        height: 400,
    });

    $canvas.drawRect({
        fillStyle: "#FFFFFF",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 1000, y: 100,
        width: 400,
        height: 400,
    });

    $canvas.drawRect({
        fillStyle: "#FFFFFF",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 100, y: 1000,
        width: 400,
        height: 400,
    });

    $canvas.drawRect({
        fillStyle: "#FFFFFF",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 1000, y: 1000,
        width: 400,
        height: 400,
    });

    $canvas.drawPath({
        fillStyle: "#32CD32",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 0, y: 0,
        width: 600,
        height: 600,
        p1: {
            type: 'line',
            x1: 600, y1: 600,
            x2: 900, y2: 600,
            x3: 750, y3: 750,
            x4: 600, y4: 600
        }
    });

    $canvas.drawPath({
        fillStyle: "#00bfff",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 0, y: 0,
        width: 600,
        height: 600,
        p1: {
            type: 'line',
            x1: 600, y1: 900,
            x2: 900, y2: 900,
            x3: 750, y3: 750,
            x4: 600, y4: 900
        }
    });

    $canvas.drawPath({
        fillStyle: "#EE2E31",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 0, y: 0,
        width: 600,
        height: 600,
        p1: {
            type: 'line',
            x1: 600, y1: 600,
            x2: 600, y2: 900,
            x3: 750, y3: 750,
            x4: 600, y4: 600
        }
    });

    $canvas.drawPath({
        fillStyle: "#fada5e",
        strokeStyle: "#000000",
        strokeWidth: 5,
        x: 0, y: 0,
        width: 600,
        height: 600,
        p1: {
            type: 'line',
            x1: 900, y1: 600,
            x2: 900, y2: 900,
            x3: 750, y3: 750,
            x4: 900, y4: 600
        }
    });

    $canvas.drawArc({
        fillStyle: "#EE2E31",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 200, y: 200
    }).drawArc({
        fillStyle: "#EE2E31",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 400, y: 200
    }).drawArc({
        fillStyle: "#EE2E31",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 200, y: 400
    }).drawArc({
        fillStyle: "#EE2E31",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 400, y: 400
    });

    $canvas.drawArc({
        fillStyle: "#32CD32",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1100, y: 200
    }).drawArc({
        fillStyle: "#32CD32",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1300, y: 200
    }).drawArc({
        fillStyle: "#32CD32",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1100, y: 400
    }).drawArc({
        fillStyle: "#32CD32",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1300, y: 400
    });

    $canvas.drawArc({
        fillStyle: "#00bfff",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 200, y: 1100
    }).drawArc({
        fillStyle: "#00bfff",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 400, y: 1100
    }).drawArc({
        fillStyle: "#00bfff",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 200, y: 1300
    }).drawArc({
        fillStyle: "#00bfff",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 400, y: 1300
    });

    $canvas.drawArc({
        fillStyle: "#fada5e",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1100, y: 1300
    }).drawArc({
        fillStyle: "#fada5e",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1100, y: 1100
    }).drawArc({
        fillStyle: "#fada5e",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1300, y: 1100
    }).drawArc({
        fillStyle: "#fada5e",
        strokeStyle: "#000000",
        fromCenter: true,
        strokeWidth: 5,
        radius: 50,
        x: 1300, y: 1300
    });

    for (var i = 6; i < 9; i++) 
        for (var j = 0; j < 6; j++)
            drawSquare(i, j, $canvas);

    for (var i = 0; i < 6; i++) 
        for (var j = 6; j < 9; j++)
            drawSquare(i, j, $canvas);

    for (var i = 9; i < 15; i++) 
        for (var j = 6; j < 9; j++)
            drawSquare(i, j, $canvas);

    for (var i = 6; i < 9; i++) 
        for (var j = 9; j < 15; j++)
            drawSquare(i, j, $canvas);

                
    drawStar(210, 815, 5, 40);
    drawStar(610, 215, 5, 40);
    drawStar(1210, 615, 5, 40);
    drawStar(810, 1215, 5, 40);
    

    drawPiece(200, 200, "#EE2E31", "00", $canvas);
    drawPiece(400, 200, "#EE2E31", "01", $canvas);
    drawPiece(200, 400, "#EE2E31", "02", $canvas);
    drawPiece(400, 400, "#EE2E31", "03", $canvas);

    drawPiece(1100, 200, "#32CD32", "10", $canvas);
    drawPiece(1300, 200, "#32CD32", "11", $canvas);
    drawPiece(1100, 400, "#32CD32", "12", $canvas);
    drawPiece(1300, 400, "#32CD32", "13", $canvas);

    drawPiece(200, 1100, "#00bfff", "20", $canvas);
    drawPiece(400, 1100, "#00bfff", "21", $canvas);
    drawPiece(200, 1300, "#00bfff", "22", $canvas);
    drawPiece(400, 1300, "#00bfff", "23", $canvas);

    drawPiece(1100, 1100, "#fada5e", "30", $canvas);
    drawPiece(1300, 1100, "#fada5e", "31", $canvas);
    drawPiece(1100, 1300, "#fada5e", "32", $canvas);
    drawPiece(1300, 1300, "#fada5e", "33", $canvas);

    $('#roll-button').on("click", readyUp);
    document.getElementById("dialog-box").showModal();
    
    pieces = [[new piece(), new piece(), new piece(), new piece()],
              [new piece(), new piece(), new piece(), new piece()],
              [new piece(), new piece(), new piece(), new piece()],
              [new piece(), new piece(), new piece(), new piece()]]
}

window.onload = initCanvas();//initialisePieces();  
