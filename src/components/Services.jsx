import React from 'react';
import { Mail, Search, FileText, Megaphone, Compass, Award } from 'lucide-react';

const servicesList = [
  {
    num: "01",
    title: "Direct Gmail Manuscript Scouting",
    desc: "Authors submit their query packages and manuscripts directly via Gmail (mercyygracious@gmail.com) for expert hands-on evaluation.",
    icon: Mail
  },
  {
    num: "02",
    title: "Manuscript & Market Audit",
    desc: "Comprehensive evaluation of your book's market positioning, genre alignment, reader demand index, and competitive edge.",
    icon: Search
  },
  {
    num: "03",
    title: "Publisher & Literary Agent Pitching",
    desc: "Crafting professional query packages, synopses, and tailored pitch portfolios to place your book directly in front of target imprints.",
    icon: FileText
  },
  {
    num: "04",
    title: "Author Visibility & Launch Campaign",
    desc: "Executing strategic ARC (Advance Reader Copy) distribution, targeted digital visibility, and promotional book tours.",
    icon: Megaphone
  },
  {
    num: "05",
    title: "Genre & Target Audience Mapping",
    desc: "Identifying precise reader communities and demographics most likely to champion your work and drive organic reviews.",
    icon: Compass
  },
  {
    num: "06",
    title: "Film & Media Rights Assessment",
    desc: "Evaluating narrative adaptability and pitching high-potential titles for secondary adaptation markets.",
    icon: Award
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-amber-100 rounded-full inline-block shadow-sm">
            Expert Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Book Scouting & Visibility Services
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Designed and personally supervised by Mercy Gracious—scouting manuscripts directly through email to take your book from draft to market success.
          </p>
        </div>

        {/* Services Grid with Smooth Hover Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-amber-500/30 group-hover:text-amber-500 transition-colors">
                      {item.num}
                    </span>
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                  <span>Explore Offering</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
