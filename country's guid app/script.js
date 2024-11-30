let searchbtn = document.getElementById("search-btn");
let result = document.getElementById("result")
let countryinp = document.getElementById("country-inp");

searchbtn.addEventListener("click", () =>{
    let countyname = countryinp.value;
    let finalurl = `https://restcountries.com/v3.1/name/${countyname}?fullText=true`;
    console.log(finalurl)

    fetch(finalurl)
    .then((response) => response.json())
    .then((data) =>{
     result.innerHTML = `
     <img src="${data[0].flags.svg}" class="flag-img">
     <h2>${data[0].name.common}</h2>
     <div class="wrapper">
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
     </div>
     <div class="wrapper">
        <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
     </div>
     <div class="wrapper">
        <div class="data-wrapper">
        <h4>population:</h4>
        <span>${data[0].population}</span>
        </div>
     </div>
     <div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
        </div>
     </div>
      <div class="wrapper">
        <div class="data-wrapper">
        <h4>language:</h4>
        <span>${ Object.values(data[0].languages).toString().
            split(",").join(", ")}</span>
        </div>
     </div>
     `
        
    }).catch(()=>{
        if(countyname.lenght == 0){
            result.innerHTML = `<h3>The input field cannot be empty</h3>`
        }else{
            result.innerHTML = `<h3>Please enter a valid country name.</h3>`
        }
    })
})