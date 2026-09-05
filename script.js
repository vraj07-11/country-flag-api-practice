const countries_container = document.querySelector('.countries-container');

fetch('data.json')
    .then((res)=> res.json())
    .then((data)=> {
        data.forEach((country) => {
            const country_card = document.createElement('a');
            country_card.classList.add('country-card');
            country_card.href = `country.html?name=${encodeURIComponent(country.name)}`;
            country_card.innerHTML = ` <img src="${country.flag}" alt="${country.name} flag" />
            <div class="country-info">
              <h2>${country.name}</h2>
              <p><b>Population:</b> ${country.population}</p>
              <p><b>Region:</b> ${country.region}</p>
              <p><b>Capital:</b> ${country.capital}</p>
            </div>`
            countries_container.append(country_card)
        })
    })