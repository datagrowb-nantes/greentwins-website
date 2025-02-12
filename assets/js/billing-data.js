document.addEventListener("DOMContentLoaded", function () {
    const categoriesContainer = document.getElementById('categories-container');
    const cardList = document.querySelector(".card-list");
    const priceToggle = document.getElementById("price-toggle");

    if (!categoriesContainer || !cardList || !priceToggle) {
        console.error("Un ou plusieurs éléments sont introuvables dans le DOM.");
        return;
    }

    // Données des offres
    const plans = {
        "Smart Building": [
            { title: "BASIC", colorClass: "green", monthlyPrice: "29 €/mois", annualPrice: "348 €/an", users: "1 utilisateur", sites: "1 site", data: "10 Go" },
            { title: "ADVANCED", colorClass: "blue", monthlyPrice: "49 €/mois", annualPrice: "588 €/an", users: "3 utilisateurs", sites: "3 sites", data: "20 Go" },
            { title: "GOLD", colorClass: "yellow", monthlyPrice: "99 €/mois", annualPrice: "1188 €/an", users: "Illimité", sites: "Illimité", data: "Illimité" }
        ],
        "Méthanisation": [
            { title: "BASIC", colorClass: "green", monthlyPrice: "39 €/mois", annualPrice: "468 €/an", users: "1 utilisateur", sites: "1 site", data: "15 Go" },
            { title: "ADVANCED", colorClass: "blue", monthlyPrice: "59 €/mois", annualPrice: "708 €/an", users: "3 utilisateurs", sites: "3 sites", data: "30 Go" },
            { title: "GOLD", colorClass: "yellow", monthlyPrice: "109 €/mois", annualPrice: "1308 €/an", users: "Illimité", sites: "Illimité", data: "Illimité" }
        ]
    };

    let selectedCategory = "Smart Building"; // Catégorie par défaut
    let isAnnual = false; // Mode de prix par défaut

    // Récupération des catégories uniques
    const categories = [...new Set(articles.map(article => article.category))];

    // Création des boutons de catégorie
    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category;
        button.dataset.category = category;
        button.classList.add("category-button");
        if (category === selectedCategory) button.classList.add("active");
        categoriesContainer.appendChild(button);
    });

    // Initialisation des cartes
    function initializeCards() {
        cardList.innerHTML = ""; // Vider les cartes existantes

        plans[selectedCategory].forEach(plan => {
            const card = document.createElement("div");
            card.classList.add("card", "landing");

            card.innerHTML = `
                <div class="card-container landing">
                    <span class="container-100 text-align-left-to-center">
                        <h1 class="${plan.colorClass} title">${plan.title}</h1>
                        <h2 class="price gray">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</h2>
                        <hr>
                    </span>
                    <span class="small"><p class="bold">Nombre d'utilisateurs</p><p class="gray">${plan.users}</p></span>
                    <span class="small"><p class="bold">Nombre de sites</p><p class="gray">${plan.sites}</p></span>
                    <span class="small"><p class="bold">Volume de données</p><p class="gray">${plan.data}</p></span>
                </div>
            `;

            cardList.appendChild(card);
        });

        // Animation fade-in au chargement
        cardList.style.opacity = "0";
        setTimeout(() => {
            cardList.style.transition = "opacity 0.25s ease-in-out";
            cardList.style.opacity = "1";
        }, 50);
    }

    initializeCards(); // Charger les cartes au démarrage

    // Fonction de mise à jour avec animation fluide
    function updateCardContents() {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {
            const title = card.querySelector(".title");
            const price = card.querySelector(".price");
            const details = card.querySelectorAll(".small p.gray");

            // Appliquer un fade-out sur le texte uniquement
            title.style.transition = price.style.transition = "opacity 0.25s ease-in-out";
            details.forEach(el => el.style.transition = "opacity 0.25s ease-in-out");

            title.style.opacity = "0";
            price.style.opacity = "0";
            details.forEach(el => el.style.opacity = "0");

            setTimeout(() => {
                const plan = plans[selectedCategory][index];
                if (plan) {
                    title.textContent = plan.title;
                    price.textContent = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                    details[0].textContent = plan.users;
                    details[1].textContent = plan.sites;
                    details[2].textContent = plan.data;
                }

                // Appliquer le fade-in après modification
                title.style.opacity = "1";
                price.style.opacity = "1";
                details.forEach(el => el.style.opacity = "1");
            }, 250); // Attendre la fin du fade-out avant de changer le texte
        });
    }
    // Gestion du changement de catégorie
    categoriesContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("category-button")) {
            selectedCategory = event.target.dataset.category;
            document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            updateCardContents();
        }
    });

    // Gestion du switch de prix
    priceToggle.addEventListener("change", () => {
        isAnnual = priceToggle.checked;
        updateCardContents();
    });
});

export const articles = [
    { id: 1, category: "Smart Building" },
    { id: 2, category: "Méthanisation" },
];