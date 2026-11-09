export function CloudPattern({ color = "white", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div className={`absolute ${flip ? 'top-0' : 'bottom-0'} left-0 right-0 z-20 ${flip ? 'rotate-180' : ''}`}>
      <svg 
        className="w-full h-16 sm:h-20 md:h-24 lg:h-28" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,60 C150,90 250,100 350,85 C450,70 550,50 650,60 C750,70 850,90 950,85 C1050,80 1150,60 1200,50 L1200,120 L0,120 Z" 
          fill={color}
          opacity="0.8"
        />
        <path 
          d="M0,80 C200,100 350,110 500,95 C650,80 800,70 950,85 C1100,100 1150,90 1200,80 L1200,120 L0,120 Z" 
          fill={color}
          opacity="0.6"
        />
        <path 
          d="M0,95 C300,110 450,105 600,100 C750,95 900,100 1050,105 C1150,108 1180,100 1200,95 L1200,120 L0,120 Z" 
          fill={color}
        />
      </svg>
    </div>
  );
}
