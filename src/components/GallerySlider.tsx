import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

interface GallerySliderProps {
  images: string[];
  isVideo?: boolean;
  children?: React.ReactNode;
}

export const GallerySlider = ({ images, isVideo = false, children }: GallerySliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, images.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 1
    })
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#0a0a0a] mb-16 shadow-2xl">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303]/80 z-10" />
          
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 hover:scale-110 hover:bg-[#ff6a00] hover:border-[#ff6a00]">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-2" fill="currentColor" />
              </div>
            </div>
          )}

          <img 
            src={images[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`} 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col pt-32 pb-16">
        {children}
      </div>

      {/* Pagination controls */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2 pointer-events-auto">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative h-1 overflow-hidden transition-all duration-300 rounded-full ${
              currentSlide === idx ? 'w-10 bg-white/40' : 'w-4 bg-white/20 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {currentSlide === idx ? <div className="absolute top-0 left-0 h-full w-full bg-[#ff6a00] rounded-full animate-slide-progress origin-left" /> : null}
          </button>
        ))}
      </div>
    </div>
  );
};
