const images = [
  './Assets/img/mafia.jpg',
  './Assets/img/puta.jpg',
  './Assets/img/heli.jpg',
  './Assets/img/mafia.jpg'

];

let currentIndex = 0;

const background1 = document.getElementById('background1');
const background2 = document.getElementById('background2');

function changeBackgroundImage() {
  const currentBackground = currentIndex % 2 === 0 ? background1 : background2;
  const nextBackground = currentIndex % 2 === 0 ? background2 : background1;

  nextBackground.style.backgroundImage = `url(${images[currentIndex]})`;
  nextBackground.classList.add('visible');
  
  setTimeout(() => {
      currentBackground.classList.remove('visible');
  }, 60); // Espera el tiempo de la transición antes de esconder la imagen anterior

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000); // Cambia de imagen cada 3 segundos

// Inicializar el primer fondo
background1.style.backgroundImage = `url(${images[0]})`;
background1.classList.add('visible');
currentIndex = 1;
