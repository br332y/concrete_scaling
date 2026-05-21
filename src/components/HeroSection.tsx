import React, { useState, useRef, useEffect } from 'react';

interface HeroProps {
  onBookClick: () => void;
}

export default function HeroSection({ onBookClick }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const logos = [
    { src: "https://www.siterabbits.com/brand/Untitled%20design%20(5)%20copy%202.png", alt: "Law Office of Robert J. Kuhn" },
    { src: "https://www.siterabbits.com/brand/A&SDoor.png", alt: "A&S Door LLC" },
    { src: "https://www.siterabbits.com/brand/Untitled%20design%20(7)%20copy.png", alt: "It Was Fate Rentals" },
    { src: "https://www.siterabbits.com/brand/madi-ks-png-e1769548125312.png", alt: "Madi K’s Designs" },
    { src: "https://www.siterabbits.com/brand/Untitled%20design%20(7).png", alt: "Tarango Contracting" },
    { src: "https://www.siterabbits.com/brand/Untitled%20design%20(4).png", alt: "Edwards Quality Site Services" },
    { src: "https://www.siterabbits.com/brand/hugo-logo-outline%20copy.png", alt: "Hugo Builders LLC" },
    { src: "https://www.siterabbits.com/brand/rafaellogo.png", alt: "Rafael" },
    { src: "https://www.siterabbits.com/brand/cano-logo%20copy.png", alt: "Cano Steel Inc." },
    { src: "https://www.siterabbits.com/brand/axels-logo%20copy.webp", alt: "Axel’s Landscaping Design" },
    { src: "https://www.siterabbits.com/brand/all-city-logo%20copy.png", alt: "All City Janitorial Service" },
    { src: "https://www.siterabbits.com/brand/rooferz-logo%20copy.png", alt: "Rooferz Corp" },
    { src: "https://www.siterabbits.com/brand/jaredlogo.png", alt: "Jared" },
    { src: "https://www.siterabbits.com/brand/lusklogo.png", alt: "Lusk" },
    { src: "https://www.siterabbits.com/brand/jef-logo%20copy.png", alt: "JEF" },
  ];

  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full">
      {/* Black Hero Container with responsive padding */}
      <section className="relative bg-black overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 flex items-center min-h-[80vh]">
        
        {/* Absolute 12-Column background grid with vertical and horizontal lines */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 pointer-events-none opacity-[0.24] z-0">
          <div className="grid grid-cols-12 h-full w-full border-x border-white/15 relative">
            {[...Array(11)].map((_, i) => (
              <div key={i} className="h-full border-r border-white/18" />
            ))}
            {/* Elegant horizontal grid accents */}
            <div className="absolute inset-x-0 top-1/4 border-b border-white/12" />
            <div className="absolute inset-x-0 top-2/4 border-b border-white/12" />
            <div className="absolute inset-x-0 top-3/4 border-b border-white/12" />
          </div>
        </div>

        {/* Dynamic backdrop glow matching brand aesthetic */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-25" 
          style={{ background: 'radial-gradient(circle 600px at 80% 20%, rgba(249,125,17,0.18) 0%, transparent 80%)' }} 
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
            
            {/* Left Column Copy and Description */}
            <div className="lg:col-span-7 space-y-4 md:space-y-6 lg:space-y-8">
              
              {/* Category tag */}
              <p className="text-xs sm:text-sm font-semibold text-[#f97d11] text-left uppercase tracking-wider">
                Trusted contractor website systems
              </p>

              {/* Precise H1 displayed header - slightly smaller and tighter */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.08] tracking-tight text-left">
                Stop losing clients to competitors{' '}
                <span className="text-[#f97d11] italic font-black uppercase tracking-tight block sm:inline">
                  with better websites
                </span>
                <span className="text-white">.</span>
              </h1>
              
              {/* Descriptions & Badge Tag */}
              <p className="text-sm sm:text-base md:text-lg text-[#9ca3af] font-normal leading-relaxed text-left max-w-2xl">
                Get a marketing system that brings you <span className="text-white font-semibold">high-paying projects</span> & <span className="text-white font-semibold">clients consistently.</span>
              </p>
              
              {/* Two buttons action block - slightly smaller and more responsive */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-left">
                <button 
                  onClick={onBookClick}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f97d11] to-[#ea580c] text-white px-5 py-2.5 text-sm sm:text-base font-extrabold shadow-2xl hover:brightness-110 transition-all cursor-pointer active:scale-[0.98] hover:scale-[1.01] group"
                >
                  <span>Book A Free Discovery Call</span>
                  <svg className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('testimonials-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-transparent text-[#f97d11] hover:text-[#ffedd5] hover:border-[#f97d11]/30 px-5 py-2.5 text-sm sm:text-base font-extrabold transition-all cursor-pointer active:scale-[0.98]"
                >
                  See Our Work
                </button>
              </div>

              {/* Trust Partners Slider replacing Cameron bio - with adjusted margin */}
              <div className="mt-4 pt-4 md:mt-6 md:pt-6 border-t border-white/5 space-y-3">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.25em] text-left">
                  Trusted by growing brands
                </p>
                <div className="relative overflow-hidden w-full" id="logo-marquee">
                  {/* Left & Right gradient masks for smooth fade edges in dark mode */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10" />
                  
                  <div className="animate-marquee-fast flex items-center hover:[animation-play-state:paused]" style={{ width: 'max-content', willChange: 'transform' }}>
                    {repeatedLogos.map((logo, idx) => (
                      <div key={idx} className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6">
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          loading="eager" 
                          style={{ filter: 'brightness(0) invert(1)' }} 
                          className="h-4 sm:h-5 w-auto max-w-[70px] sm:max-w-[90px] object-contain opacity-40 hover:opacity-75 transition-opacity duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column Portrait Video Container */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch justify-center w-full max-w-lg mx-auto lg:max-w-none">
              <div 
                className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group select-none relative bg-neutral-900"
                style={{ boxShadow: '0 0 60px rgba(124,58,237,0.12), 0 25px 50px rgba(0,0,0,0.5)' }}
              >
                <div 
                  className="relative w-full h-full cursor-pointer" 
                  role="button" 
                  aria-label={isPlaying ? "Pause video" : "Play video"} 
                  tabIndex={0}
                  onClick={togglePlay}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePlay(); } }}
                >
                  <video 
                    ref={videoRef}
                    src="https://customer-f1c0lq96bzugmlg4.cloudflarestream.com/4440f4aaf4e850a1bcf940a6c275ced5/downloads/default.mp4" 
                    playsInline 
                    loop 
                    autoPlay
                    muted={isMuted}
                    className="w-full h-full object-cover" 
                    title="See how Concrete Scaling builds your website"
                  />
                  
                  {/* Subtle dark layout shading overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

                  {/* Play Button Overlay shown when paused */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs transition-opacity duration-300">
                      <span className="rounded-full bg-white/10 p-5 backdrop-blur-md border border-white/20 transition group-hover:bg-white/20 shadow-lg scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play size-10 fill-white text-white" aria-hidden="true">
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                      </span>
                    </div>
                  )}

                  {/* Volume Controller Mute Icon */}
                  <button 
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors z-20 cursor-pointer border border-white/10 active:scale-95 shadow-md"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      {isMuted ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      )}
                    </svg>
                  </button>

                </div>
              </div>
              <p className="mt-3 text-center lg:text-right text-xs text-gray-400 font-sans tracking-wide">
                Will — Founder of <span className="text-[#f97d11] font-semibold">Concrete Scaling</span>
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

