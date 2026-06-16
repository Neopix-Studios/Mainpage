import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, ArrowRight, CheckCircle2, Key, Clock, Users } from 'lucide-react';

const giveawayDraws = [
  {
    id: 1,
    title: "Dignitized - Steam Key",
    description: "Win a legendary copy of Dignitized for Steam. Global region.",
    type: "Game Key",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    status: "Active",
    entries: "12.4k",
    endsIn: "48h"
  },
  {
    id: 2,
    title: "Project One - Beta Access",
    description: "Secure your spot in the next closed beta test phase.",
    type: "Early Access",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
    status: "Active",
    entries: "8.9k",
    endsIn: "5d"
  },
  {
    id: 3,
    title: "Omnidirect - Founder's Pack",
    description: "Exclusive cosmetics and original title for Omnidirect.",
    type: "In-Game Item",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
    status: "Ended",
    entries: "34.2k",
    endsIn: "Ended"
  }
];

export const GiveawayPage = () => {
  const [selectedGiveaway, setSelectedGiveaway] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#030303] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 border border-white/10">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6 drop-shadow-lg">
            Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Giveaways</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Enter now for a chance to win exclusive game keys, early access passes, and limited edition items. We will be adding more soon!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedGiveaway ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {giveawayDraws.map((giveaway, index) => (
                <motion.div
                  key={giveaway.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl flex flex-col ${giveaway.status === 'Ended' ? 'opacity-60 grayscale' : 'hover:border-[#ff6a00]/40'} transition-all`}
                >
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img src={giveaway.image} alt={giveaway.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    
                    <div className="absolute top-4 right-4 flex gap-2">
                       <span className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full backdrop-blur-md border ${giveaway.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/20' : 'bg-red-500/20 text-red-400 border-red-500/20'}`}>
                        {giveaway.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                      <Key className="w-3 h-3 text-[#ff6a00]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{giveaway.type}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight mb-2 group-hover:text-[#ff6a00] transition-colors">
                      {giveaway.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                      {giveaway.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mb-6">
                      <div className="flex items-center gap-2 text-white/60">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold tracking-wider">{giveaway.entries}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold tracking-wider">{giveaway.endsIn}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => giveaway.status === 'Active' && setSelectedGiveaway(giveaway.id)}
                      disabled={giveaway.status === 'Ended'}
                      className={`w-full py-4 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                        ${giveaway.status === 'Active' 
                          ? 'bg-white text-black hover:bg-[#ff6a00] hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]' 
                          : 'bg-white/5 text-white/40 cursor-not-allowed border border-white/5'
                        }
                      `}
                    >
                      {giveaway.status === 'Active' ? 'Enter Draw' : 'Draw Closed'}
                      {giveaway.status === 'Active' && <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : !isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <button 
                onClick={() => setSelectedGiveaway(null)}
                className="mb-8 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              >
                ← Back to Giveaways
              </button>
              <form 
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff6a00]/40 to-transparent opacity-50" />
                
                <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-8">
                  Enter to <span className="text-[#ff6a00]">Win</span>
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-xs font-bold tracking-widest uppercase text-white/70">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6a00]/40 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-xs font-bold tracking-widest uppercase text-white/70">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6a00]/40 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-white/70">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff6a00]/40 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input type="checkbox" required className="peer appearance-none w-5 h-5 rounded border border-white/20 bg-white/5 checked:bg-[#ff6a00] checked:border-[#ff6a00] transition-colors cursor-pointer" />
                        <CheckCircle2 className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                        I agree to the Terms & Conditions and understand that I must be 18 years or older to enter.
                      </span>
                    </label>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="w-full group flex items-center justify-center px-8 py-4 bg-white text-black rounded-full text-sm font-black tracking-widest uppercase hover:bg-[#ff6a00] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,106,0,0.3)]"
                    >
                      Submit Entry
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-12 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6a00]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6 border border-green-500/30">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-white">
                Entry Confirmed
              </h2>
              <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
                Good luck! Keep an eye on your inbox, we will contact the winners shortly.
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedGiveaway(null);
                }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold tracking-widest uppercase transition-colors border border-white/10"
              >
                Back to Giveaways
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
