
//Variables
var SmashBrosChar = ['Mario', 'Peach','Luigi','Cloud','Mewtwo', 'Ganondorf', 'Link'];
var maxGuesses= 9;
var remainingGuesses= 0
var guessedletters= [];
var win= 0;
var losses = 0;

// Random word
var SmashBrosChar= SmashBrosChar[Math.floor(Math.random()*SmashBrosChar.length)];


//function to reset game 



//Answer Array where I create the _ _ _ _ for the word guess
var hiddenword = [];
for (var i = 0; i < SmashBrosChar.length; i++) {

    hiddenword[i]= "_";

}
    var remainingletters = SmashBrosChar.length;

// The loop for the game is here:
while (remainingletters > 0 ) {

    //Show the user their progress in the game

    alert(hiddenword.join(" "));
    
    // This is my game starter. 
    var ThePlayer = prompt ("Guess a letter, or click Cancel to stop playing.");
    if (ThePlayer === null) {//This is if the player hits cancel they will end the loop and exit the game 
    break;

} else if (ThePlayer.length != 1) {
alert("Please enter a single letter.");

} else {
    //every time the player guesses the game needs to update 
    for (var j = 0; j < SmashBrosChar.length; j++) {
        if (SmashBrosChar[j] === ThePlayer) {
            hiddenword[j] = ThePlayer; 
            remainingletters--; 
        }
    }
  }
}
    //Showing the answer 
alert(hiddenword.join(" "));
alert ("Time! The winner is " + SmashBrosChar);


  

   
