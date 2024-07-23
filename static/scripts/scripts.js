const bars = document.querySelector('#bars');
const hidebars = document.querySelector('.hide__bars');
// checking scrolling  position
const sections = document.querySelectorAll(".sections");
const navLinks = document.querySelectorAll(".navbar_link--links a");
// adding and removeing class active on hidden bar
const navHiddenLinks = document.querySelectorAll('.hide__bars__links');


const methodAddRemoveActiveClass = () => {
    hidebars.classList.toggle('active');
}


bars.addEventListener('click', () => {
    methodAddRemoveActiveClass();
});


navHiddenLinks.forEach(btn => {
    btn.addEventListener('click', () => {
        methodAddRemoveActiveClass();
    });
});


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
})


function checkWidth() {
    if (window.innerWidth >= 790) {
        hidebars.classList.remove('active');
    }
}

window.addEventListener('resize', checkWidth);
checkWidth();


// product scrolling

const imgLists = document.querySelectorAll('.image-list .img-content img');
const imgListClient = document.querySelector('.image-list');
const prevBtn = document.querySelector('#prev-slide');
const nextBtn = document.querySelector('#next-slide');

imgLists.forEach(i => {
    console.log(i.getAttribute('src'));
});

console.log('client width : ', imgListClient.clientWidth);
console.log('scroll width : ', imgListClient.scrollWidth);

let index = 0;
let maxIndex = Math.ceil(imgListClient.scrollWidth / imgListClient.clientWidth);

nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        imgListClient.scrollBy({left: imgListClient.clientWidth, behavior: "smooth"});
    }
    console.log('Index:', index);
    console.log('Max Index:', maxIndex);
});

prevBtn.addEventListener('click', () => {
    if (index > 1) {
        index--;
        imgListClient.scrollBy({left: -imgListClient.clientWidth, behavior: "smooth"});
    }
    console.log('Index:', index);
    console.log('Max Index:', maxIndex);
});
