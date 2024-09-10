'use strict';
(function () {
    window.addEventListener('load', init);

    let [sec, min, hr] = [0, 0, 0];
    let timeRef = document.querySelector('.timer');
    let timerId = null;

    function init() {
        document.getElementById('start').addEventListener('click', () => {
            if (timerId != null) {
                clearInterval(timerId);
            }
            timerId = setInterval(displayTimer, 1000);
        });

        document.getElementById('pause').addEventListener('click', () => {
            clearInterval(timerId);
        });

        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(timerId);
            [sec, min, hr] = [0, 0, 0];
            timeRef.innerHTML = '00 : 00 : 00';
        });
    }

    function displayTimer() {
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hr++;
            }
        }

        let h = hr < 10 ? '0' + hr : hr;
        let m = min < 10 ? '0' + min : min;
        let s = sec < 10 ? '0' + sec : sec;

        timeRef.innerHTML = `${h} : ${m} : ${s}`;
    }
})();
