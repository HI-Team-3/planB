//create javascript variable
let button = document.querySelector("#getData");
var gifBox = document.querySelector("#wrapper");
var soundApiKey = `iUEo8G4SpNyoDuuhogZQMnnNDuHTyco8Ia1pcRXC`;
var giphyApiKey = "fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU";
var giphyRandomURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=random&rating=r`;
var soundURL = `https://freesound.org/apiv2/sounds/279004/?token=${soundApiKey}`;
window.onload = function () {
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
