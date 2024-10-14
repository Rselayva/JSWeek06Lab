let count = 0;

const button = document.getElementById('incrementBtn');
const displayNbr = document.getElementById('counter');

button.addEventListener('click', increment)

function increment(){
    count++;
    displayNbr.textContent = count;
}