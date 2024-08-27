
const footer = document.querySelector('footer');
const darkModeButton = document.getElementById('toggleDarkMode');


const socialMediaIcons = document.querySelectorAll('.social-media i, .social-media svg');


socialMediaIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#8b8b8b79'; // 
    });

    icon.addEventListener('mouseout', () => {
        icon.style.color = '#8b8b8b79'; 
    });
});


darkModeButton.addEventListener('click', () => {
    footer.classList.toggle('dark-mode');
});

