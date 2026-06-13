import { motion } from 'motion/react';
import { SITE_DATA } from '../data';

export function Support() {
  return (
    <section id="support" className="relative z-20 bg-[#050505] py-32 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10 transition-colors duration-500 hover:bg-black/60 pt-10"></div>
        <img 
          src="https://cdn.neopix.in/Nepoix_Studio_Gif.gif" 
          alt="Support Background" 
          className="w-full h-full object-cover opacity-50 mix-blend-lighten"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={SITE_DATA.brand.logo} 
              alt={SITE_DATA.brand.name} 
              className="h-12 md:h-16 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            />
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter italic pr-2 pb-2">
              Support
            </h2>
          </div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl leading-relaxed mb-8">
            Get help with issues, browse common solutions, view service status updates, and more.
          </p>

          <button className="bg-white text-black px-12 py-5 font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:scale-105 transition-all duration-300">
            Get Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
