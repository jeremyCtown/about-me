'use strict';

var userName = prompt('Hi! Welcome to my page! What is your name?');
console.log('User is named ' + userName);

var playTheGame = prompt('Hi ' +userName + '! Welcome to my page. Do you want to play a game? Reply with Y or N.').toUpperCase();
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

var jeremyArmy =  prompt(userName + ', now you know I\'m 33 and I\'m not from the PNW but I went to UW. Next question: am I a Veteran? Reply Y or N.').toUpperCase();
console.log('What did ' + userName + ' guess about my military service? '+ jeremyArmy);

if(jeremyArmy === 'Y' || jeremyArmy === 'YES') {
    alert('That\'s correct ' + userName + ' I am a Veteran of the U.S. Army, with 3 combat tours under my belt. Don\'t be scared, I\'m a big teddy bear :) Next question!');
    correctGuesses++;
} else if (jeremyArmy === 'N' || jeremyArmy === 'NO') {
    alert('Surprise ' + userName + '! I am a Veteran of the U.S. Army, with 3 combat tours under my belt. Don\'t be scared, I\'m a big teddy bear :) Next question!');
} else {
    alert('YOU DIDN\'T ANSWER THE QUESTION SOLDIER! DO PUSHUPS!!...umm, I mean... Sorry ' + userName + ', reflexes :) Let\'s just move to the next question.');
}

var jeremyPet =  prompt('Ok ' + userName + ', so I\'m a 33 year old PNW transplant that attended UW and served in the Army. Question five: Do I have any pets? Reply Y or N.').toUpperCase();
console.log('What did ' + userName + ' guess about my pet ownership? '+ jeremyPet);

if(jeremyPet === 'Y' || jeremyPet === 'YES') {
    alert('Unfortunately you\'re wrong, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Onwards!');
} else if (jeremyPet === 'N' || jeremyPet === 'NO') {
    alert('Unfortunately you\'re right, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Onwards!');
    correctGuesses++;
} else {
    alert('Hmm... ' + userName + ' must actually be a cat walking on a keyboard. Does Mr. Mittens want to come live with me? Onwards!');
}

var userGuess1 = 0;
var jeremyCountries = 12;
var flag1 = false;

while(userGuess1 <4 && flag1 === false) {
  var guessCountries =  prompt('Ok ' +userName + ', I\'m a 33 year old PNW transplant that attended UW and served in the Army. How many countries outside of the U.S. have I been to?');
  guessCountries= parseInt(guessCountries);
  userGuess1++; {
  if(guessCountries === jeremyCountries) {
        alert('How did you know? Good job ' + userName + '. I\'ve been to Germany, Italy, Spain, France, Holland, England, The Netherlands, Austria, Canada, The Philippines, Iraq, and Afghanistan. Only one more question to go!');
        correctGuesses++;
        flag1 = true;
        console.log(userName + ' guessed ' + guessCountries + ' and got the answer right.');
    } else if (flag1 === false && guessCountries < jeremyCountries && userGuess1 < 4) {
        alert('Nice guess ' + userName + ', but ' + guessCountries + ' is not correct. Try a higher number!');
        console.log(userName + ' guessed ' + guessCountries + ' and got the answer wrong.');
        continue;
    } else if (flag1 === false && guessCountries > jeremyCountries && userGuess1 <4) {
        alert('Nice guess ' + userName + ', but ' + guessCountries + ' is not correct. Try a lower number!');
        console.log(userName + ' guessed ' + guessCountries + ' and got the answer wrong.');
        continue;
    } if (flag1 === false && userGuess1 === 4) {
        alert('Sorry ' + userName + ', All out of guesses! I\'ve been to 12 countries outside of the U.S - Germany, Italy, Spain, France, Holland, England, The Netherlands, Austria, Canada, The Philippines, Iraq, and Afghanistan.');
    }
}

var userGuess2 = 0;
var jeremyHobbies = ['snowboarding', 'backpacking', 'hiking', 'camping', 'traveling'];
var flag2 = false;

while(userGuess2 <6 && flag2 === false) {
  var guessHobbies =  prompt('Ok ' +userName + ', I\'m a 33 year old PNW transplant that attended UW, served in the Army, doesn\'t have any pets, and I\'ve been to 12 countries. Can you guess one of my hobbies? HINT: they all end with \"-ing\"').toLowerCase();
  userGuess2++;
  for(var i = 0; i < jeremyHobbies.length; i++) {
    if(guessHobbies === jeremyHobbies[i]) {
        alert('Another one right, ' + userName + ' that\'s awesome! I love ' + jeremyHobbies[i] + ' and wish I could do it all of the time.');
        correctGuesses++;
        flag2 = true;
        console.log(userName + ' guessed ' + guessHobbies + ' and got the answer right.')
        break;
    } 
} 
    if (flag2===false) {
        alert('Nice guess ' + userName + ', but ' + guessHobbies + ' is not one of my main hobbies. Take another shot!')
        console.log(userName + ' guessed ' + guessHobbies + ' and got the answer wrong.')
    }
    if (flag2===false && userGuess2===6) {
        alert('That\'s enough guesses for one day. My hobbies are snowboarding, backpacking, hiking, camping, and traveling.');
    }
}
alert(userName + ', thanks for taking my quiz! You answered '+ correctGuesses + ' out of 7 questions correctly. Now let\'s head to my site where you can learn more about me.');
}