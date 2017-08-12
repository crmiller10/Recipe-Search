
//First, find our Search Bar container

let container = document.querySelector('.search')

//Create our fetch request to API

fetch ('http://recipepuppyproxy.herokuapp.com/api/?q=omelet')
//Data is fetched & we get a promise
  .then(
//The promise returns a response from the server

  function convertFromJson(data){
    return data.json();
    })
  .then(function(data){
    console.log(data);
    let titles = '';

  for (i = 0; i < data.results.length; i++){
    console.log(data.results[i].title);
    titles += `
        <li class="cards-item">
          <div class="card">
            <div class="card-image">
              <img class="pic" src="${data.results[i].thumbnail}">
            </div>
            <div class="card-content">
              <h2>${data.results[i].title}</h2>
              <p>${data.results[i].ingredients}</p>
            </div>
          </div>
        </li>
      `
  }

  document.querySelector('.container .cards').innerHTML = titles;
  });