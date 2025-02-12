let p1Var = 0;
let p2Var = 0;

const p1Score = document.querySelector("#p1-score");
const p2Score = document.querySelector("#p2-score");

const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const reset = document.querySelector("#reset");

p1Button.addEventListener("click", () => {
  p1Var++;
  p1Score.innerHTML = `${p1Var}`;
});

p2Button.addEventListener("click", () => {
  p2Var++;
  p2Score.innerHTML = `${p2Var}`;
});

reset.addEventListener("click", () => {
  p1Var = 0;
  p1Score.innerHTML = `${p1Var}`;
  p2Var = 0;
  p2Score.innerHTML = `${p2Var}`;
});
