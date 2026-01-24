import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[#f8fafc] dark:bg-[#0f172a] font-display text-slate-900 dark:text-slate-100 antialiased selection:bg-[#4b2bee]/30">
      
      {/* Theme Toggle Floating Button */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-white dark:bg-slate-800 text-[#4b2bee] shadow-xl hover:scale-110 active:scale-95 transition-all border border-slate-200 dark:border-slate-700"
        aria-label="Toggle Theme"
      >
        <span className="material-symbols-outlined flex items-center justify-center">
          {darkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>

      <Navbar />

      <main className="flex flex-col items-center pt-32 pb-20">
        <div className="max-w-[1024px] w-full px-6">

          {/* Hero Section */}
          <section className="relative py-24 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
            {/* Background Glows */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${darkMode ? 'opacity-40' : 'opacity-10'}`}>
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4b2bee] rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-8 px-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4b2bee]/10 border border-[#4b2bee]/20 text-[#4b2bee] text-xs font-bold uppercase tracking-widest transition-colors">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4b2bee] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4b2bee]" />
                </span>
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                MERN Stack Developer <br /> building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b2bee] via-purple-500 to-indigo-400">
                  real products
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                Specializing in scalable full-stack applications with high-performance React frontends and robust Node.js backends.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-4">
                <NavLink to='/projects' className="flex items-center gap-2 h-14 px-10 rounded-2xl bg-[#4b2bee] text-white font-bold hover:shadow-lg hover:shadow-[#4b2bee]/40 hover:-translate-y-1 active:translate-y-0 transition-all">
                  View Projects
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </NavLink>
                <NavLink to='/contact' className="h-14 px-10 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 backdrop-blur-md font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all">
                  Contact Me
                </NavLink>
              </div>
            </div>
          </section>

          {/* Excellence Cards */}
          <section className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              ["trending_up", "Scalable Architecture", "Systems that grow with your users."],
              ["palette", "Modern UI/UX", "Glassmorphism + smooth interactions."],
              ["speed", "Performant Code", "Optimized APIs and fast responses."]
            ].map(([icon, title, desc]) => (
              <div 
                key={title} 
                className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 group transition-all duration-300 hover:border-[#4b2bee]/50 hover:shadow-xl hover:shadow-[#4b2bee]/5"
              >
                <div className="bg-[#4b2bee]/10 dark:bg-[#4b2bee]/20 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#4b2bee] group-hover:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#4b2bee] group-hover:text-white text-3xl">{icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}