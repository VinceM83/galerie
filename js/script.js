$(document).ready(function(){

/**
 * Fonction qui affiche un Overlay avec une image en grand et un bouton de fermeture appelant la fonction 'setOverlay'
 * img = url de l'image à afficher
 * animationDuration = temps en millisecondes pour l'animation d'apparition de l'overlay avec l'image
 */
function setOverlay(img, animationDuration){
    // On crée l'overlay avec l'image et le bouton de fermeture et on les insère dans le body de la page (masqués)
    $('body').append('<div id="overlay"><div id="close-button">X</div><img src="images/' + img + '" ></div>');

    // Apparition de l'overlay
    $('#overlay').fadeIn(animationDuration, function(){

        // On empêche la propagation depuis l'image pour empêcher qu'un clique sur cette dernière ne provoque la fermeture de l'overlay
        $('#overlay img').click(function(e){
          e.stopPropagation();
        });
        // Mise en place d'un écouteur d'évènement sur le click sur l'overlay pour provoquer sa fermeture
        $(this).click(removeOverlay);
        // Mise en place d'un écouteur d'évènement sur la touche 'Esc' pour provoquer également sa fermeture
        $(document).keyup(function(e){
            e.preventDefault();
            if (e.which===27) removeOverlay();
        });
    });
}

/**
 * Fonction qui supprime l'overlay et l'image actuellement affichés par la fonction setOverlay()
 */
function removeOverlay(){
    // Animation de masquage de l'overlay
    $('#overlay').fadeOut(function(){
        // Une fois l'overlay disparu visuellement, on le supprime réellement de la page et on supprime les écouteurs (juste pour être propre)
        $('#overlay').off().remove();
    });

}
// test
// Selection de toutes les images de la galerie et application d'un écouteur d'évènement au clique dessus
$('.images img').click(function(){
    // Affichage de l'image correspondant (.data('img')) à la vignette cliquée ($(this)) avec une animation d'ouverture de 300ms
    setOverlay( $(this).data('img') , 500);
});

});
