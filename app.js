//create javascript variable
let button = document.querySelector("#getData");
var gifBoxes = document.querySelector("#wrapper");
var soundApiKey = `iUEo8G4SpNyoDuuhogZQMnnNDuHTyco8Ia1pcRXC`;
var giphyApiKey = "fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU";
var giphyRandomURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=random&rating=r`;
window.onload = function () {
  //add an event listener to the button. Run the function sendApiRequest when the button is clicked
  button.addEventListener("click", () => {
    sendApiRequest();
  });
  //fetch data from the API
  async function sendApiRequest() {
    let response = await fetch(giphyRandomURL);
    console.log(response);
    let gifs = await response.json();
    console.log(gifs);
    useApiData(gifs);
  }
  //do something with the API data you've received.
  function useApiData(gifs) {
    gifBoxes.innerHTML = `<img class="bubble" src = "${gifs.data.images.original.url}">`;
    anime({
      targets: ".bubble",
      scale: 2.5,
      rotate: "3turn",
      easing: "spring(1, 80, 100, 0)",
    });
  }
};
