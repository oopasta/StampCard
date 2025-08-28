import { useState, useEffect } from 'react';
import { PunchCard, PunchCardFormData } from './types/PunchCard';
import { AddPunchCardDialog } from './components/AddPunchCardDialog';
import { PunchCardComponent } from './components/PunchCardComponent';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { usePWA } from './hooks/usePWA';

export default function App() {
  const [cards, setCards] = useState<PunchCard[]>([]);
  const { 
    isInstalled, 
    isOnline, 
    updateAvailable, 
    updateApp, 
    requestNotificationPermission, 
    sendNotification,
    serviceWorkerSupported,
    isPWAInstallSupported
  } = usePWA();

  // 從 localStorage 載入資料
  useEffect(() => {
    const savedCards = localStorage.getItem('punchCards');
    if (savedCards) {
      try {
        const parsedCards = JSON.parse(savedCards).map((card: any) => ({
          ...card,
          createdAt: new Date(card.createdAt),
          expiresAt: new Date(card.expiresAt),
          punchedDates: card.punchedDates.map((date: string) => new Date(date)),
          // 為舊卡片設定預設顏色
          color: card.color || 'blue'
        }));
        setCards(parsedCards);
      } catch (error) {
        console.error('載入集點卡資料失敗:', error);
        // 如果資料損壞，清除並重新開始
        localStorage.removeItem('punchCards');
      }
    }
  }, []);

  // 儲存到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem('punchCards', JSON.stringify(cards));
    } catch (error) {
      console.error('儲存集點卡資料失敗:', error);
    }
  }, [cards]);

  // 檢查過期狀態
  useEffect(() => {
    const now = new Date();
    setCards(prevCards => 
      prevCards.map(card => ({
        ...card,
        expired: now > card.expiresAt && !card.completed
      }))
    );
  }, []);

  // 請求通知權限（僅在已安裝時）
  useEffect(() => {
    if (isInstalled && isPWAInstallSupported) {
      requestNotificationPermission();
    }
  }, [isInstalled, isPWAInstallSupported, requestNotificationPermission]);

  // 檢查每日打卡提醒
  useEffect(() => {
    const checkDailyReminder = () => {
      const now = new Date();
      const lastReminder = localStorage.getItem('lastDailyReminder');
      const today = now.toDateString();

      if (lastReminder !== today && cards.some(card => !card.expired && !card.completed)) {
        // 每天提醒一次（僅在支援通知時）
        if (isInstalled && 'Notification' in window && Notification.permission === 'granted') {
          sendNotification('別忘了打卡！', {
            body: '今天還有集點卡等著你完成呢！',
            tag: 'daily-reminder'
          });
          localStorage.setItem('lastDailyReminder', today);
        }
      }
    };

    // 設定每小時檢查一次（僅在有卡片時）
    if (cards.length > 0) {
      const interval = setInterval(checkDailyReminder, 60 * 60 * 1000);
      checkDailyReminder(); // 立即檢查一次

      return () => clearInterval(interval);
    }
  }, [cards, isInstalled, sendNotification]);

  const getDaysForPoints = (points: 5 | 8 | 14): number => {
    switch (points) {
      case 5: return 10;
      case 8: return 14;
      case 14: return 30;
      default: return 10;
    }
  };

  const addCard = (formData: PunchCardFormData) => {
    const now = new Date();
    const days = getDaysForPoints(formData.totalPoints);
    const expiresAt = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

    const newCard: PunchCard = {
      id: Date.now().toString(),
      name: formData.name,
      reward: formData.reward,
      totalPoints: formData.totalPoints,
      currentPoints: 0,
      createdAt: now,
      expiresAt,
      completed: false,
      expired: false,
      punchedDates: [],
      color: formData.color
    };

    setCards(prev => [newCard, ...prev]);

    // 發送創建通知（僅在支援時）
    if (isInstalled && 'Notification' in window && Notification.permission === 'granted') {
      sendNotification('新集點卡已建立！', {
        body: `「${formData.name}」集點卡已建立，開始你的目標之旅吧！`,
        tag: 'card-created'
      });
    }
  };

  const punchCard = (cardId: string) => {
    let completedCard: PunchCard | null = null;

    setCards(prev => 
      prev.map(card => {
        if (card.id === cardId && !card.expired && card.currentPoints < card.totalPoints) {
          const newCurrentPoints = card.currentPoints + 1;
          const newPunchedDates = [...card.punchedDates, new Date()];
          const isCompleted = newCurrentPoints >= card.totalPoints;
          
          const updatedCard = {
            ...card,
            currentPoints: newCurrentPoints,
            completed: isCompleted,
            punchedDates: newPunchedDates
          };

          if (isCompleted) {
            completedCard = updatedCard;
          }

          return updatedCard;
        }
        return card;
      })
    );

    // 發送完成通知（僅在支援時）
    if (completedCard && isInstalled && 'Notification' in window && Notification.permission === 'granted') {
      sendNotification('🎉 恭喜完成目標！', {
        body: `「${completedCard.name}」已完成！獎勵：${completedCard.reward}`,
        tag: 'card-completed'
      });
    }
  };

  const deleteCard = (cardId: string) => {
    setCards(prev => prev.filter(card => card.id !== cardId));
  };

  const restartCard = (cardId: string) => {
    setCards(prev => 
      prev.map(card => {
        if (card.id === cardId) {
          const now = new Date();
          const days = getDaysForPoints(card.totalPoints);
          const expiresAt = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
          
          return {
            ...card,
            currentPoints: 0,
            createdAt: now,
            expiresAt,
            completed: false,
            expired: false,
            punchedDates: []
          };
        }
        return card;
      })
    );
  };

  const getEnvironmentInfo = () => {
    const hostname = window.location.hostname;
    const isFigmaPreview = hostname.includes('figma.site');
    
    if (isFigmaPreview) {
      return {
        type: 'preview',
        message: '預覽模式 - 資料保存在瀏覽器本地'
      };
    } else if (isInstalled) {
      return {
        type: 'installed',
        message: 'PWA 模式 - 支援離線使用'
      };
    } else if (serviceWorkerSupported) {
      return {
        type: 'pwa-ready',
        message: '可安裝為應用程式'
      };
    } else {
      return {
        type: 'basic',
        message: '基本模式 - 資料保存在瀏覽器本地'
      };
    }
  };

  const environmentInfo = getEnvironmentInfo();

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* PWA 功能組件 */}
      <OfflineIndicator />
      {!isInstalled && <PWAInstallPrompt />}
      
      {/* 更新提示 */}
      {updateAvailable && (
        <div className="fixed top-4 left-4 right-4 z-40 md:max-w-sm md:mx-auto">
          <div className="bg-blue-500 text-white p-3 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm">有新版本可用</span>
              <button
                onClick={updateApp}
                className="bg-white text-blue-500 px-3 py-1 rounded text-sm hover:bg-gray-100"
              >
                更新
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 手機全螢幕容器 */}
      <div className="w-full min-h-screen px-4 py-6 md:max-w-md md:mx-auto md:px-4">
        {/* 標題區域 */}
        <div className="text-center mb-6 pt-2">
          <h1 className="mb-2 text-gray-800 flex items-center justify-center gap-2">
            心理集點卡
            {isInstalled && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                已安裝
              </span>
            )}
          </h1>
          <p className="text-gray-600 mb-1">設定目標，獲得獎勵！</p>
          <p className="text-xs text-gray-500">
            {isOnline ? '🔒' : '📱'} {environmentInfo.message}
          </p>
        </div>

        {/* 新增集點卡按鈕 */}
        <div className="mb-6">
          <AddPunchCardDialog onAdd={addCard} />
        </div>

        {/* 集點卡列表 */}
        <div className="space-y-4 pb-safe">
          {cards.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-500 mb-2">還沒有集點卡</p>
                <p className="text-sm text-gray-400">點擊上方按鈕建立你的第一張集點卡！</p>
                {environmentInfo.type === 'preview' && (
                  <p className="text-xs text-blue-600 mt-2">
                    💡 在真實環境中可安裝為 PWA 應用程式
                  </p>
                )}
              </div>
            </div>
          ) : (
            cards.map(card => (
              <PunchCardComponent
                key={card.id}
                card={card}
                onPunch={punchCard}
                onDelete={deleteCard}
                onRestart={restartCard}
              />
            ))
          )}
        </div>

        {/* 底部說明 */}
        {cards.length > 0 && (
          <div className="text-center mt-8 mb-6 px-4">
            <p className="text-xs text-gray-400">
              過期的集點卡會自動灰階，請手動刪除
            </p>
            {environmentInfo.type === 'installed' && (
              <p className="text-xs text-green-600 mt-1">
                📱 PWA 模式：支援離線使用和推播通知
              </p>
            )}
            {environmentInfo.type === 'preview' && (
              <p className="text-xs text-blue-600 mt-1">
                🚀 部署到真實環境後可享受完整 PWA 功能
              </p>
            )}
          </div>
        )}

        {/* 手機底部安全區域 */}
        <div className="h-6 md:h-4"></div>
      </div>
    </div>
  );
}