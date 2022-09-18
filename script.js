'use strict';

let luckyNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// FUNCTIONS FOR REPEATING CODE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setLuckyNumber = function (newNumber) {
  document.querySelector('.number').textContent = newNumber;
};

// END

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('⛔ Not a number!');

    // WHEN PLAYER WINS
  } else if (guess === luckyNumber) {
    displayMessage('🎉 Correct Number!');
    // DISPLAYS LUCKY NUMBER TO WINNER
    setLuckyNumber(luckyNumber);

    // CHANGES BACKGROUND TO GREEN UPON WINNING
    document.querySelector('body').style.backgroundColor = '#60b347';

    // CHANGES TEXT BOX WIDTH UPON WINNING
    document.querySelector('.number').style.width = '30rem';

    // CHANGES HIGHSCORE IF GREATER
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // WHEN GUESS IS WRONG (REFRACTORED CODE)
  } else if (guess !== luckyNumber) {
    if (score > 1) {
      displayMessage(guess > luckyNumber ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 GAME OVER! You lost!');
      setScore(0);
    }
  }
  /* PREVIOUS CODE BEFOR REFACTOR
    // WHEN PLAYER GUESS IS TOO HIGH
  } else if (guess > luckyNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 GAME OVER! You lost!';
      document.querySelector('.score').textContent = 0;
    }
    // WHEN PLAYER GUESS IS TOO LOW
  } else if (guess < luckyNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      // WHEN PLAYER LOSES
    } else {
      document.querySelector('.message').textContent =
        '💥 GAME OVER! You lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c70700';
    }
  } */
});

// AGAIN BUTTON RESET
document.querySelector('.again').addEventListener('click', function () {
  luckyNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  setLuckyNumber('?');
  setScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  // RESTORE BACKGROUND
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
