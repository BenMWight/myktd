document.addEventListener('DOMContentLoaded', function() {
    function loadHead() {
        return new Promise((resolve, reject) => {
            fetch('head.html')
                .then(response => response.text())
                .then(data => {
                    document.head.innerHTML += data;
                    resolve(); // Resolve the promise after adding header HTML
                })
                .catch(error => {
                    console.error('Error loading head:', error);
                    reject(error); // Reject the promise if an error occurs
                });
        });
    }
    loadHead();
});