let btn = document.getElementById("clickme");
let imageOne = document.getElementById("playerOne");
let imageTwo = document.getElementById("playerTwo");
let displayWinner = document.getElementById("changeText");
let playerOneScore = document.getElementById("scoreOne");
let scoreOne = 0;
let playerTwoScore = document.getElementById("scoreTwo");
let scoreTwo = 0;

btn = addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  let palyerOne = "/images/dice" + randomNumber + ".png";
  imageOne.setAttribute("src", palyerOne);

  let randomNumberTwo = Math.floor(Math.random() * 6 + 1);
  let palyerTwo = "/images/dice" + randomNumberTwo + ".png";
  imageTwo.setAttribute("src", palyerTwo);

  if (palyerOne > palyerTwo) {
    displayWinner.innerHTML = "Player One Wins";
    playerOneScore.innerHTML++;
  } else if (palyerTwo > palyerOne) {
    displayWinner.innerHTML = "Player Two Wins";
    playerTwoScore.innerHTML++;
  } else {
    displayWinner.innerHTML = "Ohh Match is Draw!!";
  }
});
