import './../styless/electricborder.css'

export function ElectricBorder({ p, index }) {
    return (
        /* MOBILE TWEAK: 
           - Added 'active:scale-[0.98]' for touch feedback.
           - Changed rounded-3xl to rounded-2xl for better fit on small screens.
        */
        <div className="relative group p-[1px] md:p-[2px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#050810] transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)] active:scale-[0.98] md:active:scale-100">
            
            {/* THE SPARKS - These remain the same but will now be visible on tap */}
            <div className="electric-spark" style={{ '--dur': '5s', '--delay': '0s', '--w': '100px', '--color': '#22d3ee' }} />
            <div className="electric-spark" style={{ '--dur': '4s', '--delay': '-1s', '--w': '150px', '--color': '#0ea5e9' }} />
            <div className="electric-spark" style={{ '--dur': '4.5s', '--delay': '-0.5s', '--w': '120px', '--color': '#a855f7' }} />
            <div className="electric-spark" style={{ '--dur': '3.5s', '--delay': '-1.2s', '--w': '180px', '--color': '#fff' }} />
            <div className="electric-spark" style={{ '--dur': '3.2s', '--delay': '-0.8s', '--w': '130px', '--color': '#06b6d4' }} />

            {/* CARD CONTENT */}
            <div className="relative z-10 h-full w-full bg-[#0f172a] rounded-[0.9rem] md:rounded-[1.4rem] overflow-hidden flex flex-col">
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                    {/* MOBILE TWEAK: 
                        - Changed opacity-0 to md:opacity-0.
                        - On mobile, these buttons will stay visible or appear on tap.
                    */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/20 md:bg-slate-900/40 md:backdrop-blur-sm">
                        {p.liveDemo &&
                            <a href={p.liveDemo} target="_blank" className="bg-cyan-500 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]">Demo</a>
                        }
                        {p.github &&
                            <a href={p.github} target="_blank" className="bg-white/10 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border border-white/10">GitHub</a>
                        }
                    </div>
                </div>

                {/* Text Section */}
                <div className="p-5 md:p-8">
                    <div className="flex gap-2 mb-3 md:mb-4 flex-wrap">
                        {p.stack.map((tag) => (
                            <span key={tag} className="text-[9px] md:text-[10px] uppercase font-black px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-cyan-400 transition-colors">
                        {p.title}
                    </h3>
                    
                    <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-400">
                        {p.problem &&
                            <p><strong className="text-slate-200 block mb-0.5">Challenge:</strong> {p.problem}</p>
                        }
                        {p.solution &&
                            <p><strong className="text-slate-200 block mb-0.5">Solution:</strong> {p.solution}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}