const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;

const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

// Debut du defilement 
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected'); // Marque le premier point comme actif
    }
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagline.innerHTML = slides[currentIndex].tagLine;

    // Mettre le point actif
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}
// clics avec les fleche 
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateSlide();
});
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; 
    updateSlide();
});
updateSlide();
