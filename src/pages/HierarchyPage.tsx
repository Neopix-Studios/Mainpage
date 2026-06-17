import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Users, Crown, Target, Briefcase, Palette, Code2, Brush, 
  Headphones, Megaphone, PenTool, Box, Clapperboard, Terminal, 
  Layout, Music, BookOpen, TrendingUp, Bug, Lightbulb, Handshake, Heart
} from 'lucide-react';
import { Footer } from '../components/Footer';

const tiers = [
  {
    id: "tier-1",
    name: "TIER 1 — EXECUTIVE LEADERSHIP",
    description: "The vision-bearers. Final accountability for the studio's direction, culture, and success.",
    color: "from-amber-400 to-orange-600",
    tierIcon: Crown,
    roles: [
      {
        title: "Studio Head",
        count: 2,
        desc: "The founding authority of the studio. Sets the long-term vision, owns final say on major creative, business, and operational decisions, and represents the studio to the world. Every department ultimately reports up through this seat.",
        icon: Crown
      },
      {
        title: "Lead Director",
        count: 1,
        desc: "Right hand to the Studio Head. Translates the studio's vision into actionable plans, coordinates across all directors, and ensures every department is aligned, on schedule, and working toward the same goal.",
        icon: Target
      },
      {
        title: "The Stakeholders",
        count: 0,
        desc: "Trusted partners and advisors invested in the studio's long-term success. Provide strategic guidance, resources, and oversight at the highest level — a seat reserved for those with deep commitment to where this studio is going.",
        icon: Briefcase
      }
    ]
  },
  {
    id: "tier-2",
    name: "TIER 2 — DIRECTORATE: DEPARTMENT LEADERSHIP",
    description: "Each Director owns a full discipline end-to-end — the backbone of how the studio's vision becomes reality.",
    color: "from-blue-400 to-cyan-600",
    tierIcon: Briefcase,
    roles: [
      {
        title: "Creative Director",
        count: 0,
        desc: "Owns the creative identity of every project: art direction, narrative tone, world-building, and overall look-and-feel. Final creative sign-off rests here, working hand-in-hand with the Lead Director.",
        icon: Palette
      },
      {
        title: "Technical Director",
        count: 0,
        desc: "Owns the technical architecture of the studio's projects. Leads the Programmers team and ensures the build stays stable, scalable, and future-proof.",
        icon: Code2
      },
      {
        title: "Art Director",
        count: 0,
        desc: "Sets the visual bar for the studio. Leads and mentors all visual departments, ensuring every asset matches the creative vision in style, quality, and consistency.",
        icon: Brush
      },
      {
        title: "Audio Director",
        count: 0,
        desc: "Owns the studio's entire sound identity. Leads the Composers team and ensures audio elevates every moment of the experience.",
        icon: Headphones
      },
      {
        title: "Community & Marketing Director",
        count: 0,
        desc: "Owns the studio's public voice and growth strategy. Leads the Marketing Team, manages outreach campaigns, and builds the bridge between the studio and The Community.",
        icon: Megaphone
      }
    ]
  },
  {
    id: "tier-3",
    name: "TIER 3 — CRAFT TEAMS: THE BUILDERS",
    description: "The hands-on talent that turns direction into finished work. Every asset, line of code, and frame of animation starts here.",
    color: "from-emerald-400 to-green-600",
    tierIcon: Terminal,
    roles: [
      {
        title: "2D Artists",
        count: 2,
        desc: "Bring concept art, UI assets, illustrations, and 2D visual elements to life to maintain a unified visual language.",
        icon: PenTool
      },
      {
        title: "3D Artist",
        count: 2,
        desc: "Models, textures, and builds the 3D environments, characters, and props that form the world players will explore.",
        icon: Box
      },
      {
        title: "Animators",
        count: 0,
        desc: "Bring movement and life to characters, environments, and UI. Animation is what makes a static world feel real.",
        icon: Clapperboard
      },
      {
        title: "Programmers",
        count: 0,
        desc: "Build and maintain the systems, mechanics, and tools that make the project run closely with the Technical Director.",
        icon: Terminal
      },
      {
        title: "UI/UX Designer",
        count: 1,
        desc: "Designs how players see, navigate, and feel the product. Owns interface layouts, menus, and usability flows.",
        icon: Layout
      },
      {
        title: "Composers",
        count: 0,
        desc: "Compose original music and soundscapes that define the emotional heartbeat of the project under the Audio Director.",
        icon: Music
      },
      {
        title: "Creative Writer",
        count: 0,
        desc: "Crafts the story, dialogue, lore, and narrative voice of the project. Shapes how players connect emotionally.",
        icon: BookOpen
      }
    ]
  },
  {
    id: "tier-4",
    name: "TIER 4 — GROWTH, SUPPORT & OUTREACH",
    description: "The teams that connect the studio to its players, partners, and future talent.",
    color: "from-purple-400 to-pink-600",
    tierIcon: Megaphone,
    roles: [
      {
        title: "Marketing Team",
        count: 0,
        desc: "Executes campaigns, content calendars, and promotional strategy under the Community & Marketing Director.",
        icon: TrendingUp
      },
      {
        title: "Game Tester",
        count: 0,
        desc: "Plays every build before the world does. Hunts bugs, reports issues, and gives direct feedback.",
        icon: Bug
      },
      {
        title: "Volunteers / Interns",
        count: 0,
        desc: "Early-career contributors gaining real experience across departments. A proving ground and a pipeline.",
        icon: Lightbulb
      },
      {
        title: "Collaborators",
        count: 1,
        desc: "External partners and guest contributors brought in for specific projects, crossovers, or specialized work.",
        icon: Handshake
      }
    ]
  },
  {
    id: "tier-5",
    name: "TIER 5 — THE HEART",
    description: "The people and tools that make this server feel like home.",
    color: "from-red-400 to-rose-600",
    tierIcon: Heart,
    roles: [
      {
        title: "The Community",
        count: 7,
        desc: "Our players, fans, and supporters. The studio exists for this group — their feedback, energy, and loyalty are what fuel every milestone.",
        icon: Heart
      },
    ]
  }
];

