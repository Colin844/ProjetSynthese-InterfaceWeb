// Notion Javascript partie 1 : Fichier séparé

// Fonction pour gérer le menu Accordéon
$(document).ready(function () {
    $(".recrutement__accordion").on("click", function () {
        // Fermer tous les autres panels
        $(".recrutement__panel").not($(this).next()).slideUp();
        $(".recrutement__accordion").not($(this)).removeClass("recrutement__accordion--active");

        // Ouvrir ou fermer le panel cliqué
        $(this).toggleClass("recrutement__accordion--active");
        $(this).next().slideToggle();
    });
});



// Fonction pour gérer l'affichage du menu avec animation
// Notion jQuery partie 3 : Méthode animate()
function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menuIcon');

    // Vérifie si le menu est déjà visible ou non
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menuIcon.classList.remove('open');
    } else {
        // Animation pour afficher le menu
        // Notion Javascript partie 2 : Sélection "else" 
        menu.classList.add('show');
        menuIcon.classList.add('open');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    menuIcon.addEventListener('click', toggleMenu); // Gestion du clic
});

// Lancer l'animation sur le logo
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.header__logo').classList.add('show');
});


// Fonction jQuery pour changer la couleur des paragraphes précédés directement d'un titre
// Notion jQuery partie 1 : Sélecteurs hiérarchiques
$(document).ready(function () {
    $("h1 + p").css("color", "violet");
});

// Fonction jQuery pour un Diaporama Automatique 
// Notion jQuery partie 2 : Diaporama automatique
$(document).ready(function () {
    var i = 0;
    var totalImages = $(".gallery img").length;


    // Fonction pour afficher l'image suivante avec une transition de fondu
    function affiche() {
        var imageActuelle = $(".gallery img").eq(i);
        i = (i + 1) % totalImages;
        var imageProchain = $(".gallery img").eq(i);

        imageActuelle.fadeOut(2000);
        imageProchain.fadeIn(2000);
    }

    // Lancer le diaporama toutes les 10 secondes
    // Notion Javascript partie 3 : Fonction setInterval()
    setInterval(function () { affiche(); }, 6000);
});

// Fonction pour animer les images dans jeux.html
// Notion Javascript partie 4 : Méthode querySelector
document.querySelectorAll('.game').forEach((game) => {
    const image = game.querySelector('img');
    const info = game.querySelector('.info');

    // Notion Javascript partie 5 : Événements mouseover & mouseout
    game.addEventListener('mouseover', () => {
        image.style.opacity = '0.6';
        info.style.opacity = '1';
    });

    game.addEventListener('mouseout', () => {
        image.style.opacity = '0.6';
        info.style.opacity = '0';
    });
});


