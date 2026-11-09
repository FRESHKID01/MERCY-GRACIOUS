import React from 'react';
import { BookOpen, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="case-study">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-amber-100 rounded-full inline-block shadow-sm">
            Featured Author Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            From Debut Manuscript to Bestseller
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            A closer look at how Mercy Gracious partnered with debut authors to achieve publishing breakthroughs.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-bold rounded-full border border-amber-400/30">
                Case Study #01
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">The Chronos Protocol</h3>
              <p className="text-amber-400 font-bold text-sm">Author: Elena Rostova • Sci-Fi Debut</p>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Elena had a finished sci-fi manuscript but struggled with traditional query rejections and zero visibility across online platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800 relative z-10">
              <div>
                <p className="text-2xl font-black text-amber-400">214+</p>
                <p className="text-xs text-slate-400 font-medium">Amazon Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-400">30 Days</p>
                <p className="text-xs text-slate-400 font-medium">To Imprint Deal</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <h4 className="text-xl font-extrabold text-slate-900">How Mercy Gracious Delivered Results:</h4>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base font-medium">
                  <strong>Market Positioning Audit:</strong> Re-aligned the book's core themes to target high-demand sci-fi reader demographics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base font-medium">
                  <strong>Direct Gmail Scouting Package:</strong> Crafted a high-impact pitch package submitted directly through Mercy's professional vetting pipeline.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm sm:text-base font-medium">
                  <strong>Visibility Campaign:</strong> Launched targeted author branding that secured over 200 verified reader reviews within the first month.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="#intake" 
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}