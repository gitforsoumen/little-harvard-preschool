export default function Group() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] left-0 text-[30px] text-white top-0 w-[755px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get in Touch
      </p>
      <div className="absolute font-['Protest_Riot:Regular',sans-serif] leading-[1.02] left-0 not-italic text-[#212121] text-[0px] top-[56px] uppercase w-[1407px]">
        <p className="font-['Fredoka:SemiBold',sans-serif] font-semibold mb-0 text-[85px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>{`We'd`}</p>
        <p className="font-['Fredoka:Bold',sans-serif] font-bold text-[#fae036] text-[115px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Love to Hear From You
        </p>
      </div>
      <p className="absolute font-['Fredoka:Regular',sans-serif] font-normal leading-[56px] left-[6px] text-[32px] text-white top-[284px] w-[755px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Whether you have questions about admissions, programs, or want to schedule a campus tour, we're here to help!`}</p>
      <div className="absolute h-0 left-[4px] top-[50px] w-[75px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-4px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 4">
            <line id="Line 22" stroke="var(--stroke-0, #EC40A3)" strokeLinecap="round" strokeWidth="4" x1="2" x2="73" y1="2" y2="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}