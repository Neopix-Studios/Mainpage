import { useState, useEffect } from 'react';
import { SITE_DATA } from '../data';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Games", "News", "Community", "Careers", "Store", "About"];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex-shrink-0 relative group flex gap-4 items-center hover:scale-105 transition-transform duration-300">
          <img 
            src={SITE_DATA.brand.logo} 
            alt={SITE_DATA.brand.name} 
            className="h-12 md:h-16 w-auto opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]" 
          />
          <span className="text-sm md:text-base font-black tracking-[0.4em] uppercase opacity-90 mt-1 hidden sm:block drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{SITE_DATA.brand.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-bold tracking-widest uppercase hover:text-amber-500 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-6 ml-4">
            <div className="flex items-center gap-3 opacity-60">
              <div className="w-1 h-3 bg-white/40"></div>
              <div className="w-1 h-5 bg-amber-500"></div>
              <div className="w-1 h-4 bg-white/40"></div>
              <span className="text-[10px] tracking-tighter uppercase hidden xl:block">Audio: On</span>
            </div>
            <button className="px-5 py-2 border border-white/20 hover:bg-white hover:text-black transition-all text-[10px] tracking-widest uppercase">
              Get Launcher
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#050505] z-50 flex flex-col pt-24 px-6"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white uppercase tracking-widest hover:text-amber-500 transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="mt-4 flex gap-6 px-2 justify-center">
                <a href={SITE_DATA.socials.x} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href={SITE_DATA.socials.instagram} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44z"/></svg>
                </a>
              </div>
              <div className="mt-8 border-t border-white/10 pt-8 mt-auto mb-12">
                <button className="w-full border border-white/20 bg-transparent hover:bg-white hover:text-black transition-all text-white py-4 text-center font-bold uppercase tracking-widest text-xs">
                  Get Launcher
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
