// NOT FOUND MESSAGE
const notFoundMessage = document.querySelector('.main-not-found-message');

// SEARCH
const searchInput = document.querySelector('#searchInput');

// OUTPUT CONTAINER
const outputContainer = document.querySelector('.main-content');

// https://restcountries.com/v3.1/name/{name}

// SEARCHING FOR A COUNTRY

function searchingForACountry() {
    const inputValue = searchInput.value.toLowerCase();

    if (searchInput.value.length > 0) {
        fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then(response => {

            if (!response.ok) {
                console.log(`The new error message: ${response.status}`);
                
                if (response.status === 404) {
                    notFoundMessage.classList.add('main-not-found-message-active');
                    outputContainer.innerHTML = '';
                };
            } else {
                notFoundMessage.classList.remove('main-not-found-message-active');
            };


            return response.json();
        })
        .then(country => {
            
            outputContainer.innerHTML = `
                <a href="./pages/country-data.html" class="main-content-output">
                    <div class="main-content-output-image">
                        <img src="${country[0].flags.svg}" class="main-content-output-image-itself">
                    </div>
                    <div class="main-content-output-information">
                        <h3 class="main-content-output-information-country-name">${country[0].name.common}</h3>
                        <div class="main-content-output-information-country-info">
                            <h4 class="main-content-output-information-country-info-text">Population: <span class="main-content-output-information-country-info-text-inner">${country[0].population}</span></h4>
                            <h4 class="main-content-output-information-country-info-text">Region: <span class="main-content-output-information-country-info-text-inner">${country[0].region}</span></h4>
                            <h4 class="main-content-output-information-country-info-text">Capital: <span class="main-content-output-information-country-info-text-inner">${country[0].capital}</span></h4>
                        </div>
                    </div>
                </a>
            `;
            
        })
        .catch(error =>{
            console.log(error);
        });
    } else {
        outputContainer.innerHTML = '';
        displayingCountries();
    };
};

// DISPLAYING COUNTRIES

function displayingCountries() {
    fetch('../data.json')
        .then(response => {
            if (!response.ok) {
                console.log(response.status);
            };

            return response.json();
        })
        .then(country => {

            console.log(country[0].name.common);

            for (let i = 0; i < 10; i++) {
                outputContainer.innerHTML += `
                    <a href="./pages/country-data.html" class="main-content-output">
                        <div class="main-content-output-image">
                            <img src="${country[i].flags.svg}" class="main-content-output-image-itself">
                        </div>
                        <div class="main-content-output-information">
                            <h3 class="main-content-output-information-country-name">${country[i].name.common === undefined ? country[i].name : country[i].name.common}</h3>
                            <div class="main-content-output-information-country-info">
                                <h4 class="main-content-output-information-country-info-text">Population: <span class="main-content-output-information-country-info-text-inner">${country[i].population}</span></h4>
                                <h4 class="main-content-output-information-country-info-text">Region: <span class="main-content-output-information-country-info-text-inner">${country[i].region}</span></h4>
                                <h4 class="main-content-output-information-country-info-text">Capital: <span class="main-content-output-information-country-info-text-inner">${country[i].capital}</span></h4>
                            </div>
                        </div>
                    </a>
                `;
            };

        });
};

displayingCountries();

// INITIALIZING BUTTONS
searchInput.addEventListener('input', searchingForACountry);