import React, { useState, useRef } from 'react';
import { 
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section 
      className="relative text-slate-900 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 overflow-hidden border-b border-[#b0b3b2] min-h-[540px] flex items-center justify-center bg-[#c7c9c8]"
      style={{ backgroundColor: '#c7c9c8' }}
    >
      {/* Subtle ambient luxury texture & glow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container: 2-Column Responsive Grid (50% Left Content, 50% Right Video Screen) */}
      <div className="relative w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: 50% of Hero Section */}
          <div className="flex flex-col items-start text-left space-y-6 w-full min-w-0 pr-0 lg:pr-4 xl:pr-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-slate-900 text-xs font-bold tracking-wide uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>South Korea Since 1991 · Authentic Medical Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl min-[390px]:text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold tracking-tight text-[#062419] font-serif leading-[1.2] drop-shadow-xs break-words">
              Free Therapy at Dooroomi
            </h1>

            {/* Narrative Description / Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#062419] font-normal leading-relaxed max-w-2xl">
              Established in South Korea in 1991 under our timeless corporate motto “Love, Service, and Kindness”, Dooroomi (두루미) is a certified organization dedicated to public wellness. We open our authorized therapy centers every day to provide 100% Free Therapy with zero fees, zero obligation, and zero financial burden.
            </p>

          </div>

          {/* RIGHT COLUMN: 50% of Hero Section - Video Screen */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-2xl lg:max-w-none">
              
              {/* Video Player Box - 50% Hero Width */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/50 border-2 border-white/50 aspect-[4/3] sm:aspect-video w-full">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/assets/DOOROOMI_MEDIQUIP_Promotional_Video.mp4" type="video/mp4" />
                  <source src="/assets/videos/hero-therapy.mp4" type="video/mp4" />
                  <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle vignette gradient for controls visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Interactive Controls (Play/Pause & Mute/Unmute) */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-lg hover:scale-105"
                    title={isPlaying ? "Pause Video" : "Play Video"}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-lg hover:scale-105"
                    title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
