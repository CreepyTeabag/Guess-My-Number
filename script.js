'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔  No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    setNumber(secretNumber);

    setBackgroundColor('#60b347');
    setNumberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  setNumber('?');
  document.querySelector('.guess').value = '';

  setBackgroundColor('#222');
  setNumberWidth('15rem');
});
