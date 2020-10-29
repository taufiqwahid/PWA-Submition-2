const CACHE_NAME = "football-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/nav.html",
  "/article.html",
  "/pages/competition.html",
  "/pages/team.html",
  "/pages/saved.html",
  "/css/materialize.min.css",
  "/manifest.json",
  "/js/nav.js",
  "/js/materialize.min.js",
  "/icon512x512.png",
  "/js/api.js",
  "/js/idb.js",
  "/js/db.js",
  "/assets/icons/android-icon-36x36.png",
  "/assets/icons/android-icon-48x48.png",
  "/assets/icons/android-icon-72x72.png",
  "/assets/icons/android-icon-96x96.png",
  "/assets/icons/android-icon-144x144.png",
  "/assets/icons/android-icon-192x192.png",
  "/assets/icons/icon256x256.png",
  "/assets/icons/icon384x384.png",
  "/assets/icons/icon512x512.png",
  "/assets/icons/ms-icon-144x144.png",
  "/assets/icons/apple-icon-57x57.png",
  "/assets/icons/apple-icon-60x60.png",
  "/assets/icons/apple-icon-72x72.png",
  "/assets/icons/apple-icon-76x76.png",
  "/assets/icons/apple-icon-114x114.png",
  "/assets/icons/apple-icon-120x120.png",
  "/assets/icons/apple-icon-144x144.png",
  "/assets/icons/apple-icon-152x152.png",
  "/assets/icons/favicon-16x16.png",
  "/assets/icons/favicon-32x32.png",
  "/assets/icons/favicon-96x96.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function (response) {
        if (response) {
          console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
          return response;
        }

        console.log(
          "ServiceWorker: Memuat aset dari server: ",
          event.request.url,
        );
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log(`ServiceWorker : cache ${cacheName} dihapus !!`);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("push", function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }
  var options = {
    body: body,
    icon: "img/notification.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options),
  );
});
