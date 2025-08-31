import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Plus, Check } from "lucide-react";
import { PunchCardFormData, CardColorTheme, COLOR_THEMES } from "../types/PunchCard";
import svgPaths from "../imports/svg-u13ozoby2s";

// Bg component for semi-transparent background
function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bg">
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[852px] left-0 top-0 w-[393px]" />
    </div>
  );
}

// Bg1 component for main popup background
function Bg1() {
  return (
    <div className="absolute contents top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Bg" style={{ left: "calc(50% + 0.5px)" }}>
      <div className="absolute bg-[#f8f8f6] h-[700px] rounded-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[356px]" style={{ left: "calc(50% + 0.5px)" }} />
    </div>
  );
}

// Close button component
function Close() {
  return (
    <div className="relative size-[42px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Close">
          <g id="Vector">
            <path d={svgPaths.p24400b00} fill="var(--fill-0, #616161)" />
            <path d={svgPaths.p25913cc0} fill="var(--fill-0, #616161)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Radio button components
function Radio() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Radio">
          <rect fill="var(--fill-0, #F97759)" height="18" rx="9" width="18" x="2" y="2" />
          <rect height="18" rx="9" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="4" width="18" x="2" y="2" />
          <g id="Union"></g>
        </g>
      </svg>
    </div>
  );
}

function Radio2() {
  return (
    <div className="bg-white relative rounded-[35px] shrink-0 size-[22px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[35px]" />
    </div>
  );
}

// Color picker components
function ColorPickRed({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Red">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Red">
          <rect fill="var(--fill-0, #FF8F75)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #F97759)" width="49" x="0.5" y="0.5" />
          {isSelected && (
            <path d={svgPaths.p179e4200} fill="var(--fill-0, white)" id="Vector" />
          )}
        </g>
      </svg>
    </div>
  );
}

function ColorPickYellow({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Yellow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Yellow">
          <rect fill="var(--fill-0, #FFC675)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #F3B359)" width="49" x="0.5" y="0.5" />
          {isSelected && (
            <path d={svgPaths.p179e4200} fill="var(--fill-0, white)" id="Vector" />
          )}
        </g>
      </svg>
    </div>
  );
}

function ColorPickGreen({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Green">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Green">
          <rect fill="var(--fill-0, #6DCD7D)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #70AF7B)" width="49" x="0.5" y="0.5" />
          {isSelected && (
            <path d={svgPaths.p179e4200} fill="var(--fill-0, white)" id="Vector" />
          )}
        </g>
      </svg>
    </div>
  );
}

function ColorPickBlue({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Blue">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Blue">
          <rect fill="var(--fill-0, #7A91E7)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #5A70BF)" width="49" x="0.5" y="0.5" />
          {isSelected && (
            <path d={svgPaths.p179e4200} fill="var(--fill-0, white)" id="Vector" />
          )}
        </g>
      </svg>
    </div>
  );
}

function ColorPickPurple({ isSelected = false }: { isSelected?: boolean }) {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Purple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Purple">
          <rect fill="var(--fill-0, #BA8AF0)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #9552DF)" width="49" x="0.5" y="0.5" />
          {isSelected && (
            <path d={svgPaths.p179e4200} fill="var(--fill-0, white)" id="Vector" />
          )}
        </g>
      </svg>
    </div>
  );
}

