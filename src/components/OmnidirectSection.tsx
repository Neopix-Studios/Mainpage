import { motion } from 'framer-motion';

export const OmnidirectSection = () => {
  return (
    <section className="w-full bg-black py-12 md:py-20 px-6 md:px-12 flex justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1100px] h-28 md:h-40 lg:h-[240px] rounded-xl md:rounded-2xl overflow-hidden relative group cursor-pointer border border-[#00d2ff]/20 shadow-[0_0_40px_rgba(0,210,255,0.1)] hover:shadow-[0_0_60px_rgba(0,210,255,0.25)] transition-shadow duration-700 block mx-auto"
      >
        <div className="absolute inset-0 w-full h-full bg-black">
          <img 
            src="/Omnidirect.png" 
            alt="Omnidirect Tracks" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
        </div>
      </motion.div>
    </section>
  );
};
