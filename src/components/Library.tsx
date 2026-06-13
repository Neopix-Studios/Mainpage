import { SITE_DATA } from '../data';

export function Library() {
  return (
    <section id="library" className="relative z-20 bg-[#050505] py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-700 uppercase tracking-tighter italic pr-2 pb-2">Game Library</h2>
          <p className="text-neutral-500 mt-4 font-bold tracking-widest uppercase text-[10px]">Explore the multiverse</p>
        </div>

        {/* Simplified Filter Mockup */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All Games', 'PC', 'Console', 'Released', 'Upcoming'].map((filter, i) => (
            <button 
              key={filter}
              className={`px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                i === 0 
                  ? 'bg-amber-500 text-black border-amber-500 hover:opacity-80' 
                  : 'bg-transparent text-neutral-500 border-white/20 hover:text-white hover:border-white/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {SITE_DATA.library.map((game) => (
            <div key={game.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-white/5 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                 {/* Mock Cover Art. In a real app, these would be high-res box arts */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                 <span className="relative z-10 text-center font-display font-black text-2xl uppercase tracking-widest opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                   {game.title}
                 </span>
                 <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest">{game.category}</span>
                    <span className="text-xs font-bold text-white uppercase">{game.status}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
