import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Testimonials() {
  const [brandonMuted, setBrandonMuted] = useState(true);
  const [raymondMuted, setRaymondMuted] = useState(true);
  const [sliderPos, setSliderPos] = useState(50);

  const brandonVideoRef = useRef<HTMLVideoElement>(null);
  const raymondVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (brandonVideoRef.current) {
      brandonVideoRef.current.muted = brandonMuted;
    }
  }, [brandonMuted]);

  useEffect(() => {
    if (raymondVideoRef.current) {
      raymondVideoRef.current.muted = raymondMuted;
    }
  }, [raymondMuted]);

  return (
    <section id="testimonials-section" className="bg-black py-16 sm:py-20 px-4 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Results title */}
        <p className="text-xs font-bold text-[#f97d11] uppercase tracking-widest mb-3 text-center">
          Results
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-12 text-center">
          Don't take our word for it.{" " }
          <span className="text-[#f97d11]">Hear it from them.</span>
        </h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Testimonial 1: Brandon */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between shadow-sm">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black shadow-md">
              <video 
                ref={brandonVideoRef}
                src="https://customer-f1c0lq96bzugmlg4.cloudflarestream.com/17bf156bd4374947d5d910a53c59369c/downloads/default.mp4" 
                playsInline
                loop
                autoPlay
                muted={brandonMuted}
                className="w-full h-full object-cover"
              />
              
              {/* Mute button */}
              <button 
                onClick={() => setBrandonMuted(!brandonMuted)}
                className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/75 flex items-center justify-center hover:bg-black/90 text-white z-20 border border-white/10"
                aria-label="Toggle mute"
              >
                {brandonMuted ? <VolumeX className="w-4 h-4 text-[#FFDC6D]" /> : <Volume2 className="w-4 h-4 text-white" />}
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-white">
                Brandon <span className="text-gray-400 font-normal">— Hybrid Fitness Coach</span>
              </p>
              <p className="text-xs text-gray-300 italic leading-relaxed">
                “Concrete Scaling changed the way my prospects look at me. The booking rates doubled right away!”
              </p>
            </div>
          </div>

          {/* Testimonial 2: Raymond */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between shadow-sm">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-black shadow-md">
              <video 
                ref={raymondVideoRef}
                src="https://customer-f1c0lq96bzugmlg4.cloudflarestream.com/09a03a77c858bcd797790588b083d773/downloads/default.mp4" 
                playsInline
                loop
                autoPlay
                muted={raymondMuted}
                className="w-full h-full object-cover"
              />
              
              {/* Mute button */}
              <button 
                onClick={() => setRaymondMuted(!raymondMuted)}
                className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/75 flex items-center justify-center hover:bg-black/90 text-white z-20 border border-white/10"
                aria-label="Toggle mute"
              >
                {raymondMuted ? <VolumeX className="w-4 h-4 text-[#FFDC6D]" /> : <Volume2 className="w-4 h-4 text-white" />}
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-bold text-white">
                Raymond <span className="text-gray-400 font-normal">— Modern Living Landscaping</span>
              </p>
              <p className="text-xs text-gray-300 italic leading-relaxed">
                “I literally show up on Google. Getting leads on auto-pilot now. Best marketing invest I ever made.”
              </p>
            </div>
          </div>

        </div>

        {/* Before vs After interactive study */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-white/[0.06]">
          <div className="text-center mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              See the difference Concrete Scaling makes
            </h3>
          </div>

          {/* Interactive slider area */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/10 shadow-2xl bg-black">
            
            {/* UNDER LAYER: SiteRabbits AFTER Video */}
            <div className="absolute inset-0 w-full h-full">
              <video 
                src="https://www.siterabbits.com/brand/hugo-after.mp4" 
                className="w-full h-full object-cover" 
                muted 
                playsInline 
                loop 
                autoPlay 
              />
            </div>

            {/* OVER LAYER: Their Old Site (Before) Clipped */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
              }}
            >
              <img 
                src="https://www.siterabbits.com/brand/hugo-before.png" 
                alt="Before — original site" 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                draggable="false" 
              />
            </div>

            {/* SLIDER HANDLE LINE AND BUTTON */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none"
              style={{
                left: `${sliderPos}%`,
                boxShadow: '0 0 8px rgba(0,0,0,0.4)'
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-white/80 pointer-events-auto">
                <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                </svg>
              </div>
            </div>

            {/* CAPTURE TOUCH/DRAG VIA INVISIBLE NATIVE RANGE INPUT */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30" 
              aria-label="Before/after slider comparison input"
            />

            {/* Overlap Badges */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="bg-red-650/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm border border-red-500/20">
                Their old site
              </span>
            </div>
            
            <div className="absolute top-3 right-3 z-10 pointer-events-none">
              <span className="bg-[#ea580c]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm border border-white/10">
                Built by Concrete Scaling
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
