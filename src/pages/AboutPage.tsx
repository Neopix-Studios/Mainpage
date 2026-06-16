import { motion } from 'motion/react';

const teamMembers = [
  {
    name: "Avrodip",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80",
    description: "Visionary behind Neopix Studio, driving the creative direction and core philosophy of our worlds."
  },
  {
    name: "Alex Vance",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    description: "Architect of the proprietary backend systems powering Project One Online's massive scale."
  },
  {
    name: "Sarah Jenkins",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    description: "Shaping the visual identity and striking aesthetics of the Neopix universe."
  }
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[#ff6a00]/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] bg-white/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter text-white mb-6 uppercase drop-shadow-xl">
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Neopix</span>
          </h1>
          <p className="text-white/70 font-display text-xl md:text-2xl leading-relaxed font-light">
            An independent game studio dedicated to crafting massive, interconnected worlds and unforgettable experiences. We don't just build games; we build ecosystems.
          </p>
        </motion.div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10"
          >
            <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-[#ff6a00] mb-6">Our Vision</h3>
            <p className="text-white/60 leading-relaxed text-lg">
              We believe in the power of community-driven design and uncompromising quality. From the neon-lit streets of our latest projects to the robust backend infrastructure that supports them, every detail is engineered for immersion.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10"
          >
            <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-[#ff6a00] mb-6">The Hierarchy</h3>
            <p className="text-white/60 leading-relaxed text-lg">
              Operating as a flat, dynamic studio hierarchy, we empower our developers and designers to take ownership of their craft. Ideas win over titles, allowing the best concepts to make it to the final game.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase text-white mb-4">
              Core Leadership
            </h2>
            <div className="w-24 h-1 bg-[#ff6a00] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="aspect-[4/5] w-full relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-1 uppercase tracking-wider">{member.name}</h3>
                  <p className="text-[#ff6a00] font-bold text-xs uppercase tracking-[0.2em] mb-4">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
