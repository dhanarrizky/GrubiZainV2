const bars = document.querySelector('#bars');
const hidebars = document.querySelector('.hide__bars');

bars.addEventListener('click', () => {
    if(hidebars.classList.contains('active')){
        hidebars.classList.remove('active');
    } else {
        hidebars.classList.add('active');
    }
});

// active