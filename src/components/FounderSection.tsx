import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FounderProps {
  onBookClick: () => void;
}

export default function FounderSection({ onBookClick }: FounderProps) {
  const [showStory, setShowStory] = useState(false);

  return (
    <section id="founder-section" className="bg-white py-12 sm:py-16 px-4 border-t border-b border-gray-150 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
          
          {/* Left Column: Compact vertical portrait */}
          <div className="flex-shrink-0 w-full md:w-52 lg:w-56 max-w-[240px] mx-auto md:mx-0">
            <div className="relative group aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-gray-150 bg-gray-50">
              <img 
                src="https://www.siterabbits.com/brand/will.jpg" 
                alt="Will, founder of Concrete Scaling" 
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-103" 
                draggable="false" 
              />
            </div>
          </div>

          {/* Right Column: Copy elements, refined smaller sizes */}
          <div className="flex-1 space-y-5">
            
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ea580c] block">
                Who builds your site
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight tracking-tight">
                Engineered for builders
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                I'm not a builder — I'm an engineer who spent years inside builder businesses fixing broken pipelines. <span className="text-gray-950 font-semibold">Concrete Scaling</span> exists because great craft deserves a system, not another generic agency retainer.
              </p>
            </div>

            {/* Signature Bullets */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97d11] shrink-0 mt-2" />
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold text-gray-900">Systems over slogans</span> — demand, response, nurture, and conversion wired together.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97d11] shrink-0 mt-2" />
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold text-gray-900">Ownership</span> — you keep your site, data, and ad accounts.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97d11] shrink-0 mt-2" />
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  <span className="font-bold text-gray-900">Proof</span> — we measure what matters: qualified conversations and signed work.
                </p>
              </li>
            </ul>

            {/* Embedded interactive expanded story */}
            <AnimatePresence>
              {showStory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden bg-gray-50 border border-gray-100 p-4 rounded-xl"
                >
                  <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed mb-3">
                    After years of consulting for commercial construction and specialized paving trades, I was frustrated seeing hardworking guys lose premium contracts to competitor websites with clean structures and clear proof layouts.
                  </p>
                  <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                    We built Concrete Scaling to solve exactly this: standardizing lead flow systems, combining organic location setups with performance-driven local funnels so that you always show up on Google, command authority, and secure bookings.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read Story Action */}
            <div className="flex flex-wrap items-center gap-6 pt-1">
              <button 
                onClick={() => setShowStory(!showStory)}
                className="text-xs sm:text-sm font-bold text-[#ea580c] hover:text-[#f97d11] transition-colors inline-flex items-center gap-1.5 cursor-pointer group"
              >
                <span>{showStory ? 'Show less' : 'Read the full story'}</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-0.5 ${showStory ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Custom Signature Block containing "Will" & Metadata */}
            <div className="pt-5 border-t border-gray-100 flex items-center gap-5">
              {/* Handwritten Signature SVG */}
              <div className="text-gray-800 w-24 sm:w-28 shrink-0">
                <svg viewBox="0 0 150 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
                  {/* Handwritten dynamic curves: Will's cozy signature */}
                  <path d="M 28 20 C 15 25 12 38 22 41 C 30 43 32 24 25 16 C 22 12 36 34 38 34 C 41 34 40 22 39 26 C 38 30 42 42 45 38 C 48 32 50 22 51 26 C 52 30 50 42 55 38 Q 65 32 75 20" />
                </svg>
              </div>

              {/* Name Details */}
              <div className="flex flex-col leading-tight">
                <span className="text-gray-900 font-bold text-sm sm:text-base">
                  Will
                </span>
                <span className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.16em]">
                  FOUNDER, CONCRETE SCALING
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
