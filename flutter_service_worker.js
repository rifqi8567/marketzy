'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3e6aecb55ba6cf19c48ac3275265be75",
"assets/AssetManifest.bin.json": "ccca64e6e1329637b1fdfe1ff950616c",
"assets/AssetManifest.json": "8c172196b05d213d35e81117839ca21c",
"assets/assets/apple.png": "66b434c433d983c4697ae26a03b927af",
"assets/assets/baju.png": "04335fc5f1e1f9b5598b3a12c9ff930c",
"assets/assets/baju_item(1).png": "e54229ba32e34e83c6d92608f644badb",
"assets/assets/baju_item(2).png": "e776a7627387275709ed05bfd7ddafcc",
"assets/assets/baju_item(3).png": "7c328a61aafa34e7a52290f1301ec982",
"assets/assets/baju_item(4).png": "7fe7cfeba3240108587b9be7ec7c03e9",
"assets/assets/baju_item(5).png": "91e1390e8250fac220ba44dd504cc89b",
"assets/assets/cart.png": "45d71c5ac499f0dd588f828f235b42aa",
"assets/assets/celana.png": "4c0ce09e9be791681c724f8306fa0748",
"assets/assets/chat.png": "10e1fb49f7df83d6913c60e3d35e435c",
"assets/assets/circle.png": "baba9646445a4246f28cfe534c33f5a8",
"assets/assets/clothes02.png": "b6c695dd2c1269d31a52aba790774d99",
"assets/assets/default_image.png": "9b3d8ac2438a1639163da57f54a4732a",
"assets/assets/facebook.png": "e5297c7da05b96989f1913880db6be26",
"assets/assets/filter.png": "ae58420e8451339bb317552044c5aa1c",
"assets/assets/google.png": "61fae26cecaa4d85ab1589675d5922c1",
"assets/assets/ic_baju.png": "c5e066e3cc8b7d4a7ba5c4737fb290b8",
"assets/assets/ic_card.png": "630e22e00418de2187bbad634e5f1097",
"assets/assets/ic_check.png": "4461d440448599c4cbdc035938eebda6",
"assets/assets/ic_discount.png": "8e45c22378e2c0eb15a2878ddca6dd8d",
"assets/assets/ic_elec.png": "e8254278d55b55014b471eefdba0755c",
"assets/assets/ic_heart.png": "593230c4a97dd06b7fe2963a5d24b85a",
"assets/assets/ic_house.png": "98f3cb65532a49d2ddc97e40354d07d7",
"assets/assets/ic_location.png": "bed7b4513005c6884f3361ce4186076b",
"assets/assets/ic_search.png": "e0c0332770b3d424eef8099692179fa4",
"assets/assets/ic_shoes.png": "52c32814000b9d7413178a74e76a4f60",
"assets/assets/ic_trending.png": "5ab659799c296ad48fcc8a496e224fa5",
"assets/assets/ic_user.png": "c3f31513e41b25ce0bdf80f3e3716b8d",
"assets/assets/ic_user_botom.png": "8801b6a4fa4db7da2157b8053782f31c",
"assets/assets/login_logo.png": "3543339b96017ee2d3b4eac029f11f8b",
"assets/assets/logo.png": "89dc6778433a8f0ce85469a9f486c02c",
"assets/assets/material-symbols_lock.png": "93407fe33197d37303599d14e9141de6",
"assets/assets/mi_email.png": "2517495c91c84c2123df4b96753a9b20",
"assets/assets/pants01.png": "6b2eac828c28cead73f6979a8b063bc4",
"assets/assets/pants02.png": "97ccc470592cf37189c52ef16b4715b6",
"assets/assets/register_logo.png": "ab59b7da3526abb61854a01121228063",
"assets/assets/shoes01.png": "0a1a9ca0dc84531e71230ecd66c2978d",
"assets/assets/shoes02.png": "49e8ac92dc8f155a8d0d91b56cff0830",
"assets/assets/slider01.png": "86ab8141dd0fd9eeef290cda30c983db",
"assets/assets/three.png": "ca198e1092b4e3bb12312b31ba3c0e6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c7eb4a5d5346dbc1f34d743b73a6a1da",
"assets/NOTICES": "f785e08edc2b63dd63ec344b5f66b05d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "261cb49e044bb6fd860632eedec3aa00",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50f12db07bd60fa871d53ea5308e1dbf",
"/": "50f12db07bd60fa871d53ea5308e1dbf",
"main.dart.js": "5d72d53895b64aa1cadb1e9115436293",
"manifest.json": "865b04388d5e5dbebf3600f8c7401610",
"version.json": "399440c9146d601ecb084e30d2bc9353"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
