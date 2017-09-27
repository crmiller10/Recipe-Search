
let container = document.querySelector('#container');
let item = document.querySelector('#search');
let find = document.querySelector('#find');

let findMe = '';
find.addEventListener('click', function (){
  findMe = item.value
      fetch('https://recipepuppyproxy.herokuapp.com/api/?q='+findMe)
          .then(convertData)
          .then(printData);
});

function convertData(data){
  return data.json();
}

function printData(data){
  console.log(data);

  let totalItems='';
  let image = '';
  for (let i = 0; i < data.results.length; i++){
      if (data.results[i].thumbnail == ''){
        image = 'http://via.placeholder.com/100x100'}
        else {image = data.results[i].thumbnail}

      let recipe=`
        <a href="${data.results[i].href}">
          <div class="cards-item">
            <div class="card">
              <div class="card-image">
                  <img src="${image}" alt="${data.results[i].title}">
                  <h4>${data.results[i].title}</h4>
                  <p>${data.results[i].ingredients}</p>
                </div>
              </div>
            </a>
          `
        totalItems += recipe
       }
      container.innerHTML = totalItems;
    }
