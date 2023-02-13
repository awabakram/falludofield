class piece 
{
    constructor(colour, startPosition)
    {
        this.colour = colour;
        this.position = 0;

        if (colour == "yellow")
        {
            this.path = [startPosition,"2","3","4","5","6","7","8","9","10",
                        "11","12","13","14","15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30",
                        "31","32","33","34","35","36","37","38","39","40",
                        "41","42","43","44","45","46","47","48","49","50",
                        "51","52","53","54","55","56","57","73"];
            this.image = 'url("/Yellow piece test.jpeg")';
        }
        if (colour == "green")
        {
            this.path = [startPosition,"15","16","17","18","19","20",
                        "21","22","23","24","25","26","27","28","29","30",
                        "31","32","33","34","35","36","37","38","39","40",
                        "41","42","43","44","45","46","47","48","49","50",
                        "51","52","1","2","3","4","5","6","7","8","9","10",
                        "11","12","13","58","59","60","61","62","73"];
            this.image = 'url("/Green piece test.jpeg")';
        }
        if (colour == "blue")
        {
            this.path = [startPosition,"41","42","43","44","45","46",
                        "47","48","49","50","51","52","1","2","3","4","5",
                        "6","7","8","9","10","11","12","13","14","15","16",
                        "17","18","19","20","21","22","23","24","25","26",
                        "27","28","29","30","31","32","33","34","35","36",
                        "37","38","39","68","69","70","71","72","73"];
            this.image = 'url("/Blue piece test.jpeg")';
        }
        if (colour == "red")
        {
            this.path = [startPosition,"28","29","30","31","32","33",
                        "34","35","36","37","38","39","40","41","42","43",
                        "44","45","46","47","48","49","50","51","52","1", 
                        "2","3","4","5","6","7","8","9","10","11",
                        "12","13","14","15","16","17","18","19","20","21",
                        "22","23","24","25","26","63","64","65","66","67","73"];
            this.image = 'url("/Red piece test.jpeg")';
        }
        document.getElementById(startPosition).style.backgroundImage = this.image;
    }
}

//varaibles to show the current value of the two dice
let dice1 = 0;
let dice2 = 0;


//To determine who's turn it is
let playerTurn = 1;

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
            document.getElementById("dice").style.backgroundImage = 'url("/Dice1.jpeg")';
            break;
        case 2:
            document.getElementById("dice").style.backgroundImage = 'url("/Dice2.jpeg")';
            break;
        case 3:
            document.getElementById("dice").style.backgroundImage = 'url("/Dice3.jpeg")';
            break;
        case 4:
            document.getElementById("dice").style.backgroundImage = 'url("/Dice4.jpeg")';
            break;
        case 5:
            document.getElementById("dice").style.backgroundImage = 'url("/Dice5.jpeg")';
            break;
        case 6:
            document.getElementById("dice").style.backgroundImage = 'url("/Dice6.jpeg")';
            break;

    }
    switch (dice2)
    {
        case 1:
            document.getElementById("dice2").style.backgroundImage = 'url("/Dice1.jpeg")';
            break;
        case 2:
            document.getElementById("dice2").style.backgroundImage = 'url("/Dice2.jpeg")';
            break;
        case 3:
            document.getElementById("dice2").style.backgroundImage = 'url("/Dice3.jpeg")';
            break;
        case 4:
            document.getElementById("dice2").style.backgroundImage = 'url("/Dice4.jpeg")';
            break;
        case 5:
            document.getElementById("dice2").style.backgroundImage = 'url("/Dice5.jpeg")';
            break;
        case 6:
            document.getElementById("dice2").style.backgroundImage = 'url("/Dice6.jpeg")';
            break;

    }

    //document.getElementById("dice").innerHTML = dice1.toString();
    //document.getElementById("dice2").innerHTML = dice2.toString();
}

function initialisePieces()
{
    yellowPiece1 = new piece("yellow", "insideYellow1");
    yellowPiece2 = new piece("yellow", "insideYellow2");
    yellowPiece3 = new piece("yellow", "insideYellow3");
    yellowPiece4 = new piece("yellow", "insideYellow4");

    greenPiece1 = new piece("green", "insideGreen1");
    greenPiece2 = new piece("green", "insideGreen2");
    greenPiece3 = new piece("green", "insideGreen3");
    greenPiece4 = new piece("green", "insideGreen4");

    bluePiece1 = new piece("blue", "insideBlue1");
    bluePiece2 = new piece("blue", "insideBlue2");
    bluePiece3 = new piece("blue", "insideBlue3");
    bluePiece4 = new piece("blue", "insideBlue4");

    redPiece1 = new piece("red", "insideRed1");
    redPiece2 = new piece("red", "insideRed2");
    redPiece3 = new piece("red", "insideRed3");
    redPiece4 = new piece("red", "insideRed4");
}

window.onload = initialisePieces();
