function formatGroups(groups) {
    return groups.map(function(group) {
        return group.split('-').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }).join(', ');
}

function checkAuth() {
    const username = localStorage.getItem('username');
    const groupsString = localStorage.getItem('groups');
    // Parse the string into an array
    const groups = groupsString ? groupsString.replace(/[\[\]"]/g, '').split(',') : [];
    var formattedGroups = formatGroups(groups);
    const loginButton = document.getElementById('login-button');
    const userInfo = document.getElementById('user-info');
    console.log("Test")
    console.log("Username:", username);
    console.log("Groups:", groups);
    console.log("Login Button:", loginButton);
    console.log("User Info:", userInfo);

    if (username && loginButton && userInfo && groups.length > 0) {
        console.log("Logged In")
        document.getElementById('username').innerText = username;
        document.getElementById('groups').innerText = formattedGroups;
        // FIX HERE TODO
        document.getElementById('groups-h1').innerText = formattedGroups;
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
    localStorage.removeItem('groups');
    localStorage.removeItem('state');
    document.getElementById('login-button').style.display = 'inline';
    document.getElementById('user-info').style.display = 'none';
    window.location.href = 'index.html';
}