// Getflix hover //
var getflix_project = document.getElementById('getflix');
var getflix_card = document.getElementById('getflix_card');
var getflix_logo = document.getElementById('getflix_logo');

function getflix() {
    getflix_card.style.zIndex = "1";
    getflix_card.style.opacity = "100%";
    getflix_logo.style.opacity = "10%";
    getflix_logo.style.transition = "all 2s";
    getflix_card.style.transition = "all 2s";
}
getflix_project.addEventListener("click", getflix);

function removeGetflix() {
    getflix_card.style.zIndex = "-1";
    getflix_card.style.opacity = "0%";
    getflix_logo.style.opacity = "100%";
    getflix_logo.style.transition = "all 2s";
    getflix_card.style.transition = "all 2s";
}

// RPG hover //
var rpg_project = document.getElementById('RPG');
var rpg_card = document.getElementById('RPG_card');
var rpg_logo = document.getElementById('enchanted_arena');

function rpg() {
    rpg_card.style.zIndex = "1";
    rpg_card.style.opacity = "100%";
    rpg_logo.style.opacity = "10%";
    rpg_logo.style.transition = "all 2s";
    rpg_card.style.transition = "all 2s";
}
rpg_project.addEventListener("click", rpg);

function removeRpg() {
    rpg_card.style.zIndex = "-1";
    rpg_card.style.opacity = "0%";
    rpg_logo.style.opacity = "100%";
    rpg_logo.style.transition = "all 2s";
    rpg_card.style.transition = "all 2s";
}

// Cookie hover //
var cookie_project = document.getElementById('cookie_clicker');
var cookie_card = document.getElementById('cookie_card');
var cookie_logo = document.getElementById('cookie_logo');

function cookie() {
    cookie_card.style.zIndex = "1";
    cookie_card.style.opacity = "100%";
    cookie_logo.style.opacity = "10%";
    cookie_logo.style.transition = "all 2s";
    cookie_card.style.transition = "all 2s";
}
cookie_project.addEventListener("click", cookie);

function removeCookie() {
    cookie_card.style.zIndex = "-1";
    cookie_card.style.opacity = "0%";
    cookie_logo.style.opacity = "100%";
    cookie_logo.style.transition = "all 2s";
    cookie_card.style.transition = "all 2s";
}

// Pizza hover //
var pizza_project = document.getElementById('restaurant');
var pizza_card = document.getElementById('pizza_card');
var pizza_logo = document.getElementById('pizza_master');

function pizza() {
    pizza_card.style.zIndex = "1";
    pizza_card.style.opacity = "100%";
    pizza_logo.style.opacity = "10%";
    pizza_logo.style.transition = "all 2s";
    pizza_card.style.transition = "all 2s";
}
pizza_project.addEventListener("click", pizza);

function removePizza() {
    pizza_card.style.zIndex = "-1";
    pizza_card.style.opacity = "0%";
    pizza_logo.style.opacity = "100%";
    pizza_logo.style.transition = "all 2s";
    pizza_card.style.transition = "all 2s";
}
