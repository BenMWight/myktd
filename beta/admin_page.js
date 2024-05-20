document.addEventListener('DOMContentLoaded', function() {
    function loadUsers() {
        fetch('users.json')
            .then(response => response.json())
            .then(data => {
                const usersTableBody = document.querySelector('#users-table tbody');
                if (!usersTableBody) {
                    console.error('Error: usersTableBody is null');
                    return;
                }
                data.users.forEach(user => {
                    const userRow = document.createElement('tr');

                    const usernameCell = document.createElement('td');
                    usernameCell.innerText = user.username;
                    userRow.appendChild(usernameCell);

                    const groupsCell = document.createElement('td');
                    groupsCell.innerText = user.groups.join(', ');
                    userRow.appendChild(groupsCell);

                    usersTableBody.appendChild(userRow);
                });
            })
            .catch(error => {
                console.error('Error loading users:', error);
            });
    }

    loadUsers();
});
