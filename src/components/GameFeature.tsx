import { ReactNode } from 'react';
import { Play } from 'lucide-react';
import { PlaystationIcon, XboxIcon, PCIcon } from './icons';

interface Platform {
  id: string;
  label: string;
  icon: ReactNode;
}

export const defaultPlatforms: Platform[] = [
  { id: 'ps5', label: 'PS5', icon: <div className="flex items-center gap-1"><PlaystationIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base mt-2">PS5</span></div> },
  { id: 'ps4', label: 'PS4', icon: <div className="flex items-center gap-1"><PlaystationIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base mt-2">PS4</span></div> },
  { id: 'xsx', label: 'XBOX SERIES X|S', icon: <div className="flex items-center gap-1"><XboxIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base">XBOX SERIES X|S</span></div> },
  { id: 'xb1', label: 'XBOX ONE', icon: <div className="flex items-center gap-1"><XboxIcon className="w-5 h-5" /><span className="font-bold tracking-tighter text-base">XBOX ONE</span></div> },
  { id: 'pc', label: 'PC', icon: <span className="font-extrabold text-lg tracking-tighter mt-1">PC</span> }
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
  return (
    <div className="relative w-full h-[150vh] bg-[#030303] group/game z-10">
      {/* Sticky Background Media Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {bgVideo ? (
          <video 
            src={bgVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover object-top opacity-60 transition-opacity duration-700 group-hover/game:opacity-80"
          />
        ) : (
          <img 
            src={bgImage} 
            alt="Game Background" 
            className="w-full h-full object-cover object-top opacity-60 transition-transform duration-1000 group-hover/game:scale-105"
          />
        )}
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Deep fade to pure black at the bottom to blend with subsequent sections */}
        <div className="absolute inset-x-0 bottom-[-1px] h-[30%] bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent pointer-events-none" />
      </div>

      {/* Scrolling Content Container overlaying the sticky background */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-end pointer-events-none pb-16 md:pb-24 z-20">
        {/* Inner constrained block */}
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-end gap-12 relative z-30 pointer-events-auto">
          {/* Game Logo */}
          <div className="w-48 md:w-64 flex-shrink-0 mb-4 md:mb-0">
            {typeof gameLogo === 'string' ? (
              <img src={gameLogo} alt="Game Logo" className="w-full h-auto drop-shadow-2xl" />
            ) : (
              <div className="text-white text-5xl font-black drop-shadow-2xl leading-none tracking-tighter">
                {gameLogo}
              </div>
            )}
          </div>

          {/* Details Area */}
          <div className="flex-1 flex flex-col space-y-6">
            <div className="space-y-4">
              {breadcrumb && (
                <p className="text-white/80 font-display font-semibold tracking-wide text-sm md:text-base">
                  {breadcrumb.split('/').map((part, idx, arr) => (
                    <span key={idx}>
                      {part.trim()}
                      {idx < arr.length - 1 && <span className="mx-2 text-white/40">/</span>}
                    </span>
                  ))}
                </p>
              )}
              {description && (
                <p className="text-white text-lg md:text-xl font-display font-medium max-w-3xl leading-relaxed text-shadow-sm">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-12 pb-4">
              {/* Buttons */}
              {buttons && buttons.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {buttons.map((btn, idx) => (
                    <a 
                      key={idx}
                      href={btn.action}
                      className={`flex items-center px-6 py-3 rounded-full text-sm font-display font-bold uppercase transition-transform hover:scale-105 ${
                        btn.primary 
                          ? 'bg-white text-black hover:bg-gray-200' 
                          : 'border z-20 border-white text-white hover:bg-white hover:text-black'
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
                <div className="flex flex-wrap items-center gap-6 text-white mt-4 xl:mt-0">
                  {platforms.map((plat) => (
                    <div key={plat.id} className="flex items-center opacity-80 hover:opacity-100 transition-opacity" title={plat.label}>
                       {plat.icon}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
