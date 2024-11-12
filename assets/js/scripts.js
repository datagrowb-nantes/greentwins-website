// Menu Burger
function toggleMenu() {
    const nav = document.getElementById("mainNav");
    if (nav) {
        nav.classList.toggle("active");
        console.log("Menu toggled:", nav.classList.contains("active")); // Vérifie l'état du menu
    } else {
        console.error("L'élément #mainNav n'a pas été trouvé");
    }
}

// Initialisation d'AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
    });
});

// Gestion des événements de la souris pour les dropdowns
function handleMouseEnter(dropdown) {
    const techDropdown = document.getElementById('techDropdown');
    const domainDropdown = document.getElementById('domainDropdown');

    techDropdown.style.display = dropdown === 'tech' ? 'block' : 'none';
    domainDropdown.style.display = dropdown === 'domain' ? 'block' : 'none';
}

function handleMouseLeave() {
    document.getElementById('techDropdown').style.display = 'none';
    document.getElementById('domainDropdown').style.display = 'none';
}

// Initialisation d'EmailJS
(function () {
    emailjs.init("QUcy_3pIOG-sCm7wQ"); // Remplacez par votre ID utilisateur
})();

// Envoi du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_z72f4dk", "template_c7ri371", formData)
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