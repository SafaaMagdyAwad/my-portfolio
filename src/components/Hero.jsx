import { NavLink } from "react-router-dom";

export function Hero() {
    return (
        <section className="relative py-24 rounded-[2.5rem] bg-slate-900/50 border-white/10 overflow-hidden shadow-2xl shadow-none">
            {/* Background Glows */}
            <div className={`absolute inset-0 transition-opacity duration-700  'opacity-40' }`}>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#9987f1] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center gap-8 px-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9987f1]/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest transition-colors">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />

                    </span>
                    Available for new projects
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                    MERN Stack Developer <br /> building{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9987f1] via-purple-500 to-indigo-400">
                        real products
                    </span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                    Specializing in scalable full-stack applications with high-performance React frontends and robust Node.js backends.
                </p>

                <div className="flex flex-wrap justify-center gap-5 mt-4">
                    <NavLink to='/projects' className="flex items-center gap-2 h-14 px-10 rounded-2xl bg-[#9987f1] text-white font-bold hover:shadow-lg hover:shadow-[#9987f1]/40 hover:-translate-y-1 active:translate-y-0 transition-all">
                        View Projects
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </NavLink>
                    <NavLink to='/contact' className="flex items-center gap-2 h-14 px-10 rounded-2xl bg-white text-[#9987f1] font-bold hover:shadow-lg hover:shadow-white/40 hover:-translate-y-1 active:translate-y-0 transition-all">
                        Contact Me
                    </NavLink>
                </div>
            </div>
        </section>
    )
}