/**
 * JS for blog post section exercise
 */

'use strict';
(function () {
    window.addEventListener('load', init);

    /**
     * sets up necessary functionality when page loads
     */
    function init() {
        qs('button').addEventListener('click', addEntry);
    }

    /**
     * TODO
     * adds a blog entry to the blog post page
     */
    function addEntry() {
        let dValue = id('date').value;
        let eValue = id('entry').value;

        let article = gen('article');
        article.classList.add('post');

        let heading = gen('h3');
        heading.textContent = 'Date: ' + dValue;
        article.appendChild(heading);

        let paragraph = gen('p');
        paragraph.textContent = 'Entry: ' + eValue;
        article.appendChild(paragraph);

        article.addEventListener('dblclick', function () {
            article.remove();
            if (qsa('.post').length < 3) {
                qs('button').disabled = false;
            }
        });

        id('posts').appendChild(article);
        id('date').value = '';
        id('entry').value = '';

        if (qsa('.post').length === 3) {
            qs('button').disabled = true;
        }
    }

    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(id) {
        return document.getElementById(id);
    }

    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
        return document.querySelector(selector);
    }

    /**
     * Returns an array of elements matching the given query.
     * @param {string} query - CSS query selector.
     * @returns {array} - Array of DOM objects matching the given query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }

    /**
     * Returns a DOM object from the given tag name.
     * @param {string} tagName - the name of the element to be created.
     * @returns {object} a DOM object of the specified tag.
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }
})();
