import React, { useState } from 'react';
import { Sparkles, CheckCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';

const quizSteps = [
  {
    id: 1,
    question: "What stage is your manuscript currently in?",
    options: [
      { text: "First Draft / In Progress", score: 10 },
      { text: "Completed & Self-Edited", score: 20 },
      { text: "Professionally Edited & Formatted", score: 30 },
      { text: "Already Published / Seeking Wider Reach", score: 25 }
    ]
  },
  {
    id: 2,
    question: "What is your primary publishing goal?",
    options: [
      { text: "Traditional Publishing / Agent Representation", score: 25 },
      { text: "Independent Bestseller Launch (KDP / Ingram)", score: 25 },
      { text: "Film Adaptation & Global Media Rights", score: 30 },
      { text: "Building Targeted Reader & ARC Communities", score: 25 }
    ]
  },
  {
    id: 3,
    question: "How targeted is your reader audience definition?",
    options: [
      { text: "Broad / General Audience", score: 10 },
      { text: "Defined Genre (Romance, Sci-Fi, Business, etc.)", score: 20 },
      { text: "Niche Community with Verified Buyer Intent", score: 30 }
    ]
  }
];

export default function ReadinessQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (score, idx) => {
    setSelectedOption(idx);
    setTimeout(() => {
      const nextScore = totalScore + score;
      setTotalScore(nextScore);
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOption(null);
      } else {
        setIsFinished(true);
      }
    }, 350); // smooth delay for visual feedback
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setTotalScore(0);
    setIsFinished(false);
    setSelectedOption(null);
  };

  // Calculate readiness grade
  const getReadinessFeedback = (score) => {
    if (score >= 80) return { title: "Publisher & Market Ready! 🚀", desc: "Your manuscript shows exceptional alignment with current literary standards. Mercy Gracious can help position you immediately for high-level agent pitching." };
    if (score >= 60) return { title: "High Potential with Minor Polish ✨", desc: "Your book has strong foundations. With targeted audience mapping and a professional pitch kit, you're ready for wide visibility." };
    return { title: "Building Foundation 📚", desc: "You're on the right track! A professional editorial review and market positioning strategy will elevate your readiness score." };
  };

  const feedback = getReadinessFeedback(totalScore);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/40 relative overflow-hidden" id="quiz">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 bg-amber-100 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Assessment
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Check Your Publishing Readiness Score
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base">
            Take our 60-second interactive audit designed under the guidance of Mercy Gracious.
          </p>
        </div>

        {/* Quiz Container with Smooth Transitions */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-amber-200/80 transition-all duration-500 relative">
          
          {!isFinished ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4">
                <span>QUESTION {currentStep + 1} OF {quizSteps.length}</span>
                <span className="text-amber-600">{Math.round(((currentStep + 1) / quizSteps.length) * 100)}% Completed</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-amber-400 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                ></div>
              </div>

              {/* Question */}
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 transition-all duration-300">
                {quizSteps[currentStep].question}
              </h3>

              {/* Options Grid with hover animations */}
              <div className="space-y-3.5">
                {quizSteps[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score, idx)}
                    className={`w-full text-left p-4 md:p-5 rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 flex items-center justify-between border group ${
                      selectedOption === idx 
                        ? 'bg-amber-400 text-slate-950 border-amber-500 scale-[1.02] shadow-md' 
                        : 'bg-slate-50/80 hover:bg-amber-50 text-slate-800 border-slate-200/80 hover:border-amber-300 hover:translate-x-1'
                    }`}
                  >
                    <span>{option.text}</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${selectedOption === idx ? 'translate-x-1 text-slate-950' : 'text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1'}`} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results Screen with smooth fade-in animation */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                  Audit Evaluation Complete
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-3">
                  Your Score: <span className="text-amber-500">{totalScore}/85</span>
                </h3>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 max-w-lg mx-auto space-y-2">
                <h4 className="font-extrabold text-slate-900 text-lg">{feedback.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{feedback.desc}</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <a
                  href="#intake"
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-400/30 hover:scale-105"
                >
                  Request Full Audit with Mercy Gracious
                </a>
                <button
                  onClick={resetQuiz}
                  className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-xl transition-all"
                >
                  <RotateCcw className="w-4 h-4" /> Retake Quiz
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}