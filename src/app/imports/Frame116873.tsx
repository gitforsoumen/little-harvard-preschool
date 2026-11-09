import imgDsc38172 from "figma:asset/36ba93bd8c95316338f2a041f18fd6a06d0aa1f4.jpg";
import imgDsc41432 from "figma:asset/6fc2f4ab0d16fdd9e415f831789d19fa8f035927.jpg";
import imgDsc08961 from "figma:asset/b381eb8677136623756c67d772e1d4e6c1337908.jpg";
import imgDsc0416411 from "figma:asset/de0661f07397cfd14aa646d4d3edb20e4b6ebacb.jpg";
import { imgDsc038171, imgDsc041431 } from "./svg-rylte";

function HomePage() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="HomePage">
      <p className="absolute font-['Fredoka:SemiBold',sans-serif] font-semibold leading-[45px] left-[616.19px] text-[#333333] text-[50px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Beautiful Campus
      </p>
    </div>
  );
}

function HomePage1() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-full" data-name="HomePage">
      <p className="absolute font-['Fredoka:Regular',sans-serif] font-normal leading-[28.8px] left-[calc(50%-1px)] text-[#666666] text-[20px] text-center text-nowrap top-[10px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        A purpose-built space designed to inspire learning, creativity, and joyful exploration.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[89.797px] items-start left-1/2 top-[84px] translate-x-[-50%] w-[1232px]" data-name="Container">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function ArrowArrowLeftS() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Arrow / Arrow_Left_S">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Arrow / Arrow_Left_S">
          <path d="M8.75 15H21.25" id="Vector" stroke="var(--stroke-0, #3392FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16.25 10L21.25 15L16.25 20" id="Vector_2" stroke="var(--stroke-0, #3392FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center justify-center left-[calc(50%+0.5px)] px-[30px] py-[20px] rounded-[100px] top-[917px] translate-x-[-50%] w-[295px]">
      <div aria-hidden="true" className="absolute border-[#3392ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="capitalize font-['Fredoka:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#3392ff] text-[20px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Explore Our Campus
      </p>
      <ArrowArrowLeftS />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[682px] top-[266px]" data-name="Mask group">
      <div className="absolute h-[326.287px] left-[660px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22px] mask-size-[553px_281px] top-[244px] w-[580px]" data-name="DSC03817 1" style={{ maskImage: `url('${imgDsc038171}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc38172} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[100px] top-[266px]" data-name="Mask group">
      <div className="absolute h-[1003.67px] left-[92px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_171px] mask-size-[553px_591px] top-[95px] w-[565.053px]" data-name="DSC04143 1" style={{ maskImage: `url('${imgDsc041431}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc41432} />
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[1266px] top-[266px]" data-name="Mask group">
      <div className="absolute h-[726px] left-[944px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[322px_46px] mask-size-[553px_591px] top-[220px] w-[1090px]" data-name="_DSC0896 1" style={{ maskImage: `url('${imgDsc041431}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc08961} />
      </div>
    </div>
  );
}

function MaskGroup3() {
  return (
    <div className="absolute contents left-[682px] top-[576px]" data-name="Mask group">
      <div className="absolute h-[315px] left-[682px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_16px] mask-size-[553px_281px] top-[560px] w-[559px]" data-name="DSC04164 (1) 1" style={{ maskImage: `url('${imgDsc038171}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDsc0416411} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f7f8ef] h-[1076px] left-0 top-0 w-[1920px]" />
      <Container />
      <Frame />
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
      <MaskGroup3 />
    </div>
  );
}