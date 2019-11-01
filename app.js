const playerScore_span = document.getElementById("player-score");
const AI_Score_span = document.getElementById("AI-score");
const result = document.querySelector(".result>p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
let playerPoint = 0;
let AIPoint = 0;
const subPlayer = "player"
  .fontcolor("red")
  .fontsize(3)
  .sup();
const subAI = "AI"
  .fontsize(3)
  .fontcolor("red")
  .sup();

const win = (playerMove, AImove) => {
  playerPoint++;
  playerScore_span.innerHTML = playerPoint;
  result.innerHTML = `${playerMove} ${subPlayer} BEATS ${AImove} ${subAI}. You won!`;
  //   const moves_div = document.getElementById(playerMove);
  //   moves_div.classList.add(`green-glow`);
};
const lose = (playerMove, AImove) => {
  AIPoint++;
  AI_Score_span.innerHTML = AIPoint;
  result.innerHTML = `${AImove}${subAI} BEATS ${playerMove}${subPlayer}. You lose!`;
};
const draw = (playerMove, AImove) => {
  result.innerHTML = "No winner. Its draw!";
};

const AI_Actions = () => {
  const Actions = ["Rock", "Paper", "Scissor"];
  //do the random array
  const randomNumber = Math.floor(Math.random() * 3);
  //console.log(randomNumber);
  return Actions[randomNumber];
};

//make some rules
const user_Actions = playerMove => {
  const AImove = AI_Actions();
  switch (playerMove + AImove) {
    case "RockScissor":
    case "PaperRock":
    case "ScissorPaper":
      win(playerMove, AImove);
      break;
    case "RockPaper":
    case "PaperScissor":
    case "ScissorRock":
      lose(playerMove, AImove);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorScissor":
      draw(playerMove, AImove);
      break;
  }
};

const app = () => {
  rock.addEventListener("click", () => {
    user_Actions("Rock");
  });
  paper.addEventListener("click", () => {
    user_Actions("Paper");
  });
  scissors.addEventListener("click", () => {
    user_Actions("Scissor");
  });
};

app();
