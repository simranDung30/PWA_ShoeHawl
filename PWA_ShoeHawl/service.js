// // Service Worker File

// // Define the cache name
// var CACHE_NAME = 'kids-fs-cache-v1';

// // Define the files to be cached
// var urlsToCache = [
//     '/',
//     '/index.html',
//     '/style.css',
//     '/script.js',
//     '/manifest.json',
//     // Add more files to be cached as needed
// ];

// // Install the service worker and cache the static assets
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function(cache) {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// // Fetch event - serve assets from cache if available, otherwise fetch from network
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function(response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 // Clone the request to avoid consuming it
//                 var fetchRequest = event.request.clone();

//                 // Fetch from network
//                 return fetch(fetchRequest).then(
//                     function(response) {
//                         // Check if valid response
//                         if(!response || response.status !== 200 || response.type !== 'basic') {
//                             return response;
//                         }

//                         // Clone the response
//                         var responseToCache = response.clone();

//                         // Open cache and add the response
//                         caches.open(CACHE_NAME)
//                             .then(function(cache) {
//                                 cache.put(event.request, responseToCache);
//                             });

//                         return response;
//                     }
//                 );
//             })
//     );
// });

// // Activate event - clean up old caches
// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function(cacheName) {
//                     // Delete old cache
//                     return cacheName.startsWith('kids-fs-cache-') && cacheName !== CACHE_NAME;
//                 }).map(function(cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });



// // Define the cache name
// var CACHE_NAME = 'kids-fs-cache-v1';

// // Define the files to be cached
// var urlsToCache = [
//     '/',
//     '/index.html',
//     '/style.css',
//     '/script.js',
//     '/manifest.json',
//     // Add more files to be cached as needed
// ];

// // Install the service worker and cache the static assets
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function(cache) {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// // Fetch event - serve assets from cache if available, otherwise fetch from network
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function(response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 // Clone the request to avoid consuming it
//                 var fetchRequest = event.request.clone();

//                 // Fetch from network
//                 return fetch(fetchRequest).then(
//                     function(response) {
//                         // Check if valid response
//                         if(!response || response.status !== 200 || response.type !== 'basic') {
//                             return response;
//                         }

//                         // Clone the response
//                         var responseToCache = response.clone();

//                         // Open cache and add the response
//                         caches.open(CACHE_NAME)
//                             .then(function(cache) {
//                                 cache.put(event.request, responseToCache);
//                             });

//                         return response;
//                     }
//                 );
//             })
//     );
// });

// // Activate event - clean up old caches
// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function(cacheName) {
//                     // Delete old cache
//                     return cacheName.startsWith('kids-fs-cache-') && cacheName !== CACHE_NAME;
//                 }).map(function(cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });

// // Push event listener - display push notifications
// self.addEventListener('push', function(event) {
//   const options = {
//     body: event.data.text(),
//     icon: 'path/to/icon.png',
//     // other options as needed
//   };

//   event.waitUntil(
//     self.registration.showNotification('Push Notification', options)
//   );
// });


// // Define the cache name
// var CACHE_NAME = 'kids-fs-cache-v1';

// // Define the files to be cached
// var urlsToCache = [
//     '/',
//     '/home.html',
//     '/shop.html',
//     '/style.css',
//     '/script.js',
//     '/manifest.json',
//     '/sw.js',
//     // Add more files to be cached as needed
// ];

// // Install the service worker and cache the static assets
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function(cache) {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// // Fetch event - serve assets from cache if available, otherwise fetch from network
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function(response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 // Clone the request to avoid consuming it
//                 var fetchRequest = event.request.clone();

//                 // Fetch from network
//                 return fetch(fetchRequest).then(
//                     function(response) {
//                         // Check if valid response
//                         if(!response || response.status !== 200 || response.type !== 'basic') {
//                             return response;
//                         }

//                         // Clone the response
//                         var responseToCache = response.clone();

//                         // Open cache and add the response
//                         caches.open(CACHE_NAME)
//                             .then(function(cache) {
//                                 cache.put(event.request, responseToCache);
//                             });

//                         return response;
//                     }
//                 );
//             })
//     );
// });

// // Activate event - clean up old caches
// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function(cacheName) {
//                     // Delete old cache
//                     return cacheName.startsWith('kids-fs-cache-') && cacheName !== CACHE_NAME;
//                 }).map(function(cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });



var staticCacheName = "pwa";
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', function(event) {
    // Perform some task
    });


    self.addEventListener('activate', function(event) {
        event.waitUntil(
            caches.keys().then(function(cacheNames) {
                return Promise.all(
                    cacheNames.filter(function(cacheName) {
                    }).map(function(cacheName) {
                        // Delete the outdated cache
                        return caches.delete(cacheName);
                    })
                );
            })
        );
    });
    







