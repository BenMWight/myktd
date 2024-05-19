document.addEventListener('DOMContentLoaded', function() {
    function loadHead() {
        return new Promise((resolve, reject) => {
        fetch('head.html')
            .then(response => response.text())
            .then(data => {
                document.head.innerHTML += data;
            })
            .catch(error => console.error('Error loading head:', error));
            resolve();
        });
    }

    loadHead();
});