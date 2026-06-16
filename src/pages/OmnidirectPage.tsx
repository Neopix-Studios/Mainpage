import { motion } from 'framer-motion';
import { Play, Pause, Music, LayoutGrid, Disc, Headphones } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Using Vite's glob import to automatically fetch all mp3 files from src/songs
const songModules = import.meta.glob('/src/songs/*.mp3', { eager: true, query: '?url', import: 'default' });

const dynamicTracks = Object.entries(songModules).map(([path, url], index) => {
  const filename = path.split('/').pop() || '';
  const title = filename.replace('.mp3', '').replace(/[-_]/g, ' ');
  return {
    id: index + 1,
    title,
    artist: 'Omnidirect',
    url: url as string
  };
});

export const OmnidirectPage = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const handleTrackSelect = (id: number) => {
    if (activeTrack === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(id);
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24 relative overflow-hidden font-space">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-96 bg-[#00d2ff]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0055ff]/10 blur-[200px] rounded-full pointer-events-none" />
      
      {activeTrackData && (
        <audio 
          ref={audioRef} 
          src={activeTrackData.url} 
          onEnded={handleEnded} 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center">
        
        {/* Banner/Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1100px] h-32 md:h-48 lg:h-[280px] rounded-2xl md:rounded-3xl overflow-hidden relative mb-16 border border-[#00d2ff]/30 shadow-[0_0_60px_rgba(0,210,255,0.15)] flex-shrink-0 group"
        >
          <img src="/Omnidirect.png" alt="Omnidirect Tracks" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-12 flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => {
                if (activeTrack) {
                  setIsPlaying(!isPlaying);
                } else if (dynamicTracks.length > 0) {
                  handleTrackSelect(dynamicTracks[0].id);
                }
              }}
              className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#00d2ff] flex items-center justify-center p-3 md:p-5 shadow-[0_0_30px_rgba(0,210,255,0.5)] cursor-pointer hover:bg-white hover:text-[#00d2ff] transition-transform hover:scale-105 text-[#020617] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={dynamicTracks.length === 0}
            >
              {isPlaying ? (
                <Pause fill="currentColor" className="w-full h-full" />
              ) : (
                <Play fill="currentColor" className="w-full h-full ml-1" />
              )}
            </button>
            <div>
              <h1 className="text-3xl md:text-5xl font-black font-space tracking-tight text-white mb-1">
                OMNIDIRECT <span className="text-[#00d2ff]">LIBRARY</span>
              </h1>
              <p className="text-[#00d2ff] font-mono text-xs md:text-sm tracking-widest uppercase">The official audio label of Neopix</p>
            </div>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 w-full max-w-[1100px]">
          
          {/* Left Column: Stats & Information */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0f172a]/40 backdrop-blur-md border border-[#00d2ff]/20 rounded-3xl p-6 lg:p-8 sticky top-32"
            >
              <h4 className="text-white font-bold mb-6 flex items-center gap-2 uppercase tracking-wider text-sm">
                <Headphones className="w-5 h-5 text-[#00d2ff]" />
                Library
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-white/60 text-sm">Target Folders</span>
                  <span className="text-white font-mono text-xs">src/songs</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-white/60 text-sm">Available Tracks</span>
                  <span className="text-[#00d2ff] font-mono font-bold text-lg">{dynamicTracks.length}</span>
                </div>
                
                {activeTrackData && (
                   <div className="mt-8 pt-4 border-t border-[#00d2ff]/20">
                     <span className="block text-xs uppercase tracking-widest text-[#00d2ff] mb-2">Now Playing</span>
                     <p className="text-white font-bold truncate">{activeTrackData.title}</p>
                     <p className="text-white/50 text-sm">{activeTrackData.artist}</p>
                   </div>
                )}
                
                <div className="pt-4 text-xs text-white/40 leading-relaxed">
                  <p>Audio files placed in the target folder are automatically synced to this library.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tracklist */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="flex items-center justify-between mb-6 pb-4">
              <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                <Disc className={`w-6 h-6 text-[#00d2ff] transition-all duration-[3000ms] ${isPlaying ? 'animate-spin' : ''}`} />
                All Tracks
              </h2>
            </div>

            <div className="space-y-2">
              {dynamicTracks.length === 0 ? (
                <div className="text-center py-16 text-white/50 border border-dashed border-white/10 rounded-2xl bg-[#0f172a]/20 backdrop-blur-sm">
                  <Music className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>No tracks found in library.</p>
                </div>
              ) : (
                dynamicTracks.map((track, idx) => (
                  <div 
                    key={track.id}
                    onClick={() => handleTrackSelect(track.id)}
                    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border-l-[3px] group ${
                      activeTrack === track.id 
                      ? 'bg-[#00d2ff]/10 border-[#00d2ff] shadow-[inset_0_0_30px_rgba(0,210,255,0.05)]' 
                      : 'bg-[#0f172a]/40 border-transparent hover:bg-[#0f172a]/80 hover:border-[#00d2ff]/50'
                    }`}
                  >
                    <div className="w-12 flex justify-center text-[#00d2ff]/60 mr-2 group-hover:text-[#00d2ff] transition-colors">
                      {activeTrack === track.id ? (
                        isPlaying ? (
                          <div className="flex gap-[3px] items-end justify-center h-4">
                            <div className="w-[3px] h-full bg-[#00d2ff] animate-[pulse_0.8s_ease-in-out_infinite]" />
                            <div className="w-[3px] h-[60%] bg-[#00d2ff] animate-[pulse_1.2s_ease-in-out_infinite]" />
                            <div className="w-[3px] h-[80%] bg-[#00d2ff] animate-[pulse_1s_ease-in-out_infinite]" />
                          </div>
                        ) : (
                          <Pause className="w-4 h-4 text-[#00d2ff]" fill="currentColor" />
                        )
                      ) : (
                        <Play className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                      )}
                      {activeTrack !== track.id && <span className="text-white/40 font-mono text-sm group-hover:hidden transition-all">{String(idx + 1).padStart(2, '0')}</span>}
                    </div>
                    
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className={`font-bold text-base truncate transition-colors ${activeTrack === track.id ? 'text-[#00d2ff]' : 'text-white group-hover:text-white/90'}`}>
                        {track.title}
                      </h4>
                      <p className="text-white/50 text-sm truncate">{track.artist}</p>
                    </div>
                    
                    {activeTrack === track.id && (
                      <div className="w-8 h-8 rounded-full bg-[#00d2ff]/20 flex items-center justify-center border border-[#00d2ff]/30 text-[#00d2ff]">
                        <Music className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            
          </motion.div>

        </div>
      </div>
    </div>
  );
};
