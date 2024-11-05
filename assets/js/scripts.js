document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
    });
});

function handleMouseEnter(dropdown) {
    document.getElementById('techDropdown').style.display = dropdown === 'tech' ? 'block' : 'none';
    document.getElementById('domainDropdown').style.display = dropdown === 'domain' ? 'block' : 'none';
}

function handleMouseLeave() {
    document.getElementById('techDropdown').style.display = 'none';
    document.getElementById('domainDropdown').style.display = 'none';
}

(function () {
    emailjs.init("QUcy_3pIOG-sCm7wQ"); // Remplacez par votre ID utilisateur
})();

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            document.getElementById('contactForm').reset(); // Réinitialiser le formulaire
        }, function (error) {
            console.error('FAILED...', error);
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        });
});