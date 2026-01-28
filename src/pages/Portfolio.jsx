import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Hero } from "../components/Hero";

export default function Portfolio() {
  

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[#0f172a] font-display text-slate-100 antialiased selection:bg-[#9987f1]/30">
      
      

      <Navbar />

      <main className="flex flex-col items-center pt-32 pb-20">
        <div className="max-w-[1024px] w-full px-6">

          {/* Hero Section */}
          <Hero />

          {/* Excellence Cards */}
          <section className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              ["trending_up", "Scalable Architecture", "Systems that grow with your users."],
              ["palette", "Modern UI/UX", "Glassmorphism + smooth interactions."],
              ["speed", "Performant Code", "Optimized APIs and fast responses."]
            ].map(([icon, title, desc]) => (
              <div 
                key={title} 
                className="bg-white/5 
                backdrop-blur-xl border border-white/10 rounded-3xl p-8 group transition-all duration-300 hover:border-[#9987f1]/50 hover:shadow-xl hover:shadow-[#9987f1]/5"
              >
                <div className="bg-[#9987f1]/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#9987f1] group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#9987f1] group-hover:text-white text-3xl">{icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="text-slate-400 mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}