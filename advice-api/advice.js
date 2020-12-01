let advice = document.querySelector("#adviceBtn");
let adviceText = document.querySelector("#getAdviceData");

function fetchAdvice() {
  advice.addEventListener("click", displayJoke);
  function displayJoke() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw Error("Promise rejected");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.slip);

        adviceText.innerHTML = `- Morty: <br> <div class="advice">${data.slip.advice} </div>`;
      })
      .catch((err) => console.log(err));
  }
}

fetchAdvice();
