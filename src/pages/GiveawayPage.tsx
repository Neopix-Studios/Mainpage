import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, ArrowRight, CheckCircle2, ChevronRight, Lock, Unlock } from 'lucide-react';

const giveawayDraws = [
  {
    id: 1,
    title: "Project Dignitized",
    subtitle: "Ultimate Edition Drop",
    description: "Exclusive access to the season pass, unique cosmetics, and early build profiles.",
    type: "Game Key",
    image: "/2.png",
    fallbackImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    status: "Active",
    endsIn: 172800,
    featured: true,
  },
  {
    id: 2,
    title: "Project One",
    subtitle: "Closed Beta Access",
    description: "Secure your spot in the next test phase. Explore the forbidden zones before public release.",
    type: "Early Access",
    image: "/1.png",
    fallbackImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    status: "Active",
    endsIn: 432000,
    featured: false,
  },
  {
    id: 3,
    title: "Cryora Records",
    subtitle: "Vault Archives",
    description: "Exclusive limited tracks and early concept demos for the inner circle.",
    type: "Digital Item",
    image: "/cryora.png",
    fallbackImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    status: "Ended",
    endsIn: 0,
    featured: false,
  }
];

const formatTime = (totalSeconds: number) => {
  if (totalSeconds <= 0) return { h: '00', m: '00', s: '00' };
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    h: h.toString().padStart(2, '0'),
    m: m.toString().padStart(2, '0'),
    s: s.toString().padStart(2, '0')
  };
};

