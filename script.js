let searchButton = document.querySelector("#search-button");
let countryInput = document.querySelector("#country-input");

searchButton.addEventListener("click",() =>{
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].name.common);
        console.log(data[0].capital[0]);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].flags.svg);

        result.innerHTML = `
        <div class = "api-wrapper">
        <img src = "${data[0].flags.svg}" class="flags">
        <h2 style="font-family: 'Poppins', sans-serif;">Country : ${data[0].name.common}</h2>
        <h3> Capital: ${data[0].capital[0]}</h3>
        <h4> Continents: ${data[0].continents[0]}</h4>
        <h5> Currency: ${Object.keys(data[0].currencies)[0]}</h5>
        </div>
        `
    }).catch(() => {
        if (countryName.length == 0) {
            result.innerHTML = `<h6>The input field cannot be empty</h6>`
        }
        else{
            result.innerHTML = `<h6>Please enter valid country name</h6>`
        }
    });
});