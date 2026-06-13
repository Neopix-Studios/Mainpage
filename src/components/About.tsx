import { SITE_DATA } from '../data';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="relative z-20 bg-[#050505] py-32 border-t border-white/10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img 
            src={SITE_DATA.brand.logo} 
            alt={SITE_DATA.brand.name} 
            className="h-24 md:h-32 mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] opacity-90"
          />
          <h2 className="text-4xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-700 uppercase tracking-tighter italic mb-8 pr-2 pb-2">
            Defining the Future of Play
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-3xl leading-relaxed mb-12">
            At <strong className="text-white font-bold">{SITE_DATA.brand.name}</strong>, we don't just make games. We construct universes. We believe in the power of interactive storytelling to transcend traditional media. Utilizing proprietary technology, global talent, and an uncompromising dedication to quality, we build experiences that resonate for a lifetime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl text-left">
            <div className="border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-colors group">
              <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Vision
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                To create genre-defining interactive entertainment that pushes the limits of technology, art, and narrative design on a global scale.
              </p>
            </div>
            
            <div className="border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-colors group">
              <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Technology
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                Powered by our proprietary Aether Engine, achieving unprecedented visual fidelity, dynamic physics, and deeply immersive worlds.
              </p>
            </div>

            <div className="border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-colors group">
              <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                Careers
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors flex flex-col items-start gap-4">
                <span>Join the vanguard of game development. We are always looking for visionary talent.</span>
                <span className="text-white border-b border-white hover:text-amber-500 hover:border-amber-500 uppercase tracking-widest font-bold text-[10px] pb-1 transition-all cursor-pointer">
                  View Open Roles
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
