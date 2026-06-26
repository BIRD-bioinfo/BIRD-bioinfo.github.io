const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


const aboutDropdown = document.querySelector('.nav-dropdown');
const aboutDropdownToggle = document.querySelector('.nav-dropdown-toggle');

if (aboutDropdown && aboutDropdownToggle) {
  aboutDropdownToggle.addEventListener('click', () => {
    const isOpen =
      aboutDropdownToggle.getAttribute('aria-expanded') === 'true';

    aboutDropdownToggle.setAttribute(
      'aria-expanded',
      String(!isOpen)
    );

    aboutDropdown.classList.toggle('open', !isOpen);
  });

  aboutDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      aboutDropdown.classList.remove('open');
      aboutDropdownToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', event => {
    if (!aboutDropdown.contains(event.target)) {
      aboutDropdown.classList.remove('open');
      aboutDropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (
    event.key === 'Escape' &&
    aboutDropdown &&
    aboutDropdownToggle
  ) {
    aboutDropdown.classList.remove('open');
    aboutDropdownToggle.setAttribute('aria-expanded', 'false');
    aboutDropdownToggle.focus();
  }
});

const whoWeAreLink = document.querySelector(
  'a[data-i18n="navWhoWeAre"]'
);
const whoWeAreSection = document.querySelector('#who-we-are');

if (whoWeAreLink && whoWeAreSection) {
  whoWeAreLink.addEventListener('click', (event) => {
    event.preventDefault();

    whoWeAreSection.hidden = false;
    whoWeAreSection.classList.add('is-visible');

    requestAnimationFrame(() => {
      whoWeAreSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}
