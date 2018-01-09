'use strict';

var playTheGame = prompt('Hi! Welcome to my page! Do you want to play a game? Reply with Y of N.').toUpperCase();
console.log("User entered " + playTheGame);

/* PSEUDO CODE

if (the user enters Y or YES) {
    alert(chooses to play/confirmation/correction);
} else if (users enters N or NO) {
    alert(forced to play/confirmation/correction);
} else (user enters nothing) {
    alert(sarcasm);
} */

if(playTheGame === 'Y') {
    alert('Thanks for playing! Let\'s go.');
} else if (playTheGame === 'N') {
    alert('That\'s too bad. Let\'s play anyway!');
} else {
    alert('You little rebel :) On to the game!');
}

var jeremyAge = prompt('The game is guessing facts about me. First, am I 31 years old? Reply Y or N.').toUpperCase();
console.log("User entered " + jeremyAge);

if(jeremyAge === 'Y') {
    alert('I wish! I\'m 33 years old.');
} else if (jeremyAge === 'N') {
    alert('Good guess! I\'m 33 years young.');
} else {
    alert('Sometimes its best to not answer ;) I\'m 33.');
}

var jeremyHome =  prompt('Now you know my age. Next, am I originally from the Pacific Northwest? Reply Y or N.').toUpperCase();
console.log("User entered " + jeremyHome);

if(jeremyHome === 'Y') {
    alert('That would be cool, but unfortunately no. I was born in California but lived most of my life on the East Coast and in Germany. Next question!');
} else if (jeremyHome === 'N') {
    alert('You\'re right! I was born in California but spent most of my life on the East Coast and in Germany. Moving on!');
} else {
    alert('I get it, geography is hard. Cali-born, East Coast and Germany raised. Onwards!');
}

