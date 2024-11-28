document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    const flags = document.querySelectorAll('.flag');
    const imageStates = new Map(); 

    // Configurar límites personalizados para cada imagen por su ID
    const movementLimits = {
        baraImage: 90,         
        cheapBedroomImage: 100, 
        sausagesImage: 200,     
        biscuitsImage: 430,    
    };

    // Inicializar el estado de visibilidad de cada imagen
    images.forEach(image => imageStates.set(image, false));

    // Función para mover imágenes visibles
    const handleScroll = () => {
        images.forEach(image => {
            if (imageStates.get(image)) {
                const scrollY = window.scrollY;
                const limit = movementLimits[image.id] || 50; // Por defecto, 50px si no está en el objeto
                const translateY = Math.min(scrollY * 0.2, limit);
                image.style.transform = `translateY(${translateY}px)`;
            }
        });
    };

    // Intersection Observer para detectar si las imágenes están en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const imageFlag = entry.target;
            const relatedImage = imageFlag.previousElementSibling.querySelector('img');

            if (entry.isIntersecting) {
                imageStates.set(relatedImage, true); 
            } else {
                imageStates.set(relatedImage, false); 
            }
        });
    });

    // Configurar el observer para cada flag
    flags.forEach(flag => observer.observe(flag));

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);
});