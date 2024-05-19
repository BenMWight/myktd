function checkAuth() {
    const username = localStorage.getItem('username');
    const loginButton = document.getElementById('login-button');
    const userInfo = document.getElementById('user-info');
    console.log("Test")
    console.log("Username:", username);
    console.log("Login Button:", loginButton);
    console.log("User Info:", userInfo);

    if (username && loginButton && userInfo) {
        console.log("Logged In")
        document.getElementById('username').innerText = username;
        loginButton.style.display = 'none';
        userInfo.style.display = 'inline';
    } else if (loginButton && userInfo) {
        console.log("Not Logged In")
        loginButton.style.display = 'inline';
        userInfo.style.display = 'none';
    }
}    

function logout() {
    localStorage.removeItem('username');
    document.getElementById('login-button').style.display = 'inline';
    document.getElementById('user-info').style.display = 'none';
    window.location.href = 'index.html';
}
