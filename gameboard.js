class piece 
{
    constructor()
    {
        //each piece has a unique id identifier
        //this.id = id
        //colour indicates what colour the piece is
        //this.colour = colour;
        //position is used to indicate how far along the path the piece is, used as an index for the path
        this.position = 0;
        //completed is used to indicate whether the piece has reached the end yet
        //this.completed = false;

        /*if (colour == "yellow")
        {
            //path shows what squares the piece can move along on its journey to the end
            this.path = [startPosition,"2","3","4","5","6","7","8","9","10",
                        "11","12","13","14","15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30",
                        "31","32","33","34","35","36","37","38","39","40",
                        "41","42","43","44","45","46","47","48","49","50",
                        "51","52","53","54","55","56","57","73"];
            this.image = 'url("./yellowPiece.jpg")';
        }
        if (colour == "green")
        {
            this.path = [startPosition,"15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30",
                        "31","32","33","34","35","36","37","38","39","40",
                        "41","42","43","44","45","46","47","48","49","50",
                        "51","52","1","2","3","4","5","6","7","8","9","10",
                        "11","12","13","58","59","60","61","62","73"];
            this.image = 'url("./greenPiece.jpg")';
        }
        if (colour == "blue")
        {
            this.path = [startPosition,"41","42","43","44","45","46",
                        "47","48","49","50","51","52","1","2","3","4","5",
                        "6","7","8","9","10","11","12","13","14","15","16",
                        "17","18","19","20","21","22","23","24","25","26",
                        "27","28","29","30","31","32","33","34","35","36",
                        "37","38","39","68","69","70","71","72","73"];
            this.image = 'url("./bluePiece.jpg")';
        }
        if (colour == "red")
        {
            this.path = [startPosition,"28","29","30","31","32","33",
                        "34","35","36","37","38","39","40","41","42","43",
                        "44","45","46","47","48","49","50","51","52","1", 
                        "2","3","4","5","6","7","8","9","10","11",
                        "12","13","14","15","16","17","18","19","20","21",
                        "22","23","24","25","26","63","64","65","66","67","73"];
            this.image = 'url("./redPiece.jpg")';
        }*/
        //draw the piece at the start position
        //document.getElementById(startPosition).style.backgroundImage = this.image;
    }

    //method to delete the piece and reset its position back to its start position
    reset()
    {
        //document.getElementById(this.path[this.position]).backgroundImage = "none";
        //this.position = 0;
        //document.getElementById(this.path[this.position]).backgroundImage = this.image;
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
    [3,7],[4,7],[5,7],[-1,-1]],

    // Green
    [[-1, -1],[8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],[14,8],[13,8],[12,8],[11,8],[10,8],
    [9,8],[8,9],[8,10],[8,11],[8,12],[8,13],
    [8,14],[7,14],[6,14],[6,13],[6,12],[6,11],
    [6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],
    [0,8],[0,7],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],
    [7,1],[7,2],[7,3],[7,4],[7,5],[-1,-1]],

    // Blue
    [[-1,-1],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],
    [6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
    [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],
    [11,6],[12,6],[13,6],[14,6],[14,7],[14,8],
    [13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],
    [8,11],[8,12],[8,13],[8,14],[7,14],[7,13],
    [7,12],[7,11],[7,10],[7,9],[-1,-1]],

    // Yellow
    [[-1,-1],[13,8],[12,8],[11,8],[10,8],[9,8],[8,9],
    [8,10],[8,11],[8,12],[8,13],[8,14],[7,14],
    [6,14],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],
    [6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],
    [8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],
    [11,6],[12,6],[13,6],[14,6],[14,7],[13,7],
    [12,7],[11,7],[10,7],[9,7],[-1,-1]]
];

console.log(paths[0].length);

//varaibles to show the current value of the two dice
var dice1 = 0;
var dice2 = 0;
var dice = 0;

//shows whether dice has been rolled this turn
var diceRolled = false;
// var diceQueue = [];

//To determine who's turn it is
var playerTurn = 0;
var moveSuccessful = false;

//shows whether the game is finised yet
var gameFinished = false;

