const dropdown = document.querySelector('.dropDownMenu');
const option = document.querySelector('.drop');
const icons = document.querySelector('.fas')
const tooogle = document.querySelector('.toggle')
const countries = document.querySelector('.countries')
const search = document.querySelector('.search')
const countryEme = document.getElementsByClassName('countryEme');
const regionname = document.getElementsByClassName('regionName')
const regions = document.querySelectorAll('.region')


tooogle.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode')
    tooogle.classList.toggle('dark-mode')
    icons.classList.toggle('darkBtn');
})

dropdown.addEventListener('click', () =>{
    option.classList.toggle('show');
})

async function getCountries(){
    const koko = await fetch('https://restcountries.com/v3.1/all');
    const url = await koko.json()
    url.forEach(element => {
        printFlags(element)
    });
    
}
getCountries();

function printFlags(elem){
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = `
    <div class="country-img">
    <img src=${elem.flags.png} alt="">
    </div>
    <div class="country-details">
    <h5 class="countryEme">${elem.name.common}</h5>
    <p ><strong>Population:</strong>${elem.population}</p>
    <p class="regionName"><strong>Region:</strong>${elem.region}</p>
    <p><strong>Capital:</strong>${elem.capital}</p>

    </div>`
    countries.appendChild(country);
}



search.addEventListener('input', () =>{
    Array.from(countryEme).forEach(esens =>{
        if(esens.innerText.toLowerCase().includes(search.value.toLowerCase())){
            esens.parentElement.parentElement.style.display = 'grid'
        }else{
            esens.parentElement.parentElement.style.display = 'none'
        }
    })
})

regions.forEach(region => {
    region.addEventListener('click', () =>{
        Array.from(regionname).forEach(seq => {
            if(seq.innerText.includes(region.innerText) || seq.innerText === "All"){
                seq.parentElement.parentElement.style.display = "grid";
            }else {
                seq.parentElement.parentElement.style.display = "none";
            }
        })
    })
})
