import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function FeaturedProject() {
  return (
    <div className="dark bg-[#f6f6f8] dark:bg-[#131022] text-slate-900 dark:text-white min-h-screen font-display">
      {/* Navigation */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-slate-500 dark:text-slate-400 text-sm">
          <a className="hover:text-[#4b2bee]" href="#">Portfolio</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 dark:text-white font-medium">Nexus Deep Dive</span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative group">
            <div className="absolute -inset-20 bg-[#4b2bee]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[580px] rounded-xl border-4 border-slate-800 bg-slate-900 p-2 shadow-2xl glow-accent overflow-hidden">
              <div className="aspect-[16/10] bg-slate-800 rounded-md overflow-hidden relative">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCCHp5MwdG6N4Ggf-vpWE9tTj130ZqnifeG3RTXEDXjJzaYERqIwElgdACdhTzDOLevK_d56Bsr4A_Bm4uJr9ldPNjf2dVpKu6IQcfJVdCVgL6mDSt1Uvto79Z5UHoqs_thYm_e6IPhSGMmCYxguQ8SkLQ7WZwtSxNu9MNAAGghGABDdgc4ZKFDTw8m2WiQ0ZuFwPidD-nweDCF3ag7BVCiI2LTEVjBONKIm_xefwEZ-tCx1bIIwhF9qbvD05myDVVBA80Z_x7UWnd')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131022]/80 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-white/70 tracking-widest uppercase">
                      Live Demo Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4 tracking-tighter">
                Nexus: Scalable <br />
                <span className="text-[#4b2bee]">E-Commerce Engine</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                High-performance MERN application with JWT authentication and
                optimized MongoDB indexing.
              </p>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-3">
              {["React 18", "MongoDB", "Express", "JWT Auth"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-[#4b2bee]/10 border border-[#4b2bee]/20 text-xs font-bold uppercase tracking-wider text-[#4b2bee]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4b2bee] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#4b2bee]/20 transition-all">
                View Live Demo
              </button>
              <button className="bg-slate-200 dark:bg-white/5 px-8 py-4 rounded-xl font-bold transition-all">
                GitHub Repo
              </button>
            </div>
          </div>
        </div>

       
      </main>
      <Footer />
    </div>
  );
}
