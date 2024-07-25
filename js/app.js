const getElement = (element) => {
    const returnedElement = document.querySelector(element);
    if (!returnedElement) throw new Error(`${element} not found!!`);
    
    return returnedElement;
};
// Select items
const navBar = getElement(".nav-bar");
const openNav = getElement(".open-nav");
const closeNav = getElement(".close-nav");
const listContainer = getElement(".list-container");
const links = document.querySelectorAll(".hyperlinks");


// Fixed nav;

const navBarHeight = navBar.getBoundingClientRect().height;
// Hide navbar when link is clicked
links.forEach((link)=> {
    link.addEventListener("click", (e) => { 
        e.preventDefault();
        const navBarHeight = navBar.getBoundingClientRect().height;
        const currentElement = e.currentTarget.getAttribute("href").slice(1);
        const elementTarget = getElement(`#${currentElement}`)
        let linkContainerHeight = listContainer.getBoundingClientRect().height;
        const distancefromTop = elementTarget.offsetTop;
        let scrollHeight = distancefromTop - navBarHeight;
        
        if (!navBar.classList.contains("sticky-nav")) {
            scrollHeight = scrollHeight ;
        }
        
        if(navBarHeight > 90) {
            scrollHeight = scrollHeight + linkContainerHeight
            console.log(scrollHeight);
        }
        
        scrollTo({ top: scrollHeight, left:0 });
        console.log(linkContainerHeight);
        listContainer.classList.remove("nav-toggle");
        openNav.classList.remove("hidden");
        closeNav.classList.add("hidden");

    })
})

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
addEventListener("scroll", () => {
    if (pageYOffset > navBarHeight){
        navBar.classList.add("sticky-nav");
    }
    else{
        navBar.classList.remove("sticky-nav")
    }
    console.log(scrollY);
})