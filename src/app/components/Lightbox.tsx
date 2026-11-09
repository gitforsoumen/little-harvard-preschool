import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    id: number;
    image: string;
    title: string;
    category: string;
  } | null;
  allImages: Array<{
    id: number;
    image: string;
    title: string;
    category: string;
  }>;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ isOpen, onClose, image, allImages, onNext, onPrev }: LightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!image) return null;

  const currentIndex = allImages.findIndex(item => item.id === image.id);
  const imageCount = allImages.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/95 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Lightbox Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="relative w-full h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent z-10">
                <div className="text-white">
                  <h3 className="text-white mb-1">{image.title}</h3>
                  <p className="text-white/70 text-sm">
                    {currentIndex + 1} / {imageCount}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Image */}
              <motion.div
                key={image.id}
                className="relative max-w-7xl max-h-[80vh] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>

              {/* Navigation Arrows */}
              {imageCount > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrev();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={28} className="text-[var(--lh-primary-green)] group-hover:scale-110 transition-transform" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all group"
                    aria-label="Next image"
                  >
                    <ChevronRight size={28} className="text-[var(--lh-primary-green)] group-hover:scale-110 transition-transform" />
                  </button>
                </>
              )}

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Heart size={18} />
                    <span>{Math.floor(Math.random() * 50) + 20} likes</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
