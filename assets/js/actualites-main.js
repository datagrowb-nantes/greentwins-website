import { articles } from '/assets/js/actualites-data.js';

const articlesContainer = document.getElementById('articles-container');

// Fonction pour afficher un article après le chargement de son image
function loadArticle(article) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('card', 'landing');
    articleCard.setAttribute('data-aos', 'zoom-in');
    articleCard.setAttribute('data-aos-delay', '0');
    articleCard.style.opacity = '0'; // Invisible au début
    articleCard.style.transition = 'opacity 0.5s ease'; // Animation d'apparition

    const articleImage = new Image(); // Préchargement de l'image
    articleImage.src = article.image;
    articleImage.classList.add('article-image');
    articleImage.alt = article.title;

    // Une fois que l'image est chargée
    articleImage.onload = () => {
        articleCard.innerHTML = `
            <div class="card-container landing">
                <img class="article-image" src="${article.image}" alt="${article.title}">
                <h2 class="title">${article.title}</h2>
                <p class="gray">${article.description}</p>
                <a href="${article.link}">
                    <button class="cta-button">Lire l'article</button>
                </a>
            </div>
        `;

        // Ajouter le bloc chargé à la page
        articlesContainer.appendChild(articleCard);

        // Faire apparaître la carte après ajout
        requestAnimationFrame(() => {
            articleCard.style.opacity = '1';
        });
    };
}

// Parcourir tous les articles et charger chaque bloc
function renderArticles() {
    articles.forEach(article => {
        loadArticle(article);
    });
}

renderArticles();