import React from 'react';
import { ArrowRight, CheckCircle2, Award, BookCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-white overflow-hidden border-b border-slate-100" id="hero">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Copy & CTA */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200">
            <Zap className="w-3.5 h-3.5 text-amber-600" /> Professional Scouting & Publishing Placement
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
            Your Book Deserves to Be <span className="text-amber-500 underline decoration-amber-300 decoration-wavy underline-offset-4">Discovered.</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            Helping authors transform their books into strategically positioned, expertly scouted, and professional works that reach the right literary channels. Expert guidance by <span className="font-bold text-slate-800">Mercy Gracious</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#intake" 
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-400/20"
            >
              Discuss Your Manuscript
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold px-7 py-3.5 rounded-xl border border-slate-200 transition-all"
            >
              Explore Scouting Services
            </a>
          </div>

          <div className="pt-4 flex items-center gap-6 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-500" /> 100% IP Ownership Retained</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Expert Publisher & Agent Scouting</span>
          </div>
        </div>

        {/* Right Column - Mockup Card */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto p-8 bg-slate-900 rounded-3xl shadow-2xl text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-amber-400 font-bold text-xs tracking-wider uppercase">Scouting Insight</span>
                <h3 className="text-xl font-black mt-1">AUTHOR VISIBILITY REPORT</h3>
              </div>
              <div className="p-3 bg-white/10 text-amber-400 rounded-xl font-bold">
                <Award className="w-6 h-6" />
              </div>
            </div>

            <p className="text-sm text-slate-300 italic">
              "A targeted path that helps your unique work connect with the ideal literary market."
            </p>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/50 flex items-center justify-between">
              <span className="text-xs text-slate-300 font-medium">Market Reach Index</span>
              <span className="text-amber-400 font-black text-xl">96% Accuracy</span>
            </div>
            
            <div className="p-3 bg-amber-400 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-3">
              <BookCheck className="w-5 h-5" />
              <span>Publisher Outreach Ready • Strategy by Mercy Gracious</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}