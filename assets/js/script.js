const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
};

