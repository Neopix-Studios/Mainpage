import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    tag: 'MAJOR UPDATE',
    date: 'June 12, 2026',
    title: 'Project One Online: The Neon Surge Expansion',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 2,
    tag: 'EVENT',
    date: 'June 8, 2026',
    title: 'Neopix Studios Returns to Gamescom',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 3,
    tag: 'COMMUNITY',
    date: 'June 1, 2026',
    title: 'Community Spotlight: Top Base Creations',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 4,
    tag: 'INSIDE LOOK',
    date: 'May 28, 2026',
    title: 'Engineering the New Custom Engine Architecture',
    image: 'https://images.unsplash.com/photo-1531297122539-5692f6e14c41?auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    id: 5,
    tag: 'ANNOUNCEMENT',
    date: 'May 15, 2026',
    title: 'Cryora Records: Official Label Launch',
    image: '/cryora.png',
    link: '#'
  },
  {
    id: 6,
    tag: 'PATCH NOTES',
    date: 'May 5, 2026',
    title: 'Update 1.4: Universal System Rebalances & Fixes',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    link: '#'
  }
];

const getGridClass = (index: number) => {
  switch (index) {
    case 0: return 'md:col-span-8 md:row-span-2';
    case 1: return 'md:col-span-4 md:row-span-1';
    case 2: return 'md:col-span-4 md:row-span-1';
    case 3: return 'md:col-span-5 md:row-span-1';
    case 4: return 'md:col-span-7 md:row-span-1';
    case 5: return 'md:col-span-12 md:row-span-2'; // Massive banner
    default: return 'md:col-span-4 md:row-span-1';
  }
};

const getAnimationVariant = (index: number) => {
  // We apply the requested asymmetry: left, right, left-to-right chain, etc.
  switch (index) {
    case 0: return { x: -80, y: 0 };
    case 1: return { x: 80, y: 0 };
    case 2: return { x: 80, y: 30 };
    case 3: return { x: -80, y: 0 };
    case 4: return { x: 80, y: 0 };
    case 5: return { x: -150, y: 0 }; // Dramatic chain entrance from far left
    default: return { x: 0, y: 30 };
  }
};

const getTitleSizeClass = (index: number) => {
  if (index === 0) return 'text-3xl md:text-5xl lg:text-6xl max-w-2xl';
  if (index === 5) return 'text-3xl md:text-5xl lg:text-7xl max-w-4xl mx-auto';
  return 'text-xl lg:text-2xl';
};

const getContentAlignment = (index: number) => {
  if (index === 5) return 'justify-center items-center text-center';
  return 'justify-between items-start';
};

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-display font-bold uppercase tracking-widest text-[#ff6a00] border border-white/10 mb-6">
            Studio Updates
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-4 uppercase">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Transmissions</span>
          </h1>
          <p className="text-white/60 font-display text-lg max-w-2xl leading-relaxed">
            Project updates, events, and community highlights coming straight from the Neopix Studio floor. Stay connected to our worlds.
          </p>
        </motion.div>

        {/* Unusual Grid Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px] md:auto-rows-[320px]">
          {newsItems.map((item, index) => (
            <motion.a 
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, ...getAnimationVariant(index) }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.9, 
                delay: (index % 3) * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6a00]/50 transition-colors duration-500 bg-[#0a0a0a] ${getGridClass(index)}`}
            >
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-50 group-hover:opacity-60"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t ${index === 5 ? 'from-black/80 via-black/40 to-black/80' : 'from-black/90 via-black/20 to-transparent'}`} />
              
              {/* Dynamic Content Positioning */}
              <div className={`absolute inset-0 p-8 md:p-10 flex flex-col ${getContentAlignment(index)}`}>
                <div className={`w-full flex ${index === 5 ? 'justify-center' : 'justify-between items-start'} mb-4`}>
                  {index !== 5 ? (
                    <span className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-display font-bold uppercase tracking-[0.2em] text-[#ff6a00] border border-white/10 shadow-lg group-hover:bg-[#ff6a00]/20 transition-colors">
                      {item.tag}
                    </span>
                  ) : null}
                  {index !== 5 ? (
                    <span className="text-white/60 font-mono text-[10px] font-bold tracking-widest hidden md:block group-hover:text-white transition-colors">
                      {item.date}
                    </span>
                  ) : null}
                </div>
                
                <div className={`${index === 5 ? 'text-center' : ''}`}>
                  {index === 5 && (
                    <div className="flex items-center justify-center gap-4 mb-6">
                       <span className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-display font-bold uppercase tracking-[0.2em] text-[#ff6a00] border border-white/10">
                        {item.tag}
                      </span>
                      <span className="text-white/60 font-mono text-[10px] font-bold tracking-widest uppercase">
                        {item.date}
                      </span>
                    </div>
                  )}
                  <h3 className={`font-display font-black text-white leading-[1.1] uppercase tracking-tighter group-hover:text-[#ff6a00] transition-colors drop-shadow-2xl ${getTitleSizeClass(index)}`}>
                    {item.title}
                  </h3>
                  
                  {index === 5 && (
                    <div className="mt-8 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>

                {index !== 5 && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-[#ff6a00] text-white flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
