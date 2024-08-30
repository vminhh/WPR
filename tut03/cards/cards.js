'use strict';
(function () {
    window.addEventListener('load', init);

    function init() {
        const cardImg = [
            'images/AH.png',
            'images/AD.png',
            'images/AC.png',
            'images/AS.png',
            'images/2H.png',
        ];

        const cardBoard = document.getElementById('card-board');

        cardImg.forEach(function (imgSrc) {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('card');
            cardBoard.appendChild(img);
        });

        document.querySelectorAll('.card').forEach(function (card) {
            card.addEventListener('click', function () {
                if (card.classList.contains('enlarged')) {
                    card.style.height = '150px';
                    card.style.transform = 'translateY(0)';
                    card.classList.remove('enlarged');
                } else {
                    document.querySelectorAll('.card').forEach(function (c) {
                        c.style.height = '150px';
                        c.style.transform = 'translateY(0)';
                        c.classList.remove('enlarged');
                    });

                    card.style.height = '250px';
                    card.style.transform = 'translateY(-100px)';
                    card.classList.add('enlarged');
                }
            });
        });
    }
})();
