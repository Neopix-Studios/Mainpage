import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AudioPlayer } from '../components/AudioPlayer';
import { ArrowLeft, ArrowUpRight, Play, Film } from 'lucide-react';
import { GallerySlider } from '../components/GallerySlider';

const mixedImages = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531297122539-5692f6e14c41?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
];

const gameVideos = [
  {
    id: "dignitized",
    title: "Dignitized",
    subtitle: "Love Fades",
    cover: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    videos: [
      { title: "Story Trailer", thumb: mixedImages[5] },
      { title: "Cryo Island Gameplay", thumb: mixedImages[4] },
      { title: "Developer Deep Dive", thumb: mixedImages[1] },
      { title: "The Cronimals Reveal", thumb: mixedImages[3] },
      { title: "Soundtrack Recording", thumb: mixedImages[0] },
      { title: "Launch Trailer", thumb: mixedImages[2] },
      { title: "Review Highlights", thumb: mixedImages[5] }
    ]
  },
  {
    id: "omnidirect",
    title: "Omnidirect",
    subtitle: "Alpha Phase",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    videos: [
      { title: "Alpha Teaser", thumb: mixedImages[4] },
      { title: "Movement Mechanics", thumb: mixedImages[0] },
      { title: "Map Overview", thumb: mixedImages[1] },
      { title: "Combat Sequence", thumb: mixedImages[2] },
      { title: "Community Highlights", thumb: mixedImages[3] },
      { title: "Alpha Recap", thumb: mixedImages[5] },
      { title: "Pistol Showcase", thumb: mixedImages[4] }
    ]
  },
  {
    id: "project-one",
    title: "Project One Online",
    subtitle: "Global Launch",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    videos: [
      { title: "Global Launch Trailer", thumb: mixedImages[0] },
      { title: "Update 1.4 Details", thumb: mixedImages[3] },
      { title: "Server Merge Guide", thumb: mixedImages[5] },
      { title: "Dungeon Walkthrough", thumb: mixedImages[1] },
      { title: "PvP Tournament Finals", thumb: mixedImages[4] },
      { title: "Year One Retrospective", thumb: mixedImages[2] },
      { title: "Class Spotlight", thumb: mixedImages[0] }
    ]
  }
];

const getVideoGridClass = (index: number) => {
  const mdPattern = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1"
  ];
  const mobPattern = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1"
  ];
  return `${mobPattern[index % 7]} ${mdPattern[index % 7]}`;
};

export const VideosPage = () => {
  const [selectedGame, setSelectedGame] = useState<typeof gameVideos[0] | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedGame]);

  return (
    <div className="min-h-screen bg-[#030303] pb-24 relative z-10 w-full overflow-hidden">
      
      <AnimatePresence mode="wait">
        {!selectedGame ? (
          <motion.div 
            key="list" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Single Slider (Mixed Games) - Now acting as absolute top hero */}
            <GallerySlider images={mixedImages} isVideo={true}>
              <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-white mb-4 uppercase drop-shadow-2xl">
                    Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Vault</span>
                  </h1>
                  <p className="text-white/80 font-display text-lg max-w-2xl drop-shadow-md">
                    Watch the latest trailers, developer deep-dives, and community highlights from across all Neopix Studio titles.
                  </p>
                </motion.div>
              </div>
            </GallerySlider>

            {/* Game Selection Cards */}
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mt-12">
              <div className="border-b border-white/10 pb-6 mb-10 flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-widest">
                  Explore by <span className="text-[#ff6a00]">Project</span>
                </h2>
                <Film className="w-6 h-6 text-white/40" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {gameVideos.map((game, index) => (
                  <motion.div 
                    key={game.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    onClick={() => setSelectedGame(game)}
                    className="group cursor-pointer relative block aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6a00]/60 transition-all duration-500 bg-[#0a0a0a] shadow-2xl"
                  >
                    <div className="absolute inset-0 w-full h-full">
                      <img 
                        src={game.cover} 
                        alt={game.title} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-40 group-hover:opacity-70"
                      />
                    </div>
                    {/* Decorative Overlay play button background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                       <Play className="w-32 h-32 text-white/5 opacity-50" fill="currentColor" />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className="flex justify-end">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center transform translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                          <ArrowUpRight className="w-5 h-5 group-hover:text-[#ff6a00] transition-colors" />
                        </div>
                      </div>
                      
                      <div>
                        <span className="inline-block px-3 py-1 bg-[#ff6a00]/10 border border-[#ff6a00]/20 text-[#ff6a00] text-[10px] uppercase tracking-widest font-bold rounded-full mb-3 backdrop-blur-sm">
                          {game.videos.length} Videos
                        </span>
                        <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter leading-none mb-2">
                          {game.title}
                        </h3>
                        <p className="text-white/60 font-mono text-sm tracking-wider uppercase font-bold">
                          {game.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="gallery" 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            {/* Specific Game Videos Header */}
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full mb-12">
              <button 
                onClick={() => setSelectedGame(null)}
                className="group flex items-center text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-12 py-2"
              >
                <ArrowLeft className="w-4 h-4 mr-3 transform group-hover:-translate-x-2 transition-transform" />
                Back to Projects
              </button>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                <div>
                  <span className="text-[#ff6a00] font-mono text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                    Video Vault
                  </span>
                  <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase leading-none">
                    {selectedGame.title}
                  </h1>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-white/40 font-mono text-sm tracking-widest uppercase font-bold">
                    {selectedGame.subtitle}
                  </p>
                  <p className="text-white/20 font-mono text-xs tracking-widest uppercase font-bold mt-2">
                    {selectedGame.videos.length} Videos Available
                  </p>
                </div>
              </div>
            </div>

            {/* Asymmetric Video Grid */}
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[280px] gap-4 md:gap-6">
                {selectedGame.videos.map((video, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className={`group cursor-pointer relative rounded-3xl overflow-hidden border border-white/5 hover:border-white/30 transition-colors bg-[#0a0a0a] shadow-2xl ${getVideoGridClass(index)}`}
                  >
                    <div className="absolute inset-0 bg-[#ff6a00]/0 group-hover:bg-[#ff6a00]/10 transition-colors duration-500 z-10 mix-blend-overlay" />
                    
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#ff6a00] group-hover:border-[#ff6a00] group-hover:scale-110 transition-all duration-300">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-2" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-white font-display font-bold uppercase tracking-widest text-xs md:text-sm">{video.title}</h3>
                    </div>

                    <img 
                      src={video.thumb} 
                      alt={`${selectedGame.title} - ${video.title}`} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-50 group-hover:opacity-90"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
