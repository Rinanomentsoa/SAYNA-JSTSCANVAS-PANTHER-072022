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
