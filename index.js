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
