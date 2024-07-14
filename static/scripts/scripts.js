const bars = document.querySelector('#bars');
const hidebars = document.querySelector('.hide__bars');

const methodAddRemoveActiveClass = () => {
    hidebars.classList.toggle('active');
}

bars.addEventListener('click', () => {
    methodAddRemoveActiveClass();
});

// Menambahkan dan menghapus kelas aktif pada daftar bar tersembunyi
const navHiddenLinks = document.querySelectorAll('.hide__bars__links');
navHiddenLinks.forEach(btn => {
    btn.addEventListener('click', () => {
        methodAddRemoveActiveClass();
    });
});
