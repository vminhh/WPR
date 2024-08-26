/*
 * Quadratic equation solver exercise
 *
 * TODO: implement the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 *
 */
"use strict";
(function () {
    window.addEventListener("load", init);

    /**
     * init - write your logic here
     */
    function init() {
        let solveBtn = document.querySelector("button");
        solveBtn.addEventListener("click", function () {
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);

            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                document.getElementById("result").textContent =
                    "Invalid numbers. Try again!";
                return;
            }

            if (a == 0) {
                if (b == 0) {
                    if (c == 0)
                        document.getElementById("result").textContent =
                            "Infinite solutions.";
                    else
                        document.getElementById("result").textContent =
                            "The equation has no root!";
                } else
                    document.getElementById("result").textContent =
                        "One real root: " + -b / c;
            } else {
                let d = b * b - 4 * a * c;
                if (d < 0)
                    document.getElementById("result").textContent =
                        "Not real root.";
                else if (d == 0)
                    document.getElementById("result").textContent =
                        "Double real root: " + (-b / 2) * a;
                else
                    document.getElementById("result").textContent =
                        "Two real root: " +
                        ((-b - Math.sqrt(d)) / 2) * a +
                        ", " +
                        ((-b + Math.sqrt(d)) / 2) * a;
            }
        });
    }
})();
