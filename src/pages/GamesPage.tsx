import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Play, Info, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const games = [
  {
    id: 1,
    title: 'Project One Online',
    logo: '/Dignitized.png',
    bgImage: '/1.png',
    status: 'Available Now',
    tag: 'Multiplayer Open World',
    description: 'Explore a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.',
    link: '#',
    trailer: '#',
    features: ['Co-op', 'PVP', 'Vehicles', 'Base Building'],
    color: '#ff6a00'
  },
  {
    id: 2,
    title: 'Cryora Records',
    logoText: 'CRYORA RECORDS',
    bgImage: '/cryora.png',
    status: 'Audio Label',
    tag: 'Cinematic Soundscapes',
    description: 'Immerse yourself in the sonic universe. Discover exclusive tracks, cinematic scores, and ambient soundscapes curated for your journey.',
    link: '/cryora-records',
    trailer: '#',
    features: ['24-Bit FLAC', 'Vinyl Drops', 'Stems', 'Merch'],
    color: '#a3a3a3'
  }
];

export const GamesPage = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-32 px-4 md:px-8 xl:px-12 relative z-10 w-full overflow-hidden">
      {/* Background Ambience based on hovered item */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none z-[-1]"
          >
            <div className={`absolute top-0 right-0 w-[80vw] h-[80vw] blur-[200px] rounded-full mix-blend-screen transition-colors duration-1000`} style={{ backgroundColor: `${games[hoveredIdx].color}1A` }} />
            <div className={`absolute bottom-0 left-0 w-[60vw] h-[60vw] blur-[200px] rounded-full mix-blend-screen transition-colors duration-1000`} style={{ backgroundColor: `${games[hoveredIdx].color}0D` }} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1600px] mx-auto w-full">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/30" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/50">Universe</span>
            <div className="w-12 h-[1px] bg-white/30" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#555]">Library</span>
          </h1>
          <p className="text-[#888] text-lg max-w-2xl font-light">
            Discover the worlds we are building. Prepare for deployment across our digital and physical expansions.
          </p>
        </motion.div>

        {/* Cinematic List Layout */}
        <div className="flex flex-col gap-8 md:gap-16">
          {games.map((game, index) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onHoverStart={() => setHoveredIdx(index)}
              onHoverEnd={() => setHoveredIdx(null)}
              className="group relative w-full rounded-none overflow-hidden border-y border-white/10 md:border md:rounded-2xl xl:rounded-[2rem] bg-[#050505] min-h-[600px] xl:min-h-[700px] flex items-end"
            >
              {/* Background Art */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
                <img 
                  src={game.bgImage} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.03] opacity-50 group-hover:opacity-70 filter brightness-75 group-hover:brightness-100"
                />
                {/* Vignettes for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[#050505]/80 to-transparent opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 w-full p-6 md:p-12 xl:p-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
                
                {/* Left Side: Logo & Info */}
                <div className="flex flex-col items-start gap-8 w-full md:max-w-2xl">
                  {/* Status Tag */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span 
                      className="px-4 py-2 bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2"
                      style={{ color: game.color }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: game.color }} />
                      {game.status}
                    </span>
                    <span className="px-4 py-2 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest bg-black/20 backdrop-blur-md">
                      {game.tag}
                    </span>
                  </div>

                  {/* Logo or Title */}
                  <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
                    {game.logo ? (
                      <img src={game.logo} alt={game.title} className="w-72 md:w-96 max-w-full drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
                    ) : (
                      <h2 className="text-6xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-xl">{game.logoText}</h2>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[#aaa] text-base md:text-lg leading-relaxed max-w-xl group-hover:text-white transition-colors duration-500">
                    {game.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full">
                    <span className="text-[10px] text-[#555] uppercase tracking-widest font-bold">Key Specs:</span>
                    {game.features.map((feature, i) => (
                      <span key={i} className="text-[10px] font-bold text-white/70 uppercase tracking-wider">{feature}</span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center w-full md:w-auto gap-4 shrink-0 transition-transform duration-700 group-hover:-translate-y-2">
                  <a 
                    href={game.link}
                    className="flex items-center justify-center px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all bg-white text-black hover:bg-gray-200"
                  >
                    {game.id === 2 ? 'Enter Vault' : 'View Hub'}
                  </a>
                  <button className="flex items-center justify-center px-8 py-5 text-sm font-bold uppercase tracking-widest transition-all border border-white/20 text-white hover:bg-white hover:text-black bg-black/40 backdrop-blur-md">
                    {game.id === 2 ? <Disc className="w-5 h-5 mr-3" /> : <Play className="w-5 h-5 mr-3" fill="currentColor" />}
                    {game.id === 2 ? 'Listen Now' : 'Watch Trailer'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

