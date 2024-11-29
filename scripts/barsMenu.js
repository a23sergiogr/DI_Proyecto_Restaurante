document.addEventListener('DOMContentLoaded', () => {
    const barContainer = document.querySelector('.bar-container');
    const dropdownMenu = document.querySelector('.bar-container .dropdown');
    const menuOptions = document.querySelectorAll('.menu-option');

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
});