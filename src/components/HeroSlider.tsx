import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

// To add more slides, simply add more objects to this array.
// The slider will automatically loop through them.
const slides = [
  {
    id: 1,
    type: 'hero',
    title: 'Neopix Studios™',
    subtitle: 'Developing Community Dreams',
    bgImage: 'https://cdn.neopix.in/Nepoix_Studio_Gif.gif',
  },
  {
    id: 2,
    type: 'trailer',
    brand: 'PROJECT 1',
    title: 'Coming Soon',
    bgImage: '/img/1.png',
    buttons: [
      { label: 'Watch Trailer', icon: <Play className="w-4 h-4 mr-2" fill="currentColor" />, primary: true },
      { label: 'Learn More', primary: false }
    ],
    logo: <img src="/img/Dignitized.png" alt="Project One Logo" className="w-full h-auto drop-shadow-2xl" />
  }
];

const VisualizerText = ({ text, isPlaying }: { text: string, isPlaying: boolean }) => {
  const [frequencies, setFrequencies] = useState<Uint8Array | null>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const updateFrequencies = () => {
      const analyser = (window as any).__audioAnalyser;
      if (isPlaying && analyser) {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        setFrequencies(dataArray);
      } else {
        setFrequencies(null);
      }
      requestRef.current = requestAnimationFrame(updateFrequencies);
    };

    requestRef.current = requestAnimationFrame(updateFrequencies);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  const letters = text.split('');
  
  const colors = [
    '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#ef4444', '#f97316'
  ];

  return (
    <>
      {letters.map((char, index) => {
        let val = 0;
        if (frequencies && frequencies.length > 0) {
          const binIndex = Math.min((index % 16) + 1, frequencies.length - 1);
          val = frequencies[binIndex] / 255;
        }
        
        val = Math.min(val * 1.5, 1);
        const color = colors[index % colors.length];
        const percent = val * 100;

        return (
          <span 
            key={index} 
            style={{
              backgroundImage: isPlaying ? `linear-gradient(to top, ${color} ${Math.max(0, percent - 10)}%, white ${percent + 20}%)` : undefined,
              WebkitBackgroundClip: isPlaying ? 'text' : undefined,
              WebkitTextFillColor: isPlaying ? 'transparent' : undefined,
              backgroundClip: isPlaying ? 'text' : undefined,
              color: isPlaying ? 'transparent' : 'white',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </>
  );
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  useEffect(() => {
    const handleAudioState = (e: any) => setIsAudioPlaying(e.detail.isPlaying);
    window.addEventListener('audioState', handleAudioState);
    return () => window.removeEventListener('audioState', handleAudioState);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const bgVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1
    })
  };

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0 flex shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <img 
            src={slides[currentSlide].bgImage} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          <div className={`relative z-20 w-full h-full flex flex-col pb-24 px-8 md:px-16 container mx-auto pointer-events-none ${slides[currentSlide].type === 'hero' ? 'justify-center items-center' : 'justify-end'}`}>
            <div className="max-w-4xl w-full pointer-events-auto">
              {slides[currentSlide].type === 'hero' ? (
              <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4">
                  <VisualizerText text={slides[currentSlide].title} isPlaying={isAudioPlaying} />
                </h1>
                <p className="text-xl md:text-3xl font-display text-gray-200 font-light">{slides[currentSlide].subtitle}</p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-end gap-8">
                {/* Large Game Logo Area */}
                <div className="hidden md:flex items-center justify-center w-80 max-w-[20rem]">
                   {typeof slides[currentSlide].logo === 'string' ? (
                     <span className="text-4xl font-display font-bold text-white uppercase">{slides[currentSlide].logo}</span>
                   ) : (
                     slides[currentSlide].logo
                   )}
                </div>
                
                <div className="flex flex-col items-start">
                  <span className="text-sm md:text-base font-display font-bold tracking-widest text-white mb-2">{slides[currentSlide].brand}</span>
                  <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8">{slides[currentSlide].title}</h2>
                  <div className="flex flex-wrap gap-4">
                    {slides[currentSlide].buttons?.map((btn, idx) => (
                      <button 
                        key={idx}
                        className={`flex items-center px-6 py-3 rounded-full text-sm font-display font-bold uppercase transition-colors ${
                          btn.primary 
                            ? 'bg-white text-black hover:bg-gray-200' 
                            : 'border border-white text-white hover:bg-white hover:text-black'
                        }`}
                      >
                        {btn.icon}
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3 pointer-events-auto">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`relative h-1 overflow-hidden transition-all duration-300 rounded-full ${
              currentSlide === idx ? 'w-12 bg-white/30' : 'w-4 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {currentSlide === idx && (
              <div
                key={currentSlide}
                className="absolute top-0 left-0 h-full w-full bg-white rounded-full animate-slide-progress origin-left"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
