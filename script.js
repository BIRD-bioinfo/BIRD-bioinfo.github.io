document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('#nav-menu');

  const closeMobileMenu = () => {
    if (!mobileToggle || !mobileMenu) return;
    mobileMenu.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  };

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const dropdowns = document.querySelectorAll('.nav-dropdown');

  const closeDropdown = (dropdown) => {
    const button = dropdown.querySelector('.nav-dropdown-toggle');
    dropdown.classList.remove('open');
    if (button) button.setAttribute('aria-expanded', 'false');
  };

  const closeAllDropdowns = (except = null) => {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== except) closeDropdown(dropdown);
    });
  };

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.nav-dropdown-toggle');
    const submenu = dropdown.querySelector('.nav-submenu');

    if (!button || !submenu) return;

    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const willOpen = !dropdown.classList.contains('open');
      closeAllDropdowns(dropdown);
      dropdown.classList.toggle('open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });

    submenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeDropdown(dropdown);
        closeMobileMenu();
      });
    });
  });

  document.addEventListener('click', (event) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) closeDropdown(dropdown);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector('.nav-dropdown-toggle');
      if (dropdown.classList.contains('open')) {
        closeDropdown(dropdown);
        if (button) button.focus();
      }
    });

    closeMobileMenu();
  });

  const whoWeAreLink = document.querySelector('a[data-i18n="navWhoWeAre"]');
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
});
