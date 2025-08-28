import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Plus, Check } from "lucide-react";
import { PunchCardFormData, CardColorTheme, COLOR_THEMES } from "../types/PunchCard";

interface AddPunchCardDialogProps {
  onAdd: (data: PunchCardFormData) => void;
}

export function AddPunchCardDialog({ onAdd }: AddPunchCardDialogProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<PunchCardFormData>({
    name: '',
    reward: '',
    totalPoints: 5,
    color: 'blue'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.reward.trim()) {
      onAdd(formData);
      setFormData({ name: '', reward: '', totalPoints: 5, color: 'blue' });
      setOpen(false);
    }
  };

  const pointOptions = [
    { value: 5, label: '5點', days: 10 },
    { value: 8, label: '8點', days: 14 },
    { value: 14, label: '14點', days: 30 }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-2xl py-6 text-base">
          <Plus className="mr-2 h-5 w-5" />
          新增集點卡
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-md max-h-[90vh] overflow-y-auto mx-auto">
        <DialogHeader>
          <DialogTitle>新增集點卡</DialogTitle>
          <DialogDescription>
            建立一張新的集點卡來追蹤你的目標進度，設定點數、獎勵和顏色主題。
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">目標名稱</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="例如：日走兩萬步"
              className="text-base h-12"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reward">獎勵</Label>
            <Textarea
              id="reward"
              value={formData.reward}
              onChange={(e) => setFormData(prev => ({ ...prev, reward: e.target.value }))}
              placeholder="例如：買新的保溫杯"
              className="text-base min-h-[80px] resize-none"
              rows={3}
            />
          </div>

          <div className="space-y-3">
            <Label>集點數量</Label>
            <RadioGroup
              value={formData.totalPoints.toString()}
              onValueChange={(value) => setFormData(prev => ({ ...prev, totalPoints: parseInt(value) as 5 | 8 | 14 }))}
              className="space-y-3"
            >
              {pointOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={option.value.toString()} id={`points-${option.value}`} className="w-5 h-5" />
                  <Label htmlFor={`points-${option.value}`} className="text-base flex-1 cursor-pointer">
                    {option.label} ({option.days}天內完成)
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>選擇顏色主題</Label>
            <div className="grid grid-cols-4 gap-3">
              {Object.entries(COLOR_THEMES).map(([colorKey, colorTheme]) => (
                <button
                  key={colorKey}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, color: colorKey as CardColorTheme }))}
                  className={`
                    relative h-12 rounded-lg border-2 transition-all touch-manipulation overflow-hidden
                    ${formData.color === colorKey 
                      ? 'border-gray-700 ring-2 ring-gray-300 scale-105' 
                      : 'border-gray-300 hover:border-gray-500 hover:scale-105 active:scale-95'
                    }
                  `}
                  title={colorTheme.name}
                >
                  {/* 漸變背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorTheme.gradient}`} />
                  
                  {/* 選中狀態圖示 */}
                  {formData.color === colorKey && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Check className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)} 
              className="flex-1 h-12 text-base"
            >
              取消
            </Button>
            <Button 
              type="submit" 
              className="flex-1 h-12 text-base"
              disabled={!formData.name.trim() || !formData.reward.trim()}
            >
              建立
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}