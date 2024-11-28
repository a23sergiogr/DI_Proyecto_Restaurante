window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    const timeline = document.getElementById('timeline');

    
    var windowHeight = window.innerHeight;

    if (window.scrollY > 10500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show'); 
    }

    if (window.scrollY > 800 && this.window.scrollY < 10000) {
        timeline.classList.add('show'); 
    } else {
        timeline.classList.remove('show'); 
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}