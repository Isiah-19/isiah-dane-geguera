import { useEffect, useState } from 'react';

const preferenceKey = 'isiah-motion-paused-v1';

export function useMotionPreference() {
  const [paused, setPaused] = useState(() => {
    try { return localStorage.getItem(preferenceKey) === 'true'; }
    catch { return false; }
  });
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const enabled = !paused && !reduced;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? 'full' : 'reduced';
  }, [enabled]);

  function toggle() {
    const next = !paused;
    setPaused(next);
    try { localStorage.setItem(preferenceKey, String(next)); }
    catch { /* Motion controls still work when storage is unavailable. */ }
  }

  return { enabled, reduced, toggle };
}
