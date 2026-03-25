/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { ReactLenis } from 'lenis/react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if we've already shown the preloader in this session
    return !sessionStorage.getItem('preloaderShown');
  });
  const [isReady, setIsReady] = useState(() => {
    return !!sessionStorage.getItem('preloaderShown');
  });

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
      sessionStorage.setItem('preloaderShown', 'true');
    }
  }, [isLoading]);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handlePreloaderReady = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black">
        {isLoading && (
          <Preloader 
            onComplete={handlePreloaderComplete} 
            onReady={handlePreloaderReady} 
          />
        )}
        <ParticleCanvas />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero isReady={isReady} />
          <Partners />
          <About />
          <Expertise />
          <Process />
          <Portfolio />
          <Stats />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
