/* ajax and json exercise 
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDog () {
  //show loading spinner
  fetch(BREEDS_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'cute dog';
  
      document.querySelector('.dog').appendChild(img);
      //stop loading
    })
}

document.querySelector('.add-dog').addEventListener('click', addDog);
*/


const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    //another way of doing it
    //console.log(Object.keys(data.message));
    //const select = document.querySelector('.breeds');

    for(let i=0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  })

  select.addEventListener("change", function(event) {
    //console.log(select.value)
    //console.log(select === event.target)
    //console.log(event.target.value);
    //console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`)

    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

    getDoggo(url);
  });

  //steps:

  //make URL

  //show loading spinner

  //fetch from the API

  //use the URL to change the current image

  //stop showing loading spinner

  const img = document.querySelector('.dog-img');
  const spinner = document.querySelector('.spinner');

  function getDoggo(url) {
    spinner.classList.add("show");
    img.classList.remove("show");
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      img.src = data.message;
      //spinner.classList.remove("show");
      //img.classList.add("show");
    })
  }

  img.addEventListener("load", function() {
    spinner.classList.remove("show");
      img.classList.add("show");
  })