import { articles } from "/assets/js/blog-article-data.js";

const sortedArticles = articles.sort((a, b) => a.id - b.id);

document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Récupère le slug depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const articleSlug = params.get("slug");

    // 2️⃣ Cherche l'article correspondant
    const article = articles.find(a => a.slug === articleSlug);

    if (!article) {
        // Si l'article n'existe pas, afficher un message d'erreur
        document.querySelector(".article-container").innerHTML = `
            <h1>Article non trouvé</h1>
            <p>Désolé, l'article que vous cherchez n'existe pas.</p>
            <a href="/blog-pages/blog-landing.html">Retour aux articles</a>
        `;
        return;
    }

    // 3️⃣ Remplit dynamiquement la page avec les infos de l'article
    document.getElementById("page-title").textContent = `GreenTwins - ${article.title}`;
    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-description").textContent = article.description;
    document.getElementById("article-category").textContent = article.category;
    document.getElementById("article-date").textContent = `Publié le ${article.date}`;
    document.getElementById("article-image").src = article.image;
    document.getElementById("article-image").alt = article.title;
    document.getElementById("article-content").innerHTML = article.content;
});