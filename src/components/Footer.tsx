import React from 'react';
import { ActiveSection } from '../types';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerLinks = [
    { label: 'Home', value: 'home' as ActiveSection, href: '/' },
    { label: 'About', value: 'about' as ActiveSection, href: '/about' },
    { label: 'Work', value: 'work' as ActiveSection, href: '/examples' },
    { label: 'Terms', value: 'terms' as ActiveSection, href: '/terms' },
    { label: 'Privacy', value: 'privacy' as ActiveSection, href: '/privacy' },
    { label: 'Refunds', value: 'refunds' as ActiveSection, href: '/refund-policy' }
  ];

  return (
    <footer className="bg-black text-white/50 py-12 px-4 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f97d11] to-[#ea580c] flex items-center justify-center text-white font-black text-xs tracking-tighter">
            CS
          </div>
          <p className="text-sm font-extrabold text-white">
            Concrete Scaling
          </p>
        </div>

        {/* Links flow */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          {footerLinks.map((link) => (
            <a 
              key={link.value}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.value);
              }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Corporate line */}
        <p className="text-xs text-center md:text-right">
          © 2026 Concrete Scaling. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
