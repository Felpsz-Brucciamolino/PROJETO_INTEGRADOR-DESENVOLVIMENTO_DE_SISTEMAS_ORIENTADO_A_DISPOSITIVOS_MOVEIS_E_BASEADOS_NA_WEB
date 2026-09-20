const CACHE_NAME = 'gerobras-cache-v1';
const urlsToCache = [
  '/',
  '/paginas/login.html',
  '/paginas/dashboard.html',
  '/paginas/obra.html',
  '/paginas/tarefas.html',
  '/paginas/relatorios.html',
  '/paginas/perfil.html',
  '/css/style.css',
  '/css/dashboard.css',
  '/css/login.css',
  '/css/tarefas.css',
  '/css/relatorios.css',
  '/css/perfil.css',
  '/js/api.js',
  '/js/dashboard.js',
  '/js/tarefas.js',
  '/js/relatorios.js',
  '/js/perfil.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
