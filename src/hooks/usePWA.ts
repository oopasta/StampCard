import { useEffect, useState } from 'react';

interface PWAState {
  isInstalled: boolean;
  isOnline: boolean;
  updateAvailable: boolean;
  installing: boolean;
  serviceWorkerSupported: boolean;
}

export function usePWA() {
  const [state, setState] = useState<PWAState>({
    isInstalled: false,
    isOnline: navigator.onLine,
    updateAvailable: false,
    installing: false,
    serviceWorkerSupported: false
  });

  useEffect(() => {
    // 檢查是否為 PWA 環境
    const checkPWAMode = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                          (window.navigator as any)?.standalone ||
                          document.referrer.includes('android-app://');
      
      setState(prev => ({ ...prev, isInstalled: isStandalone }));
    };

    // 檢查環境是否支援 Service Worker
    const isProductionEnvironment = () => {
      // 在開發環境或預覽環境中跳過 Service Worker
      const hostname = window.location.hostname;
      const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
      const isFigmaPreview = hostname.includes('figma.site');
      const isVercel = hostname.includes('vercel.app');
      const isNetlify = hostname.includes('netlify.app');
      
      return !isLocalhost && !isFigmaPreview && (isVercel || isNetlify || hostname.includes('your-domain.com'));
    };

    // 註冊 Service Worker（僅在生產環境）
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && isProductionEnvironment()) {
        try {
          // 首先檢查 Service Worker 檔案是否存在
          const response = await fetch('/sw.js', { method: 'HEAD' });
          if (!response.ok) {
            console.log('Service Worker 檔案不存在，跳過註冊');
            return;
          }

          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker 註冊成功:', registration);
          setState(prev => ({ ...prev, serviceWorkerSupported: true }));

          // 監聽更新
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              setState(prev => ({ ...prev, installing: true }));
              
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed') {
                  setState(prev => ({ 
                    ...prev, 
                    installing: false,
                    updateAvailable: navigator.serviceWorker.controller !== null 
                  }));
                }
              });
            }
          });

          // 監聽控制器變更
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
          });

        } catch (error) {
          console.log('Service Worker 註冊失敗，繼續使用基本功能:', error.message);
          setState(prev => ({ ...prev, serviceWorkerSupported: false }));
        }
      } else {
        console.log('Service Worker 不支援或在開發環境中，使用基本 PWA 功能');
        setState(prev => ({ ...prev, serviceWorkerSupported: false }));
      }
    };

    // 監聽網路狀態
    const handleOnline = () => setState(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setState(prev => ({ ...prev, isOnline: false }));

    checkPWAMode();
    registerServiceWorker();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // 更新應用程式
  const updateApp = async () => {
    if ('serviceWorker' in navigator && state.serviceWorkerSupported) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration?.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      } catch (error) {
        console.log('更新失敗，嘗試重新載入頁面');
        window.location.reload();
      }
    } else {
      // 如果沒有 Service Worker，直接重新載入頁面
      window.location.reload();
    }
  };

  // 請求通知權限
  const requestNotificationPermission = async (): Promise<boolean> => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
      } catch (error) {
        console.log('通知權限請求失敗:', error);
        return false;
      }
    }
    return false;
  };

  // 發送本地通知
  const sendNotification = (title: string, options?: NotificationOptions) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          icon: '/icon-192.png',
          badge: '/icon-192.png',
          ...options
        });
      } catch (error) {
        console.log('通知發送失敗:', error);
      }
    }
  };

  // 檢查 PWA 安裝支援
  const isPWAInstallSupported = () => {
    // 基本的 PWA 支援檢查
    return 'serviceWorker' in navigator && 'PushManager' in window;
  };

  return {
    ...state,
    updateApp,
    requestNotificationPermission,
    sendNotification,
    isPWAInstallSupported: isPWAInstallSupported()
  };
}