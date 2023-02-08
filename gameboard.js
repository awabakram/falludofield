

//varaibles to show the current value of the two dice
let dice1 = 1;
let dice2 = 1;

//number of players, number can be 2,3 or 4
let noOfPlayers = 2;

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
        document.getElementsById("dice").innerHTML = dice1.toString();
        document.getElementById("dice2").innerHTML = dice2.toString();
}
