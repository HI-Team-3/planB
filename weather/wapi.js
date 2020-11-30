let city = "stockholm";
let temperatureDegree = document.querySelector(".temperature-degree");
let button = document.querySelector(".btn");
const weatherApikey = "87c18c31ffa6fe9c3b68cb4d2bd50b14";
const proxy = `https://cors-anywhere.herokuapp.com/`;
const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApikey}`;

button.addEventListener("click", () => {
  sendApiRequest();
});

async function sendApiRequest() {
  fetch(api)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      const { temp } = data.main;
      temperatureDegree.textContent = Math.round(temp - 273.15);
    });
}