//array of all of the safe spaces on the board
var safeSpaces = ["2", "10", "15", "23", "28", "36", "41", "49"];

var pieces = [];

//function to retun a random number between two ints (inclusive)
function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to roll the two dice
function rollDice()
{
    $('#roll-button').off("click");
    dice1 = randomInt(1,6);
    dice2 = randomInt(1,6);

    random_timer = randomInt(10, 20);
    roll_timer = 0;
    for (var i = 0; i < random_timer; i++) {
        setTimeout(() => { 
            roll_timer++;
            dice1 = randomInt(1,6);
            dice2 = randomInt(1,6);
        $('#die-1').attr("src", "./dice-" +  dice1.toString() + ".svg");
        $('#die-2').attr("src", "./dice-" +  dice2.toString() + ".svg");
        if (roll_timer == random_timer) { // Dice done rolling 
            // Check that our turn can continue
            var invalid = true;
            for (var i = 0; i < 4; ++i) {
                if (pieces[playerTurn][i].position != 0)
                    invalid = false;
            }   
            if (invalid) {
                if (dice1 != 6 && dice2 != 6) {
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
                    document.getElementById("dialog-box").close();
                });
                $("#die-2").on("click", function() {
                    dice = dice2;
                    document.getElementById("dialog-box").close();
                });
            }

        }
            console.log("die should be done now");
        }, 50 + i*50); // Queue these to make a cute animation
    }
   
}

//function to initialise all of the pieces
function initialisePieces()
{
    /*pieces = [new piece("y0","yellow", "insideYellow1"), 
    new piece("y1","yellow", "insideYellow2"),
    new piece("y2","yellow", "insideYellow3"),
    new piece("y3","yellow", "insideYellow4"),
    new piece("g0","green", "insideGreen1"),
    new piece("g1","green", "insideGreen2"),
    new piece("g2","green", "insideGreen3"),
    new piece("g3","green", "insideGreen4"),
    new piece("b0","blue", "insideBlue1"),
    new piece("b1","blue", "insideBlue2"),
    new piece("b2","blue", "insideBlue3"),
    new piece("b3","blue", "insideBlue4"),
    new piece("r0","red", "insideRed1"),
    new piece("r1","red", "insideRed2"),
    new piece("r2","red", "insideRed3"),
    new piece("r3","red", "insideRed4")]*/

    // yellowPiece1 = new piece("y0","yellow", "insideYellow1");
    // yellowPiece2 = new piece("y1","yellow", "insideYellow2");
    // yellowPiece3 = new piece("y2","yellow", "insideYellow3");
    // yellowPiece4 = new piece("y3","yellow", "insideYellow4");

    // //yellowPieces = [new piece("yellow", "insideYellow1"), new piece("yellow", "insideYellow2"),new piece("yellow", "insideYellow3"),new piece("yellow", "insideYellow4")]

    // greenPiece1 = new piece("g0","green", "insideGreen1");
    // greenPiece2 = new piece("g1","green", "insideGreen2");
    // greenPiece3 = new piece("g2","green", "insideGreen3");
    // greenPiece4 = new piece("g3","green", "insideGreen4");

    // bluePiece1 = new piece("b0","blue", "insideBlue1");
    // bluePiece2 = new piece("b1","blue", "insideBlue2");
    // bluePiece3 = new piece("b2","blue", "insideBlue3");
    // bluePiece4 = new piece("b3","blue", "insideBlue4");

    // redPiece1 = new piece("r0","red", "insideRed1");
    // redPiece2 = new piece("r1","red", "insideRed2");
    // redPiece3 = new piece("r2","red", "insideRed3");
    // redPiece4 = new piece("r3","red", "insideRed4");
}

