// PREVIEW ANIMATION
const carouselImages = document.querySelector('.carousel__images');
const images = carouselImages.querySelectorAll('img');
const imageCount = images.length;
let transformPosition = 0;

const totalWidth = carouselImages.offsetWidth * imageCount;

images.forEach((image) => {
  carouselImages.appendChild(image.cloneNode(true));
});

function animateScroll() {
  transformPosition += 1;
  if (transformPosition >= totalWidth) {
    transformPosition = 0;
  }
  carouselImages.style.transform = `translateX(-${transformPosition}px)`;
  requestAnimationFrame(animateScroll);
}

animateScroll();

// FORM VALIDATION
const form = document.getElementById('contactForm');
const errorContainer = document.getElementById('errorContainer');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();


    errorContainer.innerHTML = '';


    if (!name || !email || !message) {
        displayError('All fields are required');
        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        displayError('Please enter a valid email address');
        return;
    }

    form.submit();
});

function displayError(message) {
    const errorParagraph = document.createElement('p');
    errorParagraph.classList.add('error-message');
    errorParagraph.textContent = message;
    errorContainer.appendChild(errorParagraph);
}