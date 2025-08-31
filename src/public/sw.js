const CACHE_NAME = 'punch-card-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 安裝 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('快取已開啟');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('所有資源已快取');
        return self.skipWaiting();
      })
  );
});

// 啟用 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('刪除舊快取:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker 已啟用');
      return self.clients.claim();
    })
  );
});

// 攔截網路請求
self.addEventListener('fetch', event => {
  // 只處理 GET 請求
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果快取中有資源，直接返回
        if (response) {
          return response;
        }

        // 否則從網路獲取
        return fetch(event.request).then(response => {
          // 檢查回應是否有效
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 複製回應以供快取
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // 離線時顯示離線頁面（可選）
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
      })
  );
});

// 背景同步（可選）
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('背景同步觸發');
    // 這裡可以處理離線時的數據同步
  }
});

// 推播通知（可選）
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [200, 100, 200],
      data: {
        url: data.url || '/'
      },
      actions: [
        {
          action: 'open',
          title: '打開應用程式'
        },
        {
          action: 'close',
          title: '關閉'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// 通知點擊處理
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});