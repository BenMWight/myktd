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
    const groups = groupsString ? JSON.parse(groupsString) : [];
    const formattedGroups = formatGroups(groups);
    const loginButton = document.getElementById('login-button');
    const userInfo = document.getElementById('user-info');

    if (username && loginButton && userInfo && groups.length > 0) {
        document.getElementById('username').innerText = username;
        document.getElementById('groups').innerText = formattedGroups;
        loginButton.style.display = 'none';
        userInfo.style.display = 'inline';
    } else if (loginButton && userInfo) {
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
