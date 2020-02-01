const staticDevCoffee = "TECH-VRT-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/tech1.jpeg",
  "/images/tech2.jpeg",
  "/images/tech3.jpeg",
  "/images/tech9.jpeg",
  "/images/tech5.jpeg",
  "/images/tech6.jpeg",
  "/images/tech7.jpeg",
  "/images/tech8.jpeg",
  "/images/tech9.jpeg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});