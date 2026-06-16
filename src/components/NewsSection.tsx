import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const newsData = [
  {
    id: 1,
    title: "Project One Online: The Neon Surge Expansion",
    category: "Major Update",
    date: "June 12, 2026",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-7",
    height: "md:h-[500px]"
  },
  {
    id: 2,
    title: "Neopix Studios Returns to Gamescom",
    category: "Event",
    date: "June 8, 2026",
    image: "https://images.unsplash.com/photo-1540505845941-8600d8ce67da?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-5",
    height: "md:h-[500px]"
  },
  {
    id: 3,
    title: "Community Spotlight: Top Base Creations",
    category: "Community",
    date: "June 1, 2026",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    colSpan: "md:col-span-5",
    height: "md:h-[400px]"
  },
  {
    id: 4,
    title: "Inside Look: Engineering the New Engine",
    category: "Inside Look",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-7",
    height: "md:h-[400px]"
  }
];

export const NewsSection = () => {
  return (
    <section className="w-full relative z-10 overflow-hidden bg-black">
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Latest Transmissions</h2>
           <p className="text-gray-400 mt-4 text-lg md:text-xl font-light max-w-xl">Project updates, events, and community highlights coming straight from the Neopix Studio floor.</p>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group flex items-center gap-3 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-display font-bold uppercase tracking-widest text-sm whitespace-nowrap hidden md:flex"
        >
          View All <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {newsData.map((item, index) => (
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            key={item.id}
            className={`group relative rounded-3xl overflow-hidden block col-span-1 border border-white/10 bg-[#050505] min-h-[350px] ${item.colSpan} ${item.height}`}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 ease-out"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Gradients to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10 box-border">
              <div className="flex justify-between items-start w-full">
                <span className="inline-block px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-xs font-display font-black uppercase tracking-widest text-white border border-white/10 shadow-lg">
                  {item.category}
                </span>
                <span className="text-white/80 text-sm font-display font-semibold tracking-wide drop-shadow-md">
                  {item.date}
                </span>
              </div>

              <div className="transform transition-transform duration-500 md:translate-y-6 md:group-hover:translate-y-0 relative z-20">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-2 md:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.title}
                </h3>
                <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2 text-sm font-display font-bold text-[#ff6a00] uppercase tracking-widest mt-4 md:mt-2">
                    Read More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Neon Accent */}
            <div className="absolute bottom-0 left-0 h-[3px] bg-[#ff6a00] w-0 group-hover:w-full transition-all duration-700 ease-in-out z-30 shadow-[0_-2px_15px_rgba(255,106,0,0.8)]" />
          </motion.a>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-12 flex justify-center md:hidden">
        <button className="group flex items-center gap-3 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-display font-bold uppercase tracking-widest text-sm w-full justify-center">
          View All <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </button>
      </div>
      </div>
    </section>
  );
};
