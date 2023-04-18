const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-menu');
    const menuIcon = menuBtn.querySelector('.menu-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
