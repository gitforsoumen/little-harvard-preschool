import image_ee08705d71024eef8bbf9e129859c24e8915e0a9 from 'figma:asset/ee08705d71024eef8bbf9e129859c24e8915e0a9.jpg';
import image_fe289a508fa65a975950f73826396f87e6266811 from 'figma:asset/fe289a508fa65a975950f73826396f87e6266811.jpg';
import image_a10d6a1d4e80e549fd6314357614cd22d1e4f5c7 from 'figma:asset/a10d6a1d4e80e549fd6314357614cd22d1e4f5c7.jpg';
import image_ac623e93e82abcec23e0e74dd2e4e251aa8b3fa1 from 'figma:asset/ac623e93e82abcec23e0e74dd2e4e251aa8b3fa1.jpg';
import image_4c720b1f0083be1ffed89b6ba18ea3b652b4bcbb from 'figma:asset/4c720b1f0083be1ffed89b6ba18ea3b652b4bcbb.jpg';
import image_baaccdce51fb2f1933c343c1438f89aaec159c0a from 'figma:asset/baaccdce51fb2f1933c343c1438f89aaec159c0a.jpg';
import image_47089b872e331dc3e07bb3daba32d3e4b453f51a from 'figma:asset/47089b872e331dc3e07bb3daba32d3e4b453f51a.jpg';
import heroImage1 from 'figma:asset/0056026c4e5020d0dcaf6fb417bcb15de1eba65f.png';
import heroImage2 from 'figma:asset/2ffc2017cb34cd6af329ee38ed84abcef30e3d46.jpg';
import heroImage3 from 'figma:asset/29c89129df3b69278924eb5867caab63dd89808d.jpg';
import svgPaths from '../../imports/svg-na01qllbbe';
import svgPathsTestimonial from '../../imports/svg-1l5pcr6ioi';
import Icon from '../../imports/Icon';
import IconUsers from '../../imports/Icon-59-405';
import IconSmile from '../../imports/Icon-59-437';
import IconStar from '../../imports/Icon-59-466';
import IconSparkle from '../../imports/Icon-59-794';
import imgDsc38172 from 'figma:asset/36ba93bd8c95316338f2a041f18fd6a06d0aa1f4.jpg';
import imgDsc41432 from 'figma:asset/6fc2f4ab0d16fdd9e415f831789d19fa8f035927.jpg';
import imgDsc08961 from 'figma:asset/b381eb8677136623756c67d772e1d4e6c1337908.jpg';
import imgDsc0416411 from 'figma:asset/de0661f07397cfd14aa646d4d3edb20e4b6ebacb.jpg';
import { imgDsc038171, imgDsc041431 } from '../../imports/svg-rylte';
import { useState, useEffect } from 'react';
import { Heart, Shield, Book, Home, Users, Palette, Music, BookOpen, Baby, Sparkles, Camera, TreePine, Award, Clock, Smile, Star, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ProgramCard } from '../ProgramCard';
import { TestimonialCard } from '../TestimonialCard';
import { AnimatedSection, SlideIn, StaggerItem, FloatingElement } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      image: heroImage1,
      alt: "Little Harvard Preschool Welcome"
    },
    {
      image: heroImage2,
      alt: "Happy Little Harvard student"
    },
    {
      image: heroImage3,
      alt: "Little Harvard preschool child"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of Aarav (LKG)",
      content: "Little Harvard has been a blessing. My son comes home excited every day, singing songs and showing me what he learned. The teachers truly treat each child like their own.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
      name: "Rajesh Patel",
      role: "Father of Ananya (UKG)",
      content: "The 50/50 approach is brilliant. My daughter not only excels academically but also discovered her love for dance here. She's confident, creative, and always happy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    {
      name: "Sunita Das",
      role: "Mother of Rohan (Nursery)",
      content: "We've been part of the Little Harvard family for two years now. The campus is beautiful, and more importantly, my child feels safe and loved every single day.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div>
      {/* Hero Section with Large Image */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentHeroSlide].image}
            alt={heroSlides[currentHeroSlide].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>
        
        <div className="h-full relative z-10 flex items-center mx-auto px-6" style={{ maxWidth: '1400px', width: '100%' }}>
          <SlideIn direction="left" className="max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative Pink Line */}
              

              <div className="mb-3">
                <span 
                  className="block mb-1" 
                  style={{
                    fontSize: '18px',
                    color: 'white',
                    display: 'inline-block',
                    paddingBottom: '8px',
                    backgroundImage: 'linear-gradient(to right, #E91E63 40px, transparent 40px)',
                    backgroundSize: '40px 3px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom left'
                  }}
                >
                  Welcome to the revolution
                </span>
              </div>
              
              <h1 className="mb-4 text-[42px] md:text-[84px]" style={{ lineHeight: '1.1' }}>
                <span style={{ color: 'white', display: 'block' }}>BEGIN</span>
                <span style={{ color: '#F9C74F', display: 'block' }}>YOUR JOURNEY</span>
              </h1>
              <h2 style={{ fontWeight: 'normal', marginTop: '-8px', marginBottom: '12px', fontSize: '30px' }}>OF IMAGINATION AND INSPIRATION</h2>
              
              <p className="text-white/95 mb-6 max-w-xl text-[14px]">LITTLE HARVARD PRESCHOOL - A School With the Heart of a Mother</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => onNavigate('admissions')}
                  className="bg-[#f76536] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
                  style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: '16px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Your Child
                  <svg className="size-[18px]" fill="none" viewBox="0 0 30 30">
                    <path d="M8.75 15H21.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M16.25 10L21.25 15L16.25 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('campus')}
                  className="bg-[#3392ff] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center gap-[3px] justify-center"
                  style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: '16px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take A Virtual Tour
                  <svg className="size-[18px]" fill="none" viewBox="0 0 30 30">
                    <path d="M8.75 15H21.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M16.25 10L21.25 15L16.25 20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </SlideIn>
        </div>
        
        {/* Hero Slideshow Navigation Dots */}
        <div className="absolute bottom-[150px] left-1/2 transform -translate-x-1/2 z-20 flex gap-2 mx-[0px] my-[-70px]">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentHeroSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CloudPattern />
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                svgIcon: <Icon />,
                bgColor: "#ffe3e3",
                number: "15+", 
                label: "Years of Excellence" 
              },
              { 
                svgIcon: <IconUsers />,
                bgColor: "#e3ffec",
                number: "500+", 
                label: "Happy Students" 
              },
              { 
                svgIcon: <IconSmile />,
                bgColor: "#ffe9f0",
                number: "100%", 
                label: "Parent Satisfaction" 
              },
              { 
                svgIcon: <IconStar />,
                bgColor: "rgba(255,246,218,0.76)",
                number: "50/50", 
                label: "Learning Model" 
              }
            ].map((stat, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="flex flex-col gap-6 items-center"
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="flex items-center justify-center rounded-[58px] shrink-0 size-[116px]"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <div className="size-12">
                      {stat.svgIcon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[14px] items-center text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    <p className="text-[#333333] text-[36px] leading-[28.8px]">{stat.number}</p>
                    <p className="text-black text-[24px] leading-[28.8px]">{stat.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Image Cards */}
      <section className="section-spacing bg-[var(--lh-background-soft)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Why Little Harvard?</h2>
            <p className="text-[var(--lh-neutral-gray-900)] max-w-3xl mx-auto mb-3">
              The traditional system is <strong>broken-No pressure, no punishment, no comparison</strong>
            </p>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-3xl mx-auto">
              Little Harvard brings a radically different approach with Strong phonics & early literacy foundation taking on real world exploration on their own interest.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                image: image_47089b872e331dc3e07bb3daba32d3e4b453f51a,
                title: "Teachers",
                description: "Who nurture like mothers",
                overlayColor: "rgba(242, 102, 51, 0.85)"
              },
              { 
                image: image_baaccdce51fb2f1933c343c1438f89aaec159c0a,
                title: "Beautiful",
                description: "Safe, homelike campus",
                overlayColor: "rgba(0, 151, 167, 0.85)"
              },
              { 
                image: image_4c720b1f0083be1ffed89b6ba18ea3b652b4bcbb,
                title: "A Happy",
                description: "Second home for children",
                overlayColor: "rgba(233, 30, 99, 0.85)"
              }
            ].map((item, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="rounded-3xl overflow-hidden card-shadow group cursor-pointer"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-8 text-center"
                      style={{ backgroundColor: item.overlayColor }}
                    >
                      <h3 className="text-white mb-2">{item.title}</h3>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section with Colorful Cards */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Our Programs</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Age-appropriate programs designed to nurture every aspect of your child's development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Baby size={48} />, 
                title: "Mother-Toddler", 
                ageRange: "1.5-3 years", 
                outcomes: ['Bonding & attachment', 'Sensory play', 'Early social skills'],
                color: "var(--lh-accent-pink)",
                bgColor: "#E91E6310",
                borderColor: "#D81B60"
              },
              { 
                icon: <Sparkles size={48} />, 
                title: "Playgroup", 
                ageRange: "2-3.5 years", 
                outcomes: ['Exploration & discovery', 'Social skills', 'Foundational routines'],
                color: "var(--lh-accent-yellow)",
                bgColor: "#FFC10710",
                borderColor: "#FFB300"
              },
              { 
                icon: <BookOpen size={48} />, 
                title: "Nursery", 
                ageRange: "3-4 years", 
                outcomes: ['Pre-literacy skills', 'Music & stories', 'Fine motor development'],
                color: "var(--lh-accent-teal)",
                bgColor: "#0097A710",
                borderColor: "#00838F"
              },
              { 
                icon: <Book size={48} />, 
                title: "LKG", 
                ageRange: "4-5 years", 
                outcomes: ['Phonics foundation', 'Writing readiness', 'Building confidence'],
                color: "var(--lh-primary-green)",
                bgColor: "#00800010",
                borderColor: "#006400"
              },
              { 
                icon: <Book size={48} />, 
                title: "UKG", 
                ageRange: "5-6 years", 
                outcomes: ['Reading fluency', 'Numeracy skills', 'Project-based learning'],
                color: "var(--lh-accent-orange)",
                bgColor: "#F2663310",
                borderColor: "#E65100"
              },
              { 
                icon: <Music size={48} />, 
                title: "After-School", 
                ageRange: "All ages", 
                outcomes: ['Piano & Dance', 'Art workshops', 'Reading club'],
                color: "var(--lh-accent-pink)",
                bgColor: "#E91E6310",
                borderColor: "#D81B60"
              }
            ].map((program, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="overflow-hidden group cursor-pointer border"
                  style={{ backgroundColor: program.bgColor, borderColor: program.borderColor, borderRadius: '60px' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onNavigate('programs')}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-[var(--lh-neutral-gray-900)] mb-1">{program.title}</h3>
                        <p className="text-[var(--lh-neutral-gray-600)]">Age: {program.ageRange}</p>
                      </div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: program.color + '30', color: program.color }}>
                        {program.icon}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-[var(--lh-neutral-gray-600)]">
                          <CheckCircle2 size={16} className="mt-1" style={{ color: program.color }} />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <motion.button
              onClick={() => onNavigate('programs')}
              className="bg-white text-[#3392FF] border-[#3392FF] border-[.5px] border-solid px-[30px] py-5 rounded-full hover:bg-[#3392FF] hover:text-white transition-all flex items-center gap-[3px] justify-center mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: '20px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Programs
              <svg className="size-[30px]" fill="none" viewBox="0 0 30 30">
                <path d="M8.75 15H21.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16.25 10L21.25 15L16.25 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Campus Gallery with Grid */}
      <section className="section-spacing bg-[#f7f8ef] relative overflow-hidden py-20">
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[#333333] mb-4" style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}>Our Beautiful Campus</h2>
            <p className="text-[#666666] max-w-2xl mx-auto" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              A purpose-built space designed to inspire learning, creativity, and joyful exploration.
            </p>
          </AnimatedSection>

          {/* Custom Gallery Layout - Desktop */}
          <div className="hidden md:block relative max-w-[1240px] mx-auto" style={{ height: 'clamp(300px, 35vw, 450px)' }}>
            {/* Left Tall Image */}
            <StaggerItem index={0}>
              <motion.div
                className="absolute left-0 top-0 overflow-hidden group cursor-pointer"
                style={{
                  width: 'clamp(140px, 22vw, 350px)',
                  height: 'clamp(200px, 32vw, 420px)',
                  borderRadius: 'clamp(30px, 5vw, 60px)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_ac623e93e82abcec23e0e74dd2e4e251aa8b3fa1} 
                  alt="Campus 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>

            {/* Top Right Wide Image */}
            <StaggerItem index={1}>
              <motion.div
                className="absolute overflow-hidden group cursor-pointer"
                style={{
                  left: 'clamp(155px, 24vw, 370px)',
                  top: '0',
                  width: 'clamp(160px, 22vw, 350px)',
                  height: 'clamp(90px, 14vw, 200px)',
                  borderRadius: 'clamp(30px, 5vw, 60px)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_a10d6a1d4e80e549fd6314357614cd22d1e4f5c7} 
                  alt="Campus 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>

            {/* Bottom Middle Wide Image */}
            <StaggerItem index={2}>
              <motion.div
                className="absolute overflow-hidden group cursor-pointer"
                style={{
                  left: 'clamp(155px, 24vw, 370px)',
                  top: 'clamp(105px, 15vw, 215px)',
                  width: 'clamp(160px, 22vw, 350px)',
                  height: 'clamp(90px, 14vw, 200px)',
                  borderRadius: 'clamp(30px, 5vw, 60px)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_fe289a508fa65a975950f73826396f87e6266811} 
                  alt="Campus 3" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>

            {/* Right Tall Image */}
            <StaggerItem index={3}>
              <motion.div
                className="absolute overflow-hidden group cursor-pointer"
                style={{
                  left: 'clamp(330px, 48vw, 740px)',
                  top: '0',
                  width: 'clamp(140px, 22vw, 350px)',
                  height: 'clamp(200px, 32vw, 420px)',
                  borderRadius: 'clamp(30px, 5vw, 60px)'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_ee08705d71024eef8bbf9e129859c24e8915e0a9} 
                  alt="Campus 4" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>
          </div>

          {/* Mobile Gallery Layout - Simple Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <StaggerItem index={0}>
              <motion.div
                className="overflow-hidden group cursor-pointer rounded-3xl h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_ac623e93e82abcec23e0e74dd2e4e251aa8b3fa1} 
                  alt="Campus 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>

            <StaggerItem index={1}>
              <motion.div
                className="overflow-hidden group cursor-pointer rounded-3xl h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_a10d6a1d4e80e549fd6314357614cd22d1e4f5c7} 
                  alt="Campus 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>

            <StaggerItem index={2}>
              <motion.div
                className="overflow-hidden group cursor-pointer rounded-3xl h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_fe289a508fa65a975950f73826396f87e6266811} 
                  alt="Campus 3" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>

            <StaggerItem index={3}>
              <motion.div
                className="overflow-hidden group cursor-pointer rounded-3xl h-64"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image_ee08705d71024eef8bbf9e129859c24e8915e0a9} 
                  alt="Campus 4" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </motion.div>
            </StaggerItem>
          </div>

          <AnimatedSection className="text-center mt-12 md:mt-16">
            <motion.button
              onClick={() => onNavigate('campus')}
              className="bg-white text-[#3392FF] border-[#3392FF] border-[1.5px] border-solid px-6 md:px-[30px] py-3 md:py-5 rounded-full hover:bg-[#3392FF] hover:text-white transition-all flex items-center gap-[3px] justify-center text-base md:text-[20px] mx-auto"
              style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Campus
              <svg className="size-5 md:size-[30px]" fill="none" viewBox="0 0 30 30">
                <path d="M8.75 15H21.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M16.25 10L21.25 15L16.25 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">What Parents Say</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Hear from families who have experienced the Little Harvard difference.
            </p>
          </AnimatedSection>

          <motion.div 
            className="max-w-4xl mx-auto"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center relative">
              {/* Photo at top with white circular background and shadow */}
              <div className="relative mb-8">
                {/* Shadow circle background */}
                <div className="absolute inset-0 -m-3">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 224">
                    <g filter="url(#filter0_d_testimonial)" id="Ellipse 22">
                      <circle cx="112" cy="112" fill="white" r="101" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="224" id="filter0_d_testimonial" width="224" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="5.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.552885 0 0 0 0 0.552885 0 0 0 0 0.552885 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_testimonial" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_testimonial" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* Photo */}
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-[150px] h-[150px] rounded-full object-cover relative z-10 p-2"
                />
                {/* Decorative sparkle icon */}
                <div className="absolute -right-2 top-4 z-20 size-[42px]">
                  <IconSparkle />
                </div>
              </div>

              {/* Testimonial content */}
              <p 
                className="text-[#333333] mb-6 max-w-4xl"
                style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '24px', lineHeight: '38.8px' }}
              >
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </p>

              {/* Name and role */}
              <div className="text-center">
                <p 
                  className="text-[#333333] mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: '24px', lineHeight: '28.8px' }}
                >
                  {testimonials[currentTestimonial].name}
                </p>
                <p 
                  className="text-[#666666]"
                  style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '20px', lineHeight: '28.8px' }}
                >
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-[var(--lh-primary-green)] w-8'
                    : 'bg-[var(--lh-neutral-gray-200)] w-3'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with Locations */}
      <section className="section-spacing bg-[#46B4B5] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[#46B4B5]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-white mb-6">Experience Little Harvard</h2>
              <p className="text-white/95 mb-8">
                Visit our campuses and see how we create joyful learning experiences for every child. Book a tour today!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white/95">Bhubaneswar Campus</p>
                    <p className="text-white/80">Plot No. 123, Patia, Bhubaneswar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white/95">Sambalpur Campus</p>
                    <p className="text-white/80">Main Road, Sambalpur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white/95">Call us: +91 1234567890</p>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#3392FF] border-[#3392FF] border-[1.5px] border-solid px-6 md:px-[30px] py-3 md:py-5 rounded-full hover:bg-[#3392FF] hover:text-white transition-all flex items-center gap-[3px] justify-center text-base md:text-[20px]"
                style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take a Virtual Tour
                <svg className="size-5 md:size-[30px]" fill="none" viewBox="0 0 30 30">
                  <path d="M8.75 15H21.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16.25 10L21.25 15L16.25 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </motion.button>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-white mb-4">Quick Enquiry</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                  />
                  <button className="w-full bg-white text-[var(--lh-accent-orange)] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors" style={{ fontSize: '20px' }}>
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}