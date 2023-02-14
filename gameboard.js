class piece 
{
    constructor(id, colour, startPosition)
    {
        //each piece has a unique id identifier
        this.id = id
        //colour indicates what colour the piece is
        this.colour = colour;
        //position is used to indicate how far along the path the piece is, used as an index for the path
        this.position = 0;
        //completed is used to indicate whether the piece has reached the end yet
        this.completed = false;

        if (colour == "yellow")
        {
            //path shows what squares the piece can move along on its journey to the end
            this.path = [startPosition,"2","3","4","5","6","7","8","9","10",
                        "11","12","13","14","15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30",
                        "31","32","33","34","35","36","37","38","39","40",
                        "41","42","43","44","45","46","47","48","49","50",
                        "51","52","53","54","55","56","57","73"];
            this.image = 'url("yellowPiece.jpg")';
        }
        if (colour == "green")
        {
            this.path = [startPosition,"15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30",
                        "31","32","33","34","35","36","37","38","39","40",
                        "41","42","43","44","45","46","47","48","49","50",
                        "51","52","1","2","3","4","5","6","7","8","9","10",
                        "11","12","13","58","59","60","61","62","73"];
            this.image = 'url("greenPiece.jpg")';
        }
        if (colour == "blue")
        {
            this.path = [startPosition,"41","42","43","44","45","46",
                        "47","48","49","50","51","52","1","2","3","4","5",
                        "6","7","8","9","10","11","12","13","14","15","16",
                        "17","18","19","20","21","22","23","24","25","26",
                        "27","28","29","30","31","32","33","34","35","36",
                        "37","38","39","68","69","70","71","72","73"];
            this.image = 'url("bluePiece.jpg")';
        }
        if (colour == "red")
        {
            this.path = [startPosition,"28","29","30","31","32","33",
                        "34","35","36","37","38","39","40","41","42","43",
                        "44","45","46","47","48","49","50","51","52","1", 
                        "2","3","4","5","6","7","8","9","10","11",
                        "12","13","14","15","16","17","18","19","20","21",
                        "22","23","24","25","26","63","64","65","66","67","73"];
            this.image = 'url("redPiece.jpg")';
        }
        //draw the piece at the start position
        document.getElementById(startPosition).style.backgroundImage = this.image;
    }

    //method to delete the piece and reset its position back to its start position
    reset()
    {
        document.getElementById(this.path[this.position]).backgroundImage = "none";
        this.position = 0;
        document.getElementById(this.path[this.position]).backgroundImage = this.image;
    }
}

//varaibles to show the current value of the two dice
let dice1 = 0;
let dice2 = 0;

//shows whether dice has been rolled this term
let diceRolled = false;
let diceQueue = [];

//To determine who's turn it is
let playerTurn = 1;
let moveSuccessful = false;

//shows whether the game is finised yet
let gameFinished = false;

//array of all of the safe spaces on the board
let safeSpaces = ["2", "10", "15", "23", "28", "36", "41", "49"];

function diceButtonPressed()
{
    rollDice()
    let currentDiceRoll = diceQueue.shift();
    if (playerTurn == 1)
    {

        // let oldDivIDs = [];
        // for (let i = 0; i < 4; i++) 
        // {
        //     oldDivIDs += pieces[i].path[pieces[i].position];
        //     
            
        // }
        document.getElementById(pieces[0].path[pieces[0].position]).addEventListener('click', move(pieces[0],currentDiceRoll));
        document.getElementById(pieces[1].path[pieces[1].position]).addEventListener('click', move(pieces[1],currentDiceRoll));
        document.getElementById(pieces[2].path[pieces[2].position]).addEventListener('click', move(pieces[2],currentDiceRoll));
        document.getElementById(pieces[3].path[pieces[3].position]).addEventListener('click', move(pieces[3],currentDiceRoll));        
    }
    // while (diceQueue.length != 0)
    // {
    //     while (!moveSuccessful)
    //     {
            
    //         //pick a piece to move
            
    //     }
        
    // }

}

//function to retun a random number between two ints (inclusive)
function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to roll the two dice
function rollDice()
{
    dice1 = randomInt(1,6);
    dice2 = randomInt(1,6);
    switch (dice1)
    {
        case 1:
            document.getElementById("dice").style.backgroundImage = 'url("./Dice1.jpeg")';
            break;
        case 2:
            document.getElementById("dice").style.backgroundImage = 'url("./Dice2.jpeg")';
            break;
        case 3:
            document.getElementById("dice").style.backgroundImage = 'url("./Dice3.jpeg")';
            break;
        case 4:
            document.getElementById("dice").style.backgroundImage = 'url("./Dice4.jpeg")';
            break;
        case 5:
            document.getElementById("dice").style.backgroundImage = 'url("./Dice5.jpeg")';
            break;
        case 6:
            document.getElementById("dice").style.backgroundImage = 'url("./Dice6.jpeg")';
            break;

    }
    switch (dice2)
    {
        case 1:
            document.getElementById("dice2").style.backgroundImage = 'url("./Dice1.jpeg")';
            break;
        case 2:
            document.getElementById("dice2").style.backgroundImage = 'url("./Dice2.jpeg")';
            break;
        case 3:
            document.getElementById("dice2").style.backgroundImage = 'url("./Dice3.jpeg")';
            break;
        case 4:
            document.getElementById("dice2").style.backgroundImage = 'url("./Dice4.jpeg")';
            break;
        case 5:
            document.getElementById("dice2").style.backgroundImage = 'url("./Dice5.jpeg")';
            break;
        case 6:
            document.getElementById("dice2").style.backgroundImage = 'url("./Dice6.jpeg")';
            break;

    }
    //TODO add dice roll to the queue and set dicerolled to false whena double 6 is rolled, also tell the player to roll again
    diceRolled = true;
    diceQueue.push(dice1);
    diceQueue.push(dice2);

    if (dice1 == 6 && dice2 == 6)
    {
        diceRolled = false;
    }
    //document.getElementById("dice").innerHTML = dice1.toString();
    //document.getElementById("dice2").innerHTML = dice2.toString();
}

//function to initialise all of the pieces
function initialisePieces()
{
    pieces = [new piece("y0","yellow", "insideYellow1"), 
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
    new piece("r3","red", "insideRed4")]

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
            pieceToMove.position = pieceToMove.position++;
            document.getElementById(pieceToMove.path[pieceToMove.position]).style.backgroundImage = pieceToMove.image;
            document.getElementById(pieceToMove.path[pieceToMove.position]).innerHTML += pieceToMove.id + ",";
            moveSuccessful = true;
        }
        else
        {
            //TODO print "you need a 6 to take out this piece"
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

window.onload = initialisePieces();
