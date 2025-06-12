// Initialize the carousel with custom settings
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add typing effect to the declaration
    const declarationText = document.querySelector('.declaration .card-text');
    const originalText = declarationText.innerHTML;
    declarationText.innerHTML = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            declarationText.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect when the declaration is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(declarationText);

    // Add floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts every 300ms
    setInterval(createHeart, 300);

    // Polaroid Carousel logic
    const images = [
        { src: 'imagens/imagem1.jpg', alt: 'Imagem 1' },
        { src: 'imagens/imagem2.jpg', alt: 'Imagem 2' },
        { src: 'imagens/imagem3.jpg', alt: 'Imagem 3' },
        // Adicione mais imagens se quiser
    ];

    let current = 0; // central image index

    function updatePolaroids() {
        const left = document.querySelector('.polaroid-left img');
        const center = document.querySelector('.polaroid-center img');
        const right = document.querySelector('.polaroid-right img');
        const total = images.length;
        left.src = images[(current - 1 + total) % total].src;
        left.alt = images[(current - 1 + total) % total].alt;
        center.src = images[current % total].src;
        center.alt = images[current % total].alt;
        right.src = images[(current + 1) % total].src;
        right.alt = images[(current + 1) % total].alt;
    }

    document.getElementById('prevBtn').addEventListener('click', function() {
        current = (current - 1 + images.length) % images.length;
        updatePolaroids();
    });
    document.getElementById('nextBtn').addEventListener('click', function() {
        current = (current + 1) % images.length;
        updatePolaroids();
    });
    updatePolaroids();
}); 