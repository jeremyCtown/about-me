'use strict';

var userName, correctGuesses = 0, flag = false, guessCounter = 0;

//User name
function getUserName() {
  userName = prompt('Welcome to my page! What is your name?');
  if(userName === '') {
    userName = 'AAAHHHH!!!!!';
    console.log('NO NAME GIVEN');
  }
}

//Start the Game
function toPlayTheGame () {
  var playTheGame = prompt('Hi ' + userName + ', want to play a game? Reply with Y or N.').toUpperCase();
  console.log('Did ' + userName + ' choose to play the game? ' + playTheGame);

  if(playTheGame === 'Y' || playTheGame === 'YES') {
    alert('Thanks for playing, ' + userName + '. Let\'s go!');
  } else if (playTheGame === 'N' || playTheGame === 'NO') {
    alert('That\'s too bad, ' + userName + '. Let\'s play anyway!');
  } else {
    alert('Oh ' + userName + ', you little rebel :) On to the game!');
    console.log(userName + ' did not input a value into the prompt.');
  }
}

//Question 1
function guessAge() {
  var jeremyAge = prompt('The game is guessing a few facts about me. First, am I 31 years old? Reply Y or N.').toUpperCase();
  console.log('Did ' + userName + ' think I am 31? ' + jeremyAge);

  if(jeremyAge === 'Y' || jeremyAge === 'YES') {
    alert('31 was pretty good. ' + userName + '! I\'m 33 now. Next question.');
  } else if (jeremyAge === 'N' || jeremyAge === 'NO') {
    alert('Good guess, ' + userName + '! I\'m 33 years young. Next question');
    correctGuesses++;
  } else if (jeremyAge === '') {
    alert('Good call, ' + userName + '. Sometimes it\'s best not to guess a person\'s age :) I\'m 33. Next question.');
    console.log(userName + ' did not input a value into the prompt.');
  } else if (jeremyAge !== 'Y' || jeremyAge !== 'YES' || jeremyAge !== 'N' || jeremyAge !== 'NO' || jeremyAge !== '') {
    alert('Please enter either Y or N into the prompt.');
    console.log(userName + ' entered an invalid value into prompt.');
    guessAge();
  }
}

//Question 2
function guessHome() {
  var jeremyHome =  prompt('Well, ' + userName + ', now you know that I\'m 33 years old. Am I originally from the Pacific Northwest? Reply Y or N.').toUpperCase();
  console.log('Did ' + userName + ' guess that I am from the PNW? ' + jeremyHome);

  if(jeremyHome === 'Y' || jeremyHome === 'YES') {
    alert('That would be cool, ' + userName + ', but unfortunately no. I was born in California and lived most of my life in eastern U.S. and Germany. Moving on!');
  } else if (jeremyHome === 'N' || jeremyHome === 'NO') {
    alert('You\'re right, ' + userName + '! I was born in California but spent most of my life in the eastern U.S and Germany. Moving on!');
    correctGuesses++;
  } else if (jeremyHome === ''){
    alert('I get it, ' + userName + ', it\'s hard to make that guess with such little data! I\'m Cali-born, East Coast and Germany raised. Moving on!');
    console.log(userName + ' did not input a value into the prompt.');
  } else if (jeremyHome !== 'Y' || jeremyHome !== 'YES' || jeremyHome !== 'N' || jeremyHome !== 'NO' || jeremyHome !== '') {
    alert('Please enter either Y or N into the prompt.');
    console.log(userName + ' entered an invalid value into prompt.');
    guessHome();
  }
}

