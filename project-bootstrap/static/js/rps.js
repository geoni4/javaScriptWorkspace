const casesBtn = document.querySelectorAll(".cases > .btn");
let computerTimeout;

const cases = ["rock", "paper", "scissors"];
const casesKor = ["바위", "보" , "가위"];
const judgement = ["비겼습니다.", "당신이 이겼습니다.", "당신이 졌습니다."];

const yourCase = document.querySelector("#your-case");
const computerText = document.querySelector("#computer-text");
const judgeText = document.querySelector("#judge-text");
const computersCase = document.querySelector("#computers-case");

const rpsMain = () => {
  Array.from(casesBtn).filter(el => el.dataset.case !== "begin-game").forEach(el => {
    el.addEventListener("click", (e) => {
      const you = e.target.dataset.case;
      const yourPath = `./static/images/${you}.png`;

      clearTimeout(computerTimeout);

      yourCase.setAttribute("src", yourPath);
      if (cases.includes(you)) {
        let counter = 0;
        computerTimeout = setTimeout(() => runComputer(counter, 100), 100);
      }
    });
  });
};

const runComputer = (counter, intervalDuration) => {
  const computer = cases[parseInt(Math.random() * 30) % 3];
  const computersPath = `./static/images/${computer}.png`;
  computersCase.setAttribute("src", computersPath);
  const maxCount = 12; // 총 1.5초간 실행 (0.1초 * 9번 + 0.2초 * 3번)

  if (counter === 9){
    intervalDuration = 200;
  }
  if (counter === maxCount) {
    computersCase.setAttribute("src", computersPath);
    computerText.textContent = casesKor[cases.indexOf(computer)];
    judgeText.textContent = judgement[((cases.indexOf(you) - cases.indexOf(computer)) % 3 + 3) % 3];
    casesBtn.forEach(el => {
      el.classList.toggle("d-none");
    });
  } else {
    computerTimeout = setTimeout(() => runComputer(counter + 1, intervalDuration), intervalDuration);
  }
};

const beginBtn = document.querySelector("#begin");
beginBtn.addEventListener("click", () => {
  casesBtn.forEach(el => {
    el.classList.toggle("d-none");
  });
  yourCase.setAttribute("src", "./static/images/rps-image.png");
  computerTimeout = setTimeout(() => runComputer(13, 100), 100);
});


rpsMain();
