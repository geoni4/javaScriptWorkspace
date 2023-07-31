const lotto = () =>{
  let lotto = [];
  while(1){
    let num = parseInt(Math.random() * 45 +1);
    if(lotto.length >= 6) break;
    if(lotto.indexOf(num) < 0)  
      lotto.push(num);
  }
  lotto.sort((a, b) => a - b);
  const lottoNode = document.querySelector("#lotto-container");
  lotto.forEach(n =>{
    const colors = ["single-digit", "teens", "twenties", "thirties", "fourties"];
    const div = document.createElement("div");

    div.classList.add("lotto-num")
    div.classList.add("mx-3");
    div.classList.add(`${colors[parseInt(n/10)%5]}`);
    div.innerText = n;
    lottoNode.appendChild(div);
  });
}
lotto();