const lottoNode = document.querySelector("#lotto-container");

let isLottoRunning = false;

const appendNumber = async (n) => {
  const colors = ["single-digit", "teens", "twenties", "thirties", "fourties"];
  const div = document.createElement("div");
  div.classList.add("lotto-num", "mx-3", colors[parseInt(n / 10) % 5]);
  div.innerText = n;
  await new Promise((resolve) => setTimeout(resolve, 500));
  if(isLottoRunning)
    lottoNode.appendChild(div);
};


const lotto = async () =>{
  isLottoRunning = true;
  lottoNode.replaceChildren();
  let lotto = [];
  while(1){
    let num = parseInt(Math.random() * 45 +1);
    if(lotto.length >= 6) break;
    if(lotto.indexOf(num) < 0)  
      lotto.push(num);
  }
  lotto.sort((a, b) => a - b);


  // Create a function that wraps the appendChild operation in a promise
  // Use `async/await` to execute the loop asynchronously
  for (const n of lotto) {
    await appendNumber(n);
  }

  isLottoRunning = false; 
}

document.querySelector("#lottery-button").addEventListener("click", () =>{
  if (!isLottoRunning) {
    lotto();
  }
});