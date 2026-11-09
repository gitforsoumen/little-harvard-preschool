import { useState } from 'react';
import { Camera, Heart, Palette, Music, TreePine, Sparkles, Users, BookOpen, PartyPopper, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, StaggerItem } from '../AnimatedSection';
import { CloudPattern } from '../CloudPattern';
import galleryHeroImage from 'figma:asset/5c8bf167f088612c2ff16332088e1557e41cf343.jpg';
import { Lightbox } from '../Lightbox';
import { VideoModal } from '../VideoModal';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All', icon: <Camera size={18} /> },
    { id: 'classes', label: 'Classes', icon: <BookOpen size={18} /> },
    { id: 'celebrations', label: 'Celebrations', icon: <PartyPopper size={18} /> },
    { id: 'outdoor', label: 'Outdoor play', icon: <TreePine size={18} /> },
    { id: 'art', label: 'Art activities', icon: <Palette size={18} /> },
    { id: 'storytime', label: 'Storytime', icon: <BookOpen size={18} /> },
    { id: 'festivals', label: 'Festivals', icon: <Sparkles size={18} /> },
    { id: 'annualday', label: 'Annual Day', icon: <GraduationCap size={18} /> }
  ];

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1640717815333-008542541e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZ3JvdXAlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NjUxNzk4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Group Learning Activities",
      category: "classes"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1696527018053-3343b9853505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY1MTM3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Colorful Art Making",
      category: "art"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524105640531-c9b3e7541450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbmF0dXJlJTIwZXhwbG9yYXRpb258ZW58MXx8fHwxNzY1MTc5ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Nature Exploration",
      category: "outdoor"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNlbGVicmF0aW9uJTIwcGFydHklMjBzY2hvb2x8ZW58MXx8fHwxNzY1MzU0NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Birthday Celebration",
      category: "celebrations"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1541802802036-1d572ba70147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3Rvcnl0aW1lJTIwcmVhZGluZyUyMHRlYWNoZXJ8ZW58MXx8fHwxNzY1MzU0NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Storytime with Teacher",
      category: "storytime"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjUxODI2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Playground Fun",
      category: "outdoor"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1608762202130-36436df91cf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNyYWZ0cyUyMGNyZWF0aXZlfGVufDF8fHx8MTc2NTE3OTg4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Creative Crafts",
      category: "art"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1677316339369-9c5d2620a628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmZXN0aXZhbCUyMGRlY29yYXRpb25zJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY1MzU0NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Festival Decorations",
      category: "festivals"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBibG9ja3N8ZW58MXx8fHwxNzY1MTY2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Building Blocks Activity",
      category: "classes"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1563383238568-c91235c22c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBjb2xvcmZ1bCUyMGJvb2t8ZW58MXx8fHwxNzY1MTc5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Reading Together",
      category: "storytime"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1600647424906-734e55f845eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2RkbGVyJTIwYXJ0JTIwcGFpbnRpbmd8ZW58MXx8fHwxNzY1MTgyNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Painting Time",
      category: "art"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1637195789142-27f844c316ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGRvb3IlMjBwbGF5fGVufDF8fHx8MTc2NTE4MjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Outdoor Adventures",
      category: "outdoor"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1600792170156-7fdc12ed6733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm51YWwlMjBkYXklMjBzY2hvb2wlMjBwZXJmb3JtYW5jZSUyMGtpZHN8ZW58MXx8fHwxNzY1MzU0NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Annual Day Performance",
      category: "annualday"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1684971563816-5663a5347241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvZGRsZXIlMjBwbGF5aW5nJTIwdG95c3xlbnwxfHx8fDE3NjUxNzk4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Play Time",
      category: "classes"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1677128346173-f460d0e2560a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRhbmNlJTIwbW92ZW1lbnR8ZW58MXx8fHwxNzY1MTc5ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Dance Performance",
      category: "annualday"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage?.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage?.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryHeroImage}
            alt="Gallery"
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
              <Camera size={20} />
              <span>Gallery</span>
            </motion.div>
            <h1 className="text-[rgb(250,224,54)] mb-6">Capturing Joyful Moments</h1>
            <p className="text-white/95">
              A glimpse into the daily magic of learning, playing, and growing at Little Harvard.
            </p>
          </AnimatedSection>
        </div>
        
        <CloudPattern />
      </section>

      {/* Filter Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-8">Explore Our Memories</h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-[var(--lh-accent-orange)] text-white shadow-lg'
                      : 'bg-[var(--lh-background-soft)] text-[var(--lh-neutral-gray-900)] hover:bg-[var(--lh-background-green-tint)]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredItems.map((item, index) => (
              <StaggerItem key={item.id} index={index}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden group cursor-pointer h-80"
                  whileHover={{ scale: 1.03 }}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onClick={() => handleImageClick(item)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <h3 className="text-white mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <Heart size={16} className="text-white" />
                        <span className="text-white/90">{Math.floor(Math.random() * 50) + 20} likes</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-spacing bg-gradient-to-br from-[var(--lh-background-soft)] to-[var(--lh-background-green-tint)]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-[var(--lh-neutral-gray-900)] mb-4">Watch Our Journey</h2>
            <p className="text-[var(--lh-neutral-gray-600)] max-w-2xl mx-auto">
              Experience the warmth and joy of Little Harvard through our video highlights.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* YouTube Video Card */}
            <StaggerItem index={0}>
              <motion.div
                className="relative rounded-3xl overflow-hidden group cursor-pointer h-64"
                whileHover={{ scale: 1.03 }}
                onClick={() => setVideoModalOpen(true)}
              >
                <img
                  src="https://img.youtube.com/vi/s49zSbfnyvI/maxresdefault.jpg"
                  alt="A Day at Little Harvard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="var(--lh-accent-orange)" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white">A Day at Little Harvard</h3>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Second Video Card */}
            <StaggerItem index={1}>
              <motion.div
                className="relative rounded-3xl overflow-hidden group cursor-pointer h-64"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1470277760377-4cf074a2f7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlYWNoZXIlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NjUxODI2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Annual Day Celebrations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="var(--lh-accent-orange)" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white">Annual Day Celebrations</h3>
                </div>
              </motion.div>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="section-spacing gradient-orange-pink text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <Users size={48} className="mx-auto mb-6" />
            <h2 className="text-white mb-4">Follow Our Journey</h2>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Stay connected with daily updates, events, and precious moments on our social media.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-white text-[var(--lh-accent-orange)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow on Facebook
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow on Instagram
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        image={selectedImage}
        allImages={filteredItems}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoId="s49zSbfnyvI"
        title="A Day at Little Harvard"
      />
    </div>
  );
}