// Animation
AOS.init({
    offset: 400,
    delay: 0,
    duration: 1000
});

// open & close Header
const pageHeader = document.querySelector(".header");

const mainMenu = pageHeader.querySelector(".header-right");
const openMenu = pageHeader.querySelector(".burderBtn");
const closeMenu = pageHeader.querySelector(".closeBtn");
const toggleMobileMenu = pageHeader.querySelector(".toggleMobileMenu");
const dNone = "d-none";
const dBlock = "d-block";
const dFlex = "d-flex";
const showBtn = "show-btn";
let targetScroll = window.innerHeight - pageHeader.offsetHeight;

window.addEventListener("resize", () => {
    targetScroll = window.innerHeight - pageHeader.offsetHeight;
});

toggleMobileMenu.addEventListener("click", () => {
    if (targetScroll) {
        mainMenu.classList.toggle(dFlex);
        mainMenu.style.display = 'none';
        if (!openMenu.classList.contains(dNone)) {
            openMenu.classList.remove(dBlock);
            openMenu.classList.add(dNone);
            mainMenu.style.flexDirection = 'column';
            closeMenu.classList.remove(dNone);
            closeMenu.classList.add(dBlock);
        } else {
            openMenu.classList.remove(dNone);
            openMenu.classList.add(dBlock);
            closeMenu.classList.remove(dBlock);
            closeMenu.classList.add(dNone);
        }
    }
});