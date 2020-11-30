//create javascript variable
let city = "stockholm";
let temperatureDegree = document.querySelector(".temperature-degree");
/*let button = document.querySelector(".btn");*/
const weatherApikey = "87c18c31ffa6fe9c3b68cb4d2bd50b14";
const proxy = `https://cors-anywhere.herokuapp.com/`;
const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApikey}`;

let buttonJoke = document.querySelector("#jokeBtn");
let jokeBox = document.querySelector("#jokeWrapper");

let button = document.querySelector("#getData");
var gifBox = document.querySelector("#wrapper");
var soundApiKey = `iUEo8G4SpNyoDuuhogZQMnnNDuHTyco8Ia1pcRXC`;
var giphyApiKey = "fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU";
var giphyRandomURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=random&rating=r`;
var soundURL = `https://freesound.org/apiv2/sounds/279004/?token=${soundApiKey}`;
window.onload = function () {
  buttonJoke.addEventListener("click", getJoke);

  async function getJoke() {
    var jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    var jokeText = await jokeData.json();
    jokeBox.innerHTML = jokeText.joke;
  }

  sendWeatherApiRequest();
  //add an event listener to the button. Run the function sendApiRequest when the button is clicked
  button.addEventListener("click", () => {
    soundManager.setup({
      // where to find the SWF files, if needed
      onready: function () {
        // SM2 has loaded, API ready to use createSound();
        var channelChange = soundManager.createSound({
          url: "https://freesound.org/data/previews/279/279004_5340548-hq.mp3",
        });
        channelChange.play({
          volume: 13,
        });
      },
      ontimeout: function () {
        // Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
      },
    });
    sendApiRequest();
  });
  //fetch data from the API
  async function sendApiRequest() {
    let response = await fetch(giphyRandomURL);
    let gifs = await response.json();
    useApiData(gifs);

    //do something with the API data you've received.
    function useApiData(gifs) {
      gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
      anime({
        targets: ".bubble",
        translateZ: "550",
        scale: 1.2,
      });
    }
  }

  async function sendWeatherApiRequest() {
    fetch(api)
      .then((weatherResponse) => {
        return weatherResponse.json();
      })

      .then((data) => {
        console.log(data);
        const { temp } = data.main;
        temperatureDegree.textContent = Math.round(temp - 273.15);
      });
  }

  //do something with the API data you've received.
  function useApiData(gifs) {
    gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
    anime({
      targets: ".bubble",
      translateZ: "550",
      scale: 1.2,
    });
  }
};
//do something with the API data you've received.
function useApiData(gifs) {
  gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
  anime({
    targets: ".bubble",
    translateZ: "550",
    scale: 1.2,
  });
}

//do something with the API data you've received.
function useApiData(gifs) {
  gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
  anime({
    targets: ".bubble",
    translateZ: "550",
    scale: 1.2,
  });
} //do something with the API data you've received.
function useApiData(gifs) {
  gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
  anime({
    targets: ".bubble",
    translateZ: "550",
    scale: 1.2,
  });
}
//do something with the API data you've received.
function useApiData(gifs) {
  gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
  anime({
    targets: ".bubble",
    translateZ: "550",
    scale: 1.2,
  });
}
//do something with the API data you've received.
function useApiData(gifs) {
  gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
  anime({
    targets: ".bubble",
    translateZ: "550",
    scale: 1.2,
  });
}
