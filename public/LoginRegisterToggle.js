const loginWindow = document.getElementById('login');
const registerWindow = document.getElementById('register');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

function toggleWindows() {
    loginWindow.classList.toggle('hide');
    registerWindow.classList.toggle('hide');
}

registerLink.addEventListener('click', toggleWindows);
loginLink.addEventListener('click', toggleWindows);