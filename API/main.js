const countriElem = document.querySelector('.countries')
const toggle= document.querySelector('.toggle')
const reg = document.getElementById('reg')
const search = document.getElementById('search');




toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode')
    toggle.classList.toggle('toggleDark')
    document.querySelector('.fas ').style.color = 'black'
    document.querySelector('.dropDown ').style.color = 'black'
    document.querySelector('.drop').style.color = 'black'
})

async function counryLand (){
    const url =  await fetch("https://restcountries.com/v3.1/all");
    const koko = await url.json()

    reg.addEventListener('input', () => {
        localStorage.setItem('name', reg.value);
        location.reload();
    });
    reg.value = localStorage.getItem('name');


    
    koko.forEach(element => {
        if(!localStorage.getItem('name') || localStorage.getItem('name') == "All") {
            reg.value = "All";
            const country = document.createElement("div")
            country.classList.add("country");
            country.innerHTML=`<div class="cuntry">
            <div class="country-img">
                <img src="${element.flags.png}" alt="">
                </div>
                <div class="country-info">
                    <h5>${element.name.common}</h5>
                    <p><strong>Population </strong> ${element.population}</p>
                    <p><strong>Region </strong> ${element.region}</p>
                    <p><strong>Capital </strong> ${element.capital}</p>
                </div>
                </div>
            `
            countriElem.appendChild(country);
        }  else if(element.region == localStorage.getItem('name')) {
            const country = document.createElement("div")
            country.classList.add("country");
            country.innerHTML=`<div class="cuntry">
            <div class="country-img">
                <img src="${element.flags.png}" alt="">
                </div>
                <div class="country-info">
                    <h5>${element.name.common}</h5>
                    <p><strong>Population </strong> ${element.population}</p>
                    <p><strong>Region </strong> ${element.region}</p>
                    <p><strong>Capital </strong> ${element.capital}</p>
                </div>
                </div>
            `
            countriElem.appendChild(country);
        }
    });
    
}

counryLand();


  
    
