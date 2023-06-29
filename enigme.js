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
      document.getElementById("answerForm").reset(); // Réinitialiser le formulaire
    } else {
      alert("Veuillez insérer une réponse"); // Afficher un message si une valeur est incomplète
    }
  }); 
  function showPopup() {  // Afficher le popup box
    document.getElementById("popupBox").style.display = "block";}

    //ENIGME SUIVANTE
var nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', function() {
  changeEnigme(); 
  hidePopup();
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
    nextButton.removeEventListener('click', changeEnigme); // Supprimer l'événement de clic
    nextButton.addEventListener('click', function() {
      window.location.href = "index.html";
    });
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




