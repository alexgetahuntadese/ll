const STATIC_CACHE = "simple-road-static-v5";
const RUNTIME_CACHE = "simple-road-runtime-v5";
const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/favicon.ico",
  "/logo.svg",
  "/placeholder.svg",
  "/robots.txt",
];

const isSameOrigin = (url) => url.origin === self.location.origin;

const isStaticAssetRequest = (request) =>
  request.method === "GET" &&
  isSameOrigin(new URL(request.url)) &&
  (request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "manifest" ||
    request.destination === "document" ||
    request.url.includes("/assets/") ||
    request.url.includes("/books/"));

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

const cacheResponse = async (cacheName, request, response) => {
  if (!response || !response.ok) {
    return response;
  }

  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  return response;
};

const getCachedAppShell = async () => {
  const cachedIndex = await caches.match("/index.html");
  return cachedIndex || caches.match("/");
};

const createPartialContentResponse = async (request, cachedResponse) => {
  const rangeHeader = request.headers.get("range");
  if (!rangeHeader || !cachedResponse) {
    return cachedResponse;
  }

  const buffer = await cachedResponse.arrayBuffer();
  const size = buffer.byteLength;
  const matches = /bytes=(\d*)-(\d*)/.exec(rangeHeader);

  if (!matches) {
    return new Response(null, { status: 416 });
  }

  const start = matches[1] ? Number.parseInt(matches[1], 10) : 0;
  const end = matches[2] ? Number.parseInt(matches[2], 10) : size - 1;

  if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= size) {
    return new Response(null, {
      status: 416,
      headers: {
        "Content-Range": `bytes */${size}`,
      },
    });
  }

  const chunk = buffer.slice(start, end + 1);
  const headers = new Headers(cachedResponse.headers);
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(chunk.byteLength));
  headers.set("Accept-Ranges", "bytes");

  return new Response(chunk, {
    status: 206,
    statusText: "Partial Content",
    headers,
  });
};

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => cacheResponse(RUNTIME_CACHE, "/index.html", response))
        .catch(() => getCachedAppShell()),
    );
    return;
  }

  if (request.headers.has("range")) {
    event.respondWith(
      caches.match(request.url).then(async (cachedResponse) => {
        if (cachedResponse) {
          return createPartialContentResponse(request, cachedResponse);
        }

        try {
          const networkResponse = await fetch(request.url);
          await cacheResponse(RUNTIME_CACHE, request.url, networkResponse.clone());
          return createPartialContentResponse(request, networkResponse);
        } catch (error) {
          return new Response(null, { status: 504, statusText: "Offline" });
        }
      }),
    );
    return;
  }

  if (!isStaticAssetRequest(request)) {
    return;
  }

  event.respondWith(
    caches.match(request).then(async (cached) => {
      if (cached) {
        fetch(request)
          .then((response) => cacheResponse(RUNTIME_CACHE, request, response))
          .catch(() => undefined);
        return cached;
      }

      try {
        const response = await fetch(request);
        return cacheResponse(RUNTIME_CACHE, request, response);
      } catch (error) {
        return caches.match(request);
      }
    }),
  );
});
