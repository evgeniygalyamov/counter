
/*
let button = document.querySelector('.counter__btn');
let counterText = document.querySelector('.counter__number')
let counter = 0;
let counterReset = document.querySelector('.counter__btn-reset');


button.addEventListener('click', function () {
    counter = counter + 1;
    counterText.innerText = counter;

});

let reset = document.querySelector('.counter__btn-reset');

counterReset.addEventListener('click', function () {
    counter = 0 ;
    counterText.innerText = counter;

});

*/



let button = document.querySelector('.counter__btn');
let counter = 0;
let counterText = document.querySelector('.counter__number');
let counterReset = document.querySelector('.counter__btn-reset');

button.addEventListener('click', function() {
    counter = counter + 1;
    counterText.innerText = counter;
})

counterReset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
})