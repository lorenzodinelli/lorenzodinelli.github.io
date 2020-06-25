'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "f118981090e894140739287d5a4ed07d",
"/main.dart.js": "04ccf65f878773d266c86e71b6828cf3",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "92eecfd0ec736acfe5f7111a9aee2646",
"/assets/LICENSE": "d6787c9042766336c819eb07a0b9e4a2",
"/assets/AssetManifest.json": "a7e6fa45fb470b784ff80ade6ec4a0c5",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/material.jpg": "9639dce97535150951154a0bd2dcdfd4",
"/assets/assets/images/profile-bg.jpg": "85b35d367ad98bc305c5101ed97a074a",
"/assets/assets/images/avatar.jpg": "e57210515c509f7a09a572d9d3835f26",
"/assets/assets/images/4.jpg": "94c9a5cc9349d9b7fd0c31492fdd6c1a",
"/assets/assets/images/2.jpg": "29c23ad1fa167fcdc1db01220d3e3fe9",
"/assets/assets/images/3.jpg": "61d29bb1fc599262ba5af14c243a8a29",
"/assets/assets/images/1.jpg": "cb88fb01a601f18484f9bf7844c1434c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
