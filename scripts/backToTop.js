window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');

    if (window.scrollY > 11500) {
        backToTopButton.classList.add('show'); // Muestra el botón
    } else {
        backToTopButton.classList.remove('show'); // Oculta el botón
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}