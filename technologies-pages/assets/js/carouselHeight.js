// Script qui permet de fixer la hauteur du carousel 1 de la page IA 
// à la hauteur de la slide la plus haute

// Deux events listeners pour appeler la fonction au chargement de 
// la page, et à chaque fois que la fenêtre est resize

document.addEventListener("DOMContentLoaded", function() {
    adjustCarouselHeight();
});

window.addEventListener("resize", function() {
    adjustCarouselHeight();
});

// Fonction qui ajuste la hauteur du carousel
function adjustCarouselHeight() {
    // Sélection de toutes les slides du carousel
    var carouselItems = document.querySelectorAll('.carousel-item');
    // Initialisation de la hauteur maximale à 0
    var maxHeight = 0;

    // Parcours de chaque slide pour trouver la plus grande en hauteur
    carouselItems.forEach(function(item) {
        // Récupération de la hauteur de la slide
        var slideHeight = item.clientHeight;
        // Comparaison de la hauteur avec la hauteur maximale
        if (slideHeight > maxHeight) {
            // Mise à jour de la hauteur maximale si la hauteur de la slide est plus grande
            maxHeight = slideHeight;
        }
    });

    // Application de la hauteur maximale au carousel
    document.getElementById('adjustable-carousel').style.height = maxHeight + 'px';
}
