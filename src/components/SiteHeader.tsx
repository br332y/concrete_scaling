import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveSection } from '../types';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
  onBookClick: () => void;
}

export default function SiteHeader({ activeSection, onNavigate, onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' as ActiveSection },
    { label: 'About', value: 'about' as ActiveSection },
    { label: 'Work', value: 'work' as ActiveSection },
  ];

  const handleNavClick = (value: ActiveSection) => {
    onNavigate(value);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/[0.06]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-[72px] items-center justify-between">
          
          {/* Brand Logo and Text wrapper */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center shrink-0 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
            aria-label="Concrete Scaling Home"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#f97d11] to-[#ea580c] text-black font-black text-sm tracking-tighter">
                CS
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-white font-black text-sm md:text-base tracking-tight uppercase">
                  Concrete<span className="text-[#f97d11]">Scaling</span>
                </span>
                <span className="text-[#f97d11]/80 text-[8px] font-bold tracking-widest uppercase mt-0.5">
                  digital growth partner
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              className={`text-sm font-medium transition-colors ${activeSection === 'home' || activeSection === 'about' || activeSection === 'work' ? 'text-white' : 'text-white/60 hover:text-white'}`}
            >
              Home
            </a>
            <a 
              href="/about" 
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
              className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-[#f97d11] font-bold' : 'text-white/60 hover:text-white'}`}
            >
              About
            </a>
            <a 
              href="/examples" 
              onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}
              className={`text-sm font-medium transition-colors ${activeSection === 'work' ? 'text-[#f97d11] font-bold' : 'text-white/60 hover:text-white'}`}
            >
              Work
            </a>
          </nav>

          {/* Right Action Button and Menu Toggle */}
          <div className="flex items-center gap-2">
            <a 
              href="/start"
              onClick={(e) => { e.preventDefault(); onBookClick(); }}
              className="inline-flex items-center justify-center whitespace-nowrap text-xs md:text-sm transition-all shrink-0 outline-none h-8 md:h-9 rounded-lg px-4 bg-gradient-to-r from-[#f97d11] to-[#ea580c] text-white hover:brightness-110 font-extrabold cursor-pointer shadow-md shadow-orange-500/10"
            >
              Book a Call
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:bg-white/10 md:hidden focus:outline-none cursor-pointer"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-black overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.value
                      ? 'bg-orange-950/45 text-orange-450 font-bold border-l-4 border-orange-500'
                      : 'text-white/70 hover:bg-white/[0.03] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => {
                    onBookClick();
                    setIsOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center text-sm font-extrabold bg-gradient-to-r from-[#f97d11] to-[#ea580c] text-white px-4 py-2.5 rounded-lg shadow-md"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
