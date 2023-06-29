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

//animation Canvas
// Créer un nouveau canvas
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Obtenir le contexte de rendu 2D du canvas
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var image = new Image();
image.src = "Assets/logo.png";

var ball = {
  x: 100,
  y: 100,
  vx: .8,
  vy: .7,
  width: 80,
  height: 80,
  trailLength: 0.2,
  draw: function() {
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }
};

function clear() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  // Appliquer un effet de fondu pour créer la traînée persistante
  ctx.globalAlpha = 0.3;
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';

  // Dessiner la balle principale
  ball.draw();
  ctx.drawImage(image, ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
  // Dessiner la traînée en appliquant un effet de fondu sur la balle
  ctx.globalAlpha = 0.1; // Ajustez l'opacité de la traînée selon vos préférences
  ctx.fillStyle = 'rgba(0, 0, 255, 1)';
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  ctx.globalAlpha = 1; // Rétablir l'opacité normale pour la balle principale

  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}
image.onload = function() {
  draw();
};


canvas.addEventListener('mousemove', function(e){
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click",function(e){
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout",function(e){
  window.cancelAnimationFrame(raf);
  running = false;
});

// Styles pour couvrir tout le contenu de la balise <main>
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none';

// Fonction pour redimensionner le canvas lorsque la fenêtre est redimensionnée
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Écouter l'événement de redimensionnement de la fenêtre
window.addEventListener('resize', resizeCanvas);

// Démarrer l'animation
draw();