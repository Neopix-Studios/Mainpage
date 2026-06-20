import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DiscordIcon, SteamIcon } from './icons';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 20);

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <AnimatePresence>
      {(isVisible || isMobileMenuOpen) && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-50 flex flex-col px-4 md:px-8 py-4 md:py-5 text-white transition-colors duration-500 ${
            isAtTop && !isMobileMenuOpen ? 'bg-transparent' : 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo Container (Left) */}
            <div className="flex-1 flex justify-start items-center">
              <Link to="/" onClick={closeMobileMenu}>
                <img src="https://cdn.neopix.in/studio.png" alt="Neopix Logo" className="h-6 md:h-10 object-contain cursor-pointer" />
              </Link>
            </div>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex items-center justify-center space-x-8 text-sm font-display font-semibold tracking-wide flex-1">
              <Link to="/games" className="flex items-center hover:text-gray-300 transition-colors uppercase">
                GAMES <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
              
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
                        <Link to="/projects" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">PROJECTS</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <Link to="/photos" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">PHOTOS</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <Link to="/videos" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">VIDEOS</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </Link>
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
                        <Link to="/hierarchy" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">HIERARCHY</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <a href="#" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">COLLAB</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </a>
                        <Link to="/careers" className="group/item flex items-center justify-between px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-lg transition-all duration-300">
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">CAREERS</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/giveaway" className="flex items-center hover:text-gray-300 transition-colors uppercase">
                GIVEAWAY <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Socials & Launcher (Right side) */}
            <div className="hidden md:flex items-center justify-end space-x-6 flex-1">
              <span className="text-gray-500 transition-colors cursor-not-allowed opacity-50" title="Coming Soon">
                <SteamIcon className="w-5 h-5" />
              </span>
              <a href="https://discord.gg/gkEYqV6rn5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <DiscordIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: '100vh', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-y-auto w-full pt-8 pb-24"
              >
                <div className="flex flex-col space-y-6 text-xl font-display font-semibold px-4 tracking-wide">
                  <Link to="/games" onClick={closeMobileMenu} className="flex items-center justify-between py-2 border-b border-white/10 uppercase">
                    GAMES <ArrowUpRight className="w-5 h-5 opacity-50" />
                  </Link>
                  
                  {/* Media Mobile Dropdown */}
                  <div className="flex flex-col border-b border-white/10 pb-2">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === 'media' ? null : 'media')}
                      className="flex items-center justify-between py-2 uppercase"
                    >
                      MEDIA <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'media' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'media' && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col pl-4 mt-2 space-y-4 text-base font-bold text-gray-400 overflow-hidden"
                        >
                          <Link to="/projects" onClick={closeMobileMenu} className="hover:text-white uppercase">PROJECTS</Link>
                          <Link to="/photos" onClick={closeMobileMenu} className="hover:text-white uppercase">PHOTOS</Link>
                          <Link to="/videos" onClick={closeMobileMenu} className="hover:text-white uppercase">VIDEOS</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Studio Mobile Dropdown */}
                  <div className="flex flex-col border-b border-white/10 pb-2">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === 'studio' ? null : 'studio')}
                      className="flex items-center justify-between py-2 uppercase"
                    >
                      STUDIO <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === 'studio' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'studio' && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col pl-4 mt-2 space-y-4 text-base font-bold text-gray-400 overflow-hidden"
                        >
                          <Link to="/hierarchy" onClick={closeMobileMenu} className="hover:text-white uppercase">HIERARCHY</Link>
                          <a href="#" className="hover:text-white uppercase text-gray-600">COLLAB (SOON)</a>
                          <Link to="/careers" onClick={closeMobileMenu} className="hover:text-white uppercase">CAREERS</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/giveaway" onClick={closeMobileMenu} className="flex items-center justify-between py-2 border-b border-white/10 uppercase">
                    GIVEAWAY <ArrowUpRight className="w-5 h-5 opacity-50" />
                  </Link>

                  <div className="flex items-center space-x-6 pt-6">
                    <span className="text-gray-500 p-2 opacity-50 cursor-not-allowed bg-white/5 rounded-full" title="Coming Soon">
                      <SteamIcon className="w-6 h-6" />
                    </span>
                    <a href="https://discord.gg/gkEYqV6rn5" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <DiscordIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
