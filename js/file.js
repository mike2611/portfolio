const hamburgerBtn = document.querySelector('#header-menu');
const closeBtn = document.querySelector('#header-menu-btn');

function showCloseMenu() {
  const menuSection = document.querySelector('#menu-nav');
  const nav = document.querySelector('#nav-menu');
  const headerName = document.querySelector('#header-name');

  menuSection.classList.toggle('d-none');
  menuSection.classList.toggle('d-flex');
  nav.classList.toggle('d-none');
  headerName.classList.toggle('d-none');
}

hamburgerBtn.addEventListener('click', showCloseMenu);
closeBtn.addEventListener('click', showCloseMenu);