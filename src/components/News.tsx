import { SITE_DATA } from '../data';
import { motion } from 'motion/react';

export function News() {
  return (
    <section id="news" className="relative z-20 bg-[#050505] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-700 uppercase tracking-tighter italic pr-2 pb-2">Latest Transmissions</h2>
            <p className="text-neutral-500 mt-4 font-bold tracking-widest uppercase text-[10px]">News & Announcements</p>
          </div>
          <button className="text-xs text-white hover:text-amber-500 font-bold uppercase tracking-widest border-b border-white hover:border-amber-500 transition-colors pb-1">
            View All News
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {SITE_DATA.news.map((item, index) => (
            <motion.a 
              href="#"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden mb-6 bg-white/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-tighter">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 group-hover:text-amber-500 transition-colors">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold leading-tight group-hover:underline underline-offset-4 decoration-amber-500">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
