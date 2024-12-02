
document.addEventListener('DOMContentLoaded', () => {
    const barContainer = document.querySelector('.bar-container');
    const dropdownMenu = document.querySelector('.bar-container .dropdown');
    const menuOptions = document.querySelectorAll('.menu-option');
    const flags = document.querySelectorAll('.flagLenguage');

    barContainer.addEventListener('click', () => {
                dropdownMenu.classList.toggle('hidden');
                barContainer.classList.toggle('active');
        
                menuOptions.forEach(option => {
                    option.classList.toggle('hidden');
                });

        if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'flex';
            dropdownMenu.style.flexDirection = 'column';
        }
    });

    flags.forEach(flag => {
        flag.addEventListener('click', (event) => {
            event.stopPropagation();

            // Desactiva todas las banderas
            flags.forEach(f => {
                f.classList.remove('active', 'custom-colors');
                f.classList.add('inactive');
            });

            // Activa la bandera seleccionada y aplica el filtro
            flag.classList.remove('inactive');
            flag.classList.add('active', 'custom-colors');
        });
    });

    // Opcional: Establece una bandera como activa por defecto
    if (flags.length > 0) {
        flags[0].classList.remove('inactive');
        flags[0].classList.add('active', 'custom-colors');
    }
});

