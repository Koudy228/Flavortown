const menuBtn = document.querySelector(".menu_btn");
const sideMenu = document.querySelector(".side_menu");
const overlay = document.querySelector(".menu_overlay");
const closeBtn = document.querySelector(".side_menu_close");
function openMenu(){
    sideMenu.classList.add("is_open");
    overlay.hidden = false;
    sideMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("no_scroll");
}
function closeMenu(){
    sideMenu.classList.remove("is_open");
    overlay.hidden = true;
    sideMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no_scroll");
}
menuBtn.addEventListener("click", () => {
    sideMenu.classList.contains("is_open") ? closeMenu() : openMenu();
});
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeMenu();
});
sideMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
});
menuBtn.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        sideMenu.classList.contains("is_open") ? closeMenu() : openMenu();
    }
});