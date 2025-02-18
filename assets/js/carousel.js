document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        // Corrige les limites
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        // Masque toutes les slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Affiche la slide demandée
        currentIndex = index;
        slides[currentIndex].classList.add('active');
    }

    document.getElementById('prev').addEventListener('click', () => showSlide(currentIndex - 1));
    document.getElementById('next').addEventListener('click', () => showSlide(currentIndex + 1));
});