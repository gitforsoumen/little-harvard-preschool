import campus1Image from 'figma:asset/15c058f6162d89ceee3a857cca026d4073bbe25e.jpg';
import campus2Image from 'figma:asset/54503bc6272c2664b46e8606756a41ec38050e78.jpg';
import softFlooringImage from 'figma:asset/bc2086a82251798b7cd93e667755feec9bb9d5bb.jpg';
import childWashroomImage from 'figma:asset/49cca624801bb894daa9d50f8581844846401aa2.jpg';
import sanitisedPlayImage from 'figma:asset/e4fb7c48d025695180c20fd35ae31a0a8c3b0466.jpg';
import friendlyStaffImage from 'figma:asset/47089b872e331dc3e07bb3daba32d3e4b453f51a.jpg';
import playgroundImage from 'figma:asset/b912956aedbce812dac205cdfc0ad17b4e5769e7.jpg';
import artStudioImage from 'figma:asset/a58e9480ee5b8991b7592174329a0297442b7002.jpg';
import classroomActivitiesImage from 'figma:asset/651ac142ae4f53b56d2ea9d888a876e2335f07a6.jpg';
import outdoorPlayImage from 'figma:asset/0c0b98b25a8a33a7168571db38360b2e50568d1b.jpg';
import natureExplorationImage from 'figma:asset/2885c7cc983987ab3c43b151bc906cc414c5c849.jpg';
import readingCornerImage from 'figma:asset/d130aa536eca972d1ad400df34090e5edf4176c7.jpg';
import { Building2, TreePine, Palette, Music, BookOpen, Sparkles, Heart, Shield, MapPin, Camera, Droplets, Baby, Users, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';
import campusHeroImage from 'figma:asset/49be2c3939a08a389eeeb336711e34cbacd06943.jpg';
import { BookingModal } from '../BookingModal';
import { useState } from 'react';

export function CampusPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const safetyFeatures = [
    { 
      icon: <Eye size={20} className="text-[var(--lh-primary-green)]" />, 
      text: "CCTV surveillance",
      image: "https://images.unsplash.com/photo-1481597262637-0545b18186ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGNsYXNzcm9vbSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzY1MzU0MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    { 
      icon: <Droplets size={20} className="text-[var(--lh-primary-green)]" />, 
      text: "Sanitised play areas",
      image: sanitisedPlayImage
    },
    { 
      icon: <Heart size={20} className="text-[var(--lh-primary-green)]" />, 
      text: "Soft flooring",
      image: softFlooringImage
    },
    { 
      icon: <Baby size={20} className="text-[var(--lh-primary-green)]" />, 
      text: "Child-safe washrooms",
      image: childWashroomImage
    },
    { 
      icon: <Users size={20} className="text-[var(--lh-primary-green)]" />, 
      text: "Friendly support staff",
      image: friendlyStaffImage
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % safetyFeatures.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + safetyFeatures.length) % safetyFeatures.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={campusHeroImage}
            alt="Our Campus"
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
              <TreePine size={20} />
              <span>Our Campus</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">A Beautiful Space for Joyful Learning</h1>
            <p className="text-white/95">
              Purpose-built campuses designed to inspire creativity, exploration, and happiness in every corner.
            </p>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* Campus Design Philosophy */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Campus Design Philosophy</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Every corner of our campus is thoughtfully designed with children at the center.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <TreePine size={32} className="text-[var(--lh-primary-green)]" />,
                title: "Nature-Inspired",
                description: "Natural materials, plants, and outdoor spaces connect children with nature.",
                color: "var(--lh-primary-green)"
              },
              {
                icon: <Heart size={32} className="text-[var(--lh-accent-pink)]" />,
                title: "Child-Led",
                description: "Spaces designed at child height, encouraging independence and exploration.",
                color: "var(--lh-accent-pink)"
              },
              {
                icon: <Shield size={32} className="text-[var(--lh-accent-teal)]" />,
                title: "Safe",
                description: "Rounded edges, soft flooring, and child-safe materials throughout.",
                color: "var(--lh-accent-teal)"
              },
              {
                icon: <Sparkles size={32} className="text-[var(--lh-accent-yellow)]" />,
                title: "Warm",
                description: "Inviting colors, natural light, and cozy corners create a second home.",
                color: "var(--lh-accent-yellow)"
              }
            ].map((item, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-2xl p-6 card-shadow text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: item.color + '20' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">{item.title}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)] text-sm">{item.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Our Campuses</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              We have two beautiful campuses in Odisha, each thoughtfully designed to create meaningful learning experiences.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Bhubaneswar Campus",
                address: "Plot No. 123, Patia, Bhubaneswar, Odisha",
                image: campus1Image,
                color: "var(--lh-accent-teal)"
              },
              {
                name: "Sambalpur Campus",
                address: "Main Road, Near Bus Stand, Sambalpur, Odisha",
                image: campus2Image,
                color: "var(--lh-accent-orange)"
              }
            ].map((campus, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden card-shadow group"
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={campus.image}
                      alt={campus.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
                        <MapPin size={18} style={{ color: campus.color }} />
                        <span className="text-[var(--lh-neutral-gray-900)]">Campus {index + 1}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-[var(--lh-neutral-gray-900)] mb-3">{campus.name}</h3>
                    <p className="text-[var(--lh-neutral-gray-600)] mb-4">{campus.address}</p>
                    <button 
                      onClick={() => setIsBookingModalOpen(true)}
                      className="text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity" 
                      style={{ backgroundColor: campus.color }}
                    >
                      Schedule a Visit
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Our Spaces</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Every space is designed with intention—to spark curiosity, encourage exploration, and provide comfort.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Palette size={28} className="text-[var(--lh-accent-pink)]" />,
                title: "Art Atelier",
                description: "Creative studio for painting, drawing, and artistic expression.",
                color: "var(--lh-accent-pink)"
              },
              {
                icon: <TreePine size={28} className="text-[var(--lh-primary-green)]" />,
                title: "Nature Play Garden",
                description: "Outdoor spaces with plants, trees, and natural exploration.",
                color: "var(--lh-primary-green)"
              },
              {
                icon: <BookOpen size={28} className="text-[var(--lh-accent-teal)]" />,
                title: "Reading Corners",
                description: "Cozy nooks filled with age-appropriate books.",
                color: "var(--lh-accent-teal)"
              },
              {
                icon: <Sparkles size={28} className="text-[var(--lh-accent-yellow)]" />,
                title: "Discovery & Sensory Rooms",
                description: "Hands-on learning with tactile materials and exploration.",
                color: "var(--lh-accent-yellow)"
              },
              {
                icon: <Heart size={28} className="text-[var(--lh-accent-orange)]" />,
                title: "Calm Zones",
                description: "Quiet spaces for relaxation and reflection.",
                color: "var(--lh-accent-orange)"
              },
              {
                icon: <Sparkles size={28} className="text-[var(--lh-accent-pink)]" />,
                title: "Culture & Tradition Area",
                description: "Celebrating festivals and cultural learning.",
                color: "var(--lh-accent-pink)"
              },
              {
                icon: <Building2 size={28} className="text-[var(--lh-primary-green)]" />,
                title: "Child-sized Classrooms",
                description: "Furniture and fixtures designed at child height.",
                color: "var(--lh-primary-green)"
              },
              {
                icon: <Music size={28} className="text-[var(--lh-accent-teal)]" />,
                title: "Music & Movement Room",
                description: "Instruments and space for dance and expression.",
                color: "var(--lh-accent-teal)"
              }
            ].map((feature, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="bg-white rounded-2xl p-6 card-shadow"
                  whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
                >
                  <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: feature.color + '20' }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-[var(--lh-neutral-gray-900)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--lh-neutral-gray-600)] text-sm">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Explore Our Spaces</h2>
            <p className="text-[var(--lh-neutral-gray-600)]">
              Take a visual tour of our vibrant, child-friendly learning environments.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: playgroundImage, title: "Colorful Playground" },
              { src: artStudioImage, title: "Art Studio" },
              { src: readingCornerImage, title: "Reading Corner" },
              { src: classroomActivitiesImage, title: "Classroom Activities" },
              { src: outdoorPlayImage, title: "Outdoor Play Area" },
              { src: natureExplorationImage, title: "Nature Exploration" }
            ].map((image, index) => (
              <StaggerItem key={index} index={index}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden h-72 group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <h3 className="text-white">{image.title}</h3>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="section-spacing bg-[var(--lh-background-soft)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-[var(--lh-neutral-gray-900)] mb-6">Safety & Comfort</h2>
              <p className="text-[var(--lh-neutral-gray-600)] mb-6">
                Your child's safety and comfort are our top priorities. Every detail is designed with care.
              </p>
              <div className="space-y-4">
                {safetyFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-[var(--lh-primary-green)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[var(--lh-neutral-gray-700)]">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--lh-accent-teal)]/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[var(--lh-accent-pink)]/20 rounded-full blur-2xl" />
                
                {/* Carousel Container */}
                <div className="relative rounded-3xl shadow-2xl overflow-hidden h-[550px] bg-gray-900 z-10">
                  {/* Images */}
                  <div className="relative w-full h-full">
                    {safetyFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          opacity: activeSlide === index ? 1 : 0,
                          scale: activeSlide === index ? 1 : 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ pointerEvents: activeSlide === index ? 'auto' : 'none' }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.text}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Image Label */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                          {feature.icon}
                          <span className="text-[var(--lh-neutral-gray-900)]">{feature.text}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-20 group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} className="text-[var(--lh-primary-green)] group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-20 group"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} className="text-[var(--lh-primary-green)] group-hover:scale-110 transition-transform" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                    {safetyFeatures.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeSlide === index 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing gradient-green-teal text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <Camera size={48} className="mx-auto mb-6" />
            <h2 className="text-white mb-4">See It for Yourself</h2>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Book a campus tour and experience the Little Harvard difference firsthand.
            </p>
            <motion.button
              className="bg-white text-[var(--lh-primary-green)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
            >
              Schedule Your Visit
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}