import showScoreList from './showScoreList.js';

const addFunction = (nameValue, scoreValue) => {
  if (nameValue.length < 1 || scoreValue < 0) {
    const message = document.getElementById('message');
    message.innerHTML = 'Please, type your name and a score greater than 0';
  } else {
    const message = document.getElementById('message');
    message.innerHTML = '';
    const scoreArr = JSON.parse(localStorage.getItem('scorelist'));
    scoreArr.push(
      {
        name: nameValue,
        score: scoreValue,
      },
    );
    // After updating the array, save it to localStorage and call showscorelist function to
    //  show new list on screen
    localStorage.setItem('scorelist', JSON.stringify(scoreArr));
  }
  showScoreList(JSON.parse(localStorage.getItem('scorelist')));
};
export default addFunction;

// const scoresContainer = document.querySelector('.scores');