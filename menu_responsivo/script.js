// Selecionando elementos
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// Função para alternar o menu
function toggleMenu() {
    // Alternar 'active' em AMBOS elementos
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');

    // Update ARIA attribute
    const isOpen = menuToggle.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
}

// Event listener for the hamburguer button
menuToggle.addEventListener('click', toggleMenu);

// Close menu when clickng on any link
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});