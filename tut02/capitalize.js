/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function () {
  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    let btn = document.getElementById("btn");
    let isUpperCase = false;
    btn.addEventListener("click", function () {
      let para = document.querySelectorAll("p");

      if (!isUpperCase) {
        para.forEach((para) => {
          para.textContent = para.textContent.toUpperCase();
          btn.textContent = "LowerCase";
        });
      } else {
        para.forEach((para) => {
          para.textContent = para.textContent.toLowerCase();
          btn.textContent = "UpperCase";
        });
      }

      isUpperCase = !isUpperCase;
    });
  }
})();
