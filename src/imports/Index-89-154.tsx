import imgImage5 from "figma:asset/3004d62fc7593ed7b0f27c370f646acd12dd7488.png";

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

function Btn() {
  return (
    <div className="absolute bg-[#f97759] box-border content-stretch flex gap-2.5 h-[57px] items-center justify-center left-[29px] p-[10px] rounded-[16px] top-[396px] w-[337px]" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#e85230] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
      <div className="relative shrink-0 size-7" data-name="ei:plus">
        <EiPlus />
      </div>
      <div className="capitalize font-['Helvetica:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">ready, steady, go!</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[29px] top-[396px]">
      <Btn />
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[28px] not-italic text-[#616161] text-[0px] text-center text-nowrap top-[559px] tracking-[0.7px] translate-x-[-50%] uppercase whitespace-pre" style={{ left: "calc(50% + 1px)" }}>
        <p className="mb-0 text-[20px]">還沒有集點卡？</p>
        <p className="text-[14px]">點擊上方按鈕開始建立第一張集點卡!</p>
      </div>
      <div className="absolute font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] left-[198.5px] not-italic text-[#666666] text-[14px] text-center text-nowrap top-[472px] tracking-[0.7px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">預覽模式 - 資料保存在瀏覽器本地</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[58px] top-[190px]" data-name="Group">
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[0] left-[197.5px] not-italic text-[#605f5f] text-[20px] text-center text-nowrap top-[325px] tracking-[1px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">設定目標，獲得獎勵！</p>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat h-[121px] left-[58px] top-[190px] w-[278px]" data-name="image 5" style={{ backgroundImage: `url('${imgImage5}')` }} />
    </div>
  );
}

export default function Index() {
  return (
    <div className="bg-[#f8f8f6] relative size-full" data-name="index">
      <Group2 />
      <Group />
    </div>
  );
}