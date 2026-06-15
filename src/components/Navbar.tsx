import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { DiscordIcon, SteamIcon } from './icons';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/50 backdrop-blur-md text-white"
        >
          {/* Logo Container (Left) */}
          <div className="flex-1 flex justify-start items-center">
            <img src="https://cdn.neopix.in/studio.png" alt="Neopix Logo" className="h-8 md:h-10 object-contain cursor-pointer" />
          </div>

          {/* Nav Links (Center) */}
          <div className="hidden md:flex items-center justify-center space-x-8 text-sm font-display font-semibold tracking-wide flex-1">
            <a href="#" className="flex items-center hover:text-gray-300 transition-colors">
              GAMES <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
            
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('media')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center hover:text-gray-300 transition-colors">
                MEDIA <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'media' ? 'rotate-180' : ''}`} />
              </span>
              <AnimatePresence>
                {activeDropdown === 'media' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 pb-2"
                  >
                    <div className="w-48 bg-[#0a0a0a]/90 backdrop-blur-2xl p-1.5 rounded-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] flex flex-col gap-1">
                      <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                        <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">PHOTOS</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </a>
                      <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                        <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">VIDEOS</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveDropdown('studio')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="flex items-center hover:text-gray-300 transition-colors uppercase">
                STUDIO <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === 'studio' ? 'rotate-180' : ''}`} />
              </span>
              <AnimatePresence>
                {activeDropdown === 'studio' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 pb-2"
                  >
                    <div className="w-48 bg-[#0a0a0a]/90 backdrop-blur-2xl p-1.5 rounded-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] flex flex-col gap-1">
                      <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                        <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">CONTACT US</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </a>
                      <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                        <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">FEEDBACK</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </a>
                      <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                        <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">COLLAB</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </a>
                      <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                        <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">CAREERS</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="mailto:Studios@neopix.in" className="flex items-center hover:text-gray-300 transition-colors">
              GIVEAWAY <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          {/* Socials & Launcher (Right side) */}
          <div className="flex items-center justify-end space-x-6 flex-1">
            <span className="text-gray-500 transition-colors cursor-not-allowed opacity-50" title="Coming Soon">
              <SteamIcon className="w-5 h-5" />
            </span>
            <a href="https://discord.gg/gkEYqV6rn5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <DiscordIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
