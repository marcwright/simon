const squares = document.querySelectorAll('.board div');
const simonSquaresArray = ['red', 'blue', 'green', 'yellow'];
let playerMoves = [];
let simonMoves = [];
let moveCount = 0;

function generateRandomMove() {
  let randomInteger = Math.floor(Math.random() * 4);
  simonMoves.push(simonSquaresArray[randomInteger]);
  console.log('move generated, simonMoves: ', simonMoves);
}

function clickSquare(event) {
  playerMoves.push(event.target.id);
  console.log('click Square', playerMoves.length, simonMoves.length);
  if (playerMoves.length < simonMoves.length) {
    console.log(
      'player moves less than simpon moves',
      playerMoves.length,
      simonMoves.length
    );
    console.log('simonMoves: ', simonMoves, 'playerMoves: ', playerMoves);
    checkMatch();
  } else if (playerMoves.length === simonMoves.length) {
    console.log('moves length matches');
    checkMatch();
    playerMoves = [];
    generateRandomMove();
  } else {
    console.log('else block');
  }
}
function checkMatch() {
  if (
    JSON.stringify(simonMoves.slice(0, playerMoves.length)) ===
    JSON.stringify(playerMoves)
  ) {
    console.log('Arrays match');
    // console.log(
    //   'moves arrays match!',
    //   'simon: ',
    //   simonMoves.slice(0, playerMoves.length),
    //   'player: ',
    //   playerMoves
    // );
    return;
  } else {
    console.log('no match so far, you lose');
    let playerMoves = [];
    let simonMoves = [];
    startGame();
    return;
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
