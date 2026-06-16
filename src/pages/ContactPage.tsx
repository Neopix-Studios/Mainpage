import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 pb-24">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6a00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto text-center relative z-10 p-12 md:p-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 mb-8">
          <Mail className="w-12 h-12 text-[#ff6a00]" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter uppercase mb-8 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
          Get in Touch
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 font-display font-medium tracking-wide uppercase mb-12">
          For business, press, or general inquiries:
        </p>

        <a 
          href="mailto:Studios@neopix.in" 
          className="inline-block text-3xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter text-[#ff6a00] hover:text-white transition-colors duration-500 hover:scale-105 transform"
        >
          Studios@neopix.in
        </a>
      </motion.div>
    </div>
  );
};
