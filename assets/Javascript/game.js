//Theme Smashbros
//Set up variables for smash bro characters
    //set up seperate variables for letters?
    // make sure to find a way to use _ _ _ _
//set of onkeyup
//Should I use conditionals or for loop?
    //
//Bootstrap or Personal Css
//HTML set up 

var SmashBrosChar = ['Mario', 'Peach','Luigi','Cloud',];

console.log(SmashBrosChar)
// Random word
var SmashBrosChar= SmashBrosChar[Math.floor(Math.random()*SmashBrosChar.length)];

//Answer Array where I create the _ _ _ _ for the word guess
var hiddenword = [];
for (var i = 0; i < SmashBrosChar.length; i++) {

    hiddenword[i]= "_";

    console.log(hiddenword)
}
    var remainingletters = SmashBrosChar.length;


