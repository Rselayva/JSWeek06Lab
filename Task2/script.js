document.addEventListener('DOMContentLoaded', () => {
    const keyValueDisplay = document.getElementById('keyValue');
    const keyCodeDisplay = document.getElementById('keyCode');

    document.addEventListener('keydown', (event) => {
        keyValueDisplay.textContent = event.key; 
        keyCodeDisplay.textContent = event.code; 
    });
});