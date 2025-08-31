import svgPaths from "./svg-t0e3im4u4v";
import imgImage6 from "figma:asset/b570ad906571c73bd7b8f948eebafda45c8ce550.png";

function EiPlus() {
  return (
    <div className="relative shrink-0 size-7" data-name="ei:plus">
      <div className="absolute bottom-[-1.07%] left-0 right-[-2.86%] top-[-1.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 30">
          <g id="ei:plus">
            <circle cx="14.4" cy="14.9" fill="var(--fill-0, #E85230)" id="Ellipse 2" r="14.4" />
            <g id="Vector">
              <path d="M7 14.5H21V16.5H7V14.5Z" fill="var(--fill-0, white)" />
              <path d="M13 8.5H15V22.5H13V8.5Z" fill="var(--fill-0, white)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute box-border content-stretch flex gap-2.5 h-[57px] items-center justify-center left-[29px] p-[10px] rounded-[16px] top-[254px] w-[337px]" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#e85230] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.22)]" />
      <EiPlus />
      <div className="capitalize font-['Helvetica:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white tracking-[0.2px]">
        <p className="leading-[normal] whitespace-pre">ready, steady, go!</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[29px] top-[254px]">
      <Btn />
      <div className="absolute font-['Noto_Sans_TC:Medium',_sans-serif] leading-[0] left-[198.5px] not-italic text-[#666666] text-[14px] text-center text-nowrap top-[330px] tracking-[0.7px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">預覽模式 - 資料保存在瀏覽器本地</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[66px] top-[55px]" data-name="Group">
      <div className="absolute font-['Noto_Sans_TC:Bold',_sans-serif] leading-[0] left-[196.5px] not-italic text-[#605f5f] text-[20px] text-center text-nowrap top-[183px] tracking-[1px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">設定目標，獲得獎勵！</p>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat h-[105px] left-[66px] top-[55px] w-[260px]" data-name="image 6" style={{ backgroundImage: `url('${imgImage6}')` }} />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_TC:Bold',_sans-serif] gap-[3px] h-[77px] items-start justify-start leading-[0] not-italic relative shrink-0 text-[#616161] w-full">
      <div className="relative shrink-0 text-[20px] w-full">
        <p className="leading-[24px]">目標：咖啡不糖不奶</p>
      </div>
      <div className="relative shrink-0 text-[14px] w-full">
        <p className="leading-[24px]">獎勵：買小廢物</p>
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[14px] w-full">
        <p className="leading-[24px]">期限：即日起 - 2025/09/08</p>
      </div>
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
      <ColorPickYellow />
      {[...Array(4).keys()].map((_, i) => (
        <ColorPickGray key={i} />
      ))}
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[39px] mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] font-['Helvetica:Bold',_sans-serif] h-6 leading-[0] ml-10 mt-0 not-italic relative text-[#616161] text-[34px] text-right translate-x-[-100%] w-10">
        <p className="leading-[24px]">10</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Noto_Sans_TC:Bold',_sans-serif] ml-0 mt-0 not-italic relative text-[#616161] text-[14px] w-7">
        <p className="leading-[24px]">倒數</p>
      </div>
      <Group8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-5 items-end justify-start left-[47px] top-[405px] w-[300px]">
      <Frame6 />
      <Frame5 />
      <Group9 />
    </div>
  );
}

function MiDelete() {
  return (
    <div className="absolute left-[323.56px] size-[20.48px] top-[406.56px]" data-name="mi:delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_97_524)" id="mi:delete">
          <path d={svgPaths.p1e800a00} fill="var(--fill-0, #777575)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_97_524">
            <rect fill="white" height="20.48" width="20.48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Stamps() {
  return (
    <div className="absolute contents left-7 top-[387px]" data-name="Stamps">
      <div className="absolute bg-white h-[230px] left-1/2 rounded-[16px] shadow-[0px_5px_13px_0px_rgba(153,139,62,0.1)] top-[387px] translate-x-[-50%] w-[337px]" />
      <Frame7 />
      <MiDelete />
    </div>
  );
}

export default function CardDisplay() {
  return (
    <div className="bg-[#f8f8f6] relative size-full" data-name="card-display">
      <Group2 />
      <Group />
      <Stamps />
    </div>
  );
}