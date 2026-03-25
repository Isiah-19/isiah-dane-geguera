import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.style.cursor = 'none';

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let isHovering = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const animate = () => {
      // Smooth follow effect using linear interpolation (lerp)
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      const scale = isHovering ? 'scale(1.5)' : 'scale(1)';
      follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0) ${scale}`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    // Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, .liquid-glass, .liquid-glass-strong, input, textarea');
      
      if (isInteractive) {
        isHovering = true;
        follower.style.backgroundColor = 'rgba(255,255,255,0.1)';
        follower.style.borderColor = 'rgba(255,255,255,0.5)';
      } else {
        isHovering = false;
        follower.style.backgroundColor = 'transparent';
        follower.style.borderColor = 'rgba(255,255,255,0.3)';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9998] transition-colors duration-300 hidden md:block"
      />
    </>
  );
}
