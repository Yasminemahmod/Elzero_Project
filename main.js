// Drop Down
let dropMegaMenu = document.getElementById("drop-down-mega");
let MegaMenu =document.querySelector(".nested-menu");
dropMegaMenu.addEventListener("click", (e) => {
    MegaMenu.classList.toggle("show-mega");
});

let dropDownMenu = document.getElementById("drop-down-menu");
let navMenu = document.querySelector("nav ul");
dropDownMenu.addEventListener("click", (e) => {
    navMenu.classList.toggle("show-menu");
});


// Skills Prograss
let skillProgress = Array.from(document.querySelectorAll(".skill .prog"));

window.addEventListener("scroll", () => {
    if (this.pageYOffset >= 7145) {
        skillProgress[0].dataset.width = skillProgress[3].dataset.width = 80;
        skillProgress[1].dataset.width = 85;
        skillProgress[2].dataset.width = 70;
    }  
})
