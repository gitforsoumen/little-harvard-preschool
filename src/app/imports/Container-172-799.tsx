import svgPaths from "./svg-y4qfnvfu2k";
import imgImageWithFallback from "figma:asset/170edb79aa60a97d825e24f2e18b2f677adb8115.jpg";

function ImageWithFallback() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[290px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[224px] left-0 to-[rgba(0,0,0,0)] top-0 w-[290px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3a0d66a0} id="Vector" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M4.66667 3.5H4.67833" id="Vector_2" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M25.6667 9.33333H25.6783" id="Vector_3" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 2.33333H17.5117" id="Vector_4" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M25.6667 23.3333H25.6783" id="Vector_5" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p384fc6c0} id="Vector_6" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pffe3800} id="Vector_7" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p13c57180} id="Vector_8" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p39034700} id="Vector_9" stroke="var(--stroke-0, #FFC107)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[16px] rounded-[3.35544e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[152px]" data-name="Container">
      <Icon />
    </div>
  );
}

function ProgramsPage() {
  return (
    <div className="h-[224px] overflow-clip relative shrink-0 w-full" data-name="ProgramsPage">
      <ImageWithFallback />
      <Container />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Fredoka:Medium',sans-serif] font-medium leading-[36.4px] left-0 text-[#333333] text-[28px] text-nowrap top-[-1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dance
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[143.984px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[28.8px] left-0 text-[#666666] text-[18px] top-0 w-[222px]">{`Classical & contemporary dance forms. Builds confidence, expression, and physical fitness through movement.`}</p>
    </div>
  );
}

function ProgramsPage1() {
  return (
    <div className="h-[240.375px] relative shrink-0 w-full" data-name="ProgramsPage">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Heading />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] size-full" data-name="Container">
      <ProgramsPage />
      <ProgramsPage1 />
    </div>
  );
}