/* ── Navigation ── */
const links   = document.querySelectorAll('.nav-link');
const pages   = document.querySelectorAll('.page');
const burger  = document.getElementById('hamburger');
const navList = document.querySelector('.nav-links');

function showPage(id) {
  pages.forEach(p => p.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  const target = document.getElementById('page-' + id);
  const link   = document.querySelector(`.nav-link[data-page="${id}"]`);

  if (target) { target.classList.add('active'); window.scrollTo(0, 0); }
  if (link)   link.classList.add('active');

  navList.classList.remove('open');
  history.replaceState(null, '', '#' + id);
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

burger.addEventListener('click', () => navList.classList.toggle('open'));

/* Handle initial hash or default */
const hash = location.hash.replace('#', '') || 'home';
showPage(hash);

/* ── PWA Service Worker ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
