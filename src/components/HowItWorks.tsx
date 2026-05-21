import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works-section" className="bg-gray-50 py-16 sm:py-20 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold text-[#ea580c] uppercase tracking-widest mb-3">
          How it works
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-12">
          Three steps to a site that{" "}
          <span className="relative inline-block">
            <span className="relative z-10">sells for you</span>
            <span className="absolute inset-x-0 bottom-0 h-3 bg-[#ea580c]/10 -rotate-1 z-0"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Step 1 */}
          <div>
            <div className="w-10 h-10 bg-[#ea580c] text-white rounded-xl flex items-center justify-center text-sm font-extrabold mb-4">
              1
            </div>
            <h3 className="text-base font-extrabold text-gray-900 mb-2">
              Book a 15 minute call
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We’ll learn about your business, your goals, and what’s not working with your current site (or lack of one).
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="w-10 h-10 bg-[#ea580c] text-white rounded-xl flex items-center justify-center text-sm font-extrabold mb-4">
              2
            </div>
            <h3 className="text-base font-extrabold text-gray-900 mb-2">
              We design and build your site in days
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Custom, conversion-focused, SEO-ready. Built around your brand and engineered to turn visitors into leads.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="w-10 h-10 bg-[#ea580c] text-white rounded-xl flex items-center justify-center text-sm font-extrabold mb-4">
              3
            </div>
            <h3 className="text-base font-extrabold text-gray-900 mb-2">
              We manage everything, you close deals
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Hosting, updates, speed optimization, SEO. All handled. You never touch the backend.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
