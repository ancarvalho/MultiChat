const CACHE_NAME = "multichat-cache-v1";
const CACHE_FILES = [
  "./",
  "index.html",
  "static/style.min.css",
  "static/app.min.js",
  "assets/kick.svg",
  "assets/twitch.svg",
  "assets/youtube.svg",
  "assets/moderator.svg",
  "assets/verified.svg",
  "assets/founder.svg",
  "assets/logo.svg",
  "https://cdn.jsdelivr.net/npm/pusher-js@8.3.0/dist/web/pusher.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching app shell");
      return cache.addAll(CACHE_FILES);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing old cache");
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
      .catch((error) => {
        console.log(
          "Service Worker: Fetch failed; returning offline page if available.",
          error,
        );
      }),
  );
});
