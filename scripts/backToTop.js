window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    const timeline = document.getElementById('timeline');

    
    var windowHeight = window.innerHeight;

    if (window.scrollY > 10000) {
        backToTopButton.classList.add('show'); // Muestra el botón
    } else {
        backToTopButton.classList.remove('show'); // Oculta el botón
    }

    if (window.scrollY > 800 && this.window.scrollY < 10000) {
        timeline.classList.add('show'); // Muestra la Timeline
    } else {
        timeline.classList.remove('show'); // Muestra la Timeline
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}