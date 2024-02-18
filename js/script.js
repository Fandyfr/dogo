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

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageContainer = document.querySelector('.image-container');

    let scrollPosition = 0;
    const scrollAmount = 200; // Jumlah scroll per klik (dapat disesuaikan)

    // Event listener untuk tombol "Prev"
    prevBtn.addEventListener('click', function() {
        scrollPosition -= scrollAmount;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        imageContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    // Event listener untuk tombol "Next"
    nextBtn.addEventListener('click', function() {
        scrollPosition += scrollAmount;
        if (scrollPosition > imageContainer.scrollWidth - imageContainer.clientWidth) {
            scrollPosition = imageContainer.scrollWidth - imageContainer.clientWidth;
        }
        imageContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
});
