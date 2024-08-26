/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function () {
  window.addEventListener("load", init);

  /**
   * init - setup the demo button to change the image on click.
   */
  function init() {
    let changed = true;
    let btn = document.getElementById("demo-btn");
    let img = document.getElementById("pokeball");

    btn.addEventListener("click", function () {
      if (changed) {
        img.src = "mystery.gif";
      } else {
        img.src = "pokeball.jpg";
      }

      changed = !changed;
    });
  }
})();
