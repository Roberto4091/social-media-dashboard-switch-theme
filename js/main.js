(() => {
  const $switcher = document.querySelector('.switcher');

  $switcher.addEventListener('click', e => {
    const theme = e.target.checked ? 'dark' : 'light';

    localStorage.setItem('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  });
})();
