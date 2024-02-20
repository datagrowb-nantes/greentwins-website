document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour changer la langue en français
    const changeToFrench = () => {
        // Modifier l'URL pour enlever "-eng" s'il est présent
        window.location.href = window.location.href.replace(/-eng/g, "");
    };

    // Fonction pour changer la langue en anglais
    const changeToEnglish = () => {
        // Vérifier si l'URL se termine déjà par "-eng.html"
        if (!window.location.href.includes("-eng.html")) {
            // Modifier l'URL pour ajouter "-eng" à la fin
            window.location.href = window.location.href.replace(/\.html(?!.*\.html)/, "-eng.html");
        }
        // Si l'URL se termine déjà par "-eng.html", ne rien faire
    };

    // Événements pour les boutons de sélection de langue
    document.getElementById('lang-fr').addEventListener('click', changeToFrench);
    document.getElementById('lang-en').addEventListener('click', changeToEnglish);
});