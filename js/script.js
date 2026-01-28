function handleKeyboardKeyUpEvent(event) {
  // console.log(event);
  const playerKeyPressed = event.key;
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  // stop the game if pressed 'Esc'
  if (playerKeyPressed === "Escape") {
    gameOver();
  }

  if (playerKeyPressed === expectedAlphabet) {
    console.log("you got a point");

    const currentScore = getTextValueById("current-score");
    const updatedScore = currentScore + 1;
    setTheUpdatedScore("current-score", updatedScore);
    removeBackGroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed a life");

    const currentLife = getTextValueById("current-life");
    const updatedLife = currentLife - 1;
    setTheUpdatedScore("current-life", updatedLife);
    if (updatedLife === 0) {
      gameOver();
    }
  }

}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getRandomAlphabet();
  // console.log('your current alphabet :', alphabet);
  const currentAlphabetDisplay = document.getElementById("current-alphabet");
  currentAlphabetDisplay.innerText = alphabet;
  // console.log(currentAlphabetDisplay);

  setBackGroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");

  setTheUpdatedScore("current-life", 5);
  setTheUpdatedScore("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // 1.get the final score
  const lastScore = getTextValueById("current-score");
  console.log(lastScore);
  setTheUpdatedScore("last-score", lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  // console.log(currentAlphabet);
  removeBackGroundColorById(currentAlphabet);
}
