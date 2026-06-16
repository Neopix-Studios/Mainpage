import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    title: 'Project One Online',
    logo: '/Dignitized.png',
    bgImage: '/1.png',
    status: 'Available Now',
    description: 'Explore a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends.',
    link: '#',
    trailer: '#'
  },
  {
    id: 2,
    title: 'Omnidirect',
    logoText: 'OMNIDIRECT',
    bgImage: '/Omnidirect.png',
    status: 'In Development',
    description: 'Push the limits of speed and physics in this next-generation racer. Coming soon to PC and consoles.',
    link: '#',
    trailer: '#'
  }
];

export const GamesPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-4">
            Game <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Library</span>
          </h1>
          <p className="text-white/60 font-display text-lg max-w-2xl">
            Discover the worlds we're building. Play now or get a sneak peek at what's coming next.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {games.map((game, index) => (
            <motion.div 
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
            >
              {/* Background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <img 
                  src={game.bgImage} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end p-8 md:p-12 min-h-[400px] gap-8">
                {/* Logo Area */}
                <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-start">
                  {game.logo ? (
                    <img src={game.logo} alt={game.title} className="w-64 max-w-full drop-shadow-2xl" />
                  ) : (
                    <h2 className="text-5xl font-display font-black text-white italic tracking-tighter drop-shadow-2xl">{game.logoText}</h2>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col items-start gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-display font-bold uppercase tracking-widest text-[#ff6a00] border border-white/10">
                    {game.status}
                  </span>
                  <p className="text-white/80 font-display text-lg max-w-2xl leading-relaxed drop-shadow-md">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <button className="flex items-center px-6 py-3 rounded-full text-sm font-display font-bold uppercase transition-transform hover:scale-105 bg-white text-black hover:bg-gray-200">
                      View Game
                    </button>
                    <button className="flex items-center px-6 py-3 rounded-full text-sm font-display font-bold uppercase transition-transform hover:scale-105 border border-white/40 text-white hover:bg-white hover:text-black backdrop-blur-sm">
                      <Play className="w-4 h-4 mr-2" fill="currentColor" /> Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
