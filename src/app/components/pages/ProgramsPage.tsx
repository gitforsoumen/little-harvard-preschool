import { Baby, Sparkles, BookOpen, Book, GraduationCap, Music, Palette, BookHeart, PartyPopper } from 'lucide-react';
import { ProgramCard } from '../ProgramCard';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { FloatingCircles, ColorfulDots } from '../DecorativeShapes';
import { motion } from 'motion/react';
import { CloudPattern } from '../CloudPattern';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import programsHeroImage from 'figma:asset/b569d181ccccbf0b22d29ee3bd2f756b19a3184f.jpg';
import readingClubImage from 'figma:asset/478b0d005bfd1aff4aff3bf09e0b3a88f9bbd383.jpg';
// TEMP: original festive image missing from export
import festiveImg1 from 'figma:asset/170edb79aa60a97d825e24f2e18b2f677adb8115.jpg';
import festiveImg2 from 'figma:asset/b1b466c7d9c06e1beecee53a0f197777f6f93537.jpg';
import festiveImg3 from 'figma:asset/478b0d005bfd1aff4aff3bf09e0b3a88f9bbd383.jpg';
import festiveBgImage from 'figma:asset/cc9f4e05b887061b022589ed18385a04a821f4a7.png';
import pianoImage from 'figma:asset/bfb989abcfff0a38e43f223b64cfdb63d74168d3.jpg';
import danceImage from 'figma:asset/170edb79aa60a97d825e24f2e18b2f677adb8115.jpg';
import artImage from 'figma:asset/b1b466c7d9c06e1beecee53a0f197777f6f93537.jpg';

