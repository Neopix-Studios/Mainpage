/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { GiveawayPage } from './pages/GiveawayPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GamesPage } from './pages/GamesPage';
import { AboutPage } from './pages/AboutPage';
import { HierarchyPage } from './pages/HierarchyPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PhotosPage } from './pages/PhotosPage';
import { VideosPage } from './pages/VideosPage';
import { CryoraRecordsPage } from './pages/CryoraRecordsPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { GameFeature } from './components/GameFeature';
import { SupportSection } from './components/SupportSection';
import { NewsSection } from './components/NewsSection';
import { CryoraRecordsSection } from './components/CryoraRecordsSection';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { AudioPlayer } from './components/AudioPlayer';
import { Play } from 'lucide-react';
import { ErrorPage } from './components/ErrorPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen font-sans selection:bg-white selection:text-black">
      <Loader onComplete={() => setIsLoaded(true)} />

      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {location.pathname !== '/cryora-records' && <AudioPlayer />}
        <Navbar />
        
        <main>
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Main Slider Area */}
      <section id="hero">
        <HeroSlider />
      </section>

      {/* Latest News Area */}
      <section id="news-section">
        <NewsSection />
      </section>

      {/* Dynamic Game Feature Area - As Requested */}
      <section id="latest-game" className="bg-[#030303] border-t-4 border-black">
        <GameFeature 
          bgImage="/1.png"
          gameLogo="/Dignitized.png"
          breadcrumb="Games / Project One Online"
          description="Explore Project One Online, a dynamic world for up to 30 players, featuring all updates and content since launch, playable solo or with friends."
          buttons={[
            { label: 'Watch Trailer', action: '#', primary: true, icon: <Play className="w-4 h-4 mr-2" fill="currentColor" /> },
            { label: 'Learn More', action: '#', primary: false }
          ]}
        />
      </section>

      {/* Cryora Records Banner Area */}
      <section id="cryora-records">
        <CryoraRecordsSection />
      </section>

      {/* Support Banner area */}
      <section id="support">
        <SupportSection />
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/giveaway" element={<GiveawayPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hierarchy" element={<HierarchyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/cryora-records" element={<CryoraRecordsPage />} />
          <Route path="/403" element={<ErrorPage code="403" title="Access Denied" description="You don't have permission to access this area." />} />
          <Route path="/443" element={<ErrorPage code="443" title="Secure Content" description="This area requires a secure connection to be viewed." />} />
          <Route path="/500" element={<ErrorPage code="500" title="Internal Server Error" description="Something went fundamentally wrong on our end." />} />
          <Route path="*" element={<ErrorPage code="404" title="Page Not Found" description="The reality you are searching for does not exist." />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
