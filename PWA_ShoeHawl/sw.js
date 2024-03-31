

// self.addEventListener('fetch', function(event) {
//     const req = event.request;
//     const url = new URL(req.url);
  
//     event.respondWith(
//       (async function() {
//         try {
//           if (url.origin === location.origin) {
//             const cachedResponse = await cacheFirst(req);
//             if (cachedResponse) {
//               console.log("Fetch successful (from cache):", req.url);
//             } else {
//               console.log("Fetch successful (from network):", req.url);
//             }
//             return cachedResponse;
//           } else {
//             const response = await networkFirst(req);
//             console.log("Fetch successful (from network):", req.url);
//             return response;
//           }
//         } catch (error) {
//           console.error("Fetch failed:", error);
//           // Handle errors gracefully here, e.g., return a cached response or display an error message
//         }
//       })()
//     );
//   });
  
//   async function cacheFirst(req) {
//     const cachedResponse = await caches.match(req);
//     if (cachedResponse) {
//       return cachedResponse;
//     }
  
//     try {
//       const response = await fetch(req);
//       caches.open("dynamic-pwa").then((cache) => cache.put(req, response.clone()));
//       // Log after caching to accurately reflect success
//       console.log("Fetch successful (from network, cached):", req.url);
//       return response;
//     } catch (error) {
//       console.error("CacheFirst fetch failed:", req.url, error);
//       throw error; // Re-throw to allow handling in the main fetch event listener
//     }
//   }
  
//   async function networkFirst(req) {
//     try {
//       const cache = await caches.open("dynamic-pwa");
//       const response = await fetch(req);
//       cache.put(req, response.clone());
//       return response;
//     } catch (error) {
//       const cachedResponse = await cache.match(req);
//       if (cachedResponse) {
//         console.log("Fetch successful (from cache):", req.url);
//         return cachedResponse;
//       }
  
//       console.error("NetworkFirst fetch failed, no cached response:", req.url, error);
//       throw error; // Re-throw to allow handling in the main fetch event listener
//     }
//   }
  
  
//   self.addEventListener('sync',event => {
//     if(event.tag == 'helloSync'){
//       console.log("helloSync [sw.js]");
//     }
//   });
    
//   // Push notification event listener
//   self.addEventListener('push', event => {
//     if (event && event.data) {
//       var data = event.data.json();
//       if (data.method === "pushMessage") {
//         if ('showNotification' in self.registration) {
//           event.waitUntil(self.registration.showNotification("Siddhi is Testing", {
//             body: data.message
//           }));
//         } else {
//           // Handle browsers that don't support `showNotification`
//         }
//       }
//     }
//   });


// // Cache name
// const CACHE_NAME = 'dynamic-pwa-cache-v1';

// // Files to cache
// const urlsToCache = [
//     '/',
//     '/home.html',
//     '/shop.html',
//     '/style.css',
//     '/script.js',
//     '/manifest.json',
//     '/sw.js',
//     // Add more files as needed
// ];

// // Install service worker and cache static assets
// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => cache.addAll(urlsToCache))
//             .catch(error => console.error('Cache installation failed:', error))
//     );
// });

// // Fetch event - serve assets from cache if available, otherwise fetch from network
// self.addEventListener('fetch', event => {
//     const req = event.request;

//     event.respondWith(
//         (async function() {
//             try {
//                 if (req.method !== 'GET') {
//                     return fetch(req);
//                 }

//                 const cachedResponse = await cacheFirst(req);
//                 if (cachedResponse) {
//                     console.log("Fetch successful (from cache):", req.url);
//                     return cachedResponse;
//                 }

//                 const response = await networkFirst(req);
//                 console.log("Fetch successful (from network):", req.url);
//                 return response;
//             } catch (error) {
//                 console.error("Fetch failed:", error);
//                 // Handle errors gracefully here, e.g., return a cached response or display an error message
//             }
//         })()
//     );
// });

