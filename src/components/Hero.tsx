import { motion, useScroll, useTransform } from 'motion/react';
import { SITE_DATA } from '../data';
import { Play } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] z-10">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 z-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <img 
          src={SITE_DATA.hero.bgImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex space-x-4 items-center"
        >
           <span className="px-3 py-1 bg-amber-500 text-black uppercase tracking-tighter text-[10px] font-black">
             {SITE_DATA.hero.releaseStatus}
           </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl lg:text-9xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-700 uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl pr-4 pb-2"
        >
          {SITE_DATA.hero.featuredGame}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mb-12 leading-relaxed"
        >
          {SITE_DATA.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="group flex items-center justify-center gap-3 bg-white text-black px-10 py-5 w-full sm:w-auto font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:scale-105 transition-all">
            <Play size={20} className="fill-black" />
            Watch Trailer
          </button>
          <button className="flex items-center justify-center gap-3 bg-transparent border border-white/40 text-white px-10 py-5 w-full sm:w-auto font-black uppercase text-xs tracking-widest hover:border-white transition-all">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
