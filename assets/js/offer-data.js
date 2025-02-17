const data = [
    {
        rubrique: "Structure",
        desc: "Optimisez vos infrastructures avec une gestion centralisée, simplifiant le pilotage, le suivi et la maintenance de vos sites et structures.",
        sousRubriques: [
            {
                sousRubrique: "Sites",
                descriptionSousRubrique: "Gestion de la structure globale et des sites individuels",
                details: [
                    "Ajouter de nouveaux sites",
                    "Gérer les sites",
                    "Supprimer les informations des sites renseignés"
                ]
            },
            {
                sousRubrique: "Entités fonctionnelles",
                descriptionSousRubrique: "Vue des données en vue tableau et en vue schéma",
                details: [
                    "Ajouter des entités fonctionnelles",
                    "Modifier les entités fonctionnelles existantes",
                    "Supprimer les informations des entités fonctionnelles renseignées"
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
                    "Ajouter de nouveaux collaborateurs",
                    "Supprimer l'accès des utilisateurs à GreenTwins"
                ]
            },
            {
                sousRubrique: "Équipes",
                descriptionSousRubrique: "Gestion des équipes et des accès aux fonctionnalités",
                details: [
                    "Créer des équipes",
                    "Associer les utilisateurs à des équipes",
                    "Modifier les informations des équipes",
                    "Supprimer les équipes créées"
                ]
            },
            {
                sousRubrique: "Profils",
                descriptionSousRubrique: "Gestion des profils des utilisateurs",
                details: [
                    "Ajouter de nouveaux profils",
                    "Associer les utilisateurs aux profils",
                    "Modifier les profils",
                    "Supprimer des profils"
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
                    "Ajouter de nouveaux profils",
                    "Modifier les informations des profils",
                    "Gérer l'accès aux fonctionnalités des utilisateurs",
                    "Supprimer les profils créés"
                ]
            },
            {
                sousRubrique: "Data Source",
                descriptionSousRubrique: "Vue des données en vue tableau et en vue schéma",
                details: [
                    "Visualiser la base de données en vue tableau",
                    "Voir la base de données en vue schéma"
                ]
            },
            {
                sousRubrique: "Data Dictionnary",
                descriptionSousRubrique: "Affichage, modification et export du dictionnaire des données",
                details: [
                    "Afficher le dictionnaire des données",
                    "Modifier le dictionnaire des données",
                    "Exporter le dictionnaire des données"
                ]
            },
            {
                sousRubrique: "Data Quality",
                descriptionSousRubrique: "Affichage du dashboard de qualité des données",
                details: [
                    "Visualiser les graphiques de qualité des données"
                ]
            },
            {
                sousRubrique: "Data Alerts",
                descriptionSousRubrique: "Affichage des alertes sur la qualité des données",
                details: [
                    "Afficher les alertes sur la qualité des données",
                    "Vérifier les seuils de fiabilité des données"
                ]
            }
        ]
    },
    {
        rubrique: "Métier",
        desc: "Les rapports couvrent différents domaines : audits et réglementations, gestion et planification, énergie et environnement, finance, et sobriété numérique.",
        sousRubriques: [
            {
                sousRubrique: "Rapports Audits & Réglementations",
                descriptionSousRubrique: "Gestion des rapports liés à l'audit et aux règlementations",
                details: [
                    "Générer, exporter, partager, supprimer les rapports liés à l'audit et aux règlementations"
                ]
            },
            {
                sousRubrique: "Gestion & Planification",
                descriptionSousRubrique: "Gestion des rapports associés à la gestion et à la planification",
                details: [
                    "Générer, exporter, partager, supprimer les rapports associés à la gestion et à la planification"
                ]
            },
            {
                sousRubrique: "Énergie & Environnement",
                descriptionSousRubrique: "Gestion des rapports liés à l'énergie et l'environnement",
                details: [
                    "Générer, exporter, partager, supprimer les rapports liés à l'énergie et l'environnement"
                ]
            },
            {
                sousRubrique: "Finance",
                descriptionSousRubrique: "Gestion des rapports de finance",
                details: [
                    "Générer, exporter, partager, supprimer les rapports de finance"
                ]
            },
            {
                sousRubrique: "Sobriété numérique",
                descriptionSousRubrique: "Gestion des rapports en relation avec la sobriété énergétique",
                details: [
                    "Générer, exporter, partager, supprimer les rapports en relation avec la sobriété énergétique"
                ]
            }
        ]
    },
    {
        rubrique: "Dashboard",
        desc: "Gestion et suivi des tableaux de bord pour une visualisation des données.",
        sousRubriques: [
            {
                sousRubrique: "Tableaux de bord",
                descriptionSousRubrique: "Visualisation en un coup d'œil de l'activité de vos différents sites",
                details: [
                    "Voir les différentes consommations et utilisation de données de vos sites"
                ]
            }
        ]
    },
    {
        rubrique: "Digital Twins",
        desc: "Créez, suivez et optimisez des représentations virtuelles d’entités physiques pour une meilleure analyse, simulation et prise de décision.",
        sousRubriques: [
            {
                sousRubrique: "Jumeaux numériques",
                descriptionSousRubrique: "Gestion des jumeaux numériques",
                details: [
                    "Voir et interagir avec les jumeaux numériques en 3D"
                ]
            }
        ]
    },
    {
        rubrique: "ByIA",
        desc: "Les modèles d’intelligence artificielle vous permettront d’optimiser les données, l’efficacité opérationnelle et la prise de décision.",
        sousRubriques: [
            {
                sousRubrique: "Modèles IA",
                descriptionSousRubrique: "Prédiction par modèle d'IA",
                details: [
                    "Générer des analyses prédictives par IA"
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
        rubriqueDiv.classList.add('rubrique-content', 'centered-div');
        rubriqueDiv.setAttribute('data-index', index);
        rubriqueDiv.style.display = 'none'; // Masquer par défaut

        const desc = document.createElement('p');
        desc.textContent = rubrique.desc;
        desc.classList.add('gray');
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

            // Affichage des détails sous forme de liste
            const detailsList = document.createElement('ul');
            sousRubrique.details.forEach(detail => {
                const listItem = document.createElement('li');
                listItem.classList.add('small', 'gray', 'no-style-list');
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