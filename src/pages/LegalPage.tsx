import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export const LegalPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-24 md:pt-32 pb-24 px-4 md:px-12 relative z-10 w-full overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col h-[75vh] md:h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[10px] md:text-xs font-display font-bold uppercase tracking-widest text-[#ff6a00] border border-white/10 mb-4">
              Strictly Confidential
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white uppercase">
              Legal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-red-600">Confidentiality</span>
            </h1>
          </div>
          <a 
            href="/legal.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors text-white whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex-1 bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <object 
            data="/legal.pdf" 
            type="application/pdf" 
            className="w-full h-full min-h-[500px]"
          >
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <p className="text-white/60 mb-6 font-mono text-sm">Your browser does not support viewing PDFs directly.</p>
              <a 
                href="/legal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#ff6a00] text-black font-bold uppercase tracking-widest transition-colors hover:bg-white text-xs"
              >
                Download PDF to View
              </a>
            </div>
          </object>
        </motion.div>
      </div>
    </div>
  );
};