export const HierarchyPage = () => {
  useEffect(() => {
    // Disable body scroll when opening this dedicated snap page
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-40 bg-[#020202] text-white overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth font-sans">
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#0a0f16] to-transparent opacity-80 pointer-events-none" />
      <div className="fixed top-1/4 right-0 w-[800px] h-[800px] bg-[#ff6a00]/5 blur-[250px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#00d2ff]/5 blur-[200px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col px-4 md:px-8 xl:px-12">
        
        {/* Header Section */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center pt-24"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50 border border-white/10 mb-6 backdrop-blur-md">
              Studio Structure
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none mb-8">
              Organizational <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-[#ff6a00]">Hierarchy</span>
            </h1>
            <p className="text-white/40 text-base md:text-xl max-w-3xl leading-relaxed italic font-medium">
              "Every title on this list is a promise — a promise of trust from the studio, and a promise of dedication in return. We rise together, ship together, and grow together."
            </p>
          </motion.div>
          {/* Scroll prompt indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50"
          >
            <span className="text-[10px] uppercase tracking-widest text-[#ff6a00] mb-2 font-bold">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#ff6a00] to-transparent"></div>
          </motion.div>
        </section>

        {/* Hierarchy Tiers */}
        <div className="flex flex-col relative w-full pt-12 md:pt-0">
          {/* Main Connector Background Line */}
          <div className="absolute left-10 md:left-24 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          {tiers.map((tier, index) => {
            const TierIcon = tier.tierIcon;
            return (
            <div key={tier.id} className="relative min-h-screen snap-start flex items-center py-16 md:py-24">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-200px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 w-full"
              >
                {/* Tier Title Banner */}
                <div className="w-full md:w-[350px] flex-shrink-0 self-center md:self-start relative z-10 pl-4 md:pl-16">
                  <div className="flex items-center gap-4 md:gap-6 mb-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex-shrink-0 relative overflow-hidden group border-b-2`} style={{ borderBottomColor: tier.color.split(' ')[0].replace('from-', '') }}>
                       <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-20`} />
                       <TierIcon className="w-5 h-5 md:w-7 md:h-7 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
                      {tier.name.split('—')[0]} <br />
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.color} drop-shadow-sm`}>{tier.name.split('—')[1]}</span>
                    </h2>
                  </div>
                  <p className="text-white/50 text-xs md:text-sm font-medium leading-relaxed md:ml-[4.5rem] pl-2 md:pl-0 border-l-2 border-white/10 md:border-l-0">
                    {tier.description}
                  </p>
                </div>

                {/* Roles Bento/Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 lg:gap-5 w-full">
                  {tier.roles.map((role, rIndex) => {
                    const RoleIcon = role.icon;
                    return (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 * rIndex }}
                        key={rIndex} 
                        className={`group p-4 md:p-5 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.04] hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}
                      >
                         <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${tier.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                         
                         <div className="flex justify-between items-start mb-4">
                           <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                             <RoleIcon className={`w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:text-white transition-colors`} />
                           </div>
                           <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] shadow-sm">
                             <Users className="w-3 h-3 text-white/50" />
                             <span className="text-white font-mono font-bold tracking-wider">{role.count}</span>
                             <span className="text-white/40 uppercase tracking-widest leading-none">Seat{role.count !== 1 ? 's' : ''}</span>
                           </div>
                         </div>
                         
                         <div className="mt-auto">
                            <h3 className="text-base md:text-lg font-bold text-white/90 mb-1.5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                              {role.title}
                            </h3>
                            <p className="text-white/40 group-hover:text-white/60 text-[11px] md:text-xs leading-relaxed transition-colors line-clamp-3">
                              {role.desc}
                            </p>
                         </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
            );
          })}
        </div>

        {/* Footer Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="snap-start min-h-screen w-full flex flex-col justify-end"
        >
          <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-sm text-center relative overflow-hidden mt-12 mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6a00]/5 via-transparent to-[#00d2ff]/5 opacity-50" />
            <div className="relative z-10 max-w-3xl">
              <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Let's build something <br className="hidden md:block"/> great together.</h4>
              <p className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-[0.2em] max-w-2xl mx-auto">
                Welcome to the team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full relative z-50 snap-start">
        <Footer />
      </div>

    </div>
  );
};
