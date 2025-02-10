import { articles } from '/assets/js/blog-article-data.js';

const articlesContainer = document.getElementById('articles-container');
const categoriesContainer = document.getElementById('categories-container'); // Conteneur pour les boutons de catégories

// 🔹 Extraire toutes les catégories uniques (garde celles en tableau)
const categories = [...new Set(articles.flatMap(article => 
    Array.isArray(article.category) ? article.category : [article.category]
))];

// 🔹 Générer les boutons de catégories sans casser la mise en page
categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.dataset.category = category;
    button.classList.add("category-button");
    categoriesContainer.appendChild(button);
});

// 🔹 Fonction qui charge un article (même structure que ton code original)
function loadArticle(article) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('card', 'landing');
    articleCard.setAttribute('data-aos', 'zoom-in');
    articleCard.style.opacity = '0';
    articleCard.style.transition = 'opacity 0.5s ease';

    const articleContainer = document.createElement('div');
    articleContainer.classList.add('card-container', 'article-card');

    articleContainer.innerHTML = `
        <img class="article-image" src="${article.image}" alt="${article.title}">
        <h2 class="title">${article.title}</h2>
        <p class="gray">${article.description}</p>
        <a href="${article.link}">
            <button class="cta-button">Lire l'article</button>
        </a>
    `;

    articleCard.appendChild(articleContainer);
    articlesContainer.appendChild(articleCard);

    requestAnimationFrame(() => {
        articleCard.style.opacity = '1';
    });
}

// 🔹 Fonction pour afficher les articles (filtre optionnel)
function renderArticles(category = null) {
    articlesContainer.innerHTML = ''; // Vider l'affichage avant de recharger

    const filteredArticles = category 
        ? articles.filter(article => 
            Array.isArray(article.category) 
                ? article.category.includes(category) 
                : article.category === category
        ) 
        : articles;

    filteredArticles.forEach(loadArticle);
}

// 🔹 Écouteur d'événement pour filtrer les articles par catégorie
categoriesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("category-button")) {
        const selectedCategory = event.target.dataset.category;
        renderArticles(selectedCategory);
    }
});

// 🔹 Chargement initial des articles (affiche tout par défaut)
document.addEventListener("DOMContentLoaded", () => renderArticles());