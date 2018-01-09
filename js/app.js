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
    alert('I wish! I\'m 33 years old. Next question');
} else if (jeremyAge === 'N') {
    alert('Good guess! I\'m 33 years young. Next question');
} else {
    alert('Sometimes it\'s best not to answer ;) I\'m 33. Next question');
}

var jeremyHome =  prompt('Now you know that I\'m 33. Next, am I originally from the Pacific Northwest? Reply Y or N.').toUpperCase();
console.log("User entered " + jeremyHome);

if(jeremyHome === 'Y') {
    alert('That would be cool, but unfortunately no. I was born in California but lived most of my life on the East Coast and in Germany. Moving on!');
} else if (jeremyHome === 'N') {
    alert('You\'re right! I was born in California but spent most of my life on the East Coast and in Germany. Moving on!');
} else {
    alert('I get it, geography is hard so you didn\'t have an answer. I\'m Cali-born, East Coast and Germany raised. Moving on!');
}

var jeremySchool =  prompt('You know I\'m 33 and that I\'m not from the PNW. Did I attend the University of Washington? Reply Y or N.').toUpperCase();
console.log("User entered " + jeremySchool);

if(jeremySchool === 'Y') {
    alert('Yep! I moved to Washington to enroll in the Full-time MBA program at UW - GO DAWGS! Let\'s keep going.');
} else if (jeremySchool === 'N') {
    alert('Even though I didn\'t grow up here, I moved to Washington for the MBA program at UW - GO DAWGS! Let\'s keep going.');
} else {
    alert('Hmm... not answering tells me you must be a Washington State fan. I did my MBA at UW before starting this program - GO DAWGS! Let\'s keep going.');
}

var jeremyHobbies =  prompt('Ok so I\'m a 33 year old PNW transplant that attended UW. But I actually moved here for another reason... is that reason because I love outdoor activities? Reply Y or N.').toUpperCase();
console.log("User entered " + jeremyHobbies);

if(jeremyHobbies === 'Y') {
    alert('Haha you caught me! School was ok but I really moved here so I could go snowboarding and backpacking in the beautiful PNW. One more question to go!');
} else if (jeremyHobbies === 'N') {
    alert('I appreciate the vote of confidence, but truthfully I moved here so I could spend all my freetime snowboarding and backpacking. One more question to go!');
} else {
    alert('I get it...I\'d rather be snowboarding or backpacking than answering these questions, too. Only 1 more to go!');
}