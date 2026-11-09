import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Process from './components/Process';
import BookFinder from './components/BookFinder';
import CaseStudies from './components/CaseStudies';
import ReadinessQuiz from './components/ReadinessQuiz';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import IntakeForm from './components/IntakeForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <BookFinder />
      <CaseStudies />
      <ReadinessQuiz />
      <Testimonials />
      <FAQ />
      <IntakeForm />
      
      <footer className="bg-slate-950 text-slate-400 py-10 px-6 text-center text-xs border-t border-slate-900 space-y-2">
        <p>© {new Date().getFullYear()} Mercy Gracious Expert Scouting & Visibility. All rights reserved.</p>
        <p className="text-slate-500">Submissions route directly to <span className="text-amber-400 font-bold">mercyygracious@gmail.com</span>.</p>
      </footer>
    </div>
  );
}