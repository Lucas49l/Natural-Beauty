window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY >0)
})

/*Menu Oculto*/

const header = document.getElementById("header");
const fundo = document.querySelector(".fundo");

fundo.addEventListener("mouseenter", ()  => {
    header.style.opacity="0";
});

fundo.addEventListener("mouseleave", () => {
    header.style.opacity="1";
});