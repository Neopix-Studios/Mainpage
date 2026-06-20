import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Camera, Maximize2, Download } from 'lucide-react';
import { GallerySlider } from '../components/GallerySlider';

const mixedImages = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531297122539-5692f6e14c41?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
];

const getPhotoGridClass = (index: number) => {
  const mdPattern = [
    "lg:col-span-8 lg:row-span-2 md:col-span-6 md:row-span-2",
    "lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1",
    "lg:col-span-4 lg:row-span-1 md:col-span-6 md:row-span-1",
    "lg:col-span-4 lg:row-span-1 md:col-span-4 md:row-span-1",
    "lg:col-span-4 lg:row-span-1 md:col-span-4 md:row-span-1",
    "lg:col-span-4 lg:row-span-1 md:col-span-4 md:row-span-1",
    "lg:col-span-12 lg:row-span-2 md:col-span-12 md:row-span-2"
  ];
  return `col-span-12 ${mdPattern[index % 7]}`;
};

const gameGalleries = [
  {
    id: "dignitized",
    title: "Project Dignitized",
    subtitle: "In-Engine Concept Renders",
    cover: mixedImages[5],
    color: "#ff6a00",
    photos: [
      { url: mixedImages[5], caption: "Downtown District Early Render", type: "Concept Art" },
      { url: mixedImages[4], caption: "Character Poly Mesh", type: "Asset Creation" },
      { url: mixedImages[1], caption: "Vehicle Dynamics Test", type: "Gameplay" },
      { url: mixedImages[3], caption: "Weapon Customization UI", type: "Interface" },
      { url: mixedImages[0], caption: "Lighting Test 04", type: "Engine" },
      { url: mixedImages[2], caption: "Multiplayer Lobby Screen", type: "UI/UX" },
      { url: mixedImages[5], caption: "Boss Arena Blockout", type: "Level Design" }
    ]
  },
  {
    id: "cryora-records",
    title: "Cryora Records",
    subtitle: "In-Studio Photography",
    cover: mixedImages[1],
    color: "#a3a3a3",
    photos: [
      { url: mixedImages[4], caption: "Vinyl Pressing Process", type: "BTS" },
      { url: mixedImages[0], caption: "Mixing Desk Session 01", type: "Studio" },
      { url: mixedImages[1], caption: "Live Recording Room", type: "Studio" },
      { url: mixedImages[2], caption: "Orchestral Setup", type: "Recording" },
      { url: mixedImages[3], caption: "Artist Lounge", type: "Environment" },
      { url: mixedImages[5], caption: "Microphone Array Test", type: "Tech" },
      { url: mixedImages[4], caption: "Post-Production Suite", type: "Studio" }
    ]
  },
  {
    id: "project-one",
    title: "Project One Online",
    subtitle: "Community Screenshots",
    cover: mixedImages[0],
    color: "#3b82f6",
    photos: [
      { url: mixedImages[0], caption: "Server First Boss Kill", type: "Community" },
      { url: mixedImages[3], caption: "Player Gathering in Hub", type: "Social" },
      { url: mixedImages[5], caption: "Max Level Armor Set", type: "Showcase" },
      { url: mixedImages[1], caption: "Guild Wars - Region 3", type: "PvP" },
      { url: mixedImages[4], caption: "Environment - Snow Peak", type: "Scenery" },
      { url: mixedImages[2], caption: "Trading Post Overcrowded", type: "Economy" },
      { url: mixedImages[0], caption: "Event: Solar Eclipse", type: "World Event" }
    ]
  }
];

