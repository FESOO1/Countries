// SEARCH FILTER
const searchFilterButton = document.querySelector('#searchFilterButton');
const searchFilterDropDownContainer = document.querySelector('.main-search-filter-drop-down');
let isSearchFilterDropDownContainerDropped = false;

// HANDLING THE DROPDOWN MENU OF SEARCH FILTER

function handlingTheDropDownMenuOfSearchFilter(e) {
    e.stopPropagation();

    if (isSearchFilterDropDownContainerDropped === false) {
        searchFilterButton.classList.add('search-filter-button-js');
        searchFilterDropDownContainer.classList.add('search-filter-drop-down-menu-js');
        
        isSearchFilterDropDownContainerDropped = true;
    } else {
        searchFilterButton.classList.remove('search-filter-button-js');
        searchFilterDropDownContainer.classList.remove('search-filter-drop-down-menu-js');
        
        isSearchFilterDropDownContainerDropped = false;
    };
};

// CLOSING THE DROPDOWN MENU WHEN CLICKED ANYWHERE BUT THE SEARCH FILTER BUTTON AND DROPDOWN CONTAINER ITSELF

window.addEventListener('click', () => {
    searchFilterButton.classList.remove('search-filter-button-js');
    searchFilterDropDownContainer.classList.remove('search-filter-drop-down-menu-js');
    
    isSearchFilterDropDownContainerDropped = false;
});

searchFilterDropDownContainer.addEventListener('click', e => {
    e.stopPropagation();
});

// INITIALIZING BUTTONS
searchFilterButton.addEventListener('click', handlingTheDropDownMenuOfSearchFilter);