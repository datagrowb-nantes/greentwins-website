import { articles } from '/assets/js/actualites-data.js';

const articlesContainer = document.getElementById('articles-container');

function renderArticles() {
    articles.forEach(article => {
        const articleCard = `
        <div class="container gray-bg-4">
            <div class="card landing" data-aos="zoom-in" data-aos-delay="0" style="background-image: url('${article.image}')">
                <div class="card-container landing">
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