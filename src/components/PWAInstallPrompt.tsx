import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Download, X, Smartphone, Share } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showManualInstructions, setShowManualInstructions] = useState(false);

  useEffect(() => {
    // 檢查是否已經安裝
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          (window.navigator as any)?.standalone) {
        setIsInstalled(true);
        return;
      }
    };

    checkInstalled();

    // 監聽安裝提示事件
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // 延遲顯示安裝提示
      setTimeout(() => {
        if (!isInstalled && !localStorage.getItem('pwa-install-dismissed')) {
          setShowInstallPrompt(true);
        }
      }, 5000); // 增加到 5 秒延遲
    };

    // 監聽應用安裝事件
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      console.log('PWA 已安裝');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // 如果沒有收到自動安裝提示，在開發環境中顯示手動說明
    setTimeout(() => {
      if (!deferredPrompt && !isInstalled && !localStorage.getItem('pwa-install-dismissed')) {
        const hostname = window.location.hostname;
        const isFigmaPreview = hostname.includes('figma.site');
        
        if (isFigmaPreview) {
          setShowManualInstructions(true);
          setShowInstallPrompt(true);
        }
      }
    }, 8000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [deferredPrompt, isInstalled]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
          console.log('用戶接受安裝');
        } else {
          console.log('用戶拒絕安裝');
        }
        
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      } catch (error) {
        console.error('安裝提示錯誤:', error);
        setShowManualInstructions(true);
      }
    } else {
      // 顯示手動安裝說明
      setShowManualInstructions(true);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setShowManualInstructions(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  const getUserAgent = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('chrome') && !userAgent.includes('edg')) return 'chrome';
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) return 'safari';
    if (userAgent.includes('firefox')) return 'firefox';
    return 'other';
  };

  const getInstallInstructions = () => {
    const browser = getUserAgent();
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      if (browser === 'safari') {
        return {
          icon: <Share className="w-5 h-5 text-blue-500" />,
          title: "在 Safari 中安裝",
          steps: [
            "點擊底部分享按鈕 📤",
            "選擇「加入主畫面」",
            "確認新增到桌面"
          ]
        };
      } else {
        return {
          icon: <Smartphone className="w-5 h-5 text-green-500" />,
          title: "在手機瀏覽器中安裝",
          steps: [
            "點擊瀏覽器選單 ⋮",
            "選擇「加入主畫面」或「安裝應用程式」",
            "確認安裝"
          ]
        };
      }
    } else {
      return {
        icon: <Download className="w-5 h-5 text-purple-500" />,
        title: "在電腦瀏覽器中安裝",
        steps: [
          "點擊網址列右側的安裝圖示 ⬇️",
          "或使用瀏覽器選單中的「安裝」選項",
          "確認安裝到桌面"
        ]
      };
    }
  };

  // 如果已安裝，則不渲染
  if (isInstalled) {
    return null;
  }

  // 如果不顯示提示，則不渲染
  if (!showInstallPrompt) {
    return null;
  }

  const instructions = getInstallInstructions();

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 shadow-lg animate-in slide-in-from-bottom-4 md:max-w-sm md:left-auto md:right-4">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {instructions.icon}
              <span className="text-base">{instructions.title}</span>
            </div>
            
            {!showManualInstructions ? (
              <p className="text-sm text-gray-600 mb-3">
                將心理集點卡加到主畫面，像原生 app 一樣使用！
              </p>
            ) : (
              <div className="text-sm text-gray-600 mb-3">
                <p className="mb-2">手動安裝步驟：</p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  {instructions.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
            
            <div className="flex gap-2">
              {!showManualInstructions && deferredPrompt ? (
                <Button
                  onClick={handleInstallClick}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white h-10"
                >
                  安裝
                </Button>
              ) : (
                <Button
                  onClick={() => setShowManualInstructions(!showManualInstructions)}
                  variant="outline"
                  className="flex-1 h-10"
                >
                  {showManualInstructions ? '隱藏說明' : '查看安裝步驟'}
                </Button>
              )}
              <Button
                variant="outline"
                onClick={handleDismiss}
                className="px-3 h-10"
              >
                稍後
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}