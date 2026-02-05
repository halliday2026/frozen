const CACHE_NAME = "ice-guide-v1";
const BASE = "/frozen";
const URLS_TO_CACHE = [
  BASE + "/",
  BASE + "/confronted/",
  BASE + "/at-home/",
  BASE + "/public-work/",
  BASE + "/detained/",
  BASE + "/family-steps/",
  BASE + "/deportation/",
  BASE + "/preparation/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          if (event.request.method === "GET") {
            cache.put(event.request, clone);
          }
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
