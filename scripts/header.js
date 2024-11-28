var scrollPos = 0;
window.addEventListener('scroll', function () {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // Si se está desplazando hacia arriba
        this.document.getElementById("parteSuperior").style.top = "0"
    }
    else {
        // Si se está desplazando hacia abajo
        this.document.getElementById("parteSuperior").style.top = "-200px"

        //Si llega al footer
        if (window.scrollY > 10500) {
            this.document.getElementById("parteSuperior").style.top = "0"
        } else {
            this.document.getElementById("parteSuperior").style.top = "-200px"
        }
    
    }


    scrollPos = (document.body.getBoundingClientRect()).top;
});