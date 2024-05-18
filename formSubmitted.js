// Check if the form has been submitted before
if (sessionStorage.getItem('formSubmitted') === 'true') {
    window.location.href = 'thankyou.html';
}

// Set the flag in sessionStorage when the form is submitted
document.getElementById('contactForm').addEventListener('submit', function() {
    sessionStorage.setItem('formSubmitted', 'true');
});