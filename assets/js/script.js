//create variables for the game 
var selectableWords =           // Word list
    [
        "program",
        "computer",
        "electronics",
        "html",
        "javascript",
        "css",
        "code",
        "bootcamp",
        "github",
        "logic",
        "function",
    ];

var maxTries = 10;            
var guessedLetters = [];       
var currentWordIndex;          
var underScore = [];         
var attempts = 0;      
var gameStarted = false;        
var finished = false;       
var wins = 0;                  
 
// create a function to reset the game
function resetGame() {
    attempts = maxTries;
    gameStarted = false;
//choose random word
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    underScore = [];

        //Generate underscores based on selected word
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        underScore.push("_");
    }
    // Hide game over text
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";

    updateDisplay();
};

//  Updates the display on the Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < underScore.length; i++) {
        document.getElementById("currentWord").innerText += underScore[i];
    }
    document.getElementById("remainingGuesses").innerText = attempts;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(attempts <= 0) {
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        finished = true;
    }
};
//Gather player input
document.onkeydown = function(event) {
    // If we finish a game reset.
    if(finished) {
        resetGame();
        finished = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode > 64 && event.keyCode < 91) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (attempts > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};
// This function takes a letter and finds all instances or 
// appearances in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        if(selectableWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }


    if (positions.length <= 0) {
        attempts--;
       
    } else {
  
        for(var i = 0; i < positions.length; i++) {
            underScore[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(underScore.indexOf("_") === -1) {
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        finished = true;
    }
};  