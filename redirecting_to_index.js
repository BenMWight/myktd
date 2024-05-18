// JS for redirecting pages to index.html uses the id=redirectMessage
if ('true') {
    setTimeout(function () {
        var redirectDiv = document.getElementById('redirectMessage');
        redirectDiv.innerHTML = '<h1>Redirecting</h1>';
        setTimeout(function () {
            redirectDiv.innerHTML = '<h1>Redirecting.</h1>';
            setTimeout(function () {
                redirectDiv.innerHTML = '<h1>Redirecting..</h1>';
                setTimeout(function () {
                    redirectDiv.innerHTML = '<h1>Redirecting...</h1>';
                    setTimeout(function () {
                        window.location.href = 'index.html';
                    }, 1000); // Wait 0.5 seconds before redirecting
                }, 500); // Wait 0.5 seconds before changing to "Redirecting..."
            }, 500); // Wait 0.5 seconds before changing to "Redirecting.."
        }, 500); // Wait 0.5 seconds before changing to "Redirecting."
    }, 1000); // Wait 1 second before changing the message
}