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

document.addEventListener("DOMContentLoaded", function () {
    const cardList = document.querySelector(".card-list");

    if (!cardList) {
        console.error("Le conteneur des cartes n'existe pas dans le DOM.");
        return;
    }

    const plans = [
        {
            title: "BASIC",
            colorClass: "green",
            monthlyPrice: "29 €/mois",
            annualPrice: "348 €/an",
            users: "1 utilisateur",
            sites: "1 site",
            data: "10 Go",
            delay: 0
        },
        {
            title: "ADVANCED",
            colorClass: "blue",
            monthlyPrice: "49 €/mois",
            annualPrice: "588 €/an",
            users: "3 utilisateurs",
            sites: "3 sites",
            data: "20 Go",
            delay: 150
        },
        {
            title: "GOLD",
            colorClass: "yellow",
            monthlyPrice: "99 €/mois",
            annualPrice: "1188 €/an",
            users: "Illimité",
            sites: "Illimité",
            data: "Illimité",
            delay: 300
        }
    ];

    plans.forEach(plan => {
        const card = document.createElement("div");
        card.classList.add("card", "landing");
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-delay", plan.delay);

        card.innerHTML = `
            <div class="card-container landing">
                <span class="container-100 text-align-left-to-center">
                    <h1 class="${plan.colorClass} title">${plan.title}</h1>
                    <h2 class="price gray" data-monthly="${plan.monthlyPrice}" data-annual="${plan.annualPrice}">${plan.monthlyPrice}</h2>
                    <hr>
                </span>
                <span class="small">
                    <p class="bold">Nombre d'utilisateurs</p>
                    <p class="gray">${plan.users}</p>
                </span>
                <span class="small">
                    <p class="bold">Nombre de sites</p>
                    <p class="gray">${plan.sites}</p>
                </span>
                <span class="small">
                    <p class="bold">Volume de données</p>
                    <p class="gray">${plan.data}</p>
                </span>
            </div>
        `;

        cardList.appendChild(card);
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
