window.addEventListener('load', init);

//Global Variables
const levels = {
  hard: 2,
  medium: 3,
  easy: 5
};

const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let isplaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'riever',
  'lucky',
  'package',
  'digital',
  'information',
  'subject',
  'predicate',
  'availability',
  'assurance',
  'distance',
  'compromise',
  'watched',
  'sensors',
  'documentation',
  'vendor',
  'electrician',
  'education',
  'telepathy',
  'organization',
  'execution',
  'tracting',
  'baobab',
  'investigate',
  'javascript',
  'react',
  'vue',
  'backbone',
  'programming'
];

//Initialize Game
function init() {
  showWord(words);
  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
  wordInput.addEventListener('input', startMatch);
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

function countDown() {
  if(time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus(isPlaying) {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game is Over';
    score = -1;
  }
}

function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  } 
}

function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct Match';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}