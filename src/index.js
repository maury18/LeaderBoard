/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import addFunction from './modules/AddFunction.js';
import showScoreList from './modules/showScoreList.js';

const scoreArr = [
  {
    name: '',
    score: 0,
  },
];

// instructions to populate local storage with basic array in case it has null value inside
const localSt = JSON.parse(localStorage.getItem('scorelist'));
if (localSt == null) {
  localStorage.setItem('scorelist', JSON.stringify(scoreArr));
} else {
  showScoreList(localSt);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const addName = document.getElementById('name');
  const addScore = document.getElementById('score');
  const nameValue = addName.value;
  const scoreValue = addScore.value;
  addFunction(nameValue, scoreValue);
  addName.value = '';
  addScore.value = '';
});