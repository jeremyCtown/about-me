'use strict';

//need to learn how to select multiple of the same code at once

var userName = prompt('Welcome to my page! What is your name?');
console.log('User is named ' + userName); //learn to console.log user response time

var playTheGame = prompt('Hi ' + userName + ', want to play a game? Reply with Y or N.').toUpperCase();
console.log('Did ' + userName + ' choose to play the game? ' + playTheGame);

//need to learn how to accept only first letter in a string - subString()
if(playTheGame === 'Y' || playTheGame === 'YES' || playTheGame === 'YEAH' || playTheGame === 'YEP' || playTheGame === 'SURE') {
  alert('Thanks for playing, ' + userName + '. Let\'s go!');

} else if (playTheGame === 'N' || playTheGame === 'NO' ||  playTheGame === 'NOPE' || playTheGame === 'NEGATORY' || playTheGame === 'NEGATIVE' || playTheGame === 'NO WAY') {
  alert('That\'s too bad, ' + userName + '. Let\'s play anyway!');
} else {
  alert('Oh ' + userName + ', you little rebel :) On to the game!');
}

var correctGuesses = 0;

var jeremyAge = prompt('The game is guessing a few facts about me. First, am I 31 years old? Reply Y or N.').toUpperCase();
console.log('Did ' + userName + ' think I am 31? ' + jeremyAge);

if(jeremyAge === 'Y' || jeremyAge === 'YES') {
  alert('31 was pretty good. ' + userName + '! I\'m 33 now. Next question.');
} else if (jeremyAge === 'N') {
  alert('Good guess, ' + userName + '! I\'m 33 years young. Next question');
  correctGuesses++;
} else {
  alert('Good call, ' + userName + '. Sometimes it\'s best not to guess a person\'s age :) I\'m 33. Next question.');
}

var jeremyHome =  prompt('Well, ' + userName + ', now you know that I\'m 33 years old. Am I originally from the Pacific Northwest? Reply Y or N.').toUpperCase();
console.log('Did ' + userName + ' guess that I am from the PNW? ' + jeremyHome);

if(jeremyHome === 'Y' || jeremyHome === 'YES') {
  alert('That would be cool, ' + userName + ', but unfortunately no. I was born in California and lived most of my life in eastern U.S. and Germany. Moving on!');
} else if (jeremyHome === 'N' || jeremyHome === 'NO') {
  alert('You\'re right, ' + userName + '! I was born in California but spent most of my life in the eastern U.S and Germany. Moving on!');
  correctGuesses++;
} else {
  alert('I get it, ' + userName + ', it\'s hard to make that call with such little data! I\'m Cali-born, East Coast and Germany raised. Moving on!');
}

var jeremySchool =  prompt(userName + ', now you know I\'m 33 and I\'m not from the PNW. But did I attend the University of Washington? Reply Y or N.').toUpperCase();
console.log('Did ' + userName + ' guess that I am a UW alumnus? ' + jeremySchool);

if(jeremySchool === 'Y' || jeremySchool === 'YES') {
  alert('Yep! Nice job, ' + userName + '. I moved to Seattle in 2015 and recently graduated from the Full-time MBA program at UW - GO DAWGS! Let\'s keep going.');
  correctGuesses++;
} else if (jeremySchool === 'N' || jeremySchool === 'NO') {
  alert( 'Even though I didn\'t grow up here, I moved to Seattle in 2015 and am a recent graduate of the MBA program at UW - GO DAWGS! Let\'s keep going.');
} else {
  alert('Hmmmm... you must be a Washington State fan. I graduated with my MBA from UW before starting at Code Fellows- GO DAWGS! Let\'s keep going.');
}

var jeremyHobbies =  prompt(userName + ', now you know I\'m a 33 year old PNW transplant that attended UW. But, I actually moved out here for another reason... is that reason because I love being outdoors? Reply Y or N').toUpperCase();
console.log('What did ' + userName + ' guess about my love of the outdoors? ' + jeremyHobbies);

if(jeremyHobbies === 'Y' || jeremyHobbies === 'YES' || jeremyHobbies === 'YEAH' || jeremyHobbies === 'YEP' || jeremyHobbies === 'SURE') {
  alert('Haha, you caught me ' + userName + '! School was an ok reason but I really moved here so I could go snowboarding and backpacking in the beautiful PNW. Onwards and upwards!');
  correctGuesses++;
} else if (jeremyHobbies === 'N' || jeremyHobbies === 'NO') {
  alert('UW has a good MBA program but truthfully I moved here so I could spend all my free time snowboarding and backpacking. Onwards and upwards!');
} else {
  alert('I totally get it... I\'d rather be snowboarding or backpacking than answering these questions, too. Onwards and upwards!');
}

