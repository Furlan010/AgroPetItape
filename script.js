(() => {
  const dialog = document.querySelector('#mobile-menu');
  const toggle = document.querySelector('.menu-toggle');
  const closeButton = document.querySelector('.menu-close');

  if (dialog && toggle && typeof dialog.showModal === 'function') {
    const closeMenu = () => {
      if (dialog.open) dialog.close();
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    };

    toggle.addEventListener('click', () => {
      dialog.showModal();
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Fechar menu');
    });
    closeButton?.addEventListener('click', closeMenu);
    dialog.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    dialog.addEventListener('close', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
