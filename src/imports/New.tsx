import svgPaths from "./svg-u13ozoby2s";

function Bg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Bg">
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[852px] left-0 top-0 w-[393px]" />
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute contents top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Bg" style={{ left: "calc(50% + 0.5px)" }}>
      <div className="absolute bg-[#f8f8f6] h-[700px] rounded-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[356px]" style={{ left: "calc(50% + 0.5px)" }} />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[45px] ml-0 mt-0 rounded-[5px] w-[300px]" />
      <div className="[grid-area:1_/_1] font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] ml-3 mt-[11px] not-italic relative text-[#8e8e8e] text-[14px] w-[276px]">
        <p className="leading-[1.5]">範例：咖啡不糖不奶</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] left-0 px-2.5 py-2 top-0 w-80">
      <div className="font-['Noto_Sans_TC:Bold',_sans-serif] min-w-full not-italic relative shrink-0 text-[#616161] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">目標</p>
      </div>
      <Group1 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Form">
      <Frame62 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[45px] ml-0 mt-0 rounded-[5px] w-[300px]" />
      <div className="[grid-area:1_/_1] font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] ml-3 mt-[11px] not-italic relative text-[#8e8e8e] text-[14px] w-[276px]">
        <p className="leading-[1.5]">範例： 買小廢物</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] left-0 px-2.5 py-2 top-0 w-80">
      <div className="font-['Noto_Sans_TC:Bold',_sans-serif] min-w-full not-italic relative shrink-0 text-[#616161] text-[16px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">獎勵</p>
      </div>
      <Group2 />
    </div>
  );
}

function Form1() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Form">
      <Frame63 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start top-[152px] translate-x-[-50%] w-80" style={{ left: "calc(50% + 0.5px)" }}>
      <Form />
      <Form1 />
    </div>
  );
}

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

function Popup() {
  return (
    <div className="absolute contents left-[19px] top-[76px]" data-name="Popup">
      <Bg1 />
      <Frame3 />
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[24px] not-italic text-[#616161] text-[14px] top-[99px] tracking-[0.7px] uppercase w-60" style={{ left: "calc(50% - 146.5px)" }}>
        <p className="mb-0">建立新的集點卡來追蹤你的目標</p>
        <p>讓達成目標變成一場有趣的遊戲！</p>
      </div>
      <div className="absolute flex h-[59.397px] items-center justify-center left-[307.1px] top-[87.1px] w-[59.397px]">
        <div className="flex-none rotate-[45deg]">
          <Close />
        </div>
      </div>
    </div>
  );
}

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

function Radio1() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-3 relative shrink-0 w-full" data-name="Radio">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <Radio />
      <div className="font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">
          <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`5 `}</span>
          <span>{`點 / 期限 `}</span>
          <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`10 `}</span>天
        </p>
      </div>
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

function Radio3() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-3 relative shrink-0 w-full" data-name="Radio">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <Radio2 />
      <div className="font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">
          <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`8 `}</span>
          <span>{`點 / 期限 `}</span>
          <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`14 `}</span>天
        </p>
      </div>
    </div>
  );
}

function Radio4() {
  return (
    <div className="bg-white relative rounded-[35px] shrink-0 size-[22px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-neutral-200 border-solid inset-0 pointer-events-none rounded-[35px]" />
    </div>
  );
}

function Radio5() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-3 relative shrink-0 w-full" data-name="Radio">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
      <Radio4 />
      <div className="font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#616161] text-[14px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">
          <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`14 `}</span>
          <span>{`點 / 期限 `}</span>
          <span className="font-['Helvetica:Regular',_sans-serif] not-italic">{`30 `}</span>天
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-[47px] top-[382px] w-[138px]">
      <Radio1 />
      <Radio3 />
      <Radio5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[46px] top-[349px]">
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] h-6 leading-[0] left-[46px] not-italic text-[#616161] text-[16px] top-[349px] w-[301px]">
        <p className="leading-[1.5]">點數與期限</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[46px] top-[539px]">
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] h-6 leading-[0] left-[46px] not-italic text-[#616161] text-[16px] top-[539px] w-[301px]">
        <p className="leading-[1.5]">印章</p>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center left-[202px] p-[10px] rounded-[16px] top-[690px] w-[150px]" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#e85230] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
      <div className="capitalize font-['Helvetica:Bold',_'Noto_Sans_JP:Bold',_sans-serif] leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[0.16px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal] whitespace-pre">建立新卡</p>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-2.5 h-[60px] items-center justify-center left-[42px] p-[10px] rounded-[16px] top-[690px] w-[150px]" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.1)]" />
      <div className="capitalize font-['Helvetica:Bold',_'Noto_Sans_JP:Bold',_sans-serif] leading-[0] relative shrink-0 text-[#616161] text-[16px] text-center text-nowrap tracking-[0.16px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[normal] whitespace-pre">取消</p>
      </div>
    </div>
  );
}

function BtnGroup() {
  return (
    <div className="absolute contents left-[42px] top-[690px]" data-name="Btn group">
      <Btn />
      <Btn1 />
    </div>
  );
}

function ColorPickRed() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Red">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Red">
          <rect fill="var(--fill-0, #FF8F75)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #F97759)" width="49" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ColorPickYellow() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Yellow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Yellow">
          <rect fill="var(--fill-0, #FFC675)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #F3B359)" width="49" x="0.5" y="0.5" />
          <path d={svgPaths.p179e4200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ColorPickGreen() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Green">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Green">
          <rect fill="var(--fill-0, #6DCD7D)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #70AF7B)" width="49" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ColorPickBlue() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Blue">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Blue">
          <rect fill="var(--fill-0, #7A91E7)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #5A70BF)" width="49" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ColorPickPurple() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="ColorPick-Purple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="ColorPick-Purple">
          <rect fill="var(--fill-0, #BA8AF0)" height="49" id="Rectangle 3" rx="15.5" stroke="var(--stroke-0, #9552DF)" width="49" x="0.5" y="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-3 items-center justify-start top-[575px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
      <ColorPickRed />
      <ColorPickYellow />
      <ColorPickGreen />
      <ColorPickBlue />
      <ColorPickPurple />
    </div>
  );
}

export default function New() {
  return (
    <div className="bg-[#f8f8f6] relative size-full" data-name="new">
      <Bg />
      <Popup />
      <Group3 />
      <Group4 />
      <BtnGroup />
      <Frame5 />
    </div>
  );
}