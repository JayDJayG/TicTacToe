//beginning script for the 'initializing screen'
var initialize = document.querySelector('.initialize');
var button = document.querySelector('.button');


button.addEventListener('click', function(){
initialize.classList.toggle('hidden');
});