function checkIfPlayerFinished(playerNumber)
{
    let finished = true;
    if (playerNumber == 1)
    {
        for (let i = 0; i < 4; i++) {
            if (pieces[i].completed == false)
            {
                finished = false;
            }
            
        }
    }
    else if (playerNumber == 2)
    {
        for (let i = 4; i < 8; i++) {
            if (pieces[i].completed == false)
            {
                finished = false;
            }
            
        }
    }
    if (playerNumber == 3)
    {
        for (let i = 8; i < 12; i++) {
            if (pieces[i].completed == false)
            {
                finished = false;
            }
            
        }
    }
    if (playerNumber == 4)
    {
        for (let i = 12; i < 16; i++) {
            if (pieces[i].completed == false)
            {
                finished = false;
            }
            
        }
    }

    return finished;
}

function checkIfMovePossible(diceRoll)
{
    //when the players rolled a 6, you can always move a piece
    if (diceRoll == 6)
    {
        return true;
    }
    let possible = false;
    if (playerTurn == 1)
    {
        for (let i = 0; i < 4; i++) {
            if (pieces[i].position != 0)
            {
                possible = true;
            }      
        }
    }
}
function move(pieceToMove, diceRoll) 
{
    //if its still inside you need a 6 to take it out
    if (pieceToMove.position == 0)
    {
        if (diceRoll == 6)
        {
            document.getElementById(pieceToMove.path[pieceToMove.position]).style.backgroundImage = "none";
            document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML.replace(pieceToMove.colour[0], "");
            pieceToMove.position = pieceToMove.position += 1;
            document.getElementById(pieceToMove.path[pieceToMove.position]).style.backgroundImage = pieceToMove.image;
            document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML += pieceToMove.id + ",";
            moveSuccessful = true;
        }
        else
        {
            document.getElementById("instructions").innerHTML = "You need a 6 to take out this piece";
            moveSuccessful = false;
        }
    }
    else
    {
        document.getElementById(pieceToMove.path[pieceToMove.position]).style.backgroundImage = "none";
        document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML.replace(pieceToMove.id + ",", "");
        pieceToMove.position += diceRoll;
        if (pieceToMove.position > pieceToMove.path.length) //TODO check if its actually the length or if its shorter
        {
            pieceToMove.completed = true;
            moveSuccessful == true;
        }

        let divString = document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML;
                
        //checking if the space the piece has moved to is a safe space
        let isSafeSpace = false;
        for (let i = 0; i < safeSpaces.length; i++) 
        {
            if (pieceToMove.path[pieceToMove.position] == safeSpaces[i])
            {
                isSafeSpace = true;
                break;
            }
        }

        //if its not a safe space then check if theres any enemy pieces to kill 
        if (isSafeSpace == false)
        {
            //if there is enemy pieces, then kill the enemy pieces in the square
            if (divString != "")
            {
                let splitDivString = divString.split(",");
                let newSplitDivString = "";
                for (let i = 0; i < splitDivString.length; i++) 
                {
                    //if there is a piece which isn't the same colour
                    if (splitDivString[i][0] != pieceToMove.id[0])
                    {
                        //look through the pieces to find the matching id
                        for (let j = 0; j < pieces.length; j++) 
                        {
                            if (pieces[j].id == splitDivString[i])
                            {
                                //reset the piece
                                pieces[j].reset();
                            }
                        }
                    }
                    else
                    {
                        //if the id is of the same colour then we're keeping the piece
                        newSplitDivString += splitDivString[i];
                    }

                }
            }
            //update the div string
            document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML = newSplitDivString + pieceToMove.id + ",";
            moveSuccessful = true;
        }
        else
        {
            //if it is a safe space then just add the piece to the square
            document.getElementById(pieceToMove.path[pieceToMove.position]).style.backgroundImage = pieceToMove.image;
            document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML += pieceToMove.id + ",";
            moveSuccessful = true;
        }
        

        
    }
}


function playGame()
{
    initialisePieces()
    while (!gameFinished)
    {
        diceRolled = false;
        while(!diceRolled)
        {
            //TODO status string = "roll the dice"
        }
        //TODO implemet a queue for the dice rolls, keep asking to move while the queue isnt empty
        

    }
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius, ctx){
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x = cx+ Math.cos(rot)*innerRadius;
        y = cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot += step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();
    ctx.stroke();
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
    var turn = Number(pieceI[0]);
    var np = Number(pieceI[1]);
    if (turn != playerTurn) 
        return;

    console.log("red piece clicked");

    var mov = pieces[turn][np].position + 1;
    // TEMP
    if (turn == 1 && pieces[turn][np].position != 0) mov = pieces[turn][np].position;
    //if (pieces[turn][np].position == 0) {
    //    if (dice != 6)
    //        return; // We can't move this piece out of the home area without a 6
    //    else 
    //        mov = 1;
    //}
    animatePieceMoving(layer, pieceI, turn, np, mov, $canvas);
}

