import { NavLink } from "react-router-dom";

export function Hero() {
  const phrase = "I build websites that grow your business";
  const words = phrase.split(" ");

  return (
    <section className="relative py-24 rounded-[2.5rem] bg-[#020617] overflow-hidden shadow-2xl border border-white/10">
      {/* Floating Icons & Background Glows (Unchanged) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[12%] opacity-60 pointer-events-none z-[1] text-7xl text-slate-400 animate-float-slow [filter:drop-shadow(0_0_15px_rgba(255,255,255,0.1))]">
          <span className="material-symbols-outlined !text-7xl">laptop_mac</span>
        </div>
        <div className="absolute bottom-20 left-[18%] opacity-60 pointer-events-none z-[1] text-6xl text-[#9987f1] animate-float-fast [filter:drop-shadow(0_0_15px_rgba(153,135,225,0.3))]">
          <span className="material-symbols-outlined !text-6xl">code</span>
        </div>
        <div className="absolute top-40 right-[15%] opacity-60 pointer-events-none z-[1] text-6xl text-cyan-400 animate-float-slow-7 [filter:drop-shadow(0_0_15px_rgba(34,211,238,0.3))]">
          <span className="material-symbols-outlined !text-6xl">memory</span>
        </div>
      </div>

      <div className="absolute inset-0 opacity-40 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#9987f1] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600 rounded-full blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all">
          <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Available for New Projects
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] max-w-4xl">
          {words.map((word, i) => {
            const isGrow = word.toLowerCase() === "grow";
            return (
              <span
                key={i}
                className={`inline-block opacity-0 ${
                  isGrow
                    ? "bg-gradient-to-r from-[#9987f1] via-cyan-400 to-indigo-400 bg-clip-text text-transparent font-black animate-build-in animate-pulse-grow"
                    : "animate-build-in"
                }`}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  marginRight: "0.25em",
                }}
              >
                {word}
                {word.toLowerCase() === "websites" && <br />}
              </span>
            );
          })}
        </h1>

        {/* Paragraph */}
        <p
          className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed opacity-0 animate-build-in-slow"
          style={{ animationDelay: "1.5s" }}
        >
          I create fast, secure, and easy-to-use web applications. Whether you
          need an online store or a custom management tool, I turn your ideas
          into high-quality digital products.
        </p>

        {/* Action Container */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 opacity-0 animate-build-in-slow"
          style={{ animationDelay: "1.8s" }}
        >
          {/* Main Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/projects"
              className="flex items-center gap-3 h-14 px-8 rounded-2xl bg-[#9987f1] text-white font-bold hover:shadow-[0_0_20px_rgba(153,135,241,0.5)] hover:-translate-y-1 transition-all"
            >
              View My Work
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </NavLink>

            <NavLink
              to="/contact"
              className="flex items-center gap-3 h-14 px-8 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 backdrop-blur-md transition-all"
            >
              Let's Talk
            </NavLink>
          </div>

          {/* Divider for Desktop */}
          <div className="hidden sm:block w-px h-10 bg-white/10 mx-2" />

          {/* Secondary Buttons (GitHub & CV) */}
          <div className="flex items-center gap-4">
            {/* Download CV */}
            <a
              href="/pdf/SafaaMagdyFullstack.pdf"
              download
              className="group flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors"
              title="Download CV"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#9987f1]/50 group-hover:bg-white/10 transition-all">
                <span className="material-symbols-outlined text-xl">download_for_offline</span>
              </div>
              <span className="text-sm hidden lg:inline">Resume</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SafaaMagdyAwad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors"
              title="GitHub Profile"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-white/10 transition-all">
                {/* SVG for GitHub as it looks better than Material Icons */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="text-sm hidden lg:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}