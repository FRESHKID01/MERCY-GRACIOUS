import React from 'react';
import { ShieldCheck, Award, Globe, CheckCircle } from 'lucide-react';

export default function TrustStrip() {
  const highlights = [
    { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, title: "100% Copyright Retention", desc: "You retain all rights to your work" },
    { icon: <Globe className="w-5 h-5 text-amber-400" />, title: "Direct Gmail Scouting", desc: "mercyygracious@gmail.com reviews" },
    { icon: <Award className="w-5 h-5 text-amber-400" />, title: "Indie & Trad Networks", desc: "Connected with publishing imprints" },
    { icon: <CheckCircle className="w-5 h-5 text-amber-400" />, title: "Verified Track Record", desc: "Backed by 200+ Amazon reviews" },
  ];

  return (
    <section className="bg-slate-950 border-t border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-sm">
            <div className="p-3 bg-amber-400/10 rounded-xl border border-amber-400/20 shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="font-black text-sm text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}