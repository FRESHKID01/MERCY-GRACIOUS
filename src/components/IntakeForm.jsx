import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, BookOpen, User, Mail, FileText, Layers, Sparkles } from 'lucide-react';

export default function IntakeForm() {
  const [state, handleSubmit] = useForm("xrppwyky");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden" id="intake">
      {/* Animated Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest px-4 py-2 bg-amber-400/10 rounded-full border border-amber-400/20 inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-spin" /> Direct Consultation & Review
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Submit Your Manuscript to Mercy Gracious
          </h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base max-w-xl mx-auto">
            Get your work evaluated for market visibility, agent pitching, and professional publishing roadmaps delivered straight to <span className="text-amber-400 font-bold">mercyygracious@gmail.com</span>.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-800/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-700/80 shadow-2xl transition-all duration-300">
          {!state.succeeded ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Author Name */}
                <div className="space-y-2">
                  <label htmlFor="authorName" className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-400" /> Your Full Name
                  </label>
                  <input
                    id="authorName"
                    type="text"
                    name="authorName"
                    required
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 font-medium focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                  />
                  <ValidationError prefix="Name" field="authorName" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400" /> Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="author@example.com"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 font-medium focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Book Title */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="bookTitle" className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" /> Book Title
                  </label>
                  <input
                    id="bookTitle"
                    type="text"
                    name="bookTitle"
                    required
                    placeholder="e.g. The Chronos Protocol"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 font-medium focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                  />
                  <ValidationError prefix="Book Title" field="bookTitle" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>

                {/* Genre Selector */}
                <div className="space-y-2">
                  <label htmlFor="genre" className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" /> Genre
                  </label>
                  <select
                    id="genre"
                    name="genre"
                    defaultValue="Fiction"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-white font-medium focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="Fiction">Fiction / Sci-Fi / Fantasy</option>
                    <option value="Romance">Romance & Drama</option>
                    <option value="Non-Fiction">Non-Fiction & Memoir</option>
                    <option value="Business">Business & Self-Help</option>
                    <option value="YA">Young Adult (YA)</option>
                  </select>
                </div>
              </div>

              {/* Message / Synopsis */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> Brief Synopsis or Publishing Goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Share a short summary of your book or what publishing milestone you are aiming for..."
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 font-medium focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none text-sm sm:text-base"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-50"
              >
                {state.submitting ? (
                  <span>Sending to Mercy Gracious...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Submit Manuscript for Review
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-400/40 shadow-inner">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white">Manuscript Sent Successfully!</h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto font-medium">
                  Thank you! Your details have been routed directly to <span className="text-amber-400 font-bold">mercyygracious@gmail.com</span>. Mercy will review your submission shortly.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
