const rpsMain = () => {
    
  const casesBtn = document.querySelectorAll(".cases > .btn");
  casesBtn.forEach(el => {
    el.addEventListener("click", (e) => {
      const cases = ["rock", "paper", "scissors"];
      const judgement = ["비겼습니다.", "당신이 이겼습니다.", "당신이 졌습니다."];

      const you = e.target.dataset.case;
      const yourCase = document.querySelector("#your-case");
      const yourPath = `./static/images/${you}.png`;

      const computer = cases[parseInt(Math.random() * 30) % 3];
      const computersCase = document.querySelector("#computers-case");
      const computersPath = `./static/images/${computer}.png`;

      yourCase.setAttribute("src", yourPath);
      computersCase.setAttribute("src", computersPath);

      const computerText = document.querySelector("#computer-text");
      const judgeText = document.querySelector("#judge-text");

      computerText.textContent = computer;
      judgeText.textContent = judgement[((cases.indexOf(you) - cases.indexOf(computer)) % 3 + 3) % 3];

    })
  })
}
rpsMain();
const page = window.location.pathname.split("/");
const currentPage = page[page.length-1].split(".")[0];
