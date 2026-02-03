import { NavLink } from "react-router-dom";

export function Hero() {
  const phrase = "I build websites that grow your business";
  const words = phrase.split(" ");

  return (
    <section className="relative py-24 rounded-[2.5rem] bg-[#020617] overflow-hidden shadow-2xl border border-white/10">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Laptop */}
        <div
          className="absolute top-20 left-[12%] opacity-60 pointer-events-none z-[1] text-7xl text-slate-400 animate-float-slow
                     [filter:drop-shadow(0_0_15px_var(--glow))]"
          style={{ ["--glow"]: "rgba(255,255,255,0.1)" }}
        >
          <span className="material-symbols-outlined !text-7xl">
            laptop_mac
          </span>
        </div>

        {/* Code */}
        <div
          className="absolute bottom-20 left-[18%] opacity-60 pointer-events-none z-[1] text-6xl text-[#9987f1] animate-float-fast
                     [filter:drop-shadow(0_0_15px_var(--glow))]"
          style={{ ["--glow"]: "rgba(153,135,225,0.3)" }}
        >
          <span className="material-symbols-outlined !text-6xl">code</span>
        </div>

        {/* Memory */}
        <div
          className="absolute top-40 right-[15%] opacity-60 pointer-events-none z-[1] text-6xl text-cyan-400 animate-float-slow-7
                     [filter:drop-shadow(0_0_15px_var(--glow))]"
          style={{ ["--glow"]: "rgba(34,211,238,0.3)" }}
        >
          <span className="material-symbols-outlined !text-6xl">memory</span>
        </div>

        {/* Decorative Brackets */}
        <div className="absolute top-10 right-[30%] text-8xl font-light text-white/5 select-none">
          {"{"}
        </div>
        <div className="absolute bottom-10 left-[30%] text-8xl font-light text-white/5 select-none">
          {"}"}
        </div>
      </div>

      {/* Background Glows */}
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

        {/* Buttons */}
        <div
          className="flex flex-wrap justify-center gap-5 mt-4 opacity-0 animate-build-in-slow"
          style={{ animationDelay: "1.8s" }}
        >
          <NavLink
            to="/projects"
            className="flex items-center gap-3 h-14 px-10 rounded-2xl bg-[#9987f1] text-white font-bold hover:shadow-[0_0_20px_rgba(153,135,241,0.5)] hover:-translate-y-1 transition-all"
          >
            View My Work
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </NavLink>

          <NavLink
            to="/contact"
            className="flex items-center gap-3 h-14 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 backdrop-blur-md transition-all"
          >
            Let's Talk
          </NavLink>
        </div>
      </div>
    </section>
  );
}
