const projects = {
  user: {
    name: 'Users Register',
    description: `This project is a table for users. 
    Where users can be added, deleted, or modified.`,
    image: 'images/user.png',
    technologies: ['HTML', 'CSS', 'TS'],
    live: 'https://mike2611.github.io/users-register/',
    link: 'https://github.com/mike2611/users-register',
  },
  todo: {
    name: 'ToDo-List',
    description: 'This project is a ToDo-List where the user can add, delete and edit tasks, tasks can be marked as completed and all completed tasks can be deleted',
    image: 'images/todo.png',
    technologies: ['HTML', 'CSS', 'JS'],
    live: 'https://mike2611.github.io/todo-list-mv/',
    link: 'https://github.com/mike2611/todo-list-mv',
  },
  sketch: {
    name: 'Etch-a-Sketch',
    description: `This project is something between a 
    sketchpad and an Etch-A-Sketch.`,
    image: 'images/etch.png',
    technologies: ['HTML', 'CSS', 'JS'],
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
    name: 'Rock Paper Scissors',
    description: `In this project, you play against the computer a simple 
    game of rock, paper, scissors first to five wins!`,
    image: 'images/rps.png',
    technologies: ['HTML', 'CSS', 'JS'],
    live: 'https://mike2611.github.io/rock-paper-scissor/',
    link: 'https://github.com/mike2611/rock-paper-scissor/blob/main/README.md',
  },
  google: {
    name: 'Google Clone',
    description: 'This project is a clone of Google home page.',
    image: 'images/google.png',
    technologies: ['HTML', 'CSS'],
    live: 'https://mike2611.github.io/google-homepage/',
    link: 'https://github.com/mike2611/google-homepage',
  },
  cars: {
    name: 'Car Catalog',
    description: `This project is a catalog for cars. Where cars can be added,
     deleted, or get their registration changed.`,
    image: 'images/cars.png',
    technologies: ['HTML', 'CSS', 'TS'],
    live: 'https://mike2611.github.io/mi-catalogo/',
    link: 'https://github.com/mike2611/mi-catalogo',
  },
};

const containerCards = document.querySelector('#work-cards');
const cards = document.querySelectorAll('.work-card');
const card = cards[0];

const firstCard = document.querySelector('#first-card');
firstCard.firstElementChild.src = projects.user.image;
const firstCardChilds = firstCard.childNodes;
firstCardChilds[3].firstElementChild.innerText = projects.user.name;
firstCardChilds[3].querySelector('#info-card').innerText = projects.user.description;
const firstCardTechnologies = firstCardChilds[3].querySelector('#languages-first');
(projects.user.technologies).forEach((tech) => {
  const technology = document.createElement('li');
  technology.innerHTML = `<div class="inter-font d-flex">${tech}</div>`;
  firstCardTechnologies.appendChild(technology);
});

Object.keys(projects).forEach((project) => {
  const cardClone = card.cloneNode(true);
  cardClone.classList.remove('d-none');
  const cardContainer = cardClone.firstElementChild;
  const childsCardContainer = cardContainer.childNodes;
  childsCardContainer[1].firstElementChild.innerText = projects[project].name;
  childsCardContainer[3].classList.add('d-flex-center');
  childsCardContainer[3].innerText = projects[project].description;

  const technologies = childsCardContainer[5];
  (projects[project].technologies).forEach((tech) => {
    const technology = document.createElement('li');
    technology.innerHTML = `<div class="inter-font">${tech}</div>`;
    technologies.appendChild(technology);
  });

  containerCards.appendChild(cardClone);
});

const modalBtn = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('#close-modal');
const arrayProjects = [];
Object.keys(projects).forEach((project) => arrayProjects.push(project));

function popUpWindow() {
  const modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.toggle('d-none');
  modalContainer.classList.toggle('d-flex');
}

let index = 0;

modalBtn.forEach((btn) => {
  btn.setAttribute('id', index);
  btn.addEventListener('click', popUpWindow);
  index += 1;
});

closeModal.addEventListener('click', popUpWindow);

// eslint-disable-next-line no-unused-vars
function getModal(id) {
  id = id <= 2 ? 0 : id - 2;
  const modal = document.querySelector('#modal');
  const modalChilds = modal.childNodes;
  modalChilds[1].firstElementChild.innerText = projects[arrayProjects[id]].name;
  const technologies = modalChilds[3];
  technologies.innerText = '';
  (projects[arrayProjects[id]].technologies).forEach((tech) => {
    const technology = document.createElement('li');
    technology.innerHTML = `<div class="poppins-font d-flex">${tech}</div>`;
    technologies.appendChild(technology);
  });
  modalChilds[5].firstElementChild.firstElementChild.src = projects[arrayProjects[id]].image;
  const modalDescription = modalChilds[5].querySelector('#description-modal');
  modalDescription.innerText = projects[arrayProjects[id]].description;
  const liveBtn = modalChilds[5].querySelector('#live-btn');
  liveBtn.addEventListener('click', () => {
    window.location.href = projects[arrayProjects[id]].live;
  });
  const sourceBtn = modalChilds[5].querySelector('#source-btn');
  sourceBtn.addEventListener('click', () => {
    window.location.href = projects[arrayProjects[id]].link;
  });
}

const hamburgerBtn = document.querySelector('#header-menu');
const closeBtn = document.querySelector('#header-menu-btn');
const menuItems = document.querySelectorAll('.menu-item');

function showCloseMenu() {
  const menuSection = document.querySelector('#menu-nav');
  const nav = document.querySelector('#nav-menu');
  const headerName = document.querySelector('#header-name a');
  const itemsContainer = document.querySelector('#items-container-menu');

  menuSection.classList.toggle('d-none');
  menuSection.classList.toggle('d-flex-animation');
  nav.classList.toggle('d-none');
  headerName.classList.toggle('d-none');
  headerName.classList.toggle('d-flex-center');
  setTimeout(() => {
    itemsContainer.classList.remove('d-none');
    itemsContainer.classList.add('d-flex');
  }, 1100);
  itemsContainer.classList.add('d-none');
  itemsContainer.classList.remove('d-flex');
}

hamburgerBtn.addEventListener('click', showCloseMenu);
closeBtn.addEventListener('click', showCloseMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', showCloseMenu);
});
