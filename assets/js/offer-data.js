// Structure des données pour les rubriques et sous-rubriques
const data = [
    {
        rubrique: "Structure",
        desc: "Optimisez vos infrastructures avec une gestion centralisée, simplifiant le pilotage, le suivi et la maintenance de vos sites et structures.",
        sousRubriques: [
            {
                sousRubrique: "Sites",
                descriptionSousRubrique: "Gestion de la structure globale et des sites individuels",
                details: [
                    "• Ajouter de nouveaux sites",
                    "• Gérer les sites",
                    "• Supprimer les informations des sites renseignés"
                ]
            },
            {
                sousRubrique: "Entités fonctionnelles",
                descriptionSousRubrique: "Vue des données en vue tableau et en vue schéma",
                details: [
                    "• Ajouter des entités fonctionnelles",
                    "• Modifier les entités fonctionnelles existantes",
                    "• Supprimer les informations des entités fonctionnelles renseignées"
                ]
            }
        ]
    },
    {
        rubrique: "Configuration",
        desc: "Gestion centralisée des utilisateurs, des équipes et des profils.",
        sousRubriques: [
            {
                sousRubrique: "Utilisateurs",
                descriptionSousRubrique: "Gestion des utilisateurs actifs et invités",
                details: [
                    "• Ajouter de nouveaux collaborateurs",
                    "• Supprimer l'accès des utilisateurs à GreenTwins"
                ]
            },
            {
                sousRubrique: "Équipes",
                descriptionSousRubrique: "Gestion des équipes et des accès aux fonctionnalités",
                details: [
                    "• Créer des équipes",
                    "• Associer les utilisateurs à des équipes",
                    "• Modifier les informations des équipes",
                    "• Supprimer les équipes créées"
                ]
            },
            {
                sousRubrique: "Profils",
                descriptionSousRubrique: "Gestion des profils des utilisateurs",
                details: [
                    "• Ajouter de nouveaux profils",
                    "• Associer les utilisateurs aux profils",
                    "• Modifier les profils",
                    "• Supprimer des profils"
                ]
            }
        ]
    },
    {
        rubrique: "Data",
        desc: "Gestion complète des données couvrant le stockage, les sources, le dictionnaire, la qualité et les alertes sur les anomalies.",
        sousRubriques: [
            {
                sousRubrique: "Data Storage",
                descriptionSousRubrique: "Affichage des sites, vue d'ensemble de chaque site, trois types de définition du type de stockage, vue des données stockées",
                details: [
                    "• Ajouter de nouveaux profils",
                    "• Modifier les informations des profils",
                    "• Gérer l'accès aux fonctionnalités des utilisateurs",
                    "• Supprimer les profils créés"
                ]
            },
            {
                sousRubrique: "Data Source",
                descriptionSousRubrique: "Vue des données en vue tableau et en vue schéma",
                details: [
                    "• Visualiser la base de données en vue tableau",
                    "• Voir la base de données en vue schéma"
                ]
            },
            {
                sousRubrique: "Data Dictionnary",
                descriptionSousRubrique: "Affichage, modification et export du dictionnaire des données",
                details: [
                    "• Afficher le dictionnaire des données",
                    "• Modifier le dictionnaire des données",
                    "• Exporter le dictionnaire des données"
                ]
            }
        ]
    }
];

// Fonction pour générer le contenu dynamique des onglets
function generateTabsAndContent() {
    const tabsContainer = document.getElementById('tabs');
    const offerContainer = document.getElementById('offer-container');

    // Génération des onglets et contenu pour chaque rubrique
    data.forEach((rubrique, index) => {
        // Créer l'onglet
        const tab = document.createElement('li');
        tab.textContent = rubrique.rubrique;
        tab.setAttribute('data-index', index);
        tab.classList.add('tab'); // Ajouter la classe pour le style
        tab.addEventListener('click', () => showContent(index));

        tabsContainer.appendChild(tab);

        // Créer le contenu pour chaque rubrique
        const rubriqueDiv = document.createElement('div');
        rubriqueDiv.classList.add('rubrique-content');
        rubriqueDiv.setAttribute('data-index', index);
        rubriqueDiv.style.display = 'none'; // Masquer par défaut

        const title = document.createElement('h2');
        title.textContent = rubrique.rubrique;
        rubriqueDiv.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = rubrique.desc;
        rubriqueDiv.appendChild(desc);

        // Créer le contenu des sous-rubriques
        rubrique.sousRubriques.forEach(sousRubrique => {
            const sousRubriqueDiv = document.createElement('div');
            sousRubriqueDiv.classList.add('sous-rubrique');

            const sousRubriqueTitle = document.createElement('h3');
            sousRubriqueTitle.textContent = sousRubrique.sousRubrique;
            sousRubriqueDiv.appendChild(sousRubriqueTitle);

            const sousRubriqueDesc = document.createElement('p');
            sousRubriqueDesc.textContent = sousRubrique.descriptionSousRubrique;
            sousRubriqueDiv.appendChild(sousRubriqueDesc);

            const detailsList = document.createElement('ul');
            sousRubrique.details.forEach(detail => {
                const listItem = document.createElement('li');
                listItem.textContent = detail;
                detailsList.appendChild(listItem);
            });

            sousRubriqueDiv.appendChild(detailsList);
            rubriqueDiv.appendChild(sousRubriqueDiv);
        });

        offerContainer.appendChild(rubriqueDiv);
    });

    // Afficher la première rubrique par défaut
    showContent(0);
}

// Fonction pour afficher le contenu de la rubrique sélectionnée
function showContent(index) {
    const allTabs = document.querySelectorAll('.tab');
    const allRubriques = document.querySelectorAll('.rubrique-content');

    // Masquer toutes les rubriques
    allRubriques.forEach(rubrique => rubrique.style.display = 'none');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Afficher la rubrique sélectionnée
    allRubriques[index].style.display = 'block';
    allTabs[index].classList.add('active');
}

// Appeler la fonction lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    generateTabsAndContent();
});