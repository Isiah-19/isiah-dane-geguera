import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
  onReady?: () => void;
}

export default function Preloader({ onComplete, onReady }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsMounted(false);
          onComplete();
        }
      });

      const chars = textRef.current?.querySelectorAll('.char');

      if (chars && chars.length > 0) {
        // Initial state
        gsap.set(chars, { 
          opacity: 0, 
          y: 80, 
          filter: "blur(15px)", 
          scale: 0.8 
        });
        gsap.set(textWrapperRef.current, { scale: 0.95 });

        // 1. Slow continuous scale of the whole text block (Cinematic camera push)
        tl.to(textWrapperRef.current, {
          scale: 1.05,
          duration: 3.0,
          ease: "none"
        }, 0);

        // 2. Characters reveal with focus pull (blur to sharp) and stagger
        tl.to(chars, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.8,
          stagger: 0.02,
          ease: "expo.out",
        }, 0.1);

        // 3. Subtle light sweep / glow effect across the letters (1x only, slower)
        tl.to(chars, {
          color: "#ffffff",
          textShadow: "0px 0px 30px rgba(255,255,255,0.8)",
          duration: 1.0,
          stagger: 0.02,
          ease: "power2.out",
        }, 0.5);

        // 4. Characters exit (fly up and blur out)
        tl.to(chars, {
          opacity: 0,
          y: -50,
          filter: "blur(10px)",
          scale: 1.1,
          duration: 0.5,
          stagger: 0.015,
          ease: "power3.in"
        }, 1.8);

        // 5. Container slides up like a curtain revealing the site
        tl.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "expo.inOut",
          onStart: () => {
            // Trigger the hero animations as the curtain starts to rise
            if (onReady) onReady();
          }
        }, 2.2);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete, onReady]);

  if (!isMounted) return null;

  const name = "Isiah Dane Geguera";

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center pointer-events-none overflow-hidden"
    >
      {/* Subtle film grain overlay for cinematic texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-20" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center opacity-40">
        <div className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-white/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-[spin_15s_linear_infinite] origin-bottom-right"></div>
        <div className="absolute w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] bg-neutral-500/10 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen animate-[spin_20s_linear_infinite_reverse] origin-top-left"></div>
      </div>
      
      <div ref={textWrapperRef} className="relative z-10">
        <h1 
          ref={textRef} 
          className="text-6xl md:text-[8rem] leading-[0.85] font-heading tracking-tighter text-white/80 text-center px-4"
        >
          {name.split('').map((char, index) => (
            <span 
              key={index} 
              className="char inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
