/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black">
      <ParticleCanvas />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
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
  );
}
