document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.querySelector('.input-field[type="text"]');
    const passwordField = document.querySelector('.input-field[type="password"]');
    const loginBtn = document.querySelector('.login-btn');

    loginBtn.addEventListener('click', (event) => {
        let isValid = true;

        document.querySelectorAll('.error-message').forEach((msg) => msg.remove());

        if (!usernameField.value.trim()) {
            isValid = false;
            const error = document.createElement('p');
            error.textContent = 'Username is required.';
            error.classList.add('error-message');
            usernameField.parentElement.appendChild(error);
        }

        if (!passwordField.value.trim()) {
            isValid = false;
            const error = document.createElement('p');
            error.textContent = 'Password is required.';
            error.classList.add('error-message');
            passwordField.parentElement.appendChild(error);
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            window.location.href = 'error.html';
        }
    });
});