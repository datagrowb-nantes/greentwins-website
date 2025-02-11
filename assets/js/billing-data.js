document.addEventListener("DOMContentLoaded", function () {
    const categoriesContainer = document.getElementById('categories-container');

    if (!categoriesContainer) {
        console.error("Le conteneur des catégories n'existe pas dans le DOM.");
        return;
    }

    // Récupération des catégories uniques
    const categories = [...new Set(articles.flatMap(article =>
        Array.isArray(article.category) ? article.category : [article.category]
    ))];

    // Création des boutons de catégorie
    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category;
        button.dataset.category = category;
        button.classList.add("category-button");
        categoriesContainer.appendChild(button);
    });

    // Gestion du maintien du bouton actif
    categoriesContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("category-button")) {
            const selectedButton = event.target;

            // Désélectionner le bouton actif s'il est déjà sélectionné
            if (selectedButton.classList.contains('active')) {
                selectedButton.classList.remove('active');
            } else {
                // Retirer la classe active des autres boutons
                document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
                selectedButton.classList.add('active');
            }
        }
    });
});

export const articles = [
    {
        id: 1,
        category: "Smart Building"
    },
    {
        id: 2,
        category: "Méthanisation"
    },
];
