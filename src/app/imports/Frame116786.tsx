function ArrowArrowLeftS() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Arrow / Arrow_Left_S">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Arrow / Arrow_Left_S">
          <path d="M8.75 15H21.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16.25 10L21.25 15L16.25 20" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#3392ff] relative rounded-[100px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[3px] items-center justify-center px-[30px] py-[20px] relative size-full">
          <p className="capitalize font-['Fredoka:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Take a Virtual Tour
          </p>
          <ArrowArrowLeftS />
        </div>
      </div>
    </div>
  );
}