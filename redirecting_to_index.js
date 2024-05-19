// JS for redirecting pages to index.html uses the id=redirectMessage
const username = localStorage.getItem('username');
if (!username) {
    setTimeout(function () {
        var redirectDiv = document.getElementById('redirectMessage');
        redirectDiv.innerHTML = '<h1>Not logged in Redirecting</h1>';
        setTimeout(function () {
            redirectDiv.innerHTML = '<h1>Not logged in Redirecting.</h1>';
            setTimeout(function () {
                redirectDiv.innerHTML = '<h1>Not logged in Redirecting..</h1>';
                setTimeout(function () {
                    redirectDiv.innerHTML = '<h1>Not logged in Redirecting...</h1>';
                    setTimeout(function () {
                        window.location.href = 'login.html';
                    }, 1000); // Wait 0.5 seconds before redirecting
                }, 500); // Wait 0.5 seconds before changing to "Redirecting..."
            }, 500); // Wait 0.5 seconds before changing to "Redirecting.."
        }, 500); // Wait 0.5 seconds before changing to "Redirecting."
    }, 1000); // Wait 1 second before changing the message
}