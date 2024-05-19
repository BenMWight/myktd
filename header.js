document.addEventListener('DOMContentLoaded', function() {
    function loadHeader() {
        return new Promise((resolve, reject) => {
            fetch('header.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header-template').innerHTML = data;
                    resolve(); // Resolve the promise after the header is loaded
                })
                .catch(error => {
                    console.error('Error loading header:', error);
                    reject(error); // Reject the promise if an error occurs
                });
        });
    }

    loadHeader().then(() => {
        // You can call other functions or perform additional tasks after the header is loaded
        checkAuth();
    }).catch(error => {
        console.error('Failed to load header:', error);
    });
});