//Question 3
function guessSchool() {
  var jeremySchool =  prompt(userName + ', now you know I\'m 33 and I\'m not from the PNW. But did I attend the University of Washington? Reply Y or N.').toUpperCase();
  console.log('Did ' + userName + ' guess that I am a UW alumnus? ' + jeremySchool);

  if(jeremySchool === 'Y' || jeremySchool === 'YES') {
    alert('Yep! Nice job, ' + userName + '. I moved to Seattle in 2015 and recently graduated from the MBA program at UW - GO DAWGS! Let\'s keep going.');
    correctGuesses++;
  } else if (jeremySchool === 'N' || jeremySchool === 'NO') {
    alert( 'Sorry, ' + userName + ', but I\'m a Husky. I moved to Seattle in 2015 and recently graduated from the MBA program at UW - GO DAWGS! Let\'s keep going.');
  } else if (jeremySchool === '') {
    alert('Hmmmm... you must be a Washington State fan. I graduated with my MBA from UW before starting at Code Fellows- GO DAWGS! Let\'s keep going.');
    console.log(userName + ' did not input a value into the prompt.');
  } else if (jeremySchool !== 'Y' || jeremySchool !== 'YES' || jeremySchool !== 'N' || jeremySchool !== 'NO' || jeremySchool !== '') {
    alert('Please enter either Y or N into the prompt.');
    console.log(userName + ' entered an invalid value into prompt.');
    guessSchool();
  }
}

//Question 4
function guessHobbies() {
  var jeremyHobbies =  prompt(userName + ', now you know I\'m a 33 year old PNW transplant that attended UW. But, I actually moved out here for another reason... is that reason because I love being outdoors? Reply Y or N').toUpperCase();
  console.log('What did ' + userName + ' guess about my love of the outdoors? ' + jeremyHobbies);

  if(jeremyHobbies === 'Y' || jeremyHobbies === 'YES') {
    alert('Haha, you caught me ' + userName + '! School was an ok reason but I really moved here so I could go snowboarding and backpacking in the beautiful PNW. Onwards and upwards!');
    correctGuesses++;
  } else if (jeremyHobbies === 'N' || jeremyHobbies === 'NO') {
    alert('That\'s not the right answer, ' + userName + ', but now you know something new about me! UW has a good MBA program but truthfully I moved here so I could spend all my free time snowboarding and backpacking. Onwards and upwards!');
  } else if (jeremyHobbies === '') {
    alert('I totally get it... I\'d rather be snowboarding or backpacking than answering these questions, too. Onwards and upwards!');
    console.log(userName + ' did not input a value into the prompt.');
  } else if (jeremyHobbies !== 'Y' || jeremyHobbies !== 'YES' || jeremyHobbies !== 'N' || jeremyHobbies !== 'NO' || jeremyHobbies !== '') {
    alert('Please enter either Y or N into the prompt.');
    console.log(userName + ' entered an invalid value into prompt.');
    guessHobbies();
  }
}

//Question 5
function guessPet() {
  var jeremyPet =  prompt('Ok ' + userName + ', so I\'m a 33 year old PNW transplant that attended UW and loves being outside. Question five: Do I have any pets? Reply Y or N.').toUpperCase();
  console.log('What did ' + userName + ' guess about my pet ownership? ' + jeremyPet);
  if(jeremyPet === 'Y' || jeremyPet === 'YES') {
    alert('Unfortunately you\'re wrong, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Let\'s continue our journey!.');
  } else if (jeremyPet === 'N' || jeremyPet === 'NO') {
    alert('Unfortunately you\'re right, I don\'t have any pets which is a total bummer. Hopefully that changes soon! You\'re doing great ' + userName + '. Let\'s continue our journey!');
    correctGuesses++;
  } else {
    alert('Hmm... ' + userName + ' must actually be a cat walking on a keyboard. Does Mr. Mittens want to come live with me? Let\'s continue our journey, Mr. Mittens!');
    console.log(userName + ' did not input a value into the prompt.');
  }
}

