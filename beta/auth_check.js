document.addEventListener('DOMContentLoaded', function() {
    if (!window.checkAuth) {
        window.checkAuth = function(requiredGroup) {
            console.log('checkAuth called with:', requiredGroup);
            const username = localStorage.getItem('username');
            const groupsString = localStorage.getItem('groups');
            const groups = groupsString ? JSON.parse(groupsString) : [];

            console.log('Username:', username);
            console.log('Groups:', groups);
            console.log('Required Group:', requiredGroup);

            if (!username || !groups.includes(requiredGroup)) {
                alert('You do not have permission to access this page.');
                window.location.href = 'login.html';
            }
        }
    }
});
