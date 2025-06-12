// Carrossel Polaroid isolado
const images = [
    { src: 'imagens/imagem1.jpg', alt: 'Imagem 1' },
    { src: 'imagens/imagem2.jpg', alt: 'Imagem 2' },
    { src: 'imagens/imagem3.jpg', alt: 'Imagem 3' },
    { src: 'imagens/imagem4.jpg', alt: 'Imagem 4' },
    { src: 'imagens/imagem5.jpg', alt: 'Imagem 5' },
    { src: 'imagens/imagem6.jpg', alt: 'Imagem 6' },
    { src: 'imagens/imagem7.jpg', alt: 'Imagem 7' },
    { src: 'imagens/imagem8.jpg', alt: 'Imagem 8' },
    { src: 'imagens/imagem9.jpg', alt: 'Imagem 9' },
    { src: 'imagens/imagem10.jpg', alt: 'Imagem 10' },
    { src: 'imagens/imagem11.jpg', alt: 'Imagem 11' },
    { src: 'imagens/imagem12.jpg', alt: 'Imagem 12' },
];

let current = 0; // central image index

function animatePolaroids(direction) {
    const left = document.querySelector('.polaroid-left img');
    const center = document.querySelector('.polaroid-center img');
    const right = document.querySelector('.polaroid-right img');
    // Fade out
    left.classList.add('fade-anim');
    center.classList.add('fade-anim');
    right.classList.add('fade-anim');
    // Zoom anim para o centro
    center.classList.add('zoom-anim');
    setTimeout(() => {
        updatePolaroids();
        left.classList.remove('fade-anim');
        center.classList.remove('fade-anim', 'zoom-anim');
        right.classList.remove('fade-anim');
    }, 400);
    // Coração fofo
    showCuteHeart();
}

function showCuteHeart() {
    const polaroid = document.querySelector('.polaroid-center');
    const heart = document.createElement('div');
    heart.className = 'cute-heart';
    heart.innerHTML = '❤';
    polaroid.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 800);
}

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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('prevBtn').addEventListener('click', function() {
        current = (current - 1 + images.length) % images.length;
        animatePolaroids('left');
    });
    document.getElementById('nextBtn').addEventListener('click', function() {
        current = (current + 1) % images.length;
        animatePolaroids('right');
    });
    updatePolaroids();

    // Funcionalidade de clique para expandir a imagem
    const polaroidImages = document.querySelectorAll('.polaroid img');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const expandedImage = document.getElementById('expandedImage');

    polaroidImages.forEach(img => {
        img.addEventListener('click', function() {
            expandedImage.src = this.src;
            imageModal.show();
        });
    });
}); 