const squares = document.querySelectorAll('.board div');
let playerMoves = [];
let simonMoves = [];
let moveCount = 0;

function simonAnimation() {
  console.log(simonMoves);
  simonMoves.forEach((move, index) => {
    (function () {
      let count = index + 1;
      setTimeout(function () {
        console.log('1', count * 500);
        move.classList.add('blink');
        move.classList.remove('blink');
      }, count * 500);
      setTimeout(function () {
        console.log('2', count * 1000);
        move.classList.add('blink');
      }, count * 1000);
    })(index);
  });
}

function generateRandomMove() {
  // Generate a random integer between 0..3 to pick a color
  // from the simonSquaresArray and push to simonMoves
  let randomInteger = Math.floor(Math.random() * 4);
  simonMoves.push(squares[randomInteger]);
  console.log('move generated, simonMoves: ', simonMoves);
  // removeAnimations();
  simonAnimation();
}

function clickSquare(event) {
  playerMoves.push(event.target);
  console.log(
    'player moves less or equal to simon moves',
    'simonMoves: ',
    simonMoves,
    'playerMoves: ',
    playerMoves
  );
  checkMatch();
}
function checkMatch() {
  if (
    JSON.stringify(simonMoves.slice(0, playerMoves.length)) ===
    JSON.stringify(playerMoves)
  ) {
    console.log('Arrays match');
    if (simonMoves.length === playerMoves.length) {
      playerMoves = [];
      generateRandomMove();
    }
  } else {
    console.log('no match so far, you lose');
    playerMoves = [];
    simonMoves = [];
    startGame();
  }
}

function startGame() {
  generateRandomMove();
  squares.forEach((square) => {
    square.removeEventListener('click', clickSquare);
    square.addEventListener('click', clickSquare);
  });
}

window.onload = startGame();