//Question 6
function guessNumberCountries() {
  var jeremyCountries = 13;
  flag = false;
  guessCounter = 0;

  while(guessCounter < 4 && flag === false) {
    var guessCountries =  parseInt(prompt('Ok ' + userName + ', I\'m a 33 year old PNW transplant that attended UW, loves being outside, and I don\'t have any pets. How many countries outside of the U.S. have I been to? HINT: It\'s a number between 0-99'));
    guessCounter++;

    if(guessCountries === jeremyCountries) {
      alert('How did you know? Good job ' + userName + ', you got the answer right in ' + guessCounter + '. I\'ve been to Germany, Italy, Spain, France, Holland, England, The Netherlands, Austria, Canada, Iraq, Kuwait, The Philippines, and Afghanistan. Only one more question to go!');
      correctGuesses++;
      flag = true;
      console.log(userName + ' guessed ' + guessCountries + ' and got the answer right on guess #' + guessCounter);
    } else if (flag === false && guessCountries < jeremyCountries && guessCounter < 4) {
      alert('Nice guess ' + userName + ', but ' + guessCountries + ' is not correct. Try a higher number!');
      console.log(userName + ' guessed ' + guessCountries + ' and got the answer wrong. This is guess #' + guessCounter + '.');
    } else if (flag === false && guessCountries > jeremyCountries && guessCounter < 4) {
      alert('Nice guess ' + userName + ', but ' + guessCountries + ' is not correct. Try a lower number!');
      console.log(userName + ' guessed ' + guessCountries + ' and got the answer wrong. This is guess #' + guessCounter + '.');
    } else if (flag === false && isNaN(guessCountries) && guessCounter < 4) {
      alert('You have to put in a number ' + userName + '! Try again');
      console.log(userName + ' did not input a value into the prompt.');
    } if (flag === false && guessCounter === 4) {
      alert('Sorry ' + userName + ', All out of guesses! I\'ve been to Germany, Italy, Spain, France, Holland, England, The Netherlands, Austria, Canada, Iraq, Kuwait, The Philippines, and Afghanistan.');
      console.log(userName + ' did not get the answer correct after 4 attempts.');
    }
  }
}

//Question 7
function guessServiceCountries() {
  var jeremyService = ['GERMANY', 'IRAQ', 'KUWAIT', 'THE PHILIPPINES' , 'AFGHANISTAN'];
  flag = false;
  guessCounter = 0;

  while(guessCounter < 6 && flag === false) {
    var guessService =  prompt('Ok ' + userName + ', I\'m a 33 year old PNW transplant that attended UW, loves the outdoors, doesn\'t have any pets, and I\'ve been to 13 countries. Can you guess one of the countries I visited when I served in the Army? HINT: there\'s 5 possible answers and 13 countries. You got this!').toUpperCase();
    guessCounter++;
    for(var i = 0; i < jeremyService.length; i++) {
      if(guessService === jeremyService[i]) {
        alert('Another one right, ' + userName + ' that\'s awesome! You got the answer on try #' + guessCounter + '! I spent time in Germany, Iraq, Kuwait, The Philippines, and Afghanistan during my time with the Army, and I appreciated the opportunity to do so. Now guess what? Click Ok');
        correctGuesses++;
        flag = true;
        console.log(userName + ' guessed ' + guessService + ' and got the answer right on guess #' + guessCounter + '.');
        break;
      }
    } if (flag === false && guessService === '' && guessCounter < 6) {
      alert('Take a guess ' + userName + ', you can do it!');
      console.log(userName + ' did not enter a value into the prompt.');;
    }if (flag === false && guessService !== '' && guessCounter < 6) {
      alert('Nice guess ' + userName + ', but I didn\'t spend time in ' + guessService + '. Take another shot!');
      console.log(userName + ' guessed ' + guessService + ' and got the answer wrong. This is guess #' + guessCounter + '.');
    }if (flag === false && guessCounter === 6) {
      alert('That\'s enough guesses for one day. The countries the Army had me spend time in are Kuwait, Iraq, Afghanistan, Germany, and The Philippines. Now guess what? Click Ok');
      console.log(userName + ' did not get the answer correct after 6 attempts.');
    }
  }
}



function closingScore() {
  alert('We\'re done ' + userName + '! Thanks for taking time to learn a little about me. You guessed correctly on ' + correctGuesses + ' out of 7 questions. Now let\'s head to my site where you can learn more of my story.');
}

getUserName();
toPlayTheGame();
guessAge();
guessHome();
guessSchool();
guessHobbies();
guessPet();
guessNumberCountries();
guessServiceCountries();
closingScore();




//Personal notes - DO NOT DELETE
//global variables go at the top of the page
//need to learn how to select multiple instances of the same code string at once
//learn to console.log user response time
//need to learn how to only accept the first letter in a string - subString()
//guessCountries = parseInt(guessCountries) === var guessCountries(parseInt(prompt('')))
//figure out how to identify and display proper nouns from user input
