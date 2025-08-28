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
        return 'grid-cols-5 gap-3';
      case 8:
        return 'grid-cols-4 gap-4';
      case 14:
        return 'grid-cols-5 gap-2';
      default:
        return 'grid-cols-5 gap-3';
    }
  };

  const renderPunchCircles = () => {
    const circles = [];
    for (let i = 1; i <= card.totalPoints; i++) {
      const isCompleted = i <= card.currentPoints;
      const isNext = i === card.currentPoints + 1;
      
      circles.push(
        <div key={i} className="flex flex-col items-center gap-1">
          <button
            onClick={() => isNext && !isCardDisabled && handlePunch()}
            disabled={isCompleted || !isNext || isCardDisabled}
            className={`
              w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-200 text-sm
              ${isCompleted 
                ? `bg-gradient-to-br ${colorTheme.completed} text-white shadow-lg transform scale-105` 
                : isNext && !isCardDisabled
                ? `${colorTheme.next} cursor-pointer border-dashed hover:scale-110 active:scale-95 shadow-md`
                : 'border-gray-300 border-dashed bg-gray-50'
              }
              ${isCardDisabled ? 'grayscale opacity-50' : ''}
              touch-manipulation
            `}
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            {isCompleted ? (
              <CheckCircle className="w-7 h-7" />
            ) : isNext && !isCardDisabled ? (
              <Plus className={`w-6 h-6 ${card.color === 'blue' ? 'text-blue-500' : card.color === 'green' ? 'text-green-500' : card.color === 'purple' ? 'text-purple-500' : card.color === 'orange' ? 'text-orange-500' : card.color === 'pink' ? 'text-pink-500' : card.color === 'teal' ? 'text-teal-500' : card.color === 'red' ? 'text-red-500' : 'text-indigo-500'}`} />
            ) : (
              <span className="text-gray-400 text-sm">{i}</span>
            )}
          </button>
          <span className={`text-xs leading-tight text-center font-medium ${isCardDisabled ? 'text-gray-400' : 'text-gray-600'}`}>
            {i === 1 ? '點我!' : `第${i}格`}
          </span>
        </div>
      );
    }
    return circles;
  };

  return (
    <>
      <Card className={`mb-4 ${isCardDisabled ? 'opacity-60' : ''} border-l-4 ${isCardDisabled ? 'border-l-gray-300' : `border-l-${card.color}-400`} shadow-sm`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 pr-3">
              <h3 className={`mb-2 text-lg ${isCardDisabled ? 'text-gray-500' : ''}`}>{card.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <Gift className={`w-4 h-4 ${isCardDisabled ? 'text-gray-400' : 'text-orange-500'}`} />
                <span className={`text-base ${isCardDisabled ? 'text-gray-500' : 'text-orange-600'}`}>
                  {card.reward}
                </span>
              </div>
              <p className={`text-base ${isCardDisabled ? 'text-gray-500' : 'text-gray-600'}`}>
                已完成 {card.currentPoints} / {card.totalPoints}
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-red-500 min-w-[48px] min-h-[48px] rounded-full"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="w-[95vw] max-w-sm mx-auto">
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
                    className="bg-red-500 hover:bg-red-600 w-full sm:w-auto h-12 text-base"
                  >
                    刪除
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className={`${colorTheme.background} rounded-xl p-5 mb-4 ${isCardDisabled ? 'bg-gray-50' : ''}`}>
            <div className={`grid ${getGridLayout()} justify-items-center mb-4`}>
              {renderPunchCircles()}
            </div>
            <div className="flex justify-center gap-1.5">
              {Array.from({ length: card.totalPoints }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i < card.currentPoints 
                      ? isCardDisabled 
                        ? 'bg-gray-500'
                        : `bg-${card.color}-500`
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex items-center gap-2 text-base text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{formatDateRange()}</span>
            </div>
            {card.expired && !card.completed ? (
              <Badge variant="destructive" className="text-sm px-3 py-1">已過期</Badge>
            ) : card.completed ? (
              <Badge className={`bg-gradient-to-r ${colorTheme.gradient} text-white text-sm px-3 py-1`}>已完成</Badge>
            ) : (
              <Badge variant="secondary" className={`${colorTheme.background} ${colorTheme.accent} text-sm px-3 py-1`}>
                {daysRemaining} 天
              </Badge>
            )}
          </div>

          {!isCardDisabled && card.currentPoints < card.totalPoints && (
            <div className={`mt-4 p-4 ${colorTheme.background} rounded-lg border ${`border-${card.color}-200`}`}>
              <p className={`text-base ${colorTheme.accent} text-center`}>
                👆 點擊閃爍的圓圈來蓋章打卡！
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={showCompleteDialog} onOpenChange={setShowCompleteDialog}>
        <AlertDialogContent className="w-[95vw] max-w-sm mx-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>🎉 恭喜完成目標！</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              你已經完成「{card.name}」的所有集點！<br />
              獎勵：{card.reward}<br /><br />
              要重新開始集點嗎？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2">
            <AlertDialogCancel className="w-full sm:w-auto h-12 text-base">暫時不要</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => onRestart(card.id)}
              className={`bg-gradient-to-r ${colorTheme.gradient} hover:opacity-90 w-full sm:w-auto h-12 text-base`}
            >
              重新開始
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}