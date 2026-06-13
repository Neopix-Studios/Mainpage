import { SITE_DATA } from '../data';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Featured() {
  return (
    <section id="games" className="relative z-20 bg-[#050505] py-24 md:py-48 flex flex-col gap-32">
      {SITE_DATA.featuredGames.map((game, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={game.id} className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Parallax */}
            <div className="absolute inset-0 w-full h-full">
               <div className={`absolute inset-0 z-10 bg-gradient-to-r ${isEven ? 'from-[#050505] via-[#050505]/80 to-transparent' : 'from-transparent via-[#050505]/80 to-[#050505]'}`} />
               <motion.img 
                 initial={{ scale: 1.1 }}
                 whileInView={{ scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-10%" }}
                 src={game.bgImage}
                 alt={game.title}
                 className="w-full h-full object-cover opacity-60"
               />
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
              <div className={`max-w-2xl ${isEven ? 'ml-0' : 'ml-auto text-right'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-700 uppercase tracking-tighter mb-6 italic drop-shadow-lg pr-4 pb-2">
                    {game.logo}
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-400 mb-10 font-light leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className={`flex flex-col gap-4 mb-10 ${isEven ? 'items-start' : 'items-end'}`}>
                    <div className="flex flex-wrap gap-2">
                       {game.platforms.map(platform => (
                         <span key={platform} className="px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-wider">
                           {platform}
                         </span>
                       ))}
                    </div>
                    <span className="text-sm font-bold text-white/50 uppercase tracking-widest mt-2 block">
                      {game.releaseDate}
                    </span>
                  </div>

                  <div className={`flex flex-col sm:flex-row gap-4 ${isEven ? '' : 'justify-end'}`}>
                    <button className="bg-white text-black px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:scale-105 transition-all duration-300">
                      Watch Trailer
                    </button>
                    <button className="group flex items-center justify-center gap-2 text-white bg-transparent border border-white/40 px-10 py-5 font-black uppercase text-xs tracking-widest hover:border-white transition-all">
                      Learn More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
