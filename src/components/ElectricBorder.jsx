import './../styless/electricborder.css'
export function ElectricBorder({ p, index }) {
    return (

        <div className="relative group p-[2px] rounded-3xl overflow-hidden bg-[#050810] transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)]">
            {/* 1. DYNAMIC CSS - 10 Sparks Logic */}


            {/* 2. THE 10 SPARKS - Variety of colors, speeds, and sizes */}
            {/* Cyan/Blue Sparks */}
            <div className="electric-spark" style={{ '--dur': '5s', '--delay': '0s', '--w': '100px', '--color': '#22d3ee' }} />
            <div className="electric-spark" style={{ '--dur': '4s', '--delay': '-1s', '--w': '150px', '--color': '#0ea5e9' }} />
            <div className="electric-spark" style={{ '--dur': '6s', '--delay': '-2.5s', '--w': '80px', '--color': '#22d3ee' }} />

            {/* Violet/Purple "Static" Sparks */}
            <div className="electric-spark" style={{ '--dur': '4.5s', '--delay': '-0.5s', '--w': '120px', '--color': '#a855f7' }} />
            <div className="electric-spark" style={{ '--dur': '7s', '--delay': '-3s', '--w': '90px', '--color': '#c084fc' }} />

            {/* White-Hot Sparks */}
            <div className="electric-spark" style={{ '--dur': '3.5s', '--delay': '-1.2s', '--w': '180px', '--color': '#fff' }} />
            <div className="electric-spark" style={{ '--dur': '5.5s', '--delay': '-4s', '--w': '70px', '--color': '#e0f2fe' }} />

            {/* More Blue/Cyan mix */}
            <div className="electric-spark" style={{ '--dur': '4.8s', '--delay': '-2s', '--w': '110px', '--color': '#38bdf8' }} />
            <div className="electric-spark" style={{ '--dur': '6.5s', '--delay': '-5s', '--w': '140px', '--color': '#22d3ee' }} />
            <div className="electric-spark" style={{ '--dur': '3.2s', '--delay': '-0.8s', '--w': '130px', '--color': '#06b6d4' }} />

            {/* 3. CARD CONTENT */}
            <div className="relative z-10 h-full w-full bg-[#0f172a] rounded-[1.4rem] overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-sm">
                        {p.liveDemo &&
                            <a href={p.liveDemo} target="_blank" className="bg-cyan-500 text-white px-5 py-2 rounded-xl text-sm font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">Live Demo</a>
                        }
                        {p.github &&
                            <a href={p.github} target="_blank" className="bg-white/10 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-white/20 transition-all">GitHub</a>
                        }
                    </div>
                </div>

                {/* Text Section */}
                <div className="p-8">
                    <div className="flex gap-2 mb-4 flex-wrap">
                        {p.stack.map((tag) => (
                            <span key={tag} className="text-[10px] uppercase font-black px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{tag}</span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                    <div className="space-y-4 text-sm text-slate-400">
                        {
                            p.problem &&
                            <p><strong className="text-slate-200 block mb-1">Challenge:</strong> {p.problem}</p>
                        }
                        {
                            p.solution &&
                            <p><strong className="text-slate-200 block mb-1">Solution:</strong> {p.solution}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}