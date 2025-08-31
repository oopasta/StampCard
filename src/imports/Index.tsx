function EiPlus() {
  return (
    <div className="relative size-full" data-name="ei:plus">
      <div className="absolute size-[28.8px] translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% - 0.1px)", left: "calc(50% + 0.4px)" }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <circle cx="14.4" cy="14.4" fill="var(--fill-0, #E7CA33)" id="Ellipse 2" r="14.4" />
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

function Frame3() {
  return (
    <div className="absolute bg-[#efd963] box-border content-stretch flex gap-2.5 h-[57px] items-center justify-center left-[29px] p-[10px] rounded-[16px] top-[298px] w-[337px]">
      <div aria-hidden="true" className="absolute border border-[#e7ca33] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
      <div className="relative shrink-0 size-7" data-name="ei:plus">
        <EiPlus />
      </div>
      <div className="capitalize font-['Helvetica:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">ready, steady, go!</p>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="bg-[#f8f8f6] relative size-full" data-name="index">
      <div className="absolute font-['Helvetica:Bold',_sans-serif] leading-[0] lowercase not-italic text-[#c85938] text-[44px] text-center text-nowrap top-[179px] tracking-[1.32px] translate-x-[-50%]" style={{ left: "calc(50% + 2px)" }}>
        <p className="leading-[normal] whitespace-pre">loyalty plan</p>
      </div>
      <Frame3 />
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[0] left-[197.5px] not-italic text-[#616161] text-[18px] text-center text-nowrap top-[237px] tracking-[0.9px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">設定目標，獲得獎勵！</p>
      </div>
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[28px] left-[197.5px] not-italic text-[#616161] text-[0px] text-center text-nowrap top-[463px] tracking-[0.7px] translate-x-[-50%] uppercase whitespace-pre">
        <p className="mb-0 text-[18px]">還沒有集點卡？</p>
        <p className="text-[14px]">點擊上方按鈕開始建立第一張集點卡!</p>
      </div>
      <div className="absolute font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] left-[198px] not-italic text-[#666666] text-[12px] text-center text-nowrap top-[368px] tracking-[0.6px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">預覽模式 - 資料保存在瀏覽器本地</p>
      </div>
    </div>
  );
}