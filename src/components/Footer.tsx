import { YouTubeIcon, InstagramIcon, XIcon, DiscordIcon } from './icons';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030303] text-white pt-16 pb-8 px-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient blur in background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff6a00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 relative z-10">
        {/* Brand Area */}
        <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-12">
          <div className="flex items-center space-x-4 mb-6">
            <img src="https://cdn.neopix.in/studio.png" alt="Neopix Logo" className="h-10 object-contain drop-shadow-[0_0_8px_rgba(255,106,0,0.5)]" />
            <span className="text-xl font-display font-medium tracking-[0.25em] text-white">NEOPIX STUDIO™</span>
          </div>
          <p className="text-[#a1a1aa] text-base max-w-lg leading-relaxed font-light mt-2 mb-6">
            Pushing the boundaries of interactive entertainment. We build worlds that live forever, driven by community and driven by passion.
          </p>
          <img src="/unreal.png" alt="Unreal Engine" className="h-20 object-contain opacity-60 hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="md:col-span-1 hidden md:block" />
        
        {/* Navigation Area */}
        <div className="md:col-span-2 flex flex-col space-y-5">
          <h4 className="text-[#ff6a00] font-display font-bold tracking-[0.2em] text-xs uppercase mb-2">Company</h4>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">About Us</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Careers</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Press Kit</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Contact</a>
        </div>

        {/* Social Area */}
        <div className="md:col-span-2 flex flex-col space-y-5">
          <h4 className="text-[#ff6a00] font-display font-bold tracking-[0.2em] text-xs uppercase mb-2">Connect</h4>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">X (Twitter)</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Instagram</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Discord</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Support</a>
        </div>

        {/* Credits Area */}
        <div className="md:col-span-2 flex flex-col space-y-5">
          <h4 className="text-[#ff6a00] font-display font-bold tracking-[0.2em] text-xs uppercase mb-2">Credits</h4>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Developers</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Designers</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Music</a>
          <a href="#" className="text-[#a1a1aa] hover:text-[#ff6a00] text-[11px] font-bold tracking-[0.15em] uppercase transition-colors">Assets</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center border-t border-white/10 pt-8 pb-2 gap-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a href="#" className="text-[#71717a] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Terms &amp; Conditions</a>
          <a href="#" className="text-[#71717a] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Privacy Policy</a>
          <a href="#" className="text-[#71717a] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Cookie Policy</a>
          <a href="#" className="text-[#71717a] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Copyright Notice</a>
          <a href="#" className="text-[#71717a] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">Legal Disclaimer</a>
        </div>
        
        <p className="text-[#52525b] text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
          &copy; {new Date().getFullYear()} Neopix Studio™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
