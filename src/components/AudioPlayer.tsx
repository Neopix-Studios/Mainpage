import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer = ({ src = "/pyar.mp3" }: { src?: string }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  
  const getSongName = (url: string) => {
    try {
      const filename = url.split('/').pop() || 'Unknown Track';
      const nameWithoutExtension = filename.substring(0, filename.lastIndexOf('.')) || filename;
      return decodeURIComponent(nameWithoutExtension).replace(/_/g, ' ');
    } catch {
      return 'Unknown Track';
    }
  };
  
  const songName = getSongName(src);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const initAudio = () => {
    if (!audioCtxRef.current && audioRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64; 
      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);
      audioCtxRef.current = ctx;
      (window as any).__audioAnalyser = analyser;
    }
  };

  const togglePlay = () => {
    initAudio();
    if (audioRef.current) {
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        window.dispatchEvent(new CustomEvent('audioState', { detail: { isPlaying: false } }));
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              window.dispatchEvent(new CustomEvent('audioState', { detail: { isPlaying: true } }));
            })
            .catch((error) => {
              console.error("Audio playback error:", error);
              setIsPlaying(false);
              window.dispatchEvent(new CustomEvent('audioState', { detail: { isPlaying: false } }));
            });
        } else {
          setIsPlaying(true);
          window.dispatchEvent(new CustomEvent('audioState', { detail: { isPlaying: true } }));
        }
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop crossOrigin="anonymous">
        <source src={src} type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <button
              onClick={togglePlay}
              className="h-12 flex items-center bg-black/60 hover:bg-black/90 backdrop-blur border border-white/10 rounded-full text-white transition-all duration-500 ease-out group overflow-hidden max-w-[48px] hover:max-w-[250px] shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                {isPlaying ? (
                  <Volume2 className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <VolumeX className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
              <span className="whitespace-nowrap pr-5 font-medium text-sm text-gray-200 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 capitalize">
                {songName}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
