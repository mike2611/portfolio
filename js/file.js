const hamburgerBtn = document.querySelector('#header-menu');
const closeBtn = document.querySelector('#header-menu-btn');
const menuItems = document.querySelectorAll('.menu-item');

function showCloseMenu() {
  const menuSection = document.querySelector('#menu-nav');
  const nav = document.querySelector('#nav-menu');
  const headerName = document.querySelector('#header-name');

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