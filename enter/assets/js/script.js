let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden'); // Desplazamiento hacia abajo
    } else {
        header.classList.remove('hidden'); // Desplazamiento hacia arriba
    }
    lastScrollTop = scrollTop;
});

