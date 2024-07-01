// scripts.js

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User already exists');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful!');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        alert('Invalid email or password');
        return;
    }
    window.location.replace("./Todolist.html")

    alert('Login successful!');
    
}
