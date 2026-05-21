import { useState, useEffect } from 'react';
import { ActiveSection } from './types';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import Testimonials from './components/Testimonials';
import FounderSection from './components/FounderSection';
import HowItWorks from './components/HowItWorks';
import CalendlyScheduler from './components/CalendlyScheduler';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SubPages from './components/SubPages';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  // Multi-route navigation handler
  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'about') {
      setTimeout(() => {
        const element = document.getElementById('founder-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else if (section === 'work') {
      setTimeout(() => {
        const element = document.getElementById('testimonials-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHomeLikeSection = (section: ActiveSection) => {
    return section === 'home' || section === 'about' || section === 'work';
  };

  const handleBookClick = () => {
    if (!isHomeLikeSection(activeSection)) {
      setActiveSection('home');
      // Let state render, then scroll to booking section
      setTimeout(() => {
        const element = document.getElementById('booking-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const element = document.getElementById('booking-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Listen to visual anchor redirects
  useEffect(() => {
    // If we land on specific url params, handle navigations dynamically
    const handleUrlHash = () => {
      const path = window.location.pathname;
      if (path === '/about') handleNavigate('about');
      else if (path === '/examples' || path === '/work') handleNavigate('work');
      else if (path === '/terms') handleNavigate('terms');
      else if (path === '/privacy') handleNavigate('privacy');
      else if (path === '/refund-policy') handleNavigate('refunds');
      else if (path === '/start') handleBookClick();
    };

    handleUrlHash();
    window.addEventListener('popstate', handleUrlHash);
    return () => window.removeEventListener('popstate', handleUrlHash);
  }, []);

  return (
    <div className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col justify-between">
      
      {/* 1. Global Navigation Site Header */}
      <SiteHeader 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onBookClick={handleBookClick} 
      />

      {/* 2. Main Content Body Router */}
      <main className="flex-grow">
        {isHomeLikeSection(activeSection) ? (
          /* True Landing page workflow */
          <div className="animate-fade-in duration-300">
            {/* Hero, Video and Continuous Marquee */}
            <HeroSection onBookClick={handleBookClick} />

            {/* Pain Point checklist vs Solution metrics */}
            <ProblemSolution onBookClick={handleBookClick} />

            {/* Client Real Testimony videos & Slider */}
            <Testimonials />

            {/* Personal Message from Will (Marketer) */}
            <FounderSection onBookClick={handleBookClick} />

            {/* Stage delivery workflow metrics */}
            <HowItWorks />

            {/* Direct scheduler & Calendly sync module */}
            <CalendlyScheduler />

            {/* Responsive expandable accordions */}
            <FAQ />
          </div>
        ) : (
          /* Sub-Pages handler wrapper */
          <SubPages 
            section={activeSection} 
            onBackToHome={() => handleNavigate('home')} 
            onBookClick={handleBookClick} 
          />
        )}
      </main>

      {/* 3. Infinite Footer */}
      <Footer onNavigate={handleNavigate} />
      
    </div>
  );
}
