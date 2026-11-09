import svgPaths from "../imports/svg-yfhqi8ffrv";
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from './AnimatedSection';
import focusAreasImage from 'figma:asset/6af9ac581047317792251c843beffd3f8ef3b1fa.png';

function ConfidenceIcon() {
  return (
    <div className="relative shrink-0 w-[76px] h-[76px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g>
          <path d={svgPaths.pfb99f80} stroke="#EE5959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M63.3333 9.5V22.1667" stroke="#EE5959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M69.6667 15.8333H57" stroke="#EE5959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M12.6667 53.8333V60.1667" stroke="#EE5959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M15.8333 57H9.5" stroke="#EE5959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function CreativityIcon() {
  return (
    <div className="relative shrink-0 w-[71px] h-[71px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 71">
        <g>
          <path d={svgPaths.p28f3b400} stroke="#48A92D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p2f3f7800} fill="#48A92D" stroke="#48A92D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p19386380} fill="#48A92D" stroke="#48A92D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p186beb80} fill="#48A92D" stroke="#48A92D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.pbf29b80} fill="#48A92D" stroke="#48A92D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function CommunicationIcon() {
  return (
    <div className="relative shrink-0 w-[62px] h-[62px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g>
          <path d={svgPaths.p3515a580} stroke="#0097A7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function CriticalThinkingIcon() {
  return (
    <div className="relative shrink-0 w-[64px] h-[64px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <path d={svgPaths.p8281980} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p14100d00} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p35b8e8c0} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p1e89ec00} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p291a4680} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p1dd87600} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p3ef6b400} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p48d2a00} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d={svgPaths.p30c0e100} stroke="#FFC107" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function KindnessIcon() {
  return (
    <div className="relative shrink-0 w-[66px] h-[66px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 66">
        <g>
          <path d={svgPaths.p2a529d00} stroke="#2C7CE4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

export function OurFocus() {
  const focuses = [
    {
      icon: <ConfidenceIcon />,
      title: 'Confidence',
      bgColor: '#ffe9e9',
      position: 'top-[20%] left-[5%]',
      delay: 0
    },
    {
      icon: <CreativityIcon />,
      title: 'Creativity',
      bgColor: '#e2ffda',
      position: 'top-[55%] left-[5%]',
      delay: 0.1
    },
    {
      icon: <CommunicationIcon />,
      title: 'Communication',
      bgColor: '#dbfff7',
      position: 'top-[5%] left-[35%]',
      delay: 0.2
    },
    {
      icon: <KindnessIcon />,
      title: 'Kindness & values',
      bgColor: '#cae1ff',
      position: 'top-[35%] left-[35%]',
      delay: 0.3
    },
    {
      icon: <CriticalThinkingIcon />,
      title: 'Critical thinking',
      bgColor: '#fffcd7',
      position: 'top-[5%] right-[10%]',
      delay: 0.4
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-neutral-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Decorative cards */}
          <div className="relative h-[300px] lg:h-[400px] hidden md:block">
            <motion.img
              src={focusAreasImage}
              alt="Our Focus Areas"
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Right side - Content */}
          <AnimatedSection>
            <div className="text-center lg:text-left">
              <h2 className="text-[#333333] mb-6">We Focus On</h2>
              <p className="text-[#333333] md:text-[36px]">
                A blend of proven educational <span className="text-[#46b4b5] font-medium">methodologies adapted to Indian culture and values.</span>
              </p>
            </div>

            {/* Mobile version - Simple grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
              {focuses.map((focus, index) => (
                <StaggerItem key={index} index={index}>
                  <motion.div
                    className="rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg"
                    style={{ backgroundColor: focus.bgColor }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="scale-75">
                      {focus.icon}
                    </div>
                    <p className="text-[#333333] text-center font-['Fredoka'] font-medium text-[18px]">
                      {focus.title}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}