// // Cache-first strategy
// async function cacheFirst(req) {
//     const cachedResponse = await caches.match(req);
//     if (cachedResponse) {
//         return cachedResponse;
//     }

//     try {
//         const response = await fetch(req);
//         const cache = await caches.open(CACHE_NAME);
//         cache.put(req, response.clone());
//         // Log after caching to accurately reflect success
//         console.log("Fetch successful (from network, cached):", req.url);
//         return response;
//     } catch (error) {
//         console.error("CacheFirst fetch failed:", req.url, error);
//         throw error; // Re-throw to allow handling in the main fetch event listener
//     }
// }

// // Network-first strategy
// async function networkFirst(req) {
//     try {
//         const response = await fetch(req);
//         const cache = await caches.open(CACHE_NAME);
//         cache.put(req, response.clone());
//         return response;
//     } catch (error) {
//         const cachedResponse = await caches.match(req);
//         if (cachedResponse) {
//             console.log("Fetch successful (from cache):", req.url);
//             return cachedResponse;
//         }
//         console.error("NetworkFirst fetch failed, no cached response:", req.url, error);
//         throw error; // Re-throw to allow handling in the main fetch event listener
//     }
// }

// // Sync event listener
// self.addEventListener('sync', event => {
//     if (event.tag == 'helloSync') {
//         console.log("helloSync [sw.js]");
//     }
// });

// // Push notification event listener
// self.addEventListener('push', event => {
//     if (event && event.data) {
//         const data = event.data.json();
//         if (data.method === "pushMessage" && 'showNotification' in self.registration) {
//             event.waitUntil(self.registration.showNotification("Siddhi is Testing", {
//                 body: data.message
//             }));
//         }
//     }
// });


self.addEventListener('fetch', function(event) {
    const req = event.request;
    const url = new URL(req.url);
  
    event.respondWith(
      (async function() {
        try {
          if (url.origin === location.origin) {
            const cachedResponse = await cacheFirst(req);
            if (cachedResponse) {
              console.log("Fetch successful (from cache):", req.url);
            } else {
              console.log("Fetch successful (from network):", req.url);
            }
            return cachedResponse;
          } else {
            const response = await networkFirst(req);
            console.log("Fetch successful (from network):", req.url);
            return response;
          }
        } catch (error) {
          console.error("Fetch failed:", error);
          // Handle errors gracefully here, e.g., return a cached response or display an error message
        }
      })()
    );
  });
  
  async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    if (cachedResponse) {
      return cachedResponse;
    }
  
    try {
      const response = await fetch(req);
      caches.open("dynamic-pwa").then((cache) => cache.put(req, response.clone()));
      // Log after caching to accurately reflect success
      console.log("Fetch successful (from network, cached):", req.url);
      return response;
    } catch (error) {
      console.error("CacheFirst fetch failed:", req.url, error);
      throw error; // Re-throw to allow handling in the main fetch event listener
    }
  }
  
  async function networkFirst(req) {
    try {
      const cache = await caches.open("dynamic-pwa");
      const response = await fetch(req);
      cache.put(req, response.clone());
      return response;
    } catch (error) {
      const cachedResponse = await cache.match(req);
      if (cachedResponse) {
        console.log("Fetch successful (from cache):", req.url);
        return cachedResponse;
      }
  
      console.error("NetworkFirst fetch failed, no cached response:", req.url, error);
      throw error; // Re-throw to allow handling in the main fetch event listener
    }
  }
  
  
  self.addEventListener('sync',event => {
    if(event.tag == 'helloSync'){
      console.log("helloSync [sw.js]");
    }
  });
    
  // Push notification event listener
  self.addEventListener('push', event => {
    if (event && event.data) {
      var data = event.data.json();
      if (data.method === "pushMessage") {
        if ('showNotification' in self.registration) {
          event.waitUntil(self.registration.showNotification("Siddhi is Testing", {
            body: data.message
          }));
        } else {
          // Handle browsers that don't support `showNotification`
        }
      }
    }
  });