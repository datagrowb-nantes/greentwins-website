# Site Vitrine pour GreenTwins
![GreenTwinsLogo](assets/img/logo.png)

## À Propos de GreenTwins

GreenTwins est une plateforme numérique dédiée à l'optimisation énergétique des installations industrielles. Fondée sur le renforcement du savoir-faire en matière d'efficacité énergétique, GreenTwins exploite les principes avancés de l'Internet des Objets (IoT) et de l'Intelligence Artificielle (IA).


#### Ce projet concerne le développement du site vitrine de GreenTwins. L'objectif du site est de présenter le fonctionnement de GreenTwins et ses activités de manière attrayante et informative.  
#### Ce README va donner des informations sur son développement pour faciliter la maintenabilité du site.
<br>

## Table des Matières

- [Ressources Utilisées](#ressources-utilisées)
	- Visual Studio Code
 	- Sourcetree	
  	- Figma
  	- Bootstrap et Scaffold
 
- [Section Principale](#section-principale)
	- Bases du Projet
   	- Landing Page
   	- Section Technologies
 

## Ressources Utilisées

### Visual Studio Code

**VSCode** est un Environnement de Développement Intégré `IDE` très populaire que j'ai utilisé pour le développement de ce site.

#### Caractéristiques de VS Code

- **Polyvalence** : VSCode prend en charge une variété de langages de programmation et de technologies web.
- **Extensibilité** : vaste écosystème d'extensions disponibles. Dans mon cas, l'extension Live Server fut d'une grande utilité en permettant une visualisation des mise à jour en temps réél sur une fenêtre de navigateur.
- **Éditeur de Texte Avancé** : Son éditeur de texte offre des fonctionnalités avancées telles que la coloration syntaxique, la complétion automatique et une grande quantité de raccourcis de clavier accélérant le développement.

____
 ### Sourcetree

**Sourcetree** est une application de gestion de versions Git, offrant une interface graphique conviviale pour faciliter le suivi des modifications de code et la collaboration sur des projets de développement logiciel.

#### Caractéristiques de Sourcetree

- **Interface Graphique Intuitive** : **Sourcetree** offre une interface utilisateur intuitive, permettant de visualiser facilement les branches, les commits et les modifications de code.
- **Gestion Facilitée des Repositories Git** : Avec **Sourcetree**, il est facile de cloner, de créer, de modifier et de fusionner des repositories Git, rendant ainsi la gestion des versions de votre projet plus efficace.
- **Visualisation des Détails de Commit** : **Sourcetree** permet d'examiner en détail chaque commit, y compris les modifications apportées aux fichiers, les messages de commit et les auteurs.
- **Intégration avec Git Flow** : **Sourcetree** offre une intégration native avec Git Flow, une méthodologie de gestion des branches Git, facilitant ainsi la gestion des versions de votre projet selon les bonnes pratiques de développement.
- **Prise en Charge Multi-plateforme** : **Sourcetree** est disponible sur Windows et macOS, offrant ainsi une expérience cohérente aux développeurs sur différentes plateformes.

____
### Figma

**Figma** est une plateforme de design d'interface utilisateur basée sur le cloud, offrant des fonctionnalités puissantes pour la création, la collaboration et le prototypage d'interfaces utilisateur et de designs graphiques.

#### Caractéristiques de Figma

- **Édition Collaborative en Temps Réel** : **Figma** permet à plusieurs utilisateurs de travailler simultanément sur un même projet, facilitant ainsi la collaboration et le partage d'idées entre les membres de l'équipe.
- **Interface Intuitive et Simple à Utiliser** : Avec son interface utilisateur intuitive, **Figma** offre une expérience de conception fluide et accessible, adaptée aux débutants comme aux professionnels.
- **Gestion des Composants Réutilisables** : **Figma** propose un système de composants réutilisables et de styles partagés, permettant aux concepteurs de créer et de maintenir des designs cohérents et évolutifs.

____
### Bootstrap et Scaffold

### Bootstrap
**Bootstrap** est un framework frontend open-source très populaire, largement utilisé pour le développement de sites web et d'applications. Il offre une gamme étendue de composants et d'outils permettant de créer rapidement des interfaces utilisateur modernes et réactives.

##### Caractéristiques de Bootstrap
- **Composants Prêts à l'Emploi** : **Bootstrap** propose une variété de composants prêts à l'emploi tels que des boutons, des formulaires, des carrousels, des modales, etc., facilitant ainsi le processus de conception et de développement.
- **Grille Responsive** : Le système de grille flexible de **Bootstrap** permet de créer des mises en page réactives et adaptables à différents appareils et tailles d'écran, assurant ainsi une expérience utilisateur optimale sur tous les dispositifs.
- **Styles et Thèmes Personnalisables** : **Bootstrap** offre une grande flexibilité en termes de personnalisation des styles et des thèmes, permettant ainsi aux développeurs de créer des designs uniques et cohérents avec leur marque.

### Scaffold
**Scaffold** est un template de site internet créé par une équipe de développeurs web de **Bootstrap**. Il a servi de squelette pour construire la landing page de ce projet. Les designs de **Scaffold** ont permit de créer la landing page, qui à été améliorée et personnalisée pour construire les autres parties du site.

Lien de présentation du Template Scaffold : https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/

## Section Principale

### Bases du Projet

#### Base du Template Scaffold

Comme indiqué en section précédente, ce projet est basé sur le Template **Boostrap "Scaffold"**. J'ai donc repris l'arborescence de fichiers donnée par le template :
Le fichier de la landing page : `index.html` se trouve au plus au niveau de l'arborescence.
On trouve ensuite plusieurs dossiers avec des rôles spécifiques :
- `assets` : répertoire qui contient lui même de nombreux dossiers concerant l'aspect graphique de la page :
	- `css` : qui contient le stylesheet CSS de la landing page.
	- `fonts` : qui contient les polices de texte utilisées.
	- `img` : qui contient les différentes images et icones.
	- `js` : qui contient un script pour tous les affichages dynamiques de la page.
	- `vendor` : qui contient des fichiers JS et CSS de différentes librairies, permettant de meilleurs designs ou affichages sur nos pages.

- `forms` : répertoire qui contient un fichier PHP pour un questionnaire en bas de la landing page.

#### Ajouts

Plusieurs ajouts ont ensuite été faits dans l'arborescence du projet. En effet, **Scaffold** ne contenait qu'une seule page, mais le site vitrine de **_GreenTwins_** en contiendra beaucoup plus.

Le premier ajout est celui du dossier `technologies-pages` qui contient l'ensemble des documents nécessaires à la section **Technologies** du site.
Ce dossier contient les 7 fichiers HTML qui correspondent à toutes les pages Technologies, ainsi que son propre dossier `assets`, qui va stocker les éléments nécéssaires au fonctionnement de toutes les pages.

Le deuxième ajout fut celui du dossier `header-footer` qui contient un fichier JS permettant l'intégration automatique des sections header et footer de nos pages.

____
### Landing Page

La landing page est la page d'accueil du site vitrine, elle présente d'un point de vue extérieur ce qu'est **_GreenTwins_** et ses fonctionnalités. On peut, à partir de plusieurs liens, accéder aux autres parties du site.
Elle contient également en bas de page un formulaire de contact.

____
### Section Technologies

La section technologies est stockée dans le dossier `technologies-pages`, et a été premièrement désignée sur **Figma** en s'accordant avec les designs faits sur la landing page.
Cette section est la première qui fut implémentée après la landing page.

#### Script d'intégration du Header et Footer des pages

Dès le début de l'implémentation, j'ai créé le script JS qui permet d'éviter de dupliquer le header et le footer dans l'intégralité de nos documents. Le layout de la page est ainsi stocké à un seul endoit, de sorte à faciliter l'applications de changements à toutes les pages en simultané.

Son fonctionnement est assez simple, regardons pour le cas du Footer :
On créé une classe personalisée qui étends la classe JS `HTMLElement`, ce qui lui permet d'hériter de toutes les fonctionnalités d'un élément HTML quelconque :
`class CustomFooter extends HTMLElement`

On utilise ensuite la méthode `connectedCallback()` qui va être appelée quand notre élément personnalisé sera ajouté à la page web. On définit dans cette méthode un comportement spécifique à appliquer.
Ici, on utilise la propriété `this.innerHTML = ''` qui va nous permettre de définir dans nos apostrophes le contenu HTML de la classe CustomFooter

Et enfin, on associe la classe JS `CustomFooter` à une balise HTML que nous placerons dans nos fichiers à la place de l'intégralité de la section Footer. Pour cela, on utilise la méthode `customElements` qui va renseigner un élément personalisé dans le registre des éléments du navigateur, et qui associera à cet élément personnalisé la classe JS que nous avons créé :
`customElements.define('custom-footer', CustomFooter)`

Ainsi, dès le chargement de la page, lorsque le navigateur repère notre balise `<custom-footer></custom-footer>`, il va automatiquement y insérer ce qui a été renseigné dans la partie `innerHTML`.

____
##### Amélioration de la Navbar

Le même processus est répété pour le header de nos pages qui contient la Navbar.
Mais on veut également afficher le lien de la page actuelle d'une certaine couleur pour indiquer que la page actuelle appartient à ce menu.
Par exemple, si on est dans l'une des pages de la section technologies, la couleur de police du mot Technologies dans la Navbar doit être affiché en vert.

C'est facile à faire quand on a une navbar stockée dans chaque page HTML, mais quand on a une Navbar commune à toutes les pages, beaucoup moins.

Cependant, JavaScript peut nous offrir une solution à ce problème :
Il faut associer une classe spécifique au lien de la page Technologies et préciser en CSS la couleur du texte qui possède cette classe.
Dans la méthode `connectedCallBack()`, on va définir la constante suivante : `const currentPage = window.location.pathname;`. Cette constante va stocker le chemin actuel de la page courante, en incluant le nom du fichier.

Et ensuite, on précise une expressionb booléenne JavaScript en tant que classe de notre lien :
`<a href="../technologies-pages/technologies-landing.html" class="${currentPage.includes('technologies-') ? 'current-page' : ''}">Technologies</a>`

On utilise ici un opérateur ternaire. Réduis à des termes plus simples on obtient ceci : `a ? 'b' : 'c'`. 
Si la condition `a` est vérifiée, alors on donne la classe `b` à notre objet, sinon on lui donne la classe `c`.  
Dans notre expression de base, `a` équivaut à la vérification que la chaîne de caractères `'technologies-'` est présente dans la constante `currentPage`. Si oui, on donne à notre élément la classe `current-page` qui sera stylée en CSS, et sinon on ne lui donne aucune classe.  

____
#### Style CSS

Pour ce qui est de la mise en page des styles CSS de nos pages Technologies, il valait mieux faire un stylesheet différent de celui de la landing page, en partant de 0 pour ne pas garder les effets inutiles de celui du template **Scaffold**.
Mais comme les pages technologies ont elles-mêmes beaucoup de designs smilaires, les 7 pages ont un fichier commun : `technologies-styles.css`.