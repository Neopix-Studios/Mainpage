import { motion } from 'motion/react';

const credits = [
  {
    category: 'Visual Assets',
    items: [
      { name: 'Unsplash', description: 'Placeholder imagery and textures.', link: 'https://unsplash.com/' },
      { name: 'Lucide Icons', description: 'Interface iconography.', link: 'https://lucide.dev/' },
    ]
  },
  {
    category: 'Audio & Music',
    items: [
      { name: 'Pending', description: 'Music tracks and sound effects will be listed here.', link: '#' },
    ]
  },
  {
    category: 'Libraries & Frameworks',
    items: [
      { name: 'React & Vite', description: 'Frontend framework and build tool.', link: 'https://reactjs.org/' },
      { name: 'Tailwind CSS', description: 'Utility-first styling.', link: 'https://tailwindcss.com/' },
      { name: 'Motion', description: 'Animation library.', link: 'https://motion.dev/' },
      { name: 'Lenis', description: 'Smooth scrolling.', link: 'https://lenis.studiofreight.com/' }
    ]
  }
];

export const AttributionsPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-24 px-6 md:px-12 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-4 uppercase">
            Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff6a00]">Attributions</span>
          </h1>
          <p className="text-white/60 font-display text-lg max-w-2xl">
            We are deeply grateful to the creators, developers, and artists whose work helps power and inspire Neopix Studio.
          </p>
        </motion.div>

        <div className="space-y-12">
          {credits.map((section, index) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-widest text-[#ff6a00] mb-8">
                {section.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-display font-bold text-white hover:text-[#ff6a00] transition-colors inline-block w-max"
                    >
                      {item.name}
                    </a>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
