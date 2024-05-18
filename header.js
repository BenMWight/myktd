document.addEventListener('DOMContentLoaded', function() {
    function loadHeader() {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-template').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));
    }

    loadHeader();
});
