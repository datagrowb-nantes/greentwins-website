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
                    ["Ajouter de nouveaux sites", "Créez un site et configurez les paramètres spécifiques."],
                    ["Gérer les sites", "Accédez à la gestion des sites existants."],
                    ["Supprimer les informations des sites renseignés", "Supprimez les sites qui ne sont plus nécessaires."]
                ]
            },
            {
                sousRubrique: "Entités fonctionnelles",
                descriptionSousRubrique: "Vue des données en vue tableau et en vue schéma",
                details: [
                    ["Ajouter des entités fonctionnelles", "Créez et gérez les entités fonctionnelles."],
                    ["Modifier les entités fonctionnelles existantes", "Modifiez les paramètres des entités existantes."],
                    ["Supprimer les informations des entités fonctionnelles renseignées", "Supprimez des entités fonctionnelles obsolètes."]
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
                    ["Ajouter de nouveaux collaborateurs", "Créez des utilisateurs dans le système."],
                    ["Supprimer l'accès des utilisateurs à GreenTwins", "Révoquez l'accès des utilisateurs à la plateforme."]
                ]
            },
            {
                sousRubrique: "Équipes",
                descriptionSousRubrique: "Gestion des équipes et des accès aux fonctionnalités",
                details: [
                    ["Créer des équipes", "Créez des équipes et gérez leur composition."],
                    ["Associer les utilisateurs à des équipes", "Attribution des membres aux équipes correspondantes."],
                    ["Modifier les informations des équipes", "Mettez à jour les informations des équipes existantes."],
                    ["Supprimer les équipes créées", "Supprimez des équipes lorsque cela est nécessaire."]
                ]
            },
            {
                sousRubrique: "Profils",
                descriptionSousRubrique: "Gestion des profils des utilisateurs",
                details: [
                    ["Ajouter de nouveaux profils", "Ajoutez des profils pour les nouveaux utilisateurs."],
                    ["Associer les utilisateurs aux profils", "Liez les utilisateurs à leur profil spécifique."],
                    ["Modifier les profils", "Mettez à jour les informations des profils."],
                    ["Supprimer des profils", "Supprimez les profils inutiles."]
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
                    ["Ajouter de nouveaux profils", "Créez de nouveaux profils de stockage."],
                    ["Modifier les informations des profils", "Mettez à jour les informations sur les profils de stockage."],
                    ["Gérer l'accès aux fonctionnalités des utilisateurs", "Définissez des permissions pour les utilisateurs."],
                    ["Supprimer les profils créés", "Supprimez les profils de stockage obsolètes."]
                ]
            },
            {
                sousRubrique: "Data Source",
                descriptionSousRubrique: "Vue des données en vue tableau et en vue schéma",
                details: [
                    ["Visualiser la base de données en vue tableau", "Consultez les données sous forme de tableau."],
                    ["Voir la base de données en vue schéma", "Affichez les données sous forme graphique."]
                ]
            },
            {
                sousRubrique: "Data Dictionnary",
                descriptionSousRubrique: "Affichage, modification et export du dictionnaire des données",
                details: [
                    ["Afficher le dictionnaire des données", "Consultez le dictionnaire des données."],
                    ["Modifier le dictionnaire des données", "Mettez à jour le dictionnaire des données."],
                    ["Exporter le dictionnaire des données", "Exportez le dictionnaire pour d'autres usages."]
                ]
            },
            {
                sousRubrique: "Data Quality",
                descriptionSousRubrique: "Affichage du dashboard de qualité des données",
                details: [
                    ["Visualiser les graphiques de qualité des données", "Analysez en un coup d'œil la conformité et l'exactitude des données stockées."]
                ]
            },
            {
                sousRubrique: "Data Alerts",
                descriptionSousRubrique: "Affichage des alertes sur la qualité des données",
                details: [
                    ["Afficher les alertes sur la qualité des données", "Consultez les notifications signalant des incohérences ou des erreurs détectées."],
                    ["Vérifier les seuils de fiabilité des données", "Assurez-vous que les données respectent les critères de précision et de cohérence."]
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
        tab.classList.add('category-button');
        tab.addEventListener('click', () => showContent(index));

        tabsContainer.appendChild(tab);

        // Créer le contenu pour chaque rubrique
        const rubriqueDiv = document.createElement('div');
        rubriqueDiv.classList.add('rubrique-content');
        rubriqueDiv.setAttribute('data-index', index);
        rubriqueDiv.style.display = 'none'; // Masquer par défaut

        // const title = document.createElement('h2');
        // title.textContent = rubrique.rubrique;
        // rubriqueDiv.appendChild(title);

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
            sousRubriqueDesc.classList.add('green');
            sousRubriqueDiv.appendChild(sousRubriqueDesc);

            // Affichage des détails sous forme de tableau
            const detailsTable = document.createElement('table');
            detailsTable.classList.add('small');
            sousRubrique.details.forEach(detail => {
                const row = document.createElement('tr');
                detail.forEach(cell => {
                    const cellElement = document.createElement('td');
                    cellElement.textContent = cell;
                    row.appendChild(cellElement);
                });
                detailsTable.appendChild(row);
            });

            sousRubriqueDiv.appendChild(detailsTable);
            rubriqueDiv.appendChild(sousRubriqueDiv);
        });

        offerContainer.appendChild(rubriqueDiv);
    });

    // Afficher la première rubrique par défaut
    showContent(0);
}

// Fonction pour afficher le contenu de la rubrique sélectionnée
function showContent(index) {
    const allTabs = document.querySelectorAll('.category-button');
    const allRubriques = document.querySelectorAll('.rubrique-content');

    // Masquer toutes les rubriques
    allRubriques.forEach(rubrique => rubrique.style.display = 'none');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // Afficher la rubrique sélectionnée
    allRubriques[index].style.display = 'flex';
    allTabs[index].classList.add('active');
}

// Appeler la fonction lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    generateTabsAndContent();
});