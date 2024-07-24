const getElement = (element) => {
    const returnedElement = document.querySelector(element);
    if (!returnedElement) throw new Error(`${element} not found!!`);
    
    return returnedElement;
};
// Select items
const openNav = getElement(".open-nav");
const closeNav = getElement(".close-nav");
const listContainer = getElement(".list-container")

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
})