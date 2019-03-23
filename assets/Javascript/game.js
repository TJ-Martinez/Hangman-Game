//Theme Smashbros
//Set up variables for smash bro characters
    //set up seperate variables for letters?
    // make sure to find a way to use _ _ _ _
//set Math.floor(Math.random) to create random word. 
//Should I use conditionals or for loop?
    //
//Bootstrap or Personal Css
//HTML set up 

var SmashBrosChar = ['Mario', 'Peach','Luigi','Cloud','Mewtwo', 'Ganondorf', 'Link'];

console.log(SmashBrosChar)
// Random word
var SmashBrosChar= SmashBrosChar[Math.floor(Math.random()*SmashBrosChar.length)];

//Answer Array where I create the _ _ _ _ for the word guess
var hiddenword = [];
for (var i = 0; i < SmashBrosChar.length; i++) {

    hiddenword[i]= "_";

}
    var remainingletters = SmashBrosChar.length;

// The loop for the game is here:
while (remainingletters > 0 ) {

    //Show the user their progress in the game

    alert(hiddenword.join(" "))
    console.log(hiddenword)
}

