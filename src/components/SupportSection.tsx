import { DiscordIcon } from './icons';

export const SupportSection = () => {
  return (
    <div className="relative w-full py-32 flex items-center justify-center bg-black overflow-hidden pointer-events-auto">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 bg-black">
        <img 
          src="/img/support.png" 
          alt="Support Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-6 relative">
          <img src="https://cdn.neopix.in/studio.png" alt="Neopix Logo" className="w-10 h-10 object-contain" />
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Support</h2>
        </div>
        
        <p className="text-gray-300 text-lg md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
          Get help with issues, browse common solutions, view service status updates, and connect with our community for more.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
          <a 
            href="mailto:Studios@neopix.in"
            className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wide hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Email Us
          </a>
          <a 
            href="https://discord.gg/GhYdbh7Pe9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5865F2] hover:text-[#4752C4] transition-transform transform hover:scale-110 drop-shadow-[0_0_12px_rgba(88,101,242,0.4)] block leading-none"
            aria-label="Join our Discord"
          >
            <DiscordIcon className="w-14 h-14" />
          </a>
        </div>
      </div>
    </div>
  );
};
