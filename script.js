    const menuToggle = document.querySelector('.menu-toggle');
    const navBar = document.querySelector('.nav-bar');

    menuToggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });




document.getElementById("btn_portfolio").addEventListener("click", function() {
    document.getElementById("portfolio").style.border = "double, 5px, orange"
    document.getElementById("backgrounds").style.border = "none"
    document.getElementById("personnal").style.border = "none"
    document.getElementById("creations").style.border = "none"


})

document.getElementById("btn_backgrounds").addEventListener("click", function() {
    document.getElementById("backgrounds").style.border = "double, 5px, orange"
    document.getElementById("personnal").style.border = "none"
    document.getElementById("portfolio").style.border = "none"
    document.getElementById("creations").style.border = "none"


})


document.getElementById("btn_personnal").addEventListener("click", function() {
    document.getElementById("personnal").style.border = "double, 5px, orange"
    document.getElementById("portfolio").style.border = "none"
    document.getElementById("backgrounds").style.border = "none"
    document.getElementById("creations").style.border = "none"


})


document.getElementById("btn_creations").addEventListener("click", function() {
    document.getElementById("creations").style.border = "double, 5px, orange"
    document.getElementById("personnal").style.border = "none"
    document.getElementById("portfolio").style.border = "none"
    document.getElementById("backgrounds").style.border = "none"

})

