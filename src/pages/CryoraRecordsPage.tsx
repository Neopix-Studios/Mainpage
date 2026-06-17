import { motion } from 'framer-motion';
import { Play, Pause, Music, Disc, Headphones, FastForward, Rewind, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Using Vite's glob import to automatically fetch all mp3 files from src/songs
const songModules = import.meta.glob('/src/songs/*.mp3', { eager: true, query: '?url', import: 'default' });

const dynamicTracks = Object.entries(songModules).map(([path, url], index) => {
  const filename = path.split('/').pop() || '';
  const title = filename.replace('.mp3', '').replace(/[-_]/g, ' ');
  return {
    id: index + 1,
    title,
    artist: 'Cryora Records',
    duration: '---', // Could calculate if loaded, but static for now
    url: url as string
  };
});

export const CryoraRecordsPage = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrackData = dynamicTracks.find(t => t.id === activeTrack);

  useEffect(() => {
    if (audioRef.current && activeTrackData) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Error playing audio", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, activeTrackData]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleTrackSelect = (id: number) => {
    if (activeTrack === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(id);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    // Auto-play next track
    const currentIndex = dynamicTracks.findIndex(t => t.id === activeTrack);
    if (currentIndex !== -1 && currentIndex < dynamicTracks.length - 1) {
      setActiveTrack(dynamicTracks[currentIndex + 1].id);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-24 pb-32 relative overflow-hidden font-sans">
      {/* Refined Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#1a1a2e] to-transparent opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#00d2ff]/5 blur-[250px] rounded-full pointer-events-none" />
      
      {activeTrackData && (
        <audio 
          ref={audioRef} 
          src={activeTrackData.url} 
          onEnded={handleEnded} 
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col mt-4">
        
        {/* Sleek Profile / Hero Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-end gap-8 mb-16 pb-12 border-b border-white/10"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl flex-shrink-0 group relative border border-white/5">
            <img 
              src="/cryora.png" 
              alt="Cryora Records" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md cursor-pointer hover:bg-white/20 transition-all border border-white/20 shadow-xl" onClick={() => setIsPlaying(false)}>
                  <Pause className="w-6 h-6 text-white" fill="currentColor" />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col w-full">
            <span className="text-xs uppercase tracking-[0.3em] text-[#00d2ff] font-bold mb-3">Official Label</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4 leading-none">
              CRYORA <br className="hidden md:block" />
              <span className="text-white/40">RECORDS</span>
            </h1>
            <p className="text-white/50 text-sm md:text-base font-medium tracking-wide max-w-xl">
              Immerse yourself in the sonic universe of Neopix. Discover exclusive tracks, cinematic scores, and ambient soundscapes curated for your journey.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <button 
                onClick={() => {
                  if (activeTrack) {
                    setIsPlaying(!isPlaying);
                  } else if (dynamicTracks.length > 0) {
                    handleTrackSelect(dynamicTracks[0].id);
                  }
                }}
                className="w-14 h-14 rounded-full bg-[#00d2ff] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,210,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={dynamicTracks.length === 0}
              >
                {isPlaying ? (
                  <Pause fill="currentColor" className="w-6 h-6" />
                ) : (
                  <Play fill="currentColor" className="w-6 h-6 ml-1" />
                )}
              </button>
              <div className="text-xs text-white/40 uppercase tracking-widest font-mono">
                <span className="text-white font-bold">{dynamicTracks.length}</span> Tracks Available
              </div>
            </div>
          </div>
        </motion.div>

        {/* List Layout */}
        <div className="w-full">
          <div className="flex items-center text-xs font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-4 mb-4 px-4">
            <div className="w-12 text-center">#</div>
            <div className="flex-1">Title</div>
            <div className="w-32 hidden md:block">Album</div>
            <div className="w-20 hidden sm:block text-right">Status</div>
          </div>

          <div className="space-y-1">
            {dynamicTracks.length === 0 ? (
              <div className="text-center py-20 text-white/30 border border-dashed border-white/10 rounded-xl bg-[#111]/30">
                <Music className="w-10 h-10 mx-auto mb-4 opacity-20" />
                <p className="text-sm font-medium tracking-wide uppercase">No tracks uploaded.</p>
                <p className="text-xs mt-2 opacity-50">Upload .mp3 to src/songs folder to populate library.</p>
              </div>
            ) : (
              dynamicTracks.map((track, idx) => (
                <div 
                  key={track.id}
                  onDoubleClick={() => handleTrackSelect(track.id)}
                  className={`flex items-center p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-200 group ${
                    activeTrack === track.id 
                    ? 'bg-white/10' 
                    : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-12 flex justify-center text-white/40 group-hover:text-white transition-colors">
                    {activeTrack === track.id ? (
                      isPlaying ? (
                        <div className="flex gap-[3px] items-end justify-center h-4 w-4">
                          <div className="w-[3px] h-full bg-[#00d2ff] animate-[pulse_0.8s_ease-in-out_infinite]" />
                          <div className="w-[3px] h-[60%] bg-[#00d2ff] animate-[pulse_1.2s_ease-in-out_infinite]" />
                          <div className="w-[3px] h-[80%] bg-[#00d2ff] animate-[pulse_1s_ease-in-out_infinite]" />
                        </div>
                      ) : (
                        <span className="text-[#00d2ff] text-sm font-medium">{idx + 1}</span>
                      )
                    ) : (
                      <span className="group-hover:hidden text-sm">{idx + 1}</span>
                    )}
                    {activeTrack !== track.id && (
                      <button onClick={(e) => { e.stopPropagation(); handleTrackSelect(track.id); }} className="hidden group-hover:block text-white">
                        <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 pr-4 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded shadow-md overflow-hidden flex-shrink-0 ${activeTrack === track.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'} transition-opacity`}>
                      <img src="/cryora.png" alt="Cover" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col truncate">
                      <h4 className={`font-semibold text-sm md:text-base truncate transition-colors ${activeTrack === track.id ? 'text-[#00d2ff]' : 'text-white'}`}>
                        {track.title}
                      </h4>
                      <p className="text-white/50 text-xs truncate mt-0.5">{track.artist}</p>
                    </div>
                  </div>

                  <div className="w-32 hidden md:block text-white/40 text-sm truncate">
                    Cryora Selects
                  </div>

                  <div className="w-20 hidden sm:flex justify-end text-white/40 text-sm">
                    {activeTrack === track.id ? (
                      <span className="text-[#00d2ff] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                        <Disc className="w-3 h-3 animate-spin duration-[3000ms]" />
                        Live
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4 hover:text-white" />
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          
        </div>
      </div>

      {/* Sticky Player Bar for Active Track */}
      {activeTrackData && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 w-full h-24 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 z-50 px-6 flex items-center justify-between"
        >
          {/* Progress Bar (Absolute Top) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5 cursor-pointer group">
            <div className="h-full bg-[#00d2ff] relative" style={{ width: `${progress}%` }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-[#00d2ff]/50" />
            </div>
          </div>

          {/* Track Info */}
          <div className="flex items-center gap-4 w-1/3 min-w-0">
             <div className="w-14 h-14 rounded-md overflow-hidden flex-shrink-0 border border-white/10">
               <img src="/cryora.png" alt="Cover" className="w-full h-full object-cover" />
             </div>
             <div className="flex flex-col truncate">
               <h4 className="font-bold text-sm text-white truncate">{activeTrackData.title}</h4>
               <p className="text-xs text-white/50 truncate uppercase tracking-wider mt-0.5">{activeTrackData.artist}</p>
             </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center justify-center w-1/3">
             <div className="flex items-center gap-6">
                <button 
                  className="text-white/50 hover:text-white transition-colors"
                  onClick={() => {
                    const currentIndex = dynamicTracks.findIndex(t => t.id === activeTrack);
                    if (currentIndex > 0) handleTrackSelect(dynamicTracks[currentIndex - 1].id);
                  }}
                >
                  <Rewind fill="currentColor" className="w-5 h-5" />
                </button>
                <button 
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause fill="currentColor" className="w-5 h-5 pointer-events-none" />
                  ) : (
                    <Play fill="currentColor" className="w-5 h-5 ml-1 pointer-events-none" />
                  )}
                </button>
                <button 
                  className="text-white/50 hover:text-white transition-colors"
                  onClick={() => {
                    const currentIndex = dynamicTracks.findIndex(t => t.id === activeTrack);
                    if (currentIndex < dynamicTracks.length - 1) handleTrackSelect(dynamicTracks[currentIndex + 1].id);
                  }}
                >
                  <FastForward fill="currentColor" className="w-5 h-5" />
                </button>
             </div>
          </div>

          {/* Extras / Volume */}
          <div className="flex items-center justify-end w-1/3 gap-4 text-white/50">
             <Headphones className="w-5 h-5" />
             <Volume2 className="w-5 h-5" />
             <div className="w-24 h-1 bg-white/10 rounded-full">
               <div className="w-2/3 h-full bg-white/50 rounded-full" />
             </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
