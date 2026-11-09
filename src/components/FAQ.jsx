import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What types of manuscripts do you scout and evaluate?",
    answer: "We scout Fiction (Fantasy, Sci-Fi, Thriller, Romance, Literary), Non-Fiction (Memoirs, Business), and Young Adult titles evaluated for market readiness and agent appeal."
  },
  {
    question: "How does the direct Gmail submission process work?",
    answer: "Authors submit their query packages, book titles, and synopses directly through our intake form, which routes straight to Mercy Gracious at mercyygracious@gmail.com for expert review."
  },
  {
    question: "Do I retain full intellectual property ownership of my book?",
    answer: "Yes, absolutely 100%. You retain all copyrights, rights, and creative control over your work at every stage of scouting and publishing."
  },
  {
    question: "What happens after I submit my manuscript?",
    answer: "Mercy Gracious and the scouting team review your submission details within 24–48 hours to assess market positioning, visibility index, and next steps."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white" id="faq">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-amber-400/10 rounded-full border border-amber-400/20 inline-flex items-center gap-1.5 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" /> Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            FAQ
          </h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base">
            Everything you need to know about manuscript scouting, visibility campaigns, and direct Gmail reviews.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                    <span className="font-bold text-white text-base sm:text-lg">{faq.question}</span>
                  </div>
                  <div className="p-2 bg-slate-700/50 rounded-xl text-amber-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base font-medium leading-relaxed border-t border-slate-700/50 bg-slate-900/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}