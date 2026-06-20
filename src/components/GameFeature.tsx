import { ReactNode, useRef, useState } from 'react';
import { Play, Square, Pause } from 'lucide-react';
import { PlaystationIcon, XboxIcon, PCIcon } from './icons';

interface Platform {
  id: string;
  label: string;
  icon: ReactNode;
}

export const defaultPlatforms: Platform[] = [
  { id: 'ps5', label: 'PS5', icon: <div className="flex items-center gap-2"><PlaystationIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base">PS5</span></div> },
  { id: 'ps4', label: 'PS4', icon: <div className="flex items-center gap-2"><PlaystationIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base">PS4</span></div> },
  { id: 'xsx', label: 'XBOX SERIES X|S', icon: <div className="flex items-center gap-2"><XboxIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base">XBOX SERIES X|S</span></div> },
  { id: 'xb1', label: 'XBOX ONE', icon: <div className="flex items-center gap-2"><XboxIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base">XBOX ONE</span></div> },
  { id: 'pc', label: 'PC', icon: <span className="font-extrabold text-base tracking-tighter">PC</span> }
];

export interface GameFeatureProps {
  bgImage: string;
  bgVideo?: string;
  gameLogo?: string | ReactNode;
  breadcrumb?: string;
  description?: string;
  platforms?: Platform[];
  buttons?: { label: string; action: string; primary?: boolean; icon?: ReactNode }[];
}

export const GameFeature = ({
  bgImage,
  bgVideo,
  gameLogo,
  breadcrumb,
  description,
  platforms = defaultPlatforms,
  buttons
}: GameFeatureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full bg-[#030303] group/game z-10">
      {/* Sticky Background Media Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-auto">
        {bgVideo ? (
          <>
            <div className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover/game:scale-[1.02]">
              <video 
                ref={videoRef}
                src={bgVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover object-top"
              />
              {!isPlaying && (
                <img 
                  src={bgImage} 
                  alt="Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              )}
            </div>
            {/* Play/Pause Button */}
            <button 
              onClick={togglePlay}
              className="absolute top-8 right-8 md:top-12 md:right-12 z-50 w-7 h-7 md:w-9 md:h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg cursor-pointer hover:bg-white"
            >
              {isPlaying ? <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black" /> : <Play className="w-2.5 h-2.5 md:w-3 md:h-3 ml-0.5" fill="currentColor" />}
            </button>
          </>
        ) : (
          <img 
            src={bgImage} 
            alt="Game background" 
            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover/game:scale-[1.02]"
          />
        )}
        
        {/* Dark overlay gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent pointer-events-none" />
        
        {/* Blurry mask effect at the bottom half to make the scroll text pop out */}
        <div 
          className="absolute inset-x-0 bottom-[-1px] h-[50%] pointer-events-none" 
          style={{ 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)'
          }} 
        />
      </div>

      {/* 
        ========================================================================
        UPPER LIMIT CONTROL
        Change the 'h-[25vh]' value below to adjust how far up or down the text 
        container starts scrolling in. For example: 'h-[10vh]' moves it higher, 
        'h-[50vh]' moves it lower.
        ======================================================================== 
      */}
      <div className="h-[2vh] w-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end gap-10 md:gap-16 pointer-events-none">
        {/* Game Logo */}
        <div className="w-48 md:w-72 flex-shrink-0 mb-4 md:mb-0 pointer-events-auto">
          {typeof gameLogo === 'string' ? (
            <img src={gameLogo} alt="Game Logo" className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="text-white text-5xl font-black drop-shadow-2xl leading-none tracking-tighter">
              {gameLogo}
            </div>
          )}
        </div>

        {/* Details Area */}
        <div className="flex-1 flex flex-col space-y-6 md:space-y-8 max-w-3xl pointer-events-auto">
          <div className="space-y-4">
            {breadcrumb && (
              <p className="text-white font-display font-bold tracking-wide text-sm md:text-base drop-shadow-md">
                {breadcrumb.split('/').map((part, idx, arr) => (
                  <span key={idx}>
                    {part.trim()}
                    {idx < arr.length - 1 && <span className="mx-3 text-white/40">/</span>}
                  </span>
                ))}
              </p>
            )}
            {description && (
              <p className="text-white text-lg md:text-xl font-display font-medium leading-relaxed drop-shadow-lg text-shadow-sm">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-6 pb-4">
            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                {buttons.map((btn, idx) => (
                  <a 
                    key={idx}
                    href={btn.action}
                    className={`flex items-center px-8 py-3.5 rounded-full text-[13px] tracking-widest font-display font-bold uppercase transition-all duration-300 hover:scale-105 ${
                      btn.primary 
                        ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]' 
                        : 'border border-white/40 text-white hover:bg-white hover:text-black backdrop-blur-sm shadow-lg'
                    }`}
                  >
                    {btn.icon && <span className="mr-2">{btn.icon}</span>}
                    {btn.label}
                  </a>
                ))}
              </div>
            )}

            {/* Platforms */}
            {platforms && platforms.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 text-white opacity-80">
                {platforms.map((plat) => (
                  <div key={plat.id} className="flex items-center hover:text-white transition-colors duration-300" title={plat.label}>
                     {plat.icon}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* 
        ========================================================================
        BLACK BLEND START POINT & TEXT UPPER LIMIT
        The total height of this block dictates how high the text reaches
        on the screen before the background video un-sticks and scrolls away.
        - To make the text go HIGHER on the screen: Increase the 'h-[...]' value below (e.g., h-[30vh] or h-[40vh]).
        - To make the text stay LOWER (reduce the upper limit): Decrease the 'h-[...]' value below (e.g., h-[10vh] or h-0).
        ======================================================================== 
      */}
      <div className="relative z-10 w-full pointer-events-none mt-[20px] flex flex-col">
        <div className="h-32 md:h-48 w-full bg-gradient-to-b from-transparent to-[#030303]" />
        <div className="h-[15vh] md:h-[25vh] w-full bg-[#030303]" />
      </div>
    </div>
  );
};
