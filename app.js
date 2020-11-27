//create javascript variable
let button = document.querySelector("#getData");
var gifBox = document.querySelector("#wrapper");
var soundApiKey = `iUEo8G4SpNyoDuuhogZQMnnNDuHTyco8Ia1pcRXC`;
var giphyApiKey = "fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU";
var giphyRandomURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=random&rating=r`;
var soundURL = `https://freesound.org/apiv2/sounds/279004/?token=${soundApiKey}`;
window.onload = function () {
  soundManager.setup({
    // where to find the SWF files, if needed
    url: soundURL,
    onready: function () {
      // SM2 has loaded, API ready to use e.g., createSound() etc.
    },
    ontimeout: function () {
      // Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
    },
  });
  //add an event listener to the button. Run the function sendApiRequest when the button is clicked
  button.addEventListener("click", () => {
    sendApiRequest();
    sendSoundApiRequest();
  });
  //fetch data from the API
  async function sendApiRequest() {
    let response = await fetch(giphyRandomURL);
    let gifs = await response.json();
    useApiData(gifs);
  }
  async function sendSoundApiRequest() {
    let response = await fetch(soundURL);
    let sounds = await response.json();
    useSoundApiData(sounds);
  }
  //do something with the API data you've received.
  function useApiData(gifs) {
    gifBox.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
    anime({
      targets: ".bubble",
      scale: 2.5,
      skew: 360,
      rotate: "3turn",
      easing: "spring(1, 8, 90, 4)",
    });
  }
  function useSoundApiData(sounds) {
    soundManager.play(sounds.data);
    console.log(sounds);
  }
};
