const squares = document.querySelectorAll(".board div");
const simonSquaresArray = ["red", "blue", "green", "yellow"];
const playerMoves = [];
const simonMoves = [];
let moveCount = 0;

function generateRandomMove() {
  let randomInteger = Math.floor(Math.random() * 4);
  simonMoves.push(simonSquaresArray[randomInteger]);
  console.log(simonMoves);
}

function checkMatch() {
  if (simonMoves.slice(0, playerMoves.length) === playerMoves) {
    console.log(simonMoves.slice(0, playerMoves.length), playerMoves);
    console.log("match!");
  } else {
    console.log("no match");
  }
}

function clickSquare(event) {
  if (playerMoves.length < simonMoves.length) {
    playerMoves.push(event.target.id);
    console.log("simonMoves: ", simonMoves, "playerMoves: ", playerMoves);
    checkMatch();
  } else {
    generateRandomMove();
  }

  // randomMove();
}
squares.forEach((square) => {
  square.addEventListener("click", clickSquare);
});

window.onload = function () {
  generateRandomMove();
};
