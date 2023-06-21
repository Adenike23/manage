AOS.init();

const openNav = document.querySelector(".open-menu");
    const closeNav = document.querySelector(".close-menu");
    const navList = document.querySelector("nav ul");
    openNav.addEventListener("click", function() {
    navList.style.top = "5%"
    openNav.style.display = "none"
    closeNav.style.display = "block"
})
closeNav.addEventListener("click", function() {
    navList.style.top = "-5%"
    openNav.style.display = "block"
    closeNav.style.display = "none"
})
document.querySelectorAll("nav ul a").forEach(navLink => {
    navLink.addEventListener("click", function() {
        navList.style.top = "-5%"
        openNav.style.display = "block"
        closeNav.style.display = "none"
    })
})