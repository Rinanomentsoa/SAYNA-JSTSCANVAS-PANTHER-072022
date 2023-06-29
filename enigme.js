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


//ENIGME
  document.getElementById("answerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    var answerInput = document.getElementsByClassName("answer-input")[0].value;

    if (answerInput) {
      showPopup(); 
      changeEnigme();
      document.getElementById("answerForm").reset(); // Réinitialiser le formulaire
    } else {
      alert("Veuillez insérer une réponse"); // Afficher un message si une valeur est incomplète
    }
  }); 
  function showPopup() {  // Afficher le popup box
    document.getElementById("popupBox").style.display = "block";}

    //ENIGME SUIVANTE
let nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', function() {
  if(nextButton.textContent==='REVENIR À L\'ACCUEIL'){
    window.location.href = "index.html";  
  } else{
    hidePopup(); 
  };
});

// Passer à l'énigme suivante et changer les contenus
function changeEnigme() {
  var enigmeNumber = document.getElementById('enigme-number');
  var enigmeQuestion = document.getElementById('enigme-question');
  var enigmeText = document.getElementById('enigme-text');
  var floatingText = document.getElementById('floating-text');
  var popupBox = document.getElementById('popupBox');
  var popupText = popupBox.querySelector('.popup p');
  var nextButton = popupBox.querySelector('#nextButton button');

  // Changement conditionnel  des contenus des éléments 
  if (enigmeNumber.textContent === '1') {
    enigmeNumber.textContent = '2';
    enigmeQuestion.textContent = 'Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de “chiffrement par décalage”. L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :';
    enigmeText.textContent='Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a\'ioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza';
    enigmeText.style.fontFamily='Cantarell';
    enigmeText.style.fontSize='0.8rem';
    enigmeText.style.color='#ffffff';
    enigmeText.style.lineHeight='1.2rem';
    floatingText.textContent = 'Le savais tu ? \n Plusieurs sources s\’entendent pour dire que la lettre la plus utilisée en français est la lettre E.En pourcentage de fréquence,la lettre est utilisée à 14% dans une phrase.Et si tu regardais quel symbole revient le plus souvent ?';
  } else if (enigmeNumber.textContent === '2') {
    enigmeNumber.textContent = '3';
    enigmeQuestion.textContent = 'Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?';
    enigmeText.textContent='01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010';
    enigmeText.style.fontFamily='Cantarell';
    enigmeText.style.fontSize='0.8rem';
    enigmeText.style.color='#ffffff';
    enigmeText.style.lineHeight='1.2rem';
    floatingText.textContent = 'Le savais tu ? \n Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C\'est en quelque sorte l\'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.';
  } else { // Lorsque toutes les énigmes ont été affichées
    startCountdown();
    popupText.textContent = 'TON INITIATION EST TERMINÉE';
    nextButton.textContent = 'REVENIR À L\'ACCUEIL';
  }
}
//fermer PopupBox
function hidePopup() {
  document.getElementById("popupBox").style.display = "none";
}

//compte à rebours
function startCountdown() {
  var comingSoonSection = document.getElementById('comingSoonSection');
  var countdownDate = new Date('2023-06-30T00:01:00Z').getTime(); // date de fin du compte à rebours (30/06/2023 à 00:01:00)
  // modifier style de quelques éléments 
var popupParagraph = document.querySelector('.popup p');
popupParagraph.style.paddingTop = '5%'; 
var nextButton = document.querySelector('#nextButton');
nextButton.style.marginBlock = '1rem'; 
popupParagraph.style.paddingBlock = '.5%';

  // MAJ compte à rebours toutes les secondes
  var countdownTimer = setInterval(function() {
    var now = new Date().getTime(); // date et l'heure actuelles
    var distance = countdownDate - now; // Différence entre la date de fin et la date actuelle

    // Calculer les heures, minutes et secondes restantes
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formater les heures, minutes et secondes
    var formattedTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
    document.getElementById('countdownTimer').textContent = formattedTime; // Afficher dans h1

    comingSoonSection.style.display = 'flex'; 
  
  }, 1000);
}

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