var jeremyPet =  prompt('Ok ' + userName + ', so I\'m a 33 year old PNW transplant that attended UW and loves being outside. Question five: Do I have any pets? Reply Y or N.').toUpperCase();
console.log('What did ' + userName + ' guess about my pet ownership? ' + jeremyPet);

if(jeremyPet === 'Y' || jeremyPet === 'YES') {
  alert('Unfortunately you\'re wrong, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Journey forth!');
} else if (jeremyPet === 'N' || jeremyPet === 'NO') {
  alert('Unfortunately you\'re right, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Journey forth!');
  correctGuesses++;
} else {
  alert('Hmm... ' + userName + ' must actually be a cat walking on a keyboard. Does Mr. Mittens want to come live with me? Journey forth, Mr. Mittens!');
}

var userGuess1 = 0;
var jeremyCountries = 13;
var flag1 = false;

while(userGuess1 < 4 && flag1 === false) {
  var guessCountries =  parseInt(prompt('Ok ' + userName + ', I\'m a 33 year old PNW transplant that attended UW, loves being outside, and I don\'t have any pets. How many countries outside of the U.S. have I been to?'));
  //guessCountries= parseInt(guessCountries);
  userGuess1++; 
  if(guessCountries === jeremyCountries) {
    alert('How did you know? Good job ' + userName + '. I\'ve been to Germany, Italy, Spain, France, Holland, England, The Netherlands, Austria, Canada, Iraq, Kuwait, The Philippines, and Afghanistan. Only one more question to go!');
    correctGuesses++;
    flag1 = true;
    console.log(userName + ' guessed ' + guessCountries + ' and got the answer right.');
  } else if (flag1 === false && guessCountries < jeremyCountries && userGuess1 < 4) {
    alert('Nice guess ' + userName + ', but ' + guessCountries + ' is not correct. Try a higher number!');
    console.log(userName + ' guessed ' + guessCountries + ' and got the answer wrong.');
  } else if (flag1 === false && guessCountries > jeremyCountries && userGuess1 < 4) {
    alert('Nice guess ' + userName + ', but ' + guessCountries + ' is not correct. Try a lower number!');
    console.log(userName + ' guessed ' + guessCountries + ' and got the answer wrong.');
  } if (flag1 === false && userGuess1 === 4) {
    alert('Sorry ' + userName + ', All out of guesses! I\'ve been to Germany, Italy, Spain, France, Holland, England, The Netherlands, Austria, Canada, Iraq, Kuwait, The Philippines, and Afghanistan.');
  }
}
//figure out how to display proper nouns
var userGuess2 = 0;
var jeremyService = ['GERMANY', 'IRAQ', 'KUWAIT', 'THE PHILIPPINES' , 'AFGHANISTAN'];
var flag2 = false;

while(userGuess2 < 6 && flag2 === false) {
  var guessService =  prompt('Ok ' + userName + ', I\'m a 33 year old PNW transplant that attended UW, loves the outdoors, doesn\'t have any pets, and I\'ve been to 13 countries. Can you guess one of the countries I visited when I served in the Army? HINT: there\'s 5 possible answers and 13 countries. You got this!').toUpperCase();
  userGuess2++;
  for(var i = 0; i < jeremyService.length; i++) {
    if(guessService === jeremyService[i]) {
      alert('Another one right, ' + userName + ' that\'s awesome! Yes, I spent time in ' + guessService + ' during my 6 years in the Army, and I appreciated the opportunity to do so. And guess what? Click Ok');
      correctGuesses++;
      flag2 = true;
      console.log(userName + ' guessed ' + guessService + ' and got the answer right.');
      break;
    } 
  } 
  if (flag2 === false) {
    alert('Nice guess ' + userName + ', but I did\'t spend time in ' + guessService + '. Take another shot!');
    console.log(userName + ' guessed ' + guessService + ' and got the answer wrong.');
  }
  if (flag2 === false && userGuess2 === 6) {
    alert('That\'s enough guesses for one day. The countries the Army had me spend time in are Kuwait, Iraq, Afghanistan, Germany, and The Philippines. And guess what? Click Ok');
  }
}
alert('We\'re done ' + userName + '! Thanks for taking time to learn a little about me. You guessed correctly on ' + correctGuesses + ' out of 7 questions. Now let\'s head to my site where you can learn more about me.');


