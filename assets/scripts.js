// Ce code initialise une galerie d’images responsive et interactive 
// avec des colonnes qui s’adaptent à la taille de l’écran, une lightbox 
// pour afficher les images en grand, et des filtres (tags) affichés en haut.



$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
