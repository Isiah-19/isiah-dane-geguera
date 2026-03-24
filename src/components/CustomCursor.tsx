import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = -100;
    let mouseY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      follower.style.transform = `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0)`;
    };

    window.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, .liquid-glass, .liquid-glass-strong');
    
    const onMouseEnter = () => {
      follower.style.transform += ' scale(1.5)';
      follower.style.backgroundColor = 'rgba(255,255,255,0.1)';
    };
    
    const onMouseLeave = () => {
      follower.style.transform = follower.style.transform.replace(' scale(1.5)', '');
      follower.style.backgroundColor = 'transparent';
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] transition-transform duration-150 ease-out hidden md:block"
      />
    </>
  );
}
