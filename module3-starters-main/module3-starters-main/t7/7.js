'use strict';

const triggerElement = document.getElementById('trigger');


const targetImage = document.getElementById('target');

triggerElement.addEventListener('mouseover', function() {
    targetImage.src = 'picB.jpg';
});

triggerElement.addEventListener('mouseout', function() {
    targetImage.src = 'picA.jpg';
});