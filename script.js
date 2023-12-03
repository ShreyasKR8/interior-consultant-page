const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".menu-items");

function openMenu() {
    menu.style.width = "100%";
    document.querySelector("body").style.position = "fixed";
    menuItems.style.display = "block";
}

function closeMenu() {
    menu.style.width = "0%";
    document.querySelector("body").style.position = "";
}