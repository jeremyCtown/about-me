'use strict';

var userName = prompt('Hi! Welcome to my page! What is your name?');
console.log('User is named ' + userName);

var playTheGame = prompt('Hi! Welcome to my page, ' + userName + '! Do you want to play a game? Reply with Y or N.').toUpperCase();
console.log('Did ' + userName + ' choose to play the game? ' + playTheGame);

if(playTheGame === 'Y' || playTheGame === 'YES') {
    alert('Thanks for playing, ' + userName + '! Let\'s go.');
} else if (playTheGame === 'N' || playTheGame === 'NO') {
    alert('That\'s too bad, ' + userName + '. Let\'s play anyway!');
} else {
    alert('Oh ' + userName + ', you little rebel :) On to the game!');
}

var correctGuesses = 0;

var jeremyAge = prompt('The game is guessing facts about me. First, am I 31 years old? Reply Y or N.').toUpperCase();
console.log('Did ' + userName + ' think I am 31? '+ jeremyAge);

if(jeremyAge === 'Y' || jeremyAge === 'YES') {
    alert('I wish ' + userName + '! I\'m 33 years old. Next question');
} else if (jeremyAge === 'N') {
    alert('Good guess, ' + userName + '! I\'m 33 years young. Next question');
    correctGuesses++;
} else {
    alert('Good call, ' + userName + '. Sometimes it\'s best not to answer ;) I\'m 33. Next question');
}

var jeremyHome =  prompt('Well, ' + userName + ', now you know that I\'m 33 years old. Am I originally from the Pacific Northwest? Reply Y or N.').toUpperCase();
console.log('Did ' + userName + ' guess that I am from the PNW? ' + jeremyHome);

if(jeremyHome === 'Y' || jeremyHome === 'YES') {
    alert('That would be cool, ' + userName + ', but unfortunately no. I was born in California but lived most of my life on the East Coast and in Germany. Moving on!');
} else if (jeremyHome === 'N' || jeremyHome === 'NO') {
    alert('You\'re right, ' + userName + '! I was born in California but spent most of my life on the East Coast and in Germany. Moving on!');
    correctGuesses++;
} else {
    alert('I get it, ' + userName + ', geography is hard so you didn\'t have an answer. I\'m Cali-born, East Coast and Germany raised. Moving on!');
}

var jeremySchool =  prompt(userName + ', now you know I\'m 33 and that I\'m a PNW transplant. Did I attend the University of Washington? Reply Y or N.').toUpperCase();
console.log('Did ' + userName + ' guess that I am a UW alumnus? ' + jeremySchool);

if(jeremySchool === 'Y' || jeremySchool === 'YES') {
    alert('Yep! Nice job, ' + userName + '. I moved to Washington and attended the Full-time MBA program at UW - GO DAWGS! Let\'s keep going.');
    correctGuesses++;
} else if (jeremySchool === 'N' || jeremySchool === 'NO') {
    alert( 'Well, ' + userName + ', even though I didn\'t grow up here, I moved to Washington and attended the MBA program at UW - GO DAWGS! Let\'s keep going.');
} else {
    alert(userName + '... not answering tells me you must be a Washington State fan. I did my MBA at UW before starting at Code Fellows- GO DAWGS! Let\'s keep going.');
}

var jeremyPet =  prompt('Ok ' + userName + ', so I\'m a 33 year old PNW transplant that attended UW. Question four: Do I have any pets? Reply Y or N.').toUpperCase();
console.log('What did ' + userName + ' guess about my pet ownership? '+ jeremyPet);

if(jeremyPet === 'Y' || jeremyPet === 'YES') {
    alert('Unfortunately you\'re wrong, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Onwards!');
} else if (jeremyPet === 'N' || jeremyPet === 'NO') {
    alert('Unfortunately you\'re right, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Onwards!');
    correctGuesses++;
} else {
    alert('Hmm... ' + userName + ' must actually be a cat walking on a keyboard. Does Mr. Mittens want to come live with me? Onwards!');
}

var userGuess = 0;
var jeremyHobbies = ['snowboarding', 'backpacking', 'hiking', 'camping', 'traveling'];
var flag = false;

while(userGuess <6 && flag === false) {
  var guessHobbies =  prompt('Ok ' +userName + ', I\'m a 33 year old PNW transplant that attended UW, served in the Army, doesn\'t have any pets, and I\'ve been to 12 countries. Can you guess one of my hobbies? HINT: they all end with \"-ing\"').toLowerCase();
  userGuess++;
  for(var i = 0; i < jeremyHobbies.length; i++) {
    if(guessHobbies === jeremyHobbies[i]) {
        alert('Another one right, ' + userName + ' that\'s awesome! I love ' + jeremyHobbies[i] + ' and wish I could do it all of the time.');
        correctGuesses++;
        flag = true;
        console.log(userName + ' guessed ' + guessHobbies + ' and got the answer right.')
        break;
    } 
} 
    if (flag===false) {
        alert('Nice guess ' + userName + ', but ' + guessHobbies + ' is not one of my main hobbies. Take another shot!')
        console.log(userName + ' guessed ' + guessHobbies + ' and got the answer wrong.')
    }
    if (flag===false && userGuess===6) {
        alert('That\'s enough guesses for one day. My hobbies are snowboarding, backpacking, hiking, camping, and traveling.');
    }
}
alert(userName + ', thanks for taking my quiz! You answered '+ correctGuesses + ' out of 7 questions correctly. Now let\'s head to my site where you can learn more about me.');