import { articles } from '/assets/js/blog-article-data.js';

const articlesContainer = document.getElementById('articles-container');

function loadArticle(article) {
    const articleCard = document.createElement('div');
    articleCard.classList.add('card', 'landing');
    articleCard.setAttribute('data-aos', 'zoom-in');
    articleCard.style.opacity = '0';
    articleCard.style.transition = 'opacity 0.5s ease';

    const articleContainer = document.createElement('div');
    articleContainer.classList.add('card-container', 'landing');

    const articleImage = new Image();
    articleImage.src = article.image;
    articleImage.classList.add('article-image');
    articleImage.alt = article.title;

    articleImage.onload = () => {
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
    };
}

function renderArticles() {
    articles.forEach(loadArticle);
}

document.addEventListener("DOMContentLoaded", renderArticles);