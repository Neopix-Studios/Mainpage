import { motion } from 'motion/react';

export const LegalPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-xs font-display font-bold uppercase tracking-widest text-[#ff6a00] border border-white/10 mb-6">
            Strictly Confidential
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tighter text-white mb-6 uppercase">
            Official Proprietary & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-red-600">Confidentiality</span> Notice
          </h1>
          <p className="text-white/60 font-display text-lg tracking-wide uppercase font-bold">
            Project Title: DIGNITIZED™ (Universe Specification & GDD)<br/>
            Lead Developer: Neopix Studios™<br/>
            Parent Ecosystem: Neopix™<br/>
            Creator / Author: Mr. Avrodip Shee
          </p>
          <p className="text-white/40 mt-4 text-sm font-bold tracking-widest uppercase">
            Copyright &copy; 2026 Neopix™. All rights reserved.
          </p>
        </motion.div>

        <div className="space-y-12 text-white/80 leading-relaxed font-light">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-2xl font-display font-bold text-[#ff6a00] uppercase tracking-widest mb-6">1. Intellectual Property Ownership</h2>
            <p className="mb-4">
              All original concepts, mechanical systems, data structures, and narrative frameworks detailed within the Game Design Document—including but not limited to the account-level permadeath system architecture, Cryo Stone resource loops, the "New Kolkata / Navadurga" cyberpunk aesthetic, the music used in-game, the Cronimal variant roster, and all subsequent editions (Dignitized - Politics Hit Different)—are the exclusive, unregistered proprietary assets of the creator and Neopix™.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-2xl font-display font-bold text-[#ff6a00] uppercase tracking-widest mb-6">2. Non-Disclosure & Access Restrictions</h2>
            <p className="mb-4">
              By accepting, accessing, or viewing this document, you enter into a binding confidentiality understanding. You are strictly prohibited from copying, replicating, or publicizing this file or its contents without written consent.
            </p>
            <p className="mb-4">
              This document contains proprietary intellectual property and game design architecture. Unauthorized copying, distribution, text-scraping, or reproduction of these mechanics, narrative arcs, and settings is strictly prohibited and will be met with immediate legal action.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-2xl font-display font-bold text-[#ff6a00] uppercase tracking-widest mb-6">3. Community Suggestions & Credit Policy</h2>
            <p className="mb-4 text-white/90 font-medium">Neopix Studios™ highly values community-driven optimization and feature ideation.</p>
            <p className="mb-4">
              To maintain open collaborative channels while protecting project integrity, the following guidelines apply to all player and individual contributor suggestions:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start">
                <span className="text-[#ff6a00] mr-3 font-bold">*</span>
                <span><strong>CONSENT TO CREDIT:</strong> Contacting Neopix™ via any medium (email, community tools, social channels, or developer portals) with feedback, improvement concepts, or mechanical suggestions grants Neopix™ immediate, perpetual consent to use your provided name/handle in the official game credit list.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6a00] mr-3 font-bold">*</span>
                <span><strong>ELIGIBILITY:</strong> Inclusion in the credits is strictly conditional. A contributor's name will only be added to the credit list if their specific feature proposal or inspiration is actively implemented into the game design or codebase.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6a00] mr-3 font-bold">*</span>
                <span><strong>NO PROPRIETARY CLAIMS:</strong> Submission of ideas does not constitute a partnership, employment contract, or transfer of intellectual property rights. All adopted features remain 100% proprietary to Neopix™.</span>
              </li>
            </ul>
            <p className="mt-6">
              Submission of ideas does not grant any intellectual property rights or financial claims.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-2xl font-display font-bold text-[#ff6a00] uppercase tracking-widest mb-6">4. Forensic Tracking & Legal Enforcement</h2>
            <p className="mb-4">
              This asset is an active commercial asset. Any unauthorized disclosure, intellectual property theft, or plagiarism of these mechanics and settings will be aggressively prosecuted to the fullest extent of applicable legal frameworks.
            </p>
          </motion.section>

        </div>
      </div>
    </div>
  );
};
