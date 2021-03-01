const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";


function addDog () {

  fetch(BREEDS_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'cute dog';
  
      document.querySelector('.dog').appendChild(img);
    })
}

document.querySelector('.add-dog').addEventListener('click', addDog);