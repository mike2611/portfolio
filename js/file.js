const projects = {
  odessa: {
    name: 'Odessa Project',
    description: `This project is a table for users. 
    Where users can be added, deleted, or modified.`,
    image: 'images/odessa.png',
    technologies: ['HTML', 'CSS', 'TypeScript'],
    live: 'https://mike2611.github.io/proyecto-odessa/table',
    link: 'https://github.com/mike2611/proyecto-odessa',
  },
  sketch: {
    name: 'Etch-a-Sketch',
    description: 'This project is something between a sketchpad and an Etch-A-Sketch.',
    image: 'images/etch.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://mike2611.github.io/etch-a-sketch/',
    link: 'https://github.com/mike2611/etch-a-sketch',
  },
  youtube: {
    name: 'Youtube Clone',
    description: 'This project is a clone of a youtube desktop page.',
    image: 'images/youtube.png',
    technologies: ['HTML', 'CSS'],
    live: 'https://mike2611.github.io/youtube-page/',
    link: 'https://github.com/mike2611/youtube-page',
  },
  rps: {
    name: 'Youtube Clone',
    description: `In this project, you play against the computer a simple 
    game of rock, paper, scissors first to five wins!`,
    image: 'images/rps.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://mike2611.github.io/rock-paper-scissor/',
    link: 'https://github.com/mike2611/rock-paper-scissor/blob/main/README.md',
  },
  google: {
    name: 'Youtube Clone',
    description: 'This project is a clone of Google home page.',
    image: 'images/google.png',
    technologies: ['HTML', 'CSS'],
    live: 'https://mike2611.github.io/google-homepage/',
    link: 'https://github.com/mike2611/google-homepage',
  },
  cars: {
    name: 'Car Catalog',
    description: `This project is a catalog for cars. 
    Where cars can be added, deleted, or get their registration changed.`,
    image: 'images/cars.png',
    technologies: ['HTML', 'CSS', 'TypeScript'],
    live: 'https://mike2611.github.io/mi-catalogo/',
    link: 'https://github.com/mike2611/mi-catalogo',
  },
};

const hamburgerBtn = document.querySelector('#header-menu');
const closeBtn = document.querySelector('#header-menu-btn');
const menuItems = document.querySelectorAll('.menu-item');

function showCloseMenu() {
  const menuSection = document.querySelector('#menu-nav');
  const nav = document.querySelector('#nav-menu');
  const headerName = document.querySelector('#header-name a');

  menuSection.classList.toggle('d-none');
  menuSection.classList.toggle('d-flex');
  nav.classList.toggle('d-none');
  headerName.classList.toggle('d-none');
  headerName.classList.toggle('d-flex-center');
}

hamburgerBtn.addEventListener('click', showCloseMenu);
closeBtn.addEventListener('click', showCloseMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', showCloseMenu);
});