const container = document.getElementById('container');
const text = document.getElementById('text');
const pointer = document.querySelector('div');

// El tiempo de inspirar y espirar
const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

//Animaciones
const breathAnimation = () => {
  text.innerText = 'Inspira';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Aguanta';

    setTimeout(() => {
      text.innerText = 'Espira';
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
  let upX = event.pageX;
  let upY = event.pageY;
  pointer.style.top = `${upY - 100}px`;
  pointer.style.left = `${upX - 100}px`;
});
