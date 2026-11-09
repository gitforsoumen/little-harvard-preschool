import svgPaths from "./svg-1l5pcr6ioi";
import imgEllipse21 from "figma:asset/95413149c20c934a52642c1459118b6665fdcd1b.png";

function HomePage() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="HomePage">
      <p className="absolute font-['Fredoka:SemiBold',sans-serif] font-semibold leading-[45px] left-[616.69px] text-[#333333] text-[50px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        What Parents Say
      </p>
    </div>
  );
}

function HomePage1() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-full" data-name="HomePage">
      <p className="absolute font-['Fredoka:Regular',sans-serif] font-normal leading-[28.8px] left-[calc(50%-1px)] text-[#666666] text-[20px] text-center text-nowrap top-[10px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hear from families who have experienced the Little Harvard difference.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[89.797px] items-start left-1/2 top-0 translate-x-[-50%] w-[1232px]" data-name="Container">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[680px] size-[42px] top-[180px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Icon">
          <path d={svgPaths.p352844c0} id="Vector" stroke="var(--stroke-0, #F634A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M35 5.25V12.25" id="Vector_2" stroke="var(--stroke-0, #F634A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M38.5 8.75H31.5" id="Vector_3" stroke="var(--stroke-0, #F634A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M7 29.75V33.25" id="Vector_4" stroke="var(--stroke-0, #F634A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M8.75 31.5H5.25" id="Vector_5" stroke="var(--stroke-0, #F634A3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Container />
      <p className="absolute font-['Fredoka:Regular',sans-serif] font-normal leading-[38.8px] left-1/2 text-[#333333] text-[24px] text-center top-[372px] translate-x-[-50%] w-[1142px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`“The 50/50 approach is brilliant. My daughter not only excels academically but also discovered her love for dance here. She's confident, creative, and always happy.”`}</p>
      <p className="absolute font-['Fredoka:SemiBold',sans-serif] font-semibold leading-[28.8px] left-[calc(50%-67px)] text-[#333333] text-[24px] text-nowrap top-[486px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rajesh Patel
      </p>
      <p className="absolute font-['Fredoka:Regular',sans-serif] font-normal leading-[28.8px] left-[calc(50%-108px)] text-[#666666] text-[20px] text-nowrap top-[522px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Father of Ananya (UKG)
      </p>
      <div className="absolute left-1/2 size-[202px] top-[144px] translate-x-[-50%]">
        <div className="absolute inset-[-5.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 224">
            <g filter="url(#filter0_d_59_743)" id="Ellipse 22">
              <circle cx="112" cy="112" fill="var(--fill-0, white)" r="101" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="224" id="filter0_d_59_743" width="224" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="5.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.552885 0 0 0 0 0.552885 0 0 0 0 0.552885 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_59_743" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_59_743" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-1/2 size-[176px] top-[157px] translate-x-[-50%]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse21} width="176" />
      </div>
      <Icon />
    </div>
  );
}