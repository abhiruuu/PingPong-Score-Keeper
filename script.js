const p1 = {
  score: 0,
  button: document.querySelector("#p1-button"),
  display: document.querySelector("#p1-score"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2-button"),
  display: document.querySelector("#p2-score"),
};

const winningScoreSelect = document.querySelector("#playto");
const reset = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = winningScoreSelect.value;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score == winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = `${player.score}`;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  scoreReset();
});

function scoreReset() {
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");

  isGameOver = false;

  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

reset.addEventListener("click", scoreReset);
