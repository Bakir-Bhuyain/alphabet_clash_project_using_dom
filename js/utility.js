//hide pages
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  const hideElement = element.classList.add("hidden");
}
//show pages
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  const showElement = element.classList.remove("hidden");
}
//generate the random alphabet
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  // console.log(alphabet);
  return alphabet;
}

//updated the life and the score
function getTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
// set the number in the updated life and the score

function setTheUpdatedScore(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
//add the background color
function setBackGroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
//remove the background color

function removeBackGroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