export const GiveawayPage = () => {
  const [selectedGiveaway, setSelectedGiveaway] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [time, setTime] = useState(172800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const featured = giveawayDraws.find(g => g.featured)!;
  const standardGiveaways = giveawayDraws.filter(g => !g.featured);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020202] text-white font-sans pt-32 pb-32 relative z-10 w-full overflow-hidden">
      {/* Absolute Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#ff6a00]/[0.015] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#ffffff]/[0.01] blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative px-6 md:px-12">
        <AnimatePresence mode="wait">
          {!selectedGiveaway ? (
            <motion.div 
              key="main-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-24">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 border border-white/10 bg-white/5 flex items-center justify-center mb-8 rotate-45"
                >
                  <Gift className="w-6 h-6 text-[#ff6a00] -rotate-45" />
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 uppercase">
                  Studio <span className="text-[#888]">Drops</span>
                </h1>
                <p className="text-[#888] text-lg max-w-2xl font-light">
                  Exclusive allocations, early profiles, and physical goods. Authenticate to participate in active drops.
                </p>
              </div>

              {/* Featured Drop */}
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] bg-white/20 flex-1" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 px-4">Priority Access</span>
                  <div className="h-[1px] bg-white/20 flex-1" />
                </div>

                <motion.div 
                  className="w-full relative bg-[#050505] border border-white/10 group overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]/90 z-10 hidden lg:block" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 block lg:hidden" />
                       <img 
                          src={featured.image}
                          onError={(e) => { e.currentTarget.src = featured.fallbackImage }}
                          alt={featured.title} 
                          className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                        />
                    </div>
                    
                    <div className="p-8 md:p-16 flex flex-col justify-center relative z-20 h-full">
                      <div className="flex flex-wrap items-center gap-3 mb-8">
                        <span className="px-3 py-1 bg-[#ff6a00] text-black text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                          <Unlock className="w-3 h-3" /> {featured.status}
                        </span>
                        <span className="px-3 py-1 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                          {featured.type}
                        </span>
                      </div>
                      
                      <h4 className="text-[#ff6a00] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                        {featured.subtitle}
                      </h4>
                      <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">{featured.title}</h3>
                      <p className="text-[#888] text-base leading-relaxed mb-12 max-w-xl">
                        {featured.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-center mt-auto p-6 bg-white/[0.02] border border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#888] mb-2 font-medium">Closes In</span>
                          <div className="flex items-center gap-2 font-mono text-xl tracking-tight text-white">
                            <span>{formatTime(time).h}</span>
                            <span className="text-[#555]">:</span>
                            <span>{formatTime(time).m}</span>
                            <span className="text-[#555]">:</span>
                            <span>{formatTime(time).s}</span>
                          </div>
                        </div>

                        <button 
                          onClick={() => setSelectedGiveaway(featured.id)}
                          className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#e0e0e0] transition-colors w-full sm:w-auto"
                        >
                          Request Access
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Standard Vault */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] bg-white/10 flex-1" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 px-4">Standard Archives</span>
                  <div className="h-[1px] bg-white/10 flex-1" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {standardGiveaways.map((giveaway, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      key={giveaway.id}
                      className={`group flex flex-col bg-[#050505] border border-white/10 transition-all duration-500 overflow-hidden ${giveaway.status === 'Ended' ? 'opacity-40 grayscale' : 'hover:border-white/30'}`}
                    >
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="w-full sm:w-2/5 relative h-48 sm:h-auto overflow-hidden shrink-0">
                          <div className="absolute inset-0 bg-black/40 z-10" />
                          <img 
                            src={giveaway.image} 
                            onError={(e) => { e.currentTarget.src = giveaway.fallbackImage }}
                            alt={giveaway.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                          />
                        </div>

                        <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-white/50 text-[9px] font-bold uppercase tracking-widest border border-white/10 px-2 py-1">
                              {giveaway.type}
                            </span>
                            <span className={`text-[9px] flex items-center gap-1 font-bold uppercase tracking-widest ${giveaway.status === 'Active' ? 'text-green-500' : 'text-[#888]'}`}>
                              {giveaway.status === 'Active' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                              {giveaway.status}
                            </span>
                          </div>

                          <h4 className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
                            {giveaway.subtitle}
                          </h4>
                          <h3 className="text-xl font-medium tracking-tight mb-3 text-white">
                            {giveaway.title}
                          </h3>
                          <p className="text-[#888] text-xs leading-relaxed mb-6 flex-1 line-clamp-3">
                            {giveaway.description}
                          </p>

                          <div className="mt-auto">
                            <button
                              onClick={() => giveaway.status === 'Active' && setSelectedGiveaway(giveaway.id)}
                              disabled={giveaway.status === 'Ended'}
                              className={`w-full py-3 border text-xs font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 ${giveaway.status === 'Ended' ? 'border-white/10 text-white/20 cursor-not-allowed' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}
                            >
                              {giveaway.status === 'Active' ? 'Request Access' : 'Closed'}
                              {giveaway.status === 'Active' && <ArrowRight className="w-3 h-3" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : !isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-3xl mx-auto pt-12"
            >
              <button 
                onClick={() => setSelectedGiveaway(null)}
                className="mb-12 text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Return to Directory
              </button>
              
              <div className="border border-white/10 bg-[#050505] relative p-8 md:p-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6a00]/10 blur-[50px] pointer-events-none" />
                <div className="border-b border-white/10 pb-8 mb-8">
                  <h2 className="text-3xl font-medium tracking-tight mb-2 text-white">
                    Authentication Required
                  </h2>
                  <p className="text-[#888] text-sm">
                    Provide credentials to secure a profile link for <span className="text-white font-medium">{(giveawayDraws.find(g => g.id === selectedGiveaway)?.title)}</span>.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="block text-[10px] font-bold tracking-widest uppercase text-[#888]">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required 
                        className="w-full bg-black border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="block text-[10px] font-bold tracking-widest uppercase text-[#888]">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required 
                        className="w-full bg-black border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-[10px] font-bold tracking-widest uppercase text-[#888]">Secure Email Identity</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full bg-black border border-white/10 px-5 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="pt-4">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1 shrink-0">
                        <input type="checkbox" required className="peer appearance-none w-4 h-4 border border-white/20 bg-black checked:bg-white checked:border-white transition-colors cursor-pointer" />
                        <CheckCircle2 className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="text-xs text-[#888] leading-relaxed group-hover:text-[#aaa] transition-colors">
                        I confirm that I am authorized to enter this draw, am over 18 years of age, and agree to the Terms of Service. Duplicate profiles will be expunged.
                      </span>
                    </label>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <button 
                      type="submit"
                      className="w-full px-8 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#ff6a00] hover:text-white transition-colors"
                    >
                      Authenticate & Confirm
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mt-24 border border-white/10 bg-[#050505] p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#ff6a00]/5 pointer-events-none" />
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 mb-8 border border-green-500/20 relative z-10 rotate-45">
                <CheckCircle2 className="w-8 h-8 text-green-500 -rotate-45" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white relative z-10">
                Credentials Validated
              </h2>
              <p className="text-[#888] text-base mx-auto mb-10 leading-relaxed max-w-sm relative z-10">
                Your profile has been secured. Successful drops will be communicated via encrypted transmission exactly at close.
              </p>
              
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedGiveaway(null);
                }}
                className="px-10 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase transition-colors hover:bg-[#e0e0e0] relative z-10"
              >
                Return Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