export function ProgramsPage() {
  const motherToddlerProgram = {
    icon: <Baby size={28} />,
    title: "Mother–Toddler Program",
    ageRange: "1.5–3 years",
    outcomes: [
      'Bonding & attachment',
      'Sensory play',
      'Early social development'
    ],
    color: "var(--lh-accent-pink)"
  };

  const playgroupProgram = {
    icon: <Sparkles size={28} />,
    title: "Playgroup Program",
    ageRange: "2–3.5 years",
    outcomes: [
      'Exploration & discovery',
      'Social skill development',
      'Foundational routines',
      'Language & vocabulary building',
      'Creative play & imagination'
    ],
    color: "var(--lh-accent-yellow)"
  };

  const nurseryProgram = {
    icon: <BookOpen size={28} />,
    title: "Nursery Program",
    ageRange: "3–4 years",
    outcomes: [
      'Pre-literacy & phonics introduction',
      'Pre-math concepts (shapes, numbers)',
      'Music, stories & rhymes',
      'Fine motor skill development',
      'Art & creative expression'
    ],
    color: "var(--lh-accent-teal)"
  };

  const lkgProgram = {
    icon: <Book size={28} />,
    title: "LKG (Lower Kindergarten) Program",
    ageRange: "4–5 years",
    outcomes: [
      'Strong phonics foundation',
      'Writing readiness & letter formation',
      'Hands-on learning experiences',
      'Building confidence & independence',
      'Early numeracy skills'
    ],
    color: "var(--lh-primary-green)"
  };

  const ukgProgram = {
    icon: <Book size={28} />,
    title: "UKG (Upper Kindergarten) Program",
    ageRange: "5–6 years",
    outcomes: [
      'Reading fluency & comprehension',
      'Numeracy & basic math operations',
      'Project-based learning',
      'Communication & presentation skills',
      'Preparation for primary school'
    ],
    color: "var(--lh-accent-orange)"
  };

  const class12Program = {
    icon: <GraduationCap size={28} />,
    title: "Class 1 & 2 Program",
    ageRange: "6–8 years",
    outcomes: [
      'Strong reading & writing skills',
      'Applied numeracy & problem solving',
      'Curiosity-driven projects',
      'Values & character development',
      'Critical thinking skills'
    ],
    color: "var(--lh-accent-teal)"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={programsHeroImage}
            alt="Our Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>
        
        <div className="h-full relative z-10 flex items-center mx-auto px-6" style={{ maxWidth: '1400px', width: '100%' }}>
          <AnimatedSection className="text-white max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BookHeart size={20} />
              <span>Our Programs</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">Programs for Every Stage</h1>
            <p className="text-white/95">
              Age-appropriate programs that balance academics with personal interests. We follow the child, customize learning materials, and dedicate 50% time to explore passions while building strong foundations.
            </p>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* Main Programs */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-[var(--lh-neutral-gray-900)] mb-8 text-center">Age-Wise Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ProgramCard
              icon={motherToddlerProgram.icon}
              title={motherToddlerProgram.title}
              ageRange={motherToddlerProgram.ageRange}
              outcomes={motherToddlerProgram.outcomes}
              color={motherToddlerProgram.color}
            />

            <ProgramCard
              icon={playgroupProgram.icon}
              title={playgroupProgram.title}
              ageRange={playgroupProgram.ageRange}
              outcomes={playgroupProgram.outcomes}
              color={playgroupProgram.color}
            />

            <ProgramCard
              icon={nurseryProgram.icon}
              title={nurseryProgram.title}
              ageRange={nurseryProgram.ageRange}
              outcomes={nurseryProgram.outcomes}
              color={nurseryProgram.color}
            />

            <ProgramCard
              icon={lkgProgram.icon}
              title={lkgProgram.title}
              ageRange={lkgProgram.ageRange}
              outcomes={lkgProgram.outcomes}
              color={lkgProgram.color}
            />

            <ProgramCard
              icon={ukgProgram.icon}
              title={ukgProgram.title}
              ageRange={ukgProgram.ageRange}
              outcomes={ukgProgram.outcomes}
              color={ukgProgram.color}
            />

            <ProgramCard
              icon={class12Program.icon}
              title={class12Program.title}
              ageRange={class12Program.ageRange}
              outcomes={class12Program.outcomes}
              color={class12Program.color}
            />
          </div>
        </div>
      </section>

      {/* After-School Programs */}
      <section className="section-spacing bg-[var(--lh-background-green-tint)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">After-School Programs</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Nurture your child's passions beyond the classroom with our specialized programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden card-shadow group cursor-pointer"
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={pianoImage}
                  alt="Piano Classes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent bg-[rgba(233,26,26,0)]" />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Music className="text-[var(--lh-accent-pink)]" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">Piano</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  Professional piano instruction for beginners to intermediate levels. Develops rhythm, coordination, and musical appreciation.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl overflow-hidden card-shadow group cursor-pointer"
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={danceImage}
                  alt="Dance Classes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <PartyPopper className="text-[var(--lh-accent-yellow)]" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">Dance</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  Classical & contemporary dance forms. Builds confidence, expression, and physical fitness through movement.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl overflow-hidden card-shadow group cursor-pointer"
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={artImage}
                  alt="Art Workshops"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Palette className="text-[var(--lh-accent-orange)]" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">Art</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  Explore various art techniques, mediums, and creative expression. From painting to crafts and sculpture.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl overflow-hidden card-shadow group cursor-pointer"
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={readingClubImage}
                  alt="Reading Club"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <BookHeart className="text-[var(--lh-accent-teal)]" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">Reading Club</h3>
                <p className="text-[var(--lh-neutral-gray-600)]">
                  Cultivate love for reading through storytelling, book discussions, and creative writing activities.
                </p>
              </div>
            </motion.div>

            {/* Festive Workshops - Full Width */}
            <motion.div 
              className="rounded-3xl overflow-hidden card-shadow group cursor-pointer lg:col-span-4"
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'linear-gradient(90deg, rgb(102, 153, 0) 0%, rgb(0, 128, 0) 100%)'
              }}
            >
              <div className="relative h-[280px] md:h-[220px] overflow-hidden">
                {/* Background Images with Masks */}
                <div className="absolute inset-0 flex items-center justify-between px-8">
                  {/* Image 1 */}
                  <div className="relative w-[180px] h-[180px] flex-shrink-0">
                    <img 
                      src={festiveImg1}
                      alt="Festive celebration"
                      className="w-full h-full object-cover rounded-full"
                      style={{
                        clipPath: undefined
                      }}
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="relative w-[180px] h-[180px] flex-shrink-0 hidden md:block">
                    <img 
                      src={festiveImg2}
                      alt="Children celebrating"
                      className="w-full h-full object-cover rounded-full"
                      style={{
                        clipPath: undefined
                      }}
                    />
                  </div>

                  {/* Image 3 */}
                  <div className="relative w-[180px] h-[180px] flex-shrink-0 hidden lg:block">
                    <img 
                      src={festiveImg3}
                      alt="Festival activities"
                      className="w-full h-full object-cover rounded-full"
                      style={{
                        clipPath: undefined
                      }}
                    />
                  </div>
                </div>

                {/* Content Overlay */}
                <div 
                  className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 md:justify-end md:items-end"
                  style={{
                    backgroundImage: `url(${festiveBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="max-w-2xl md:max-w-md lg:max-w-xl relative z-10 md:mr-8 lg:mr-12 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-white mb-0">Festive Workshops</h3>
                    </div>
                    <p className="text-white/95 text-sm mb-4">
                      Special seasonal workshops during Diwali, Holi, Christmas, and other festivals. 
                      Children learn about cultural traditions while creating festive crafts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">🪔 Diwali</span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">🎨 Holi</span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">🎄 Christmas</span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">🎉 More</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-8 text-center">Our 50/50 Approach</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[var(--lh-background-green-tint)] rounded-2xl p-8">
                <h3 className="text-[var(--lh-primary-green)] mb-4">50% Academics</h3>
                <ul className="space-y-2 text-[var(--lh-neutral-gray-600)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-primary-green)] mt-1">✓</span>
                    <span>Strong foundation in literacy & numeracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-primary-green)] mt-1">✓</span>
                    <span>Age-appropriate curriculum aligned with learning milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-primary-green)] mt-1">✓</span>
                    <span>Customized books and materials for each child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-primary-green)] mt-1">✓</span>
                    <span>Essential skills for future academic success</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--lh-background-soft)] rounded-2xl p-8">
                <h3 className="text-[var(--lh-accent-orange)] mb-4">50% Child's Interests</h3>
                <ul className="space-y-2 text-[var(--lh-neutral-gray-600)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-accent-orange)] mt-1">✓</span>
                    <span>Individual passion projects & exploration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-accent-orange)] mt-1">✓</span>
                    <span>Arts, music, sports, and creative activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-accent-orange)] mt-1">✓</span>
                    <span>Freedom to pursue what makes each child unique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--lh-accent-orange)] mt-1">✓</span>
                    <span>Building confidence, joy, and love for learning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--lh-primary-green)] to-[var(--lh-accent-teal)] text-white rounded-2xl p-8 text-center">
              <p className="mb-0">
                This balanced approach ensures children develop strong academic foundations while nurturing 
                their individual talents, interests, and personalities—creating happy, confident learners 
                prepared for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing gradient-orange-pink text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Enroll Your Child?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Discover which program is right for your child. Book a school tour or speak with our admissions team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--lh-accent-orange)] px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Book a Tour
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[var(--lh-accent-orange)] transition-colors">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}