let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

const p1Span = document.querySelector("#p1-score");
const p2Span = document.querySelector("#p2-score");
const winningScoreSelect = document.querySelector("#playto");

const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const reset = document.querySelector("#reset");

p1Button.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score == winningScore) {
      isGameOver = true;
      p1Span.classList.add("winner");
      p2Span.classList.add("loser");
    }
    p1Span.textContent = `${p1Score}`;
  }
});

p2Button.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score == winningScore) {
      isGameOver = true;
      p2Span.classList.add("winner");
      p1Span.classList.add("loser");
    }
    p2Span.textContent = `${p2Score}`;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  scoreReset();
});

reset.addEventListener("click", scoreReset);

function scoreReset() {
  p1Span.classList.remove("winner", "loser");
  p2Span.classList.remove("winner", "loser");

  isGameOver = false;

  p1Score = 0;
  p1Span.textContent = `${p1Score}`;

  p2Score = 0;
  p2Span.textContent = `${p2Score}`;
}
