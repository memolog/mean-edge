var CACHE_NAME = 'static_v1';

var urlsToCache = [
  'index.html',
  'favicon.ico',
  'css/app.css',
  'js/app.js',
  'js/vendor.js',
  'js/chunk_2.js',
  'manifest.json'
];

self.addEventListener('fetch', function(event: FetchEvent) {
  // return cache if the url is the static assets
  return event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if (response) {
        return response
      }
      return fetch(event.request)
    })
    .catch(function(err){
      console.log('[ServiceWorker] Error Occured on fetch');
      console.log(err)
      if (err.stack) {
        console.log(err.stack)
      }
    })
  );
});

self.addEventListener('install', function(event: InstallEvent) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return cache.addAll(urlsToCache);
    })
    .catch(function(err){
      console.log('[ServiceWorker] Error Occured on install');
      console.log(err);
      if (err.stack) {
        console.log(err.stack);
      }
    })
  );
});
