// Menu Burger
function toggleMenu() {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour basculer l'affichage du sous-menu
    window.toggleDropdown = function (dropdownId) {
        // Fermer tous les autres sous-menus
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
            if (dropdown.id !== dropdownId) {
                dropdown.classList.remove("show");
            }
        });

        // Basculer l'affichage du sous-menu actuel
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            dropdown.classList.toggle("show");
        }
    };

    // Masquer les sous-menus lorsque l'on clique en dehors
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".menu") && !event.target.closest(".burger-icon")) {
            document.querySelectorAll(".dropdown.show").forEach((dropdown) => {
                dropdown.classList.remove("show");
            });
        }
    });
});

// Composant Header Footer
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.log('Erreur de chargement du fichier:', error));
}

loadHTML('assets/components/header.html', 'header-container');
loadHTML('assets/components/footer.html', 'footer-container');


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