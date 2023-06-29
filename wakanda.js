// ZOOM de 10 px sur les titres H1 et H2 en Hover
const titles = document.querySelectorAll('h1, h2');
titles.forEach(title => {
  title.addEventListener('mouseover', () => {
    title.style.fontSize = parseInt(window.getComputedStyle(title).fontSize) + 10 + 'px';
  });

  title.addEventListener('mouseout', () => {
    title.style.fontSize = '';
  });
});

// Zoom sur des images spécifiques en Hover
const imageWakanda = document.querySelectorAll('.zoom-wakanda');
imageWakanda.forEach(image => {
  image.addEventListener('mouseover', () => {
    // Appliquer la transformation lorsqu'elle est survolée
    image.style.width = parseInt(window.getComputedStyle(image).width) + 75 + 'px';
    image.style.height = parseInt(window.getComputedStyle(image).height) + 45 + 'px';
  });

  image.addEventListener('mouseout', () => {
    // Rétablir les dimensions d'origine lorsque le survol se termine
    image.style.width = '';
    image.style.height = '';
  });
});

//Animations fade-in gauche à droite au fur et à mesure du scrolling
function animateOnScroll() {
  const slideElements = document.querySelectorAll('.animation-slide');

  slideElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      element.classList.add('fade-in-left');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);

