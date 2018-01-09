'use strict';

var playTheGame = prompt('Hi! Welcome to my page! Do you want to play a game? Reply with Y of N.').toUpperCase();
console.log("User entered" + playTheGame);

/* PSEUDO CODE

if (the user enters Y or YES) {
    alert(chooses to play);
} else if (users enters N or NO) {
    alert(forced to play);
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
