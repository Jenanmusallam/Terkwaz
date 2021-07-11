// Animation
AOS.init({
    offset: 400,
    delay: 0,
    duration: 1000
});

// Open & close Header


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

// ---------------------------------------//



const getDateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    let dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
    return dateTime;
}

// example usage: realtime clock
setInterval(function () {
    currentTime = getDateTime();
    document.querySelector(".time").textContent = currentTime;
}, 1000);

// Scroll
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnim)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);
