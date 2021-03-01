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
    const select = document.querySelector('.breeds');

    for(let i=0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  })