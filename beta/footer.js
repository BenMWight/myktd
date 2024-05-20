document.addEventListener('DOMContentLoaded', function() {
    function loadFooter() {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-template').innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    loadFooter();
});
