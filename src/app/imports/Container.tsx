import svgPaths from "./svg-8xcx3262nv";
import imgImageWithFallback from "figma:asset/bfb989abcfff0a38e43f223b64cfdb63d74168d3.jpg";

function ImageWithFallback() {
  return (
    <div className="absolute h-[224px] left-0 top-0 w-[290px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return <div className="absolute h-[224px] left-0 top-0 w-[290px]" data-name="Container" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgba(233, 26, 26, 0) 0%, rgba(233, 26, 26, 0) 100%)" }} />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3f721980} id="Vector" stroke="var(--stroke-0, #E91E63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2153d600} id="Vector_2" stroke="var(--stroke-0, #E91E63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p18e75780} id="Vector_3" stroke="var(--stroke-0, #E91E63)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
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
        Piano
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[143.984px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito:Regular',sans-serif] font-normal leading-[28.8px] left-0 text-[#666666] text-[18px] top-0 w-[239px]">Professional piano instruction for beginners to intermediate levels. Develops rhythm, coordination, and musical appreciation.</p>
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