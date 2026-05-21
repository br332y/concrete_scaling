import React from 'react';

export default function CalendlyScheduler() {
  return (
    <section id="booking-section" className="bg-black py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Title layout */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Your competitors already have{" "}
            <span 
              className="relative inline-block font-extrabold" 
              style={{
                background: 'linear-gradient(135deg, #ffedd5 0%, #f97d11 50%, #ea580c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              better websites.
            </span>
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-white/90">
            Let's fix that.
          </p>
        </div>

        {/* Embedded Iframe */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
          <iframe 
            src="https://calendly.com/will-siterabbits/15min?hide_gdpr_banner=1&amp;primary_color=f97d11" 
            width="100%" 
            height="700" 
            style={{ border: 0 }}
            scrolling="no" 
            title="Book a call with Concrete Scaling" 
            allow="camera; microphone; fullscreen; payment"
          />
        </div>

      </div>
    </section>
  );
}
