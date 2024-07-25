const getElement = (element) => {
    const returnedElement = document.querySelector(element);
    if (!returnedElement) throw new Error(`${element} not found!!`);
    
    return returnedElement;
};
// Select items
const navBar = getElement(".nav-bar");
// const pageContent = getElement(".page-content");
const openNav = getElement(".open-nav");
const closeNav = getElement(".close-nav");
const listContainer = getElement(".list-container");

// Toggle nav
openNav.addEventListener("click", () => {
    listContainer.classList.add("nav-toggle");
    openNav.classList.add("hidden");
    closeNav.classList.remove("hidden");
});

closeNav.addEventListener("click", () => {
    listContainer.classList.remove("nav-toggle");
    openNav.classList.remove("hidden");
    closeNav.classList.add("hidden");
});

addEventListener("DOMContentLoaded", () => {
    closeNav.classList.add("hidden");
});

// Fixed nav;

const navBarHeight = navBar.getBoundingClientRect().height;
addEventListener("scroll", () => {
    if (pageYOffset > navBarHeight){
        // pageContent.style.paddingTop = `${navBarHeight}px`
        navBar.classList.add("sticky-nav");
    }
    else{
        navBar.classList.remove("sticky-nav")
        // pageContent.style.paddingTop = `0px`;
    }
})