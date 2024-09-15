/**
 * JS for working with JSON exercise
 */

'use strict';
(function () {
    // Initialize event listeners when the page loads
    window.addEventListener('load', init);
    /**
     * Sets up event listeners for the page elements
     * - Adds a click event listener to the "loadDataButton"
     *   that triggers the loadData function
     */
    function init() {
        let btn = id('loadDataButton');
        btn.addEventListener('click', loadData);
    }

    /**
     * Handles loading and displaying JSON data
     * - Defines a JSON object with sample data
     *
     * - Shows a countdown timer before displaying the data
     * - Calls the displayData function to present the data after the countdown
     */
    function loadData() {
        // Define the JSON object with sample data

        let data = JSON.parse(
            '[{ "name": "Alice", "age": 30, "country": "USA" },' +
                '{ "name": "Bob", "age": 25, "country": "UK" },' +
                '{ "name": "Charlie", "age": 35, "country": "Canada" }]'
        );

        // Prepare to show countdown and data

        let cd = 3;
        let cdContainer = id('dataContainer');
        cdContainer.innerHTML = `Loading data in ${cd} seconds...`;

        // Update countdown every second

        let timerId = setInterval(() => {
            cd--;
            cdContainer.innerHTML = `Loading data in ${cd} seconds...`;
            if (cd <= 0) {
                clearInterval(cd);
                displayData(data);
            }
        }, 1000);
    }

    /**
     * Displays the JSON data in the data container
     * - Clears any existing content in the container
     * - Iterates over each item in the JSON data and creates
     *   a new div element for each item with formatted text
     * - Appends each div to the container
     * @param {object} data - The JSON data to be displayed
     */
    function displayData(data) {
        let dataContainer = id('dataContainer');
        dataContainer.innerHTML = '';

        data.forEach((person) => {
            let div = gen('div');
            div.classList.add('data-item');
            div.textContent = `Name: ${person.name}, Age: ${person.age}, Country: ${person.country}`;
            dataContainer.appendChild(div);
        });
    }

    /**
     * Retrieves the DOM element with the specified ID
     * @param {string} id - The ID of the element to retrieve
     * @returns {object} - The DOM element with the specified ID
     */
    function id(id) {
        return document.getElementById(id);
    }

    /**
     * Creates a new DOM element with the specified tag name
     * @param {string} tagName - The name of the tag for the new element
     * @returns {object} - The newly created DOM element
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }
})();
