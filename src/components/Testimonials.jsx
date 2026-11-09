import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rostova",
    book: "The Chronos Protocol",
    genre: "Sci-Fi Debut",
    reviews: "214 Verified Amazon Reviews (4.9 / 5.0)",
    quote: "Submitting my manuscript directly to Mercy via Gmail was seamless. Her market audit and query package refinement got my sci-fi novel in front of indie publishers and secured 200+ launch reviews.",
    badge: "Signed with Indie Imprint"
  },
  {
    name: "Marcus Vance",
    book: "Shadows of Elysium",
    genre: "Epic Fantasy",
    reviews: "340 Verified Amazon Reviews (4.8 / 5.0)",
    quote: "The target audience mapping was a complete game-changer. Mercy pinpointed exactly where my fantasy readers hang out, driving our launch straight past the 300-review milestone.",
    badge: "#1 Category Bestseller"
  },
  {
    name: "Sarah Jenkins",
    book: "The Executive Mindset",
    genre: "Business & Leadership",
    reviews: "189 Amazon Reviews (4.9 / 5.0)",
    quote: "Mercy's editorial polish and back-cover blurb restructuring transformed my raw draft into a sharp, professional business guide now sitting comfortably with nearly 200 reader ratings.",
    badge: "Expanded Global Reach"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-amber-100 rounded-full inline-block shadow-sm">
            Social Proof & Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Authors Worldwide
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Read how authors collaborated with Mercy Gracious to successfully scout, position, and launch books backed by hundreds of verified Amazon reader reviews.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between relative group hover:border-amber-400/50 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Quote Icon Background Effect */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800 pointer-events-none group-hover:text-amber-500/20 transition-colors" />

              <div className="space-y-6 relative z-10">
                {/* Star Ratings & Verified Review Count */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                      ✓ Verified Track Record
                    </span>
                  </div>
                  <p className="text-xs font-extrabold text-amber-400 tracking-wide">
                    📊 {item.reviews}
                  </p>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-black text-white text-base">{item.name}</h4>
                  <p className="text-xs text-amber-400 font-bold">"{item.book}"</p>
                  <p className="text-[11px] text-slate-400 font-medium">{item.genre}</p>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-[10px] font-bold rounded-full">
                    {item.badge}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}