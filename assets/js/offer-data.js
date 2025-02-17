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
  
  function generateOfferContent(data) {
    const container = document.getElementById('offer-container');
    
    data.forEach(rubrique => {
      const rubriqueDiv = document.createElement('div');
      rubriqueDiv.classList.add('rubrique');
      
      const rubriqueTitle = document.createElement('h2');
      rubriqueTitle.textContent = rubrique.rubrique;
      rubriqueDiv.appendChild(rubriqueTitle);
      
      const rubriqueDesc = document.createElement('p');
      rubriqueDesc.textContent = rubrique.desc;
      rubriqueDiv.appendChild(rubriqueDesc);
      
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
      
      container.appendChild(rubriqueDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    generateOfferContent(data);
  });