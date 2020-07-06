const container = document.getElementById('container');
const text = document.getElementById('text');
const pointer = document.querySelector('div');

// El tiempo de inspirar y espirar
const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

//Animaciones
const breathAnimation = () => {
  text.innerText = 'INSPIRA';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'AGUANTA';

    setTimeout(() => {
      text.innerText = 'ESPIRA';
      container.className = 'container shrink';
    }, holdTime); //La pausa entre inspiración y espiración
  }, breatheTime);
};

breathAnimation();
setInterval(() => {
  breathAnimation();
}, totalTime); // El tiempo total de la respiración

// Animación del Mouse
document.addEventListener('mousemove', event => {
  const docEl = document.documentElement.style;
  const X = event.pageX;
  const Y = event.pageY;
  docEl.setProperty('--cursorX', `${X}px`);
  docEl.setProperty('--cursorY', `${Y}px`);
  pointer.style.left = `${X}px`;
  pointer.style.top = `${Y}px`;
});
