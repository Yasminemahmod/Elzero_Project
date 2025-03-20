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
});


// Stats Count Up
let statsSection = document.getElementById("stats");
let goals = Array.from(document.querySelectorAll(".stats .stat"));
let start = false;

window.onscroll = function() {
    if(this.scrollY >= statsSection.offsetTop) {
        if(!start) {
            goals.forEach(el => goalsCount(el));
        }
        start = true;
    }
}

function goalsCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(function() {
        el.textContent++;
        if(el.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal)
}

