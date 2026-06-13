/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { News } from './components/News';
import { Library } from './components/Library';
import { About } from './components/About';
import { Support } from './components/Support';
import { Footer } from './components/Footer';
import { ParticleCanvas } from './components/ParticleCanvas';
import { AudioController } from './components/AudioController';
import { Loader } from './components/Loader';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 font-sans">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ParticleCanvas />
          <AudioController />
          
          <Navbar />
          
          <main>
            <Hero />
            <Featured />
            <News />
            <Library />
            <About />
            <Support />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

