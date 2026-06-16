import { motion } from 'motion/react';
import { Users } from 'lucide-react';

const tiers = [
  {
    id: "tier-1",
    name: "TIER 1 — EXECUTIVE LEADERSHIP",
    description: "The vision-bearers. Final accountability for the studio's direction, culture, and success.",
    roles: [
      {
        title: "Studio Head",
        count: 2,
        desc: "The founding authority of the studio. Sets the long-term vision, owns final say on major creative, business, and operational decisions, and represents the studio to the world. Every department ultimately reports up through this seat."
      },
      {
        title: "Lead Director",
        count: 1,
        desc: "Right hand to the Studio Head. Translates the studio's vision into actionable plans, coordinates across all directors, and ensures every department is aligned, on schedule, and working toward the same goal."
      },
      {
        title: "The Stakeholders",
        count: 0,
        desc: "Trusted partners and advisors invested in the studio's long-term success. Provide strategic guidance, resources, and oversight at the highest level — a seat reserved for those with deep commitment to where this studio is going."
      }
    ]
  },
  {
    id: "tier-2",
    name: "TIER 2 — DIRECTORATE: DEPARTMENT LEADERSHIP",
    description: "Each Director owns a full discipline end-to-end — the backbone of how the studio's vision becomes reality.",
    roles: [
      {
        title: "Creative Director",
        count: 0,
        desc: "Owns the creative identity of every project: art direction, narrative tone, world-building, and overall look-and-feel. Final creative sign-off rests here, working hand-in-hand with the Lead Director to keep the vision cohesive."
      },
      {
        title: "Technical Director",
        count: 0,
        desc: "Owns the technical architecture of the studio's projects — engine pipelines, performance, tooling, and technical standards. Leads the Programmers team and ensures the build stays stable, scalable, and future-proof."
      },
      {
        title: "Art Director",
        count: 0,
        desc: "Sets the visual bar for the studio. Leads and mentors the 2D Artists, 3D Artists, and Animators, ensuring every asset matches the creative vision in style, quality, and consistency."
      },
      {
        title: "Audio Director",
        count: 0,
        desc: "Owns the studio's entire sound identity — music, SFX, voice direction, and mixing. Leads the Composers team and ensures audio elevates every moment of the experience."
      },
      {
        title: "Community & Marketing Director",
        count: 0,
        desc: "Owns the studio's public voice and growth strategy. Leads the Marketing Team, manages outreach campaigns, and builds the bridge between the studio and The Community."
      }
    ]
  },
  {
    id: "tier-3",
    name: "TIER 3 — CRAFT TEAMS: THE BUILDERS",
    description: "The hands-on talent that turns direction into finished work. Every asset, line of code, and frame of animation starts here.",
    roles: [
      {
        title: "2D Artists",
        count: 2,
        desc: "Bring concept art, UI assets, illustrations, and 2D visual elements to life. Work directly under the Art Director to maintain a unified visual language across the project."
      },
      {
        title: "3D Artist",
        count: 2,
        desc: "Models, textures, and builds the 3D environments, characters, and props that form the world players will explore. A core pillar of the studio's visual production pipeline."
      },
      {
        title: "Animators",
        count: 0,
        desc: "Bring movement and life to characters, environments, and UI. Animation is what makes a static world feel real — this team owns that magic."
      },
      {
        title: "Programmers",
        count: 0,
        desc: "Build and maintain the systems, mechanics, and tools that make the project run. Work closely with the Technical Director to keep the codebase clean, efficient, and scalable."
      },
      {
        title: "UI/UX Designer",
        count: 1,
        desc: "Designs how players see, navigate, and feel the product. Owns interface layouts, menus, usability flows, and the overall player experience — a role that shapes first impressions and lasting ones."
      },
      {
        title: "Composers",
        count: 0,
        desc: "Compose original music and soundscapes that define the emotional heartbeat of the project. Work under the Audio Director to deliver a signature sound for the studio."
      },
      {
        title: "Creative Writer",
        count: 0,
        desc: "Crafts the story, dialogue, lore, and narrative voice of the project. Shapes how players connect emotionally with the world being built."
      }
    ]
  },
  {
    id: "tier-4",
    name: "TIER 4 — GROWTH, SUPPORT & COMMUNITY OPERATIONS",
    description: "The teams that connect the studio to its players, partners, and future talent — and keep day-to-day operations running smoothly.",
    roles: [
      {
        title: "Marketing Team",
        count: 0,
        desc: "Executes campaigns, content calendars, and promotional strategy under the Community & Marketing Director. The engine behind every announcement and every spike of hype."
      },
      {
        title: "Game Tester",
        count: 0,
        desc: "Plays every build before the world does. Hunts bugs, reports issues, and gives direct feedback that shapes the final polish of the product. A critical quality gate."
      },
      {
        title: "Volunteers / Interns",
        count: 0,
        desc: "Early-career contributors gaining real experience across departments. A proving ground and a pipeline — many future Directors start here."
      },
      {
        title: "Collaborators",
        count: 1,
        desc: "External partners and guest contributors brought in for specific projects, crossovers, or specialized work. Valued members of the extended studio family."
      }
    ]
  },
  {
    id: "tier-5",
    name: "TIER 5 — COMMUNITY & SERVER UTILITIES",
    description: "The people and tools that make this server feel like home — and keep it running smoothly behind the scenes.",
    roles: [
      {
        title: "The Community",
        count: 7,
        desc: "Our players, fans, and supporters. The studio exists for this group — their feedback, energy, and loyalty are what fuel every milestone."
      },
    ]
  }
];

export const HierarchyPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ff6a00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-display font-bold uppercase tracking-widest text-[#ff6a00] border border-white/10 mb-6">
            Studio Structure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter text-white mb-6 uppercase">
            Organizational <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Hierarchy</span>
          </h1>
          <p className="text-white/60 font-display text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4 italic">
            "Every title on this list is a promise — a promise of trust from the studio, and a promise of dedication in return. We rise together, ship together, and grow together."
          </p>
        </motion.div>

        <div className="space-y-12">
          {tiers.map((tier, index) => (
            <motion.section 
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2.5rem), calc(100% - 2.5rem) 100%, 0 100%)' }}
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ff6a00]/80" />
              <div className="p-8 md:p-10 border-b border-white/5 bg-white/5">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-widest mb-3">
                  {tier.name}
                </h2>
                <p className="text-[#ff6a00] font-display text-sm tracking-widest uppercase font-bold">
                  {tier.description}
                </p>
              </div>
              <div className="divide-y divide-white/5">
                {tier.roles.map((role, rIndex) => (
                  <div key={rIndex} className="p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-start group hover:bg-white/[0.02] transition-colors">
                    <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-between md:block">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-[#ff6a00] transition-colors">
                        {role.title}
                      </h3>
                      <div className="md:mt-4 flex items-center gap-2">
                        <Users className="w-4 h-4 text-white/40" />
                        <span className="text-white/60 font-mono text-sm tracking-wider font-bold">
                          {role.count} {role.count === 1 ? 'SEAT' : 'SEATS'}
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                        {role.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-white/10 pt-8"
        >
          <p className="text-white/40 font-display text-sm uppercase tracking-widest font-bold">
            Total Roles: 21 | Every seat at this table matters. Let's build something great. Together.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
