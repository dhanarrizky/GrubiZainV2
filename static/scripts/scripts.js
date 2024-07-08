const bars = document.querySelector('#bars');
const bars_links = document.querySelector('.navbar__links');

function toggleBarsLinks() {
    if (bars_links.style.display === "flex") {
        bars_links.style.display = "none";
    } else {
        bars_links.style.display = "flex";
    }
}

function checkWindowSize() {
    if (window.innerWidth >= 768) {
        bars_links.style.display = "flex"; 
    } else {
        bars_links.style.display = "none"; 
    }
}

bars.addEventListener('click', toggleBarsLinks);
window.addEventListener('resize', checkWindowSize);

checkWindowSize();
