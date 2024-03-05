function setActive(element) {
    var links = document.querySelectorAll('.nav-links li a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    element.classList.add('active');
    var parent = element.parentElement;
    parent.removeChild(element);
    parent.prepend(element);
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;

                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.getElementById('scrollToAbout').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
});