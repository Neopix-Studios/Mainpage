import { SITE_DATA } from '../data';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative z-20 bg-[#050505] pt-32 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-8">
               <img src={SITE_DATA.brand.logo} alt="Neopix Studio" className="h-10 opacity-70" />
               <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-40 mt-1">{SITE_DATA.brand.name}</span>
             </div>
             <p className="text-white/40 max-w-sm font-light leading-relaxed">
               Pushing the boundaries of interactive entertainment. We build worlds that live forever.
             </p>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-6 text-xs">Company</h4>
            <ul className="space-y-4 font-bold text-[10px] uppercase tracking-widest text-neutral-500">
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-6 text-xs">Connect</h4>
            <ul className="space-y-4 font-bold text-[10px] uppercase tracking-widest text-neutral-500">
              <li><a href={SITE_DATA.socials.x} target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">X (Twitter)</a></li>
              <li><a href={SITE_DATA.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Support</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center">
           <div className="flex flex-wrap justify-center gap-6 mb-8 text-[9px] font-bold uppercase tracking-widest text-neutral-500">
             <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
             <a href="#" className="hover:text-white transition-colors">Copyright Notice</a>
             <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
           </div>
           <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">
             &copy; {new Date().getFullYear()} {SITE_DATA.brand.name}. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
}
