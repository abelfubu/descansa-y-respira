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
  docEl.setProperty('--cursorX', `${event.pageX}px`);
  docEl.setProperty('--cursorY', `${event.pageY}px`);
  pointer.style.left = `${event.pageX}px`;
  pointer.style.top = `${event.pageY}px`;
});
