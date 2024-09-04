document.querySelectorAll('.section h2').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.parentElement;
        section.classList.toggle('open');
        
        const content = section.querySelector('.section-content');

        if (section.classList.contains('open')) {
            content.style.display = 'block';
            content.style.opacity = 0;
            content.style.height = '0px';
            setTimeout(() => {
                content.style.transition = 'opacity 0.6s ease, height 0.6s ease';
                content.style.opacity = 1;
                content.style.height = content.scrollHeight + 'px';
            }, 10);
        } else {
            content.style.transition = 'opacity 0.6s ease, height 0.6s ease';
            content.style.opacity = 0;
            content.style.height = content.scrollHeight + 'px';
            setTimeout(() => {
                content.style.height = '0px';
            }, 10);
            setTimeout(() => {
                content.style.display = 'none';
            }, 600);
        }
    });
});