interface AddPunchCardDialogProps {
  onAdd: (data: PunchCardFormData) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AddPunchCardDialog({ onAdd, open = false, onOpenChange }: AddPunchCardDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  
  // 使用外部控制的 open 狀態，如果沒有則使用內部狀態
  const isOpen = onOpenChange ? open : internalOpen;
  const setIsOpen = onOpenChange || setInternalOpen;
  const [formData, setFormData] = useState<PunchCardFormData>({
    name: '',
    reward: '',
    totalPoints: 5,
    color: 'orange'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.reward.trim()) {
      onAdd(formData);
      setFormData({ name: '', reward: '', totalPoints: 5, color: 'orange' });
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const colorMapping: Record<string, React.ComponentType<{ isSelected?: boolean }>> = {
    orange: ColorPickRed,
    yellow: ColorPickYellow,
    green: ColorPickGreen,
    blue: ColorPickBlue,
    purple: ColorPickPurple,
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!onOpenChange && (
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-2xl py-8 text-lg font-semibold shadow-2xl relative overflow-hidden">
            <div className="relative flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Plus className="h-5 w-5" />
              </div>
              <span>建立新的集點卡</span>
            </div>
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="w-full h-full max-w-none p-0 bg-transparent border-0 shadow-none overflow-hidden [&>button]:hidden">
        {/* Accessibility components - visually hidden but accessible to screen readers */}
        <DialogTitle className="sr-only">建立新的集點卡</DialogTitle>
        <DialogDescription className="sr-only">
          建立新的集點卡來追蹤你的目標，讓達成目標變成一場有趣的遊戲！設定目標名稱、獎勵、點數與期限，並選擇喜歡的顏色主題。
        </DialogDescription>
        
        <div className="bg-[#f8f8f6] relative size-full" data-name="new">
          <Bg />
          
          {/* Popup */}
          <div className="absolute contents left-[19px] top-[76px]" data-name="Popup">
            <Bg1 />
            
            {/* Close button - fixed position in top right */}
            <div className="absolute flex h-[60px] items-center justify-center right-[20px] top-[20px] w-[60px] cursor-pointer z-10" onClick={handleClose}>
              <div className="flex-none rotate-[45deg]">
                <Close />
              </div>
            </div>
            
            {/* Header text */}
            <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[24px] not-italic text-[#616161] text-[14px] top-[99px] tracking-[0.7px] uppercase pr-16" style={{ left: "calc(50% - 146.5px)", width: "calc(100% - 100px)" }}>
              <p className="mb-0 text-nowrap">建立新的集點卡來追蹤你的目標</p>
              <p className="text-nowrap">讓達成目標變成一場有趣的遊戲！</p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* 目標 */}
              <div className="absolute left-[46px] top-[152px] w-[301px]" data-name="Form">
                <div className="font-['Noto_Sans_TC:Bold',_sans-serif] leading-[0] not-italic text-[#616161] text-[16px] mb-3">
                  <p className="leading-[1.5]">目標</p>
                </div>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="範例：咖啡不糖不奶"
                  className="bg-white h-[45px] rounded-[5px] w-full px-3 border-none outline-none font-['Noto_Sans_TC:Medium',_sans-serif] text-[14px] text-[#8e8e8e]"
                />
              </div>
              
              {/* 獎勵 */}
              <div className="absolute left-[46px] top-[241px] w-[301px]" data-name="Form">
                <div className="font-['Noto_Sans_TC:Bold',_sans-serif] leading-[0] not-italic text-[#616161] text-[16px] mb-3">
                  <p className="leading-[1.5]">獎勵</p>
                </div>
                <input
                  value={formData.reward}
                  onChange={(e) => setFormData(prev => ({ ...prev, reward: e.target.value }))}
                  placeholder="範例： 買小廢物"
                  className="bg-white h-[45px] rounded-[5px] w-full px-3 border-none outline-none font-['Noto_Sans_TC:Medium',_sans-serif] text-[14px] text-[#8e8e8e]"
                />
              </div>
              
              {/* 點數與期限 */}
              <div className="absolute contents left-[46px] top-[349px]">
                <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] h-6 leading-[0] left-[46px] not-italic text-[#616161] text-[16px] top-[349px] w-[301px]">
                  <p className="leading-[1.5]">點數與期限</p>
                </div>
                <div className="absolute content-stretch flex flex-col items-start justify-start left-[47px] top-[382px] w-[138px]">
                  {/* 5 點選項 */}
                  <div 
                    className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-3 relative shrink-0 w-full cursor-pointer" 
                    data-name="Radio"
                    onClick={() => setFormData(prev => ({ ...prev, totalPoints: 5 }))}
                  >
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
                    {formData.totalPoints === 5 ? <Radio /> : <Radio2 />}
                    <div className="font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] text-nowrap">
                      <p className="leading-[1.5] whitespace-pre">
                        <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`5 `}</span>
                        <span>{`點 / 期限 `}</span>
                        <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`10 `}</span>天
                      </p>
                    </div>
                  </div>
                  
                  {/* 8 點選項 */}
                  <div 
                    className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-3 relative shrink-0 w-full cursor-pointer" 
                    data-name="Radio"
                    onClick={() => setFormData(prev => ({ ...prev, totalPoints: 8 }))}
                  >
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
                    {formData.totalPoints === 8 ? <Radio /> : <Radio2 />}
                    <div className="font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] text-nowrap">
                      <p className="leading-[1.5] whitespace-pre">
                        <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`8 `}</span>
                        <span>{`點 / 期限 `}</span>
                        <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`14 `}</span>天
                      </p>
                    </div>
                  </div>
                  
                  {/* 14 點選項 */}
                  <div 
                    className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-3 relative shrink-0 w-full cursor-pointer" 
                    data-name="Radio"
                    onClick={() => setFormData(prev => ({ ...prev, totalPoints: 14 }))}
                  >
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
                    {formData.totalPoints === 14 ? <Radio /> : <Radio2 />}
                    <div className="font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] text-nowrap">
                      <p className="leading-[1.5] whitespace-pre">
                        <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`14 `}</span>
                        <span>{`點 / 期限 `}</span>
                        <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`30 `}</span>天
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 印章 */}
              <div className="absolute contents left-[46px] top-[539px]">
                <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] h-6 leading-[0] left-[46px] not-italic text-[#616161] text-[16px] top-[539px] w-[301px]">
                  <p className="leading-[1.5]">印章</p>
                </div>
              </div>
              
              {/* 顏色選擇 */}
              <div className="absolute content-stretch flex gap-3 items-center justify-start top-[575px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
                {Object.entries(colorMapping).map(([colorKey, ColorComponent]) => (
                  <div 
                    key={colorKey}
                    className="cursor-pointer"
                    onClick={() => setFormData(prev => ({ ...prev, color: colorKey as CardColorTheme }))}
                  >
                    <ColorComponent isSelected={formData.color === colorKey} />
                  </div>
                ))}
              </div>
              
              {/* 按鈕組 */}
              <div className="absolute left-[42px] top-[690px] w-[310px] h-[60px]" data-name="Btn group">
                {/* 取消按鈕 */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="absolute bg-white box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center left-0 p-[10px] rounded-[16px] top-0 w-[150px] cursor-pointer"
                  data-name="btn"
                >
                  <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.1)]" />
                  <div className="capitalize font-['Helvetica:Bold',_'Noto_Sans_JP:Bold',_sans-serif] leading-[0] relative shrink-0 text-[#616161] text-[16px] text-center text-nowrap tracking-[0.16px]" style={{ fontVariationSettings: "'wght' 700" }}>
                    <p className="leading-[normal] whitespace-pre">取消</p>
                  </div>
                </button>
                
                {/* 建立新卡按鈕 */}
                <button
                  type="submit"
                  disabled={!formData.name.trim() || !formData.reward.trim()}
                  className="absolute bg-[#f97759] box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center left-[160px] p-[10px] rounded-[16px] top-0 w-[150px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  data-name="btn"
                >
                  <div aria-hidden="true" className="absolute border border-[#e85230] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
                  <div className="capitalize font-['Helvetica:Bold',_'Noto_Sans_JP:Bold',_sans-serif] leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.16px]" style={{ fontVariationSettings: "'wght' 700" }}>
                    <p className="leading-[normal] whitespace-pre">建立新卡</p>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}