function animatePieceMoving(layer, pieceI, turn, np, mov, $canvas) {
    if (pieces[turn][np].position < mov)
        pieces[turn][np].position += 1
    else {
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
                }
            }
        }
        turnOver();
        return;
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

function turnOver(wait = true) {
    //playerTurn++;
    //if (playerTurn > 3) playerTurn = 0;
    setTimeout(() => { 
        $('#dialog-h').text("It's your turn!"); // Todo: multiplayer
        $('#dialog-p').text("Please roll the dice:");
        $('#roll-button').show().off("click").text("Roll").on("click", rollDice)
        $('.dice').off('mouseenter mouseleave click');
        //document.getElementById("dialog-box").showModal(); // TODO: TEMP
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
        text: "1",
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

function initCanvas() {
    $.jCanvas.defaults.fromCenter = false;
    $.jCanvas.defaults.layer = true;
    var $canvas = $('canvas');
    
    // DEFAULTS
    $('canvas').keypress(function(event) {
        //if (event.key == "A") {
            playerTurn++;
            if (playerTurn > 3) playerTurn = 0;
            console.log(playerTurn);
        //}
    });
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

    $('#roll-button').on("click", rollDice);
    //document.getElementById("dialog-box").showModal();
    
    
    /*ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(100, 100, 400, 400);
    ctx.strokeRect(100, 100, 400, 400);
    ctx.fillRect(1000, 100, 400, 400);
    ctx.strokeRect(1000, 100, 400, 400);
    ctx.fillRect(100, 1000, 400, 400);
    ctx.strokeRect(100, 1000, 400, 400);
    ctx.fillRect(1000, 1000, 400, 400);
    ctx.strokeRect(1000, 1000, 400, 400);
    
    ctx.fillStyle = "#EE2E31";
    drawCircle(200, 200, 50, ctx);
    drawCircle(400, 200, 50, ctx);
    drawCircle(200, 400, 50, ctx);
    drawCircle(400, 400, 50, ctx);

    ctx.fillStyle = "#32CD32";
    drawCircle(1100, 200, 50, ctx);
    drawCircle(1300, 200, 50, ctx);
    drawCircle(1100, 400, 50, ctx);
    drawCircle(1300, 400, 50, ctx);

    ctx.fillStyle = "#00bfff";
    drawCircle(200, 1100, 50, ctx);
    drawCircle(400, 1100, 50, ctx);
    drawCircle(200, 1300, 50, ctx);
    drawCircle(400, 1300, 50, ctx);

    ctx.fillStyle = "#fada5e";
    drawCircle(1100, 1100, 50, ctx);
    drawCircle(1300, 1100, 50, ctx);
    drawCircle(1100, 1300, 50, ctx);
    drawCircle(1300, 1300, 50, ctx);

    drawStar(250, 855, 5, 40, 20, ctx);
    drawStar(650, 255, 5, 40, 20, ctx);
    drawStar(1250, 655, 5, 40, 20, ctx);
    drawStar(850, 1250, 5, 40, 20, ctx);

    ctx.fillStyle = "#EE2E31";
    drawPiece(200, 200, ctx);
    drawPiece(400, 200, ctx);
    drawPiece(200, 400, ctx);
    drawPiece(400, 400, ctx);*/
    
    // TEMP

    pieces = [[new piece(), new piece(), new piece(), new piece()],
              [new piece(), new piece(), new piece(), new piece()],
              [new piece(), new piece(), new piece(), new piece()],
              [new piece(), new piece(), new piece(), new piece()]  ]
}

window.onload = initCanvas();//initialisePieces();  
