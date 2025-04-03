$(document).ready(function () {
    $("[data-fancybox]").fancybox({
        loop: true,           // Allows infinite looping
        buttons: ["close"],   // Only show the close button
        transitionEffect: "fade", // Smooth fade transition
        animationEffect: "fade", // Removes any harsh animation
    });
});