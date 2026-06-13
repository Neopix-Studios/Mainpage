import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // We handle play/pause sync when state changes
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.warn("Audio play blocked by browser policy:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        aria-label="Toggle atmospheric audio"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      
      {/* 
        Using a very subtle, royalty-free ambient drone placeholder.
        In a real app, this would be a customized track.
      */}
      <audio
        ref={audioRef}
        loop
        src="https://actions.google.com/sounds/v1/science_fiction/ambient_space_drone.ogg"
        className="hidden"
      />
    </div>
  );
}
