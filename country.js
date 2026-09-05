const countryPage = document.querySelector('.country-page');

fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        const urlParams = new URLSearchParams(window.location.search);
        const countryName = urlParams.get('name');
        const countryAlpha3Code = urlParams.get('alpha3Code');
        const country = data.find((c) => c.name === countryName || c.alpha3Code === countryAlpha3Code);
        if (country) {
            countryPage.innerHTML = `
            <button onclick="window.location.href='index.html'">Back</button>
            <div class="country-details">
                <img src="${country.flags.svg}" alt="Flag of ${country.name}">
          <section>
            <h1>${country.name}</h1>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital || "N/A"}</p>
            <div class="border-countries">
              ${country.borders?.map((border) => `<button class="border-country" onclick="window.location.href='country.html?alpha3Code=${encodeURIComponent(border)}'">${border}</button>`).join("") || "No bordering countries"}
            </div>
          </section>
        </div>
            `;
        } else {
            countryPage.innerHTML = `<button onclick="window.location.href='index.html'">Back</button><h1>Country not found</h1>`;
        }
    })