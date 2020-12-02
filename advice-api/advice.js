let norrisWrapper = document.querySelector("#getAdviceData");
let norrisBtn = document.querySelector("#adviceBtn");

norrisBtn.addEventListener("click", fetchAdvice);

async function fetchAdvice() {
  let norrisResponse = await fetch("https://api.chucknorris.io/jokes/random");
  let norrisData = await norrisResponse.json();

  norrisWrapper.innerHTML = `- Morty: <br> <div>${norrisData.value} </div>`;
}
