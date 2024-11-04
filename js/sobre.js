
$(document).ready(function() {
    $("body").css("opacity", "1").hide().fadeIn(950, function() {
        $('html, body').animate({
            scrollTop: $("main").offset().top
        }, 900);
    });

    $("a.transicao").click(function(event) {
        event.preventDefault();
        let linkLocation = this.href;

        $("body").fadeOut(950, function() {
            redirectPage(linkLocation);
        });
    });

    $("a:not(.transicao)").click(function(event) {
        event.preventDefault();
        let linkLocation = this.href;
        
        redirectPage(linkLocation); 
    });

    function redirectPage(linkLocation) {
        window.location = linkLocation;
    }
});

/*Menu Oculto*/

const header = document.getElementById("header");
const fundo = document.querySelector(".fundo");

fundo.addEventListener("mouseenter", ()  => {
    header.style.opacity="0";
});

fundo.addEventListener("mouseleave", () => {
    header.style.opacity="1";
});