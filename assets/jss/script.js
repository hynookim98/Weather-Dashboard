
var weatherApiKey = "21783e57130f354b09c7e0e4f0a4b32c";
var weatherApiUrl = 'https://api.openweathermap.org';
var searchHistory = [];

// DOM elements
var searchform = document.getElementById('form');
var userInput = document.getElementById('input');
var history = document.getElementById('history');

// code to run at first to load any search history
function retrieveHistory() {

    var inputHistory = localStorage.getItem('search-history');
    // conditional statement will run if there is anything in input history (localstorage)
    if (inputHistory) {
        // when time - check to see what the data looks like before json.parse
        inputHistory = JSON.parse(inputHistory);
    }

    // call function to display history
    displayHistory();

}

function displayHistory() {
    // reset any display
    history.innerHTML = '';

    // loop will read backwards over array to show last item first
    for (var i = searchHistory.length - 1; i >=0; i--) {
        // create a button for each history so user can ultimately click on it to research city
        var button = document.createElement('button');
        button.setAttribute('type', 'button'); // does this code do anything?? 
        button.classList.add('history-button');
    }

}

retrieveHistory();