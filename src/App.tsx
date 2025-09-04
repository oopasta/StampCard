import { useState, useEffect } from 'react';
import { PunchCard, PunchCardFormData } from './types/PunchCard';
import { AddPunchCardDialog } from './components/AddPunchCardDialog';
import { PunchCardComponent } from './components/PunchCardComponent';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Button } from './components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './components/ui/alert-dialog';
import { usePWA } from './hooks/usePWA';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import imgImage6 from "figma:asset/b570ad906571c73bd7b8f948eebafda45c8ce550.png";
import svgPaths from "./imports/svg-t0e3im4u4v";
import svgPathsDelete from "./imports/svg-eaun0otym";

// EiPlus component matching Figma design
function EiPlus() {
  return (
    <div className="relative size-full" data-name="ei:plus">
      <div className="absolute size-[28.8px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 0.1px)", left: "calc(50% + 0.4px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <circle cx="14.4" cy="14.4" fill="var(--fill-0, #E85230)" id="Ellipse 2" r="14.4" />
        </svg>
      </div>
      <div className="absolute bottom-[23.21%] left-1/4 right-1/4 top-[26.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Vector">
            <path d="M0 6H14V8H0V6Z" fill="var(--fill-0, white)" />
            <path d="M6 0H8V14H6V0Z" fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Btn component matching Figma design
function Btn({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute bg-[#f97759] box-border content-stretch flex gap-2.5 h-[57px] items-center justify-center left-[29px] p-[10px] rounded-[16px] top-[254px] w-[337px] cursor-pointer" data-name="btn" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#e85230] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
      <div className="relative shrink-0 size-7" data-name="ei:plus">
        <EiPlus />
      </div>
      <div className="capitalize font-['Helvetica:Bold',_sans-serif] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[0.2px] leading-[1]">
        <p className="whitespace-pre">ready, steady, go!</p>
      </div>
    </div>
  );
}

// Group2 component for button and texts
function Group2({ environmentInfo, showAddDialog, centered = false }: { environmentInfo: any, showAddDialog: () => void, centered?: boolean }) {
  if (centered) {
    return (
      <div className="flex flex-col items-center gap-6" data-name="Group2">
        {/* 按鈕 */}
        <div className="bg-[#f97759] box-border content-stretch flex gap-2.5 h-[57px] items-center justify-center p-[10px] rounded-[16px] w-[337px] cursor-pointer relative" data-name="btn" onClick={showAddDialog}>
          <div aria-hidden="true" className="absolute border border-[#e85230] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
          <div className="relative shrink-0 size-7" data-name="ei:plus">
            <EiPlus />
          </div>
          <div className="capitalize font-['Helvetica:Bold',_sans-serif] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[0.2px] leading-[1]">
            <p className="whitespace-pre">ready, steady, go!</p>
          </div>
        </div>
        
        {/* 環境資訊文字 */}
        <div className="font-['Noto_Sans_TC:Medium',_sans-serif] not-italic text-[#666666] text-[14px] text-center tracking-[0.7px] uppercase">
          <p className="whitespace-pre leading-[20px]">{environmentInfo.message}</p>
        </div>
        
        {/* 主要提示文字 */}
        <div className="font-['Noto_Sans_TC:Bold',_sans-serif] not-italic text-[#616161] text-center tracking-[0.7px] uppercase whitespace-pre">
          <p className="mb-0 text-[20px] leading-[28px]">還沒有集點卡？</p>
          <p className="text-[14px] leading-[20px]">點擊上方按鈕開始建立第一張集點卡!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute contents left-[29px] top-[254px]">
      <Btn onClick={showAddDialog} />
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] not-italic text-[#616161] text-center text-nowrap top-[417px] tracking-[0.7px] translate-x-[-50%] uppercase whitespace-pre" style={{ left: "calc(50% + 1px)" }}>
        <p className="mb-0 text-[20px] leading-[28px]">還沒有集點卡？</p>
        <p className="text-[14px] leading-[20px]">點擊上方按鈕開始建立第一張集點卡!</p>
      </div>
      <div className="absolute font-['Noto_Sans_TC:Medium',_sans-serif] left-[198.5px] not-italic text-[#666666] text-[14px] text-center text-nowrap top-[330px] tracking-[0.7px] translate-x-[-50%] uppercase">
        <p className="whitespace-pre leading-[20px]">{environmentInfo.message}</p>
      </div>
    </div>
  );
}

// Group component with image and subtitle (updated positions for card view)
function Group({ centered = false }: { centered?: boolean }) {
  if (centered) {
    return (
      <div className="flex flex-col items-center gap-6" data-name="Group">
        <div className="bg-center bg-cover bg-no-repeat h-[105px] w-[260px]" data-name="image 6" style={{ backgroundImage: `url('${imgImage6}')` }} />
        <div className="font-['Noto_Sans_TC:Bold',_sans-serif] not-italic text-[#605f5f] text-[20px] text-center tracking-[1px] uppercase">
          <p className="whitespace-pre leading-[28px]">設定目標，獲得獎勵！</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute contents left-[66px] top-[55px]" data-name="Group">
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] left-[196.5px] not-italic text-[#605f5f] text-[20px] text-center text-nowrap top-[183px] tracking-[1px] translate-x-[-50%] uppercase">
        <p className="whitespace-pre leading-[28px]">設定目標，獲得獎勵！</p>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat h-[105px] left-[66px] top-[55px] w-[260px]" data-name="image 6" style={{ backgroundImage: `url('${imgImage6}')` }} />
    </div>
  );
}

// Color mapping for stamps based on card color
const getStampColors = (color: string) => {
  switch (color) {
    case 'orange':
      return { fill: '#FF8F75', stroke: '#F97759' };
    case 'yellow':
      return { fill: '#FFC675', stroke: '#F3B359' };
    case 'green':
      return { fill: '#6DCD7D', stroke: '#70AF7B' };
    case 'blue':
      return { fill: '#7A91E7', stroke: '#5A70BF' };
    case 'purple':
      return { fill: '#BA8AF0', stroke: '#9552DF' };
    default:
      return { fill: '#FFC675', stroke: '#F3B359' };
  }
};

// Figma design components for card display with dynamic colors
function ColorPickSelected({ color }: { color: string }) {
  const colors = getStampColors(color);
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Selected">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Selected">
          <rect fill={colors.fill} height="49" id="Rectangle 3" rx="15.5" stroke={colors.stroke} width="49" x="0.5" y="0.5" />
          <path d={svgPaths.p179e4200} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ColorPickGray() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Gray">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Gray">
          <rect fill="var(--fill-0, #F8F8F6)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #B7B7B7)" strokeDasharray="3 3" width="49" x="0.5" y="0.5" />
          <path d={svgPaths.p179e4200} fill="var(--fill-0, #E9E9E5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6({ card }: { card: PunchCard }) {
  const formatDateRange = () => {
    const end = card.expiresAt.toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return `即日起 - ${end}`;
  };

  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_TC:Bold',_sans-serif] gap-[3px] h-[77px] items-start justify-start not-italic relative shrink-0 text-[#616161] w-full">
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">目標：{card.name}</p>
      </div>
      <div className="relative shrink-0 text-[14px] w-full">
        <p className="leading-[24px]">獎勵：{card.reward}</p>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[14px] w-full">
        <p className="leading-[24px]">期限：{formatDateRange()}</p>
      </div>
    </div>
  );
}

function Frame5({ card, onPunch }: { card: PunchCard; onPunch: (cardId: string) => void }) {
  const getGridLayout = () => {
    switch (card.totalPoints) {
      case 5:
        return 'grid grid-cols-5 gap-3 justify-items-center';
      case 8:
        return 'grid grid-cols-4 gap-3 justify-items-center items-center';
      case 14:
        return 'grid grid-cols-5 gap-3 justify-items-center';
      default:
        return 'grid grid-cols-5 gap-3 justify-items-center';
    }
  };

  const getContainerClass = () => {
    switch (card.totalPoints) {
      case 8:
        return 'content-stretch items-center justify-center relative shrink-0 w-full flex min-h-[140px]';
      default:
        return 'content-stretch items-center justify-center relative shrink-0 w-full';
    }
  };

  const renderStamps = () => {
    const stamps = [];
    for (let i = 0; i < card.totalPoints; i++) {
      const isCompleted = i < card.currentPoints;
      stamps.push(
        <div
          key={i}
          className={`cursor-pointer ${!isCompleted && i === card.currentPoints && !card.expired && !card.completed ? 'hover:opacity-80' : ''}`}
          onClick={() => {
            if (!isCompleted && i === card.currentPoints && !card.expired && !card.completed) {
              onPunch(card.id);
            }
          }}
        >
          {isCompleted ? <ColorPickSelected color={card.color} /> : <ColorPickGray />}
        </div>
      );
    }
    return stamps;
  };

  if (card.totalPoints === 8) {
    return (
      <div className={getContainerClass()}>
        <div className={`${getGridLayout()} p-3`}>
          {renderStamps()}
        </div>
      </div>
    );
  }

  return (
    <div className={`${getContainerClass()} ${getGridLayout()}`}>
      {renderStamps()}
    </div>
  );
}

function Frame7({ card, onPunch }: { card: PunchCard; onPunch: (cardId: string) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-5 items-start justify-start left-[20px] top-[18px] w-[290px]">
      <Frame6 card={card} />
      <Frame5 card={card} onPunch={onPunch} />
    </div>
  );
}

function MiDelete({ onDelete, cardName }: { onDelete: () => void; cardName: string }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowDeleteDialog(false);
  };

  return (
    <>
      <div 
        className="absolute left-[300px] size-[18px] top-[19px] cursor-pointer hover:opacity-70" 
        data-name="mi:delete"
        onClick={handleDeleteClick}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g clipPath="url(#clip0_99_85)" id="mi:delete">
            <path d={svgPathsDelete.p25059d80} fill="var(--fill-0, #777575)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_99_85">
              <rect fill="white" height="18" width="18" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="w-[95vw] max-w-sm mx-auto bg-white/95 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>確定刪除？</AlertDialogTitle>
            <AlertDialogDescription>
              是否確定刪除「{cardName}」集點卡？此操作無法復原。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
            <AlertDialogCancel className="w-full sm:w-auto h-12 text-base">取消</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmDelete}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 w-full sm:w-auto h-12 text-base shadow-lg"
            >
              確定刪除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function Stamps({ card, onPunch, onDelete }: { card: PunchCard; onPunch: (cardId: string) => void; onDelete: (cardId: string) => void }) {
  // Calculate dynamic height based on actual stamp layout
  const getContainerHeight = () => {
    const baseHeight = 77 + 40; // Frame6 height + gaps
    const stampSize = 50; // Each stamp is 50px
    const gapBetweenStamps = 12; // Gap between stamps
    const verticalPadding = 40; // Top and bottom padding for stamps area
    
    let rows = 1;
    let stampsPerRow = 5;
    
    switch (card.totalPoints) {
      case 5:
        rows = 1;
        stampsPerRow = 5;
        break;
      case 8:
        rows = 2;
        stampsPerRow = 4;
        break;
      case 14:
        rows = 3; // First row 5, second row 5, third row 4
        stampsPerRow = 5;
        break;
      default:
        rows = 1;
        stampsPerRow = 5;
    }
    
    const stampsAreaHeight = (rows * stampSize) + ((rows - 1) * gapBetweenStamps) + verticalPadding;
    return baseHeight + stampsAreaHeight;
  };

  const containerHeight = getContainerHeight();

  return (
    <div className="relative w-full mb-6" data-name="Stamps">
      <div 
        className="relative bg-white left-1/2 rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.1)] translate-x-[-50%] w-[337px]" 
        style={{ height: `${containerHeight}px` }}
      />
      <Frame7 card={card} onPunch={onPunch} />
      <MiDelete onDelete={() => onDelete(card.id)} cardName={card.name} />
    </div>
  );
}

export default function App() {
  const [cards, setCards] = useState<PunchCard[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
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
    const updateCardsStatus = () => {
      const now = new Date();
      setCards(prevCards => 
        prevCards.map(card => ({
          ...card,
          expired: now > card.expiresAt && !card.completed
        }))
      );
    };

    // 立即更新一次
    updateCardsStatus();

    // 設定每小時更新一次檢查過期狀態
    const interval = setInterval(updateCardsStatus, 3600000); // 1 hour

    return () => clearInterval(interval);
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
    // 檢查是否已達到10張卡片限制
    if (cards.length >= 10) {
      setShowLimitDialog(true);
      return;
    }

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

  // Calculate individual card height
  const getCardHeight = (card: PunchCard) => {
    const baseHeight = 77 + 40; // Frame6 height + gaps
    const stampSize = 50; // Each stamp is 50px
    const gapBetweenStamps = 12; // Gap between stamps
    const verticalPadding = 40; // Top and bottom padding for stamps area
    
    let rows = 1;
    switch (card.totalPoints) {
      case 5:
        rows = 1;
        break;
      case 8:
        rows = 2;
        break;
      case 14:
        rows = 3;
        break;
      default:
        rows = 1;
    }
    
    const stampsAreaHeight = (rows * stampSize) + ((rows - 1) * gapBetweenStamps) + verticalPadding;
    return baseHeight + stampsAreaHeight + 24; // +24 for margin bottom
  };

  // Calculate total page height dynamically
  // 新寫法（純數字 px，不再回傳 "max(100vh, ...)"）
const getTotalPageContentHeightPx = () => {
  if (cards.length === 0) return 800; // 空頁保底高度

  let totalHeight = 387; // 固定頂部區塊
  cards.forEach((card) => {
    totalHeight += getCardHeight(card);
  });
  totalHeight += 200; // 底部留白

  return totalHeight; // 回傳數字（px）
};

  return (
    <div 
      className="bg-[#f8f8f6] w-full relative"
      style={{ minHeight: getTotalPageHeight() }}
    >
      {/* PWA 功能組件 */}
      <OfflineIndicator />
      {!isInstalled && <PWAInstallPrompt />}
      
      {/* 更新提示 */}
      {updateAvailable && (
        <div className="fixed top-4 left-4 right-4 z-40 md:max-w-sm md:mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-sm">有新版本可用</span>
              <button
                onClick={updateApp}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
              >
                更新
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 手機全螢幕容器 */}
      <div 
        className="w-full relative max-w-md mx-auto bg-[#f8f8f6]" 
        data-name="index"
        style={{ minHeight: getTotalPageHeight() }}
      >
        {/* 無卡片時的置中內容 */}
        {cards.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 px-8">
            <Group centered={true} />
            <Group2 environmentInfo={environmentInfo} showAddDialog={() => cards.length >= 10 ? setShowLimitDialog(true) : setShowAddDialog(true)} centered={true} />
          </div>
        ) : (
          <>
            {/* Group component with image and subtitle */}
            <Group />
            
            {/* Add card button for when cards exist */}
            <div className="absolute contents left-[29px] top-[254px]">
              <Btn onClick={() => cards.length >= 10 ? setShowLimitDialog(true) : setShowAddDialog(true)} />
              <div className="absolute font-['Noto_Sans_TC:Medium',_sans-serif] left-[198.5px] not-italic text-[#666666] text-[14px] text-center text-nowrap top-[330px] tracking-[0.7px] translate-x-[-50%] uppercase">
                <p className="whitespace-pre leading-[20px]">{environmentInfo.message}</p>
              </div>
            </div>
            
            {/* All cards using Figma design */}
            <div className="absolute left-[29px] right-[29px] top-[387px] pb-20">
              {cards.map((card, index) => {
                // Calculate vertical spacing based on previous cards using dynamic heights
                let topOffset = 0;
                for (let i = 0; i < index; i++) {
                  const prevCard = cards[i];
                  topOffset += getCardHeight(prevCard);
                }
                
                return (
                  <div 
                    key={card.id} 
                    className="absolute w-full"
                    style={{ top: `${topOffset}px` }}
                  >
                    <Stamps 
                      card={card} 
                      onPunch={punchCard} 
                      onDelete={deleteCard} 
                    />
                  </div>
                );
              })}
            </div>

            {/* 底部文字 - 距離最後一張卡片36px */}
            {cards.length > 0 && (
              <div 
                className="absolute left-[29px] right-[29px] text-center"
                style={{ 
                  top: `${387 + cards.reduce((total, card) => total + getCardHeight(card), 0) + 36}px`
                }}
              >
                <p className="text-[#666666] text-[14px] font-['Noto_Sans_TC:Medium',_sans-serif] leading-[20px]">
                  過期的集點卡會自動灰階，請手動刪除
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* 新增集點卡對話框 */}
      <AddPunchCardDialog 
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAdd={addCard}
      />

      {/* 卡片數量限制對話框 */}
      <AlertDialog open={showLimitDialog} onOpenChange={setShowLimitDialog}>
        <AlertDialogContent className="w-[95vw] max-w-sm mx-auto bg-white/95 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>已達上限</AlertDialogTitle>
            <AlertDialogDescription>
              最多只能同時擁有 10 張集點卡。請先刪除一些舊的集點卡，再建立新的。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setShowLimitDialog(false)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-full h-12 text-base shadow-lg"
            >
              我知道了
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}