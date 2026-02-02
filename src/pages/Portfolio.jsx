import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Hero } from "../components/Hero";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative transition-colors duration-500 bg-[#020617] font-display text-slate-100 antialiased selection:bg-[#9987f1]/30 overflow-hidden">
      
      {/* 1. ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes backgroundFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .bg-mesh {
          background: radial-gradient(circle at 50% 50%, rgba(153, 135, 241, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.05) 0%, transparent 30%);
          background-size: 200% 200%;
          animation: backgroundFlow 15s ease infinite;
        }
      `}</style>

      {/* 2. DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 bg-mesh z-0 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 flex flex-col items-center pt-32 pb-20">
        <div className="max-w-[1024px] w-full px-6">

          {/* Hero Section with fade-in */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Hero />
          </div>

          {/* Excellence Cards */}
          <section className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              ["trending_up", "Scalable Architecture", "Systems that grow with your users."],
              ["palette", "Modern UI/UX", "Glassmorphism + smooth interactions."],
              ["speed", "Performant Code", "Optimized APIs and fast responses."]
            ].map(([icon, title, desc], index) => (
              <div 
                key={title} 
                className="animate-fade-in bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group transition-all duration-500 hover:border-[#9987f1]/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-[#9987f1]/10"
                style={{ 
                  animationDelay: `${0.4 + (index * 0.2)}s`,
                  // Adding floating effect to individual cards
                }}
              >
                <div className="relative">
                  <div className="bg-[#9987f1]/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#9987f1] group-hover:scale-110 transition-all duration-500 animate-float"
                       style={{ animationDelay: `${index * 0.5}s` }}>
                    <span className="material-symbols-outlined text-[#9987f1] group-hover:text-white text-3xl">
                      {icon}
                    </span>
                  </div>
                  
                  {/* Subtle glow behind icon on hover */}
                  <div className="absolute inset-0 bg-[#9987f1]/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#9987f1]">
                  {title}
                </h3>
                <p className="text-slate-400 mt-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {desc}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}