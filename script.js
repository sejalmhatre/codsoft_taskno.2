// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlighting current section in navigation
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = section.offsetTop + section.clientHeight - 50;

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});
