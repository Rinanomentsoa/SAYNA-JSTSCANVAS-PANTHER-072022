// ZOOM de 10 px sur les titres H1 et H2 en Hover
const titles = document.querySelectorAll('h1, h2','span');
titles.forEach(title => {
  title.addEventListener('mouseover', () => {
    title.style.fontSize = parseInt(window.getComputedStyle(title).fontSize) + 10 + 'px';
  });

  title.addEventListener('mouseout', () => {
    title.style.fontSize = '';
  });
});

// Zoom sur des images spécifiques en Hover
const images = document.querySelectorAll('.zoom-image');
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
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

   //Scrolling progressif lorsqu’on effectue un clic sur les boutons “Voir plus” vers naissance d'un Prince
   document.getElementById("more-info").addEventListener("click", function() {
    scrollToSection("prince-birth");
  });
  function scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const sectionOffsetTop = sectionElement.offsetTop;
      window.scrollTo({
        top: sectionOffsetTop,
        behavior: "smooth"
      });
    }
  }
  window.addEventListener('scroll', animateOnScroll);


  //POPUP BOX
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    // Vérification des informations du formulaire
    var nameInput = document.getElementsByClassName("name-input")[0].value;
    var emailInput = document.getElementsByClassName("mail-input")[0].value;
    var messageInput = document.getElementsByClassName("message-input")[0].value;
  
    if (nameInput && emailInput && messageInput) {
      showPopup(); // Afficher le popup box si le formulaire est valide
      document.getElementById("myForm").reset(); // Réinitialiser le formulaire
    } else {
      alert("Veuillez remplir tous les champs."); // Afficher un message si une valeur est incomplète
    }
  });
// Afficher le popup box
  function showPopup() {  
    document.getElementById("popupBox").style.display = "block";}
//Fermer le popup box après 10 secondes
var closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", function() {
  hidePopup(); 
});
// Fonction pour fermer le popup après 10 secondes
function closePopupAfterDelay() {
  setTimeout(function() {
    hidePopup(); 
  }, 10000); 
}

function hidePopup() {
  document.getElementById("popupBox").style.display = "none";
}
closePopupAfterDelay();

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
image.src = "Assets/logo2.png";

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


//SLIDER
//structuration des données en Array : 
let sliderData = [
  {
    imageSrc: 'Assets/Pantherhome2.png',
    articleTitle: 'KILLMONGER',
    sliderArticleContent: 'La sauvagerie de N\'Jadaka alors qu\'il servait dans une unité d\'opérations noires de l\'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir.'
  },
  {
    imageSrc: 'Assets/Pantherhome3.png',
    articleTitle: 'OKOYE',
    sliderArticleContent: 'Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T\'Challa, elle se joint à lui dans de nombreuses aventures.'
  },
  {
    imageSrc: 'Assets/Pantherhome4.png',
    articleTitle: 'SHURI',
    sliderArticleContent: 'Shuri est la Princesse du Wakanda, la fille de T\'Chaka et de Ramonda, la sœur de T\'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère.'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_4.png',
    articleTitle: 'NAKIA',
    sliderArticleContent: 'Nakia est une membre des Chiens de Guerre et l\'amoureuse de T\'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider.'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_5.png',
    articleTitle: 'RAMONDA',
    sliderArticleContent: 'Ramonda est la Reine Mère du Wakanda, épouse de T\'Chaka et mère de T\'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T\'Challa et prit le contrôle du trône.'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_6.png',
    articleTitle: 'W’kabi',
    sliderArticleContent: 'W\'Kabi est l\'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l\'ancien meilleur ami de T\'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l\'homme responsable de la mort de ses parents, W\'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_7.png',
    articleTitle: 'm’baku',
    sliderArticleContent: 'M\'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s\'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T\'Challa, mais échoua à le vaincre lors de l\'affrontement rituel pour le trône, avant de l\'aider à défendre le Wakanda face à Erik Killmonger.'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_8.png',
    articleTitle: 'ZURI',
    sliderArticleContent: 'Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T\'Chaka à propos de sa gestion de la mort de N\'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T\'Challa reprenait le trône.'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_9.png',
    articleTitle: 'EVERETT KENNETH ROSS',
    sliderArticleContent: 'L\'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l\'Antiterrorisme pour la Force Conjointe Anti-Terroriste. Après avoir quitté la Force Conjointe Anti-Terroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés.'
  },
  {
    imageSrc: 'Assets/Pantherhome_slider_10.png',
    articleTitle: 'ULYSSE KLAUE',
    sliderArticleContent: 'Ulysses Klaue est un criminel international, gangster et vendeur d\'armes sur le marché noir. En 1992, il collabora avec N\'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu\'il soit parvenu à voler et à s\'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais.'
  }
];

//Fonction de scroll horizontal

let slideContainer = document.querySelector('.slide-container');
let sliderIndex = 0;

function updateSlider() {
  var currentIndex = sliderIndex % sliderData.length;
  var nextIndex = (sliderIndex + 1) % sliderData.length;
  var nextNextIndex = (sliderIndex + 2) % sliderData.length;

  slideContainer.innerHTML = `
  
    <img id="bigger-image" class="slider first" src="${sliderData[currentIndex].imageSrc}">
    <div class="slide-next">
      <article class="article">
        <h1 class="article-title">${sliderData[currentIndex].articleTitle}</h1>
        <p class="slider-article-content">${sliderData[currentIndex].sliderArticleContent}</p>
        <p class="slider-more">Voir plus &gt;</p>
      </article>
      <img class="slider" src="${sliderData[nextIndex].imageSrc}">
      <article class="article">
        <h1 class="article-title">${sliderData[nextIndex].articleTitle}</h1>
        <p class="slider-article-content">${sliderData[nextIndex].sliderArticleContent}</p>
        <p class="slider-more">Voir plus &gt;</p>
      </article>
      <img class="slider" src="${sliderData[nextNextIndex].imageSrc}">
    </div>
  `;
}

function handleSlideNext() {
  sliderIndex++;
  updateSlider();
}

// Initial update
updateSlider();
let slideNextButton = document.getElementById('nextButton');
slideNextButton.addEventListener('click', handleSlideNext);

