import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function HlsVideo({ src, className, ...props }: { src: string, className?: string } & React.VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => hls.destroy();
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src]);

  return <video ref={videoRef} className={className} {...props} />;
}
