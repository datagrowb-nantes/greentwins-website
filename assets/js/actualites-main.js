import { articles } from '/assets/js/actualites-data.js';

const articlesContainer = document.getElementById('articles-container');

function renderArticles() {
    articles.forEach(article => {
        const articleCard = `
            <div class="card landing" data-aos="zoom-in" data-aos-delay="0">
                <div class="card-container landing">
                    <img class="article-image" src='${article.image}')">
                    <h2 class="title">${article.title}</h2>
                    <p class="gray">${article.description}</p>
                    <a href="${article.link}">
                        <button class="cta-button">Lire l'article</button>
                    </a>
                </div>
            </div>
        `;
        articlesContainer.innerHTML += articleCard;
    });
}

renderArticles();