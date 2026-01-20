const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel img');

let index = 0;

function updateSlide() {
    const slideWidth = window.innerWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

window.addEventListener('resize', updateSlide);

setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlide();
}, 4000);