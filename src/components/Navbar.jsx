import React from 'react';
import { Sparkles } from 'lucide-react';
import MercyLogo from '../assets/logo.jpg'; 

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={MercyLogo} alt="Mercy Gracious Logo" className="w-12 h-12 rounded-full object-cover border border-amber-300 shadow-sm" />
          <div className="flex flex-col">
            <span className="font-black text-xl text-slate-900 tracking-tight">
              Mercy <span className="text-amber-500">Gracious</span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Expert Scouting & Visibility</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
          <a href="#book-finder" className="hover:text-amber-600 transition-colors">Book Finder</a>
          <a href="#quiz" className="hover:text-amber-600 transition-colors">Readiness Quiz</a>
          <a href="#testimonials" className="hover:text-amber-600 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-amber-600 transition-colors">FAQ</a>
        </nav>

        {/* CTA Button */}
        <a 
          href="#intake" 
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-amber-400/20 hover:scale-105"
        >
          <Sparkles className="w-4 h-4 fill-slate-950" />
          Request Consultation
        </a>
      </div>
    </header>
  );
}