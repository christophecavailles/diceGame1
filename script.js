const dice = document.querySelector('.dice');
let currentScore = 0; 
let globalScore = [0, 0];
let activePlayer = 0; 


const newBtn = document.querySelector('.newGameBtn');
const rollBtn = document.querySelector('.rollDiceBtn');
const hBtn = document.querySelector('.holdBtn');

newBtn.addEventListener('click', newGame);
rollBtn.addEventListener('click', rollDice);
hBtn.addEventListener('click', hold);

 function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var number = randomNumber;
    switch (number) {
      case 1:
      dice.src = "dice-1.png";
      break;
      case 2:
      dice.src = "dice-2.png";
      break;
      case 3:
      dice.src = "dice-3.png";
      break;
      case 4:
      dice.src = "dice-4.png";
      break;
      case 5:
      dice.src = "dice-5.png";
      break;
      case 6:
      dice.src = "dice-6.png";
      break;
    }
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
      document.getElementById(`current-${activePlayer}`).textContent = 0;
    changePlayer();
    }
  };
  
function changePlayer() { 
    currentScore = 0;  
   if (activePlayer === 0) {
    activePlayer = 1;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0').classList.remove("player-active");
   } else {
    activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.querySelector('.player-1').classList.remove("player-active");
  } 
    document.querySelector(`.player-${activePlayer}`).classList.add("player-active");
   
};

function hold() {
  globalScore[activePlayer] += currentScore;
  document.getElementById(`global-${activePlayer}`).textContent = globalScore[activePlayer];
  if (globalScore[activePlayer] >= 100) {
    document.querySelector(`.player-${activePlayer}`).classList.add("player-winner");
    document.querySelector(`.player-${activePlayer}`).textContent = 'WINNER !';
  } else {
    changePlayer();
  }
};

function newGame() {
  document.location.reload();
};
