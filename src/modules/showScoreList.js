const showScoreList = (scorelist) => {
  const list = document.querySelector('.scores');
  list.innerHTML = '';
  for (let i = scorelist.length - 1; i > 0; i -= 1) {
    const score = document.createElement('div');
    score.classList.add('score');
    score.innerHTML = `
        <p class="text-name">${scorelist[i].name}</p>
        <p class="score-result">${scorelist[i].score}</p>
        `;
    // Append name to line and line to list
    list.appendChild(score);
  }
};

export default showScoreList;