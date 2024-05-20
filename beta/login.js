function login(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Load user data from JSON file
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            // Find user in the JSON data
            const user = data.users.find(user => user.username === username && user.password === password);
            if (user) {
                localStorage.setItem('username', username);
                localStorage.setItem('groups', JSON.stringify(user.groups)); // Store user groups in localStorage
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error loading user data. Please try again later.');
        });
}
