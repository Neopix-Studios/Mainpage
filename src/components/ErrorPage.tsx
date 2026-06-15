import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
}

export function ErrorPage({ code, title, description }: ErrorPageProps) {
  return (
    <div className="flex-1 w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.05)_0%,transparent_60%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <h1 className="text-[120px] md:text-[180px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-[#ff6a00] opacity-90 drop-shadow-2xl">
          {code}
        </h1>
        
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#ff6a00]/50 to-transparent my-6" />
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-wide relative">
          {title}
          <Sparkles className="w-6 h-6 text-[#ff6a00] absolute -top-4 -right-8 opacity-60 animate-pulse" />
        </h2>
        
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed font-light">
          {description}
        </p>
        
        <Link 
          to="/" 
          className="group flex items-center px-8 py-4 bg-white text-black rounded-full font-bold tracking-[0.1em] text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,106,0,0.3)]"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          RETURN TO HOME
        </Link>
      </motion.div>
    </div>
  );
}
