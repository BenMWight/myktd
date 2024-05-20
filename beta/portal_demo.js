document.addEventListener('DOMContentLoaded', function() {
    function createGroupTiles() {
        const groupsString = localStorage.getItem('groups');
        const groups = groupsString ? JSON.parse(groupsString) : [];
        const groupTilesContainer = document.getElementById('group-tiles');

        groups.forEach(group => {
            const tile = document.createElement('div');
            tile.className = 'group-tile';
            tile.innerText = group.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            tile.onclick = () => handleGroupClick(group);
            groupTilesContainer.appendChild(tile);
        });
    }

    function handleGroupClick(group) {
        localStorage.setItem('state', group);
        switch (group) {
            case 'admin':
                window.location.href = 'admin_page.html';
                break;
            case 'demo-consumer':
                window.location.href = 'consumer_page.html';
                break;
            case 'demo-merchant':
                window.location.href = 'merchant_page.html';
                break;
            default:
                alert('Unknown group: ' + group);
        }
    }

    function checkLogin() {
        const username = localStorage.getItem('username');
        const groupsString = localStorage.getItem('groups');
        if (!username || !groupsString) {
            window.location.href = 'login.html';
        } else {
            createGroupTiles();
        }
    }

    checkLogin();
});
