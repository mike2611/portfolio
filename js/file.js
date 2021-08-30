const hamburgerBtn = document.querySelector('#header-menu');
const closeBtn = document.querySelector('#header-menu-btn');

function showCloseMenu() {
  const menuSection = document.querySelector('#menu-section');
  menuSection.classList.toggle('d-none');
  menuSection.classList.toggle('hamburger-section');
  const nav = document.querySelector('#nav-menu');
  nav.classList.toggle('d-none');
  const headerName = document.querySelector('#header-name');
  headerName.classList.toggle('d-none');
}

hamburgerBtn.addEventListener('click', showCloseMenu);
closeBtn.addEventListener('click', showCloseMenu);