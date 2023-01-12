//Relevant Elements
const choices = document.querySelectorAll(".opt.titleIcons");
const battleButton = document.querySelector(".battle");
const playerWeapon = document.querySelector(".player");
const cpuBox = document.querySelector(".cpu");
const paper = document.getElementById("paper");
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const result = document.getElementById('result');
const results = [];
let weaponChoice = '';

//Event Listeners
choices.forEach(choice => choice.addEventListener('click', removeSelection));
choices.forEach(choice => choice.addEventListener('click', selectWeapon));
// battleButton.addEventListener('click', initiateGame);
// add an EventListener maybe to highlight the classList containing the weaponChoice
//still need to toggle battleButton on/off

//removes currently selected class from playerWeapon
function removeSelection() {
  const prevChoice = playerWeapon.classList[2];
  if (prevChoice != undefined) {
    playerWeapon.classList.toggle(prevChoice);
  }
}

//adds selected class to playerWeapon
function selectWeapon() {
  // removeSelection();
  weaponChoice = this.classList[0]
  playerWeapon.classList.toggle(weaponChoice);
  return weaponChoice;
}
// function gameReady() {
  
// }