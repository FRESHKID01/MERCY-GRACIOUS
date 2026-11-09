import React, { useState } from 'react';
import { Search, ExternalLink, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

const platforms = [
  { 
    name: 'Amazon', 
    badge: '🛒', 
    getUrl: (query) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}`, 
    color: 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-500' 
  },
  { 
    name: 'Goodreads', 
    badge: '📚', 
    getUrl: (query) => `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`, 
    color: 'bg-slate-900 hover:bg-slate-950 text-white border-slate-800' 
  },
  { 
    name: 'Barnes & Noble', 
    badge: '📖', 
    getUrl: (query) => `https://www.barnesandnoble.com/s/${encodeURIComponent(query)}`, 
    color: 'bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-800' 
  },
  { 
    name: 'Google Books', 
    badge: '🌐', 
    getUrl: (query) => `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(query)}`, 
    color: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-700' 
  }
];

export default function BookFinder() {
  const [bookTitle, setBookTitle] = useState('');

  const handleSearch = (e, getUrl) => {
    e.preventDefault();
    if (!bookTitle.trim()) return;
    const url = getUrl(bookTitle);
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-200" id="book-finder">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-amber-100 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Verified Platform Redirect
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Your Book Across Trusted Literary Networks
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base max-w-lg mx-auto">
            Type any book title or keyword below, then select an official platform to search securely.
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80 space-y-6 relative overflow-hidden">
          
          {/* Trust Banner */}
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Secure Redirect Guarantee: Links connect directly to official verified publisher indexes.</span>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" /> Enter Book Title or Keywords
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                placeholder="e.g. The Midnight Library, Sci-Fi Thriller..."
                className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-12 pr-4 py-4 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Verified Platform:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {platforms.map((platform, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleSearch(e, platform.getUrl)}
                  disabled={!bookTitle.trim()}
                  className={`flex items-center justify-between p-4 rounded-2xl font-extrabold text-sm transition-all shadow-sm duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] border ${platform.color}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl p-1 bg-white/10 rounded-lg">{platform.badge}</span>
                    <span>Search on {platform.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </button>
              ))}
            </div>

            {!bookTitle.trim() && (
              <p className="text-center text-xs text-amber-600 font-semibold pt-2">
                ↑ Type a book title above to activate verified platform redirection.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
