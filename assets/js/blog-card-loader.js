import { articles } from '/assets/js/blog-article-data.js';

const articlesContainer = document.getElementById('articles-container');
const categoriesContainer = document.getElementById('categories-container');
const sortButton = document.getElementById('sort-recent');  // Sélection du bouton de tri

// Variable pour gérer l'ordre de tri
let sortAscending = false;  // Par défaut, tri décroissant (plus récent)

const categories = [...new Set(articles.flatMap(article => 
    Array.isArray(article.category) ? article.category : [article.category]
))];

categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.dataset.category = category;
    button.classList.add("category-button");
    categoriesContainer.appendChild(button);
});

// Fonction qui charge un article
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

// Fonction pour trier les articles
function sortArticles(articlesList) {
    return articlesList.sort((a, b) => {
        if (sortAscending) {
            return new Date(a.date) - new Date(b.date);  // Tri croissant (ancien -> récent)
        } else {
            return new Date(b.date) - new Date(a.date);  // Tri décroissant (récent -> ancien)
        }
    });
}

// Fonction pour afficher les articles (filtrage par catégorie et tri)
function renderArticles(category = null) {
    articlesContainer.innerHTML = '';  // Vider l'affichage avant de recharger

    const filteredArticles = category 
        ? articles.filter(article => 
            Array.isArray(article.category) 
                ? article.category.includes(category) 
                : article.category === category
        ) 
        : articles;

    const sortedArticles = sortArticles(filteredArticles);  // Trier les articles selon la date

    sortedArticles.forEach(loadArticle);
}

// Écouteur d'événement pour filtrer les articles par catégorie
categoriesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("category-button")) {
        const selectedCategory = event.target.dataset.category;
        
        // Si le bouton est déjà actif, on désélectionne (enlève la classe active)
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            renderArticles();  // Afficher tous les articles
        } else {
            // Sinon, on sélectionne ce bouton et on filtre par catégorie
            document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active')); // Enlever 'active' des autres boutons
            event.target.classList.add('active');
            renderArticles(selectedCategory);  // Afficher les articles filtrés
        }
    }
});

// Écouteur d'événement pour trier les articles
sortButton.addEventListener("click", () => {
    sortAscending = !sortAscending;  // Inverser l'ordre de tri à chaque clic
    sortButton.textContent = sortAscending ? 'Trier par date (Plus ancien)' : 'Trier par date (Plus récent)';
    renderArticles();  // Recharger les articles avec le nouvel ordre
});

// Chargement initial des articles (affiche tout par défaut)
document.addEventListener("DOMContentLoaded", () => renderArticles());