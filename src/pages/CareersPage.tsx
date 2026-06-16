import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const openRoles = [
  {
    id: "REQ_PG_01",
    title: "Senior Gameplay Engineer",
    department: "Programmers",
    seats: 2,
    location: "Global Remote",
  },
  {
    id: "REQ_AN_01",
    title: "Lead 3D Animator",
    department: "Animators",
    seats: 1,
    location: "Global Remote",
  },
  {
    id: "REQ_AU_01",
    title: "Audio Director",
    department: "Audio",
    seats: 1,
    location: "Global Remote",
  },
  {
    id: "REQ_WR_01",
    title: "Narrative Designer",
    department: "Creative Writer",
    seats: 1,
    location: "Global Remote",
  },
  {
    id: "REQ_MK_01",
    title: "Community Manager",
    department: "Marketing Team",
    seats: 1,
    location: "Global Remote",
  }
];

export const CareersPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1100px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-display font-bold uppercase tracking-widest text-[#ff6a00] border border-white/10 mb-6">
            Join The Studio
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-6 uppercase">
            Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Seats</span>
          </h1>
          <p className="text-white/60 font-display text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are always looking for ambitious, talented individuals to join our ranks. Explore our open roles and help us push the boundaries of gaming.
          </p>
        </motion.div>

        <div 
          className="flex flex-col border border-white/10 bg-[#0a0a0a] shadow-2xl relative z-20" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)' }}
        >
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 border-b border-white/10 bg-white/[0.02] text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">
            <div className="col-span-2">Req ID</div>
            <div className="col-span-4">Role Title</div>
            <div className="col-span-3">Department</div>
            <div className="col-span-1 text-center">Seats</div>
            <div className="col-span-2 text-right">Action</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {openRoles.map((role, index) => (
              <motion.div 
                key={role.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group flex flex-col md:grid md:grid-cols-12 gap-4 px-8 py-6 items-start md:items-center hover:bg-white/[0.03] transition-colors relative"
              >
                <div className="absolute left-0 top-0 w-[2px] h-full bg-[#ff6a00] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              
                <div className="col-span-2 font-mono text-xs text-white/40 group-hover:text-[#ff6a00] transition-colors">
                  {role.id}
                </div>
                <div className="col-span-4">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-white transition-colors block">{role.title}</h3>
                  <div className="md:hidden flex items-center gap-3 mt-2">
                    <p className="text-xs text-white/50 uppercase tracking-widest">{role.department}</p>
                    <span className="text-[#ff6a00] text-[10px] font-bold uppercase tracking-wider">{role.seats} {role.seats === 1 ? 'Seat' : 'Seats'}</span>
                  </div>
                </div>
                <div className="col-span-3 hidden md:block text-sm text-white/60 font-medium">
                  {role.department}
                </div>
                <div className="col-span-1 hidden md:flex justify-center flex-col items-center">
                  <span className="text-sm font-mono font-bold text-white/80">{role.seats}</span>
                  <span className="text-[9px] uppercase tracking-widest text-white/30 hidden font-bold">Avail</span>
                </div>
                <div className="col-span-2 flex justify-start md:justify-end w-full md:w-auto mt-4 md:mt-0">
                  <Link to="/contact" className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#ff6a00] transition-colors">
                    Apply Now <ArrowUpRight className="ml-1.5 w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-12 bg-transparent border border-[#ff6a00]/20 max-w-3xl mx-auto"
          style={{ clipPath: 'polygon(2rem 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%, 0 2rem)' }}
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">Don't see your role?</h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            We are always open to connecting with exceptional talent. Send your portfolio and resume to our general application inbox.
          </p>
          <Link to="/contact" className="inline-flex items-center text-[#ff6a00] font-bold uppercase tracking-widest hover:text-white transition-colors">
            Contact Us <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