export const PhotosPage = () => {
  const [selectedGame, setSelectedGame] = useState<typeof gameGalleries[0] | null>(null);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedGame]);

  return (
    <div className="min-h-screen bg-[#030303] pb-32 relative z-10 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!selectedGame ? (
          <motion.div 
            key="list" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gallery Hero Slider */}
            <GallerySlider images={mixedImages}>
              <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center text-center mt-12 md:mt-24"
                >
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/50 border border-white/20 px-3 py-1 bg-black/20 backdrop-blur-md">Archives</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase drop-shadow-2xl">
                    High-Res <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#888]">Captures</span>
                  </h1>
                </motion.div>
              </div>
            </GallerySlider>

            {/* Project Selection Folders */}
            <div className="px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto w-full mt-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12">
                <div>
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                    Browse Folders
                  </h2>
                  <p className="text-[#888] text-sm uppercase tracking-widest font-bold">Concept Art, Gameplay, & Behind the Scenes</p>
                </div>
                <div className="mt-4 md:mt-0 opacity-50">
                   <Camera className="w-8 h-8" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                {gameGalleries.map((game, index) => (
                  <motion.div 
                    key={game.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    onClick={() => setSelectedGame(game)}
                    className="group cursor-pointer relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-[#050505] border border-white/10 overflow-hidden"
                  >
                     <div className="absolute inset-0 z-0">
                       <img 
                         src={game.cover} 
                         alt={game.title} 
                         className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-40 group-hover:opacity-70 filter grayscale group-hover:grayscale-0"
                       />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                     
                     <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                        <div className="flex items-start justify-between">
                            <span className="px-3 py-1 border border-white/20 text-white/70 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md bg-black/40">
                              {game.photos.length} RAW Files
                            </span>
                            <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                               <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                           <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1 transition-colors duration-500" style={{ color: game.color }}>
                              {game.title}
                           </h3>
                           <p className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">
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
            className="pt-24"
          >
            {/* Specific Project Detail Header */}
            <div className="px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto w-full mb-16">
              <button 
                onClick={() => setSelectedGame(null)}
                className="group flex items-center text-[#888] hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-12"
              >
                <ArrowLeft className="w-4 h-4 mr-3 transform group-hover:-translate-x-2 transition-transform" />
                Return to Folders
              </button>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedGame.color }} />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: selectedGame.color }}>Project Media</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none mb-2">
                    {selectedGame.title}
                  </h1>
                  <p className="text-[#888] font-light text-base md:text-lg max-w-xl">
                    High-resolution {selectedGame.subtitle.toLowerCase()} captured internally at Neopix Studio.
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end text-left md:text-right bg-white/[0.02] border border-white/5 p-4 md:p-6 min-w-[200px]">
                   <span className="text-[10px] font-bold text-[#888] uppercase tracking-widest mb-1">Total Assets</span>
                   <span className="text-3xl font-mono text-white mb-4">{String(selectedGame.photos.length).padStart(3, '0')}</span>
                   <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-[#ff6a00] hover:text-white transition-colors">
                      <Download className="w-3 h-3" /> Download Kit (.ZIP)
                   </button>
                </div>
              </div>
            </div>

            {/* Jaw-Dropped Masonry/Bento Grid */}
            <div className="px-4 md:px-8 xl:px-12 max-w-[1600px] mx-auto w-full">
              <div className="grid grid-cols-12 auto-rows-[250px] md:auto-rows-[350px] lg:auto-rows-[400px] gap-4 md:gap-6">
                {selectedGame.photos.map((photo, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                    onHoverStart={() => setHoveredPhoto(index)}
                    onHoverEnd={() => setHoveredPhoto(null)}
                    className={`group relative overflow-hidden bg-[#050505] border border-white/10 hover:border-white/30 transition-colors ${getPhotoGridClass(index)}`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.02] opacity-80 group-hover:opacity-100 filter contrast-[1.1]"
                    />

                    {/* Meta tag overlay */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 transition-opacity duration-300">
                       <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest">
                         {photo.type}
                       </span>
                    </div>

                    {/* Expand icon appearing on hover */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                       <div className="w-16 h-16 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                          <Maximize2 className="w-6 h-6 text-white" />
                       </div>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex justify-between items-end">
                           <h4 className="text-white font-medium text-sm md:text-base">{photo.caption}</h4>
                           <span className="text-[#888] text-[10px] font-mono tracking-widest">IMG_{String(index + 1).padStart(4, '0')}</span>
                        </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* End of Gallery */}
            <div className="mt-24 text-center pb-12 w-full">
               <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mb-6" />
               <p className="text-[#555] text-[10px] uppercase font-bold tracking-[0.3em]">End of Folder</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

