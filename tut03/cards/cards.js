'use strict';
(function () {
    window.addEventListener('load', init);

    function init() {
        let imgs = [
            'images/AH.png',
            'images/2H.png',
            'images/3H.png',
            'images/4H.png',
            'images/5H.png',
        ];

        let broad = document.getElementById('card-broad');

        imgs.forEach((imgSrc) => {
            let img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('card');
            broad.appendChild(img);
        });

        document.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('click', () => {
                if (!card.classList.contains('enlarged')) {
                    document.querySelectorAll('.card').forEach((c) => {
                        c.style.height = '150px';
                        c.classList.remove('enlarged');
                    });
                    card.style.height = '250px';
                    card.classList.add('enlarged');
                } else {
                    card.style.height = '150px';
                    card.classList.remove('enlarged');
                }
            });
        });
    }
})();
