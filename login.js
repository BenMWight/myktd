function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple authentication logic (replace with real authentication)
    if ((username === 'ben' && password === 'password') || (username === 'chris' && password === 'password')) {
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
}