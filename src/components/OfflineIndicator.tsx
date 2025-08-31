import { useState, useEffect } from 'react';
import { Badge } from "./ui/badge";
import { Wifi, WifiOff } from "lucide-react";

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
      
      // 顯示重新連線訊息（僅在支援通知的環境）
      setTimeout(() => {
        if ('Notification' in window && Notification.permission === 'granted') {
          try {
            new Notification('已重新連線', {
              body: '網路連線已恢復，數據將自動同步'
            });
          } catch (error) {
            console.log('通知發送失敗:', error);
          }
        }
      }, 1000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 初始檢查
    if (!navigator.onLine) {
      setShowOfflineMessage(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showOfflineMessage) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-50 md:max-w-sm md:mx-auto">
      <Badge 
        variant={isOnline ? "default" : "destructive"}
        className={`
          w-full justify-center py-2 px-4 text-sm
          ${isOnline ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}
          animate-in slide-in-from-top-4
        `}
      >
        <div className="flex items-center gap-2">
          {isOnline ? (
            <>
              <Wifi className="w-4 h-4" />
              <span>已重新連線</span>
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4" />
              <span>離線模式 - 數據已保存在本地</span>
            </>
          )}
        </div>
      </Badge>
    </div>
  );
}