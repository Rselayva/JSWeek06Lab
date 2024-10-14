document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');
    
    form.addEventListener('submit', event => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        errorMsg.textContent = '';

        if(username.length < 5){
            errorMsg.textContent = 'Username must be at least 5 characters long. ';
            event.preventDefault();
            return;
        }

        if(password.length < 8){
            errorMsg.textContent = 'Password must be at least 8 characters long. ';
            event.preventDefault();
            return;
        }
    });
});