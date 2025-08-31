import { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { Trash2, Gift, Calendar, CheckCircle, Plus } from "lucide-react";
import { PunchCard, COLOR_THEMES } from "../types/PunchCard";

interface PunchCardComponentProps {
  card: PunchCard;
  onPunch: (cardId: string) => void;
  onDelete: (cardId: string) => void;
  onRestart: (cardId: string) => void;
}

export function PunchCardComponent({ card, onPunch, onDelete, onRestart }: PunchCardComponentProps) {
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  
  const colorTheme = COLOR_THEMES[card.color];
  
  const getDaysRemaining = () => {
    const now = new Date();
    const diffTime = card.expiresAt.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const formatDateRange = () => {
    const start = card.createdAt.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' });
    const end = card.expiresAt.toLocaleDateString('zh-TW', { month: 'numeric', day: 'numeric' });
    return `${start} - ${end}`;
  };

  const isCardDisabled = card.expired && !card.completed;
  const daysRemaining = getDaysRemaining();

  const handlePunch = () => {
    if (card.currentPoints + 1 >= card.totalPoints) {
      setShowCompleteDialog(true);
    }
    onPunch(card.id);
  };

  const getGridLayout = () => {
    switch (card.totalPoints) {
      case 5:
        return 'grid-cols-5 gap-4';
      case 8:
        return 'grid-cols-4 gap-5';
      case 14:
        return 'grid-cols-5 gap-3';
      default:
        return 'grid-cols-5 gap-4';
    }
  };

  const renderPunchCircles = () => {
    const circles = [];
    for (let i = 1; i <= card.totalPoints; i++) {
      const isCompleted = i <= card.currentPoints;
      const isNext = i === card.currentPoints + 1;
      
      circles.push(
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="relative">
            <button
              onClick={() => isNext && !isCardDisabled && handlePunch()}
              disabled={isCompleted || !isNext || isCardDisabled}
              className={`
                relative w-16 h-16 rounded-full border-3 flex items-center justify-center text-sm
                ${isCompleted 
                  ? `bg-gradient-to-br ${colorTheme.gradient} text-white shadow-xl border-white/50` 
                  : isNext && !isCardDisabled
                  ? `bg-white/80 backdrop-blur-sm cursor-pointer border-dashed shadow-lg border-${card.color}-300`
                  : 'border-gray-300 border-dashed bg-gray-50/80 backdrop-blur-sm'
                }
                ${isCardDisabled ? 'grayscale opacity-50' : ''}
                touch-manipulation
              `}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              {/* 內部發光效果 */}
              {isCompleted && (
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
              )}
              
              {isCompleted ? (
                <div className="relative">
                  <CheckCircle className="w-8 h-8 drop-shadow-sm" />
                </div>
              ) : isNext && !isCardDisabled ? (
                <div className="relative">
                  <Plus className={`w-7 h-7 ${
                    card.color === 'blue' ? 'text-blue-500' : 
                    card.color === 'green' ? 'text-green-500' : 
                    card.color === 'purple' ? 'text-purple-500' : 
                    card.color === 'orange' ? 'text-orange-500' : 
                    card.color === 'pink' ? 'text-pink-500' : 
                    card.color === 'teal' ? 'text-teal-500' : 
                    card.color === 'red' ? 'text-red-500' : 
                    'text-indigo-500'
                  }`} />
                </div>
              ) : (
                <span className="text-gray-400 text-sm font-medium">{i}</span>
              )}
            </button>
          </div>
          
          <span className={`text-xs leading-tight text-center font-medium ${
            isCardDisabled ? 'text-gray-400' : 
            isCompleted ? 'text-green-600' :
            isNext ? colorTheme.accent : 'text-gray-500'
          }`}>
            {isCompleted ? '已完成' : isNext && !isCardDisabled ? '點我!' : `第${i}點`}
          </span>
        </div>
      );
    }
    return circles;
  };

  return (
    <>
      <Card className={`relative overflow-hidden ${isCardDisabled ? 'opacity-75' : ''} shadow-xl border-0 bg-white/80 backdrop-blur-sm`}>
        {/* 裝飾性背景漸變 */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${isCardDisabled ? 'from-gray-300 to-gray-400' : colorTheme.gradient}`}></div>
        
        {/* 卡片光澤效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
        
        <CardContent className="p-6 relative">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${isCardDisabled ? 'from-gray-200 to-gray-300' : colorTheme.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${isCardDisabled ? 'text-gray-500' : 'text-gray-800'}`}>
                    {card.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Gift className={`w-4 h-4 ${isCardDisabled ? 'text-gray-400' : 'text-amber-500'}`} />
                    <span className={`text-sm font-medium ${isCardDisabled ? 'text-gray-500' : 'text-amber-600'}`}>
                      {card.reward}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* 進度條 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-medium ${isCardDisabled ? 'text-gray-500' : 'text-gray-700'}`}>
                    進度
                  </span>
                  <span className={`text-sm font-bold ${isCardDisabled ? 'text-gray-500' : colorTheme.accent}`}>
                    {card.currentPoints} / {card.totalPoints}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${isCardDisabled ? 'from-gray-400 to-gray-500' : colorTheme.gradient} shadow-sm`}
                    style={{ width: `${(card.currentPoints / card.totalPoints) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-red-500 hover:bg-red-50 min-w-[48px] min-h-[48px] rounded-xl"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[95vw] max-w-sm mx-auto bg-white/95 backdrop-blur-sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>確認刪除</AlertDialogTitle>
                  <AlertDialogDescription>
                    確定要刪除「{card.name}」集點卡嗎？此操作無法復原。
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <AlertDialogCancel className="w-full sm:w-auto h-12 text-base">取消</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={() => onDelete(card.id)} 
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 w-full sm:w-auto h-12 text-base shadow-lg"
                  >
                    刪除
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* 集點區域 */}
          <div className={`relative rounded-2xl p-6 mb-6 shadow-inner border-2 ${isCardDisabled ? 'bg-gray-100 border-gray-200' : `${colorTheme.background} border-white/50`}`}>
            {/* 背景裝飾 */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
            
            <div className={`grid ${getGridLayout()} justify-items-center mb-6 relative`}>
              {renderPunchCircles()}
            </div>
            
            {/* 進度點指示器 */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: card.totalPoints }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < card.currentPoints 
                      ? isCardDisabled 
                        ? 'bg-gray-500 shadow-sm'
                        : `bg-gradient-to-r ${colorTheme.gradient} shadow-md`
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 底部資訊 */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <div className={`p-2 rounded-lg ${isCardDisabled ? 'bg-gray-100' : colorTheme.background}`}>
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-500">期限</p>
                <p className="text-sm font-medium">{formatDateRange()}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {card.expired && !card.completed ? (
                <Badge variant="destructive" className="text-sm px-4 py-1.5 shadow-sm">已過期</Badge>
              ) : card.completed ? (
                <Badge className={`bg-gradient-to-r ${colorTheme.gradient} text-white text-sm px-4 py-1.5 shadow-lg border-0`}>
                  🎉 已完成
                </Badge>
              ) : (
                <Badge variant="secondary" className={`${colorTheme.background} ${colorTheme.accent} text-sm px-4 py-1.5 border border-white/50 shadow-sm`}>
                  剩餘 {daysRemaining} 天
                </Badge>
              )}
            </div>
          </div>

          {/* 操作提示 */}
          {!isCardDisabled && card.currentPoints < card.totalPoints && (
            <div className={`mt-6 p-4 rounded-xl border-2 border-dashed ${isCardDisabled ? 'bg-gray-50 border-gray-300' : `${colorTheme.background} border-${card.color}-200`} relative overflow-hidden`}>
              <p className={`text-sm text-center font-medium relative ${isCardDisabled ? 'text-gray-500' : colorTheme.accent}`}>
                👆 點擊圓圈來蓋章打卡！
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={showCompleteDialog} onOpenChange={setShowCompleteDialog}>
        <AlertDialogContent className="w-[95vw] max-w-sm mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl relative overflow-hidden">
          {/* 慶祝背景效果 */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"></div>
          
          <AlertDialogHeader className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <span className="text-4xl">🏆</span>
            </div>
            <AlertDialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              🎉 恭喜完成目標！
            </AlertDialogTitle>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mt-4 border border-white/50 shadow-inner">
              <p className="text-lg font-semibold text-gray-800 mb-3">
                「{card.name}」
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">🎁</span>
                <div>
                  <p className="text-sm text-gray-600 mb-1">你的獎勵</p>
                  <p className="text-base font-semibold text-orange-600">
                    {card.reward}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                要重新開始這個集點挑戦嗎？
              </p>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 pt-6 relative z-10">
            <AlertDialogCancel className="w-full sm:w-auto h-12 text-base rounded-xl bg-gray-100 hover:bg-gray-200 border-0">
              稍後再說
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => onRestart(card.id)}
              className={`bg-gradient-to-r ${colorTheme.gradient} hover:opacity-90 w-full sm:w-auto h-12 text-base rounded-xl shadow-lg`}
            >
              🚀 重新開始
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}