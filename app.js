// API KEY: fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU

//This is a general API template that you can use with many of the API's you will find on the web.

//create variable that store button in javascript variable
let button = document.querySelector("#getData");
var giphyApiKey = "fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU";
//var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;
//var giphyRandomURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}=&rating=g`;

//add an event listener to the button. Run the function sendApiRequest when the button is clicked
button.addEventListener("click", () => {
  sendApiRequest();
});

//fetch data from the API
async function sendApiRequest() {
  let response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=fptljKSZwqx1cVFvU9lcEk0yQxxXC3UU&tag=&rating=g`
  );
  console.log(response);
  let gifs = await response.json();
  console.log(gifs);
  useApiData(gifs);
}

//do something with the API data you've received.
function useApiData(gifs) {
  document.querySelector(
    "#wrapper"
  ).innerHTML = `<img src = "${gifs.data.images.original.url}">`;
}
