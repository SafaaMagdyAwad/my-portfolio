import "./../styless/electricborder.css";

const Spark = ({ dur, delay, w, color }) => (
  <div
    className="electric-spark"
    style={{
      "--dur": dur,
      "--delay": delay,
      "--w": w,
      "--color": color,
    }}
  />
);

export function ElectricBorder({ p }) {
  return (
    <div className="relative group p-[1px] md:p-[2px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#050810] transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)] active:scale-[0.98] md:active:scale-100">
      
      {/* Sparks */}
      <Spark dur="10s" delay="0s" w="100px" color="#4c0c9a" />
      <Spark dur="9s" delay="-0.1s" w="180px" color="#fff" />
      <Spark dur="8s" delay="-0.2s" w="180px" color="#4c0c9a" />
      <Spark dur="7s" delay="-0.3s" w="180px" color="#fff" />
      {/* <Spark dur="6s" delay="-0.4s" w="180px" color="#4c0c9a" />
      <Spark dur="5s" delay="-0.5s" w="180px" color="#fff" />
      <Spark dur="4s" delay="-0.6s" w="180px" color="#4c0c9a" />
      <Spark dur="3s" delay="-0.7s" w="180px" color="#fff" />
      <Spark dur="2s" delay="-0.8s" w="180px" color="#4c0c9a" />
      <Spark dur="1s" delay="-0.9s" w="180px" color="#fff" /> */}

      {/* Card */}
      <div className="relative z-10 h-full w-full bg-[#0f172a] rounded-[0.9rem] md:rounded-[1.4rem] overflow-hidden flex flex-col">
        
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={`images/${p.image}`}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

          {/* Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/20 md:bg-slate-900/40 md:backdrop-blur-sm">
            {p.liveDemo && (
              <a
                href={p.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Demo
              </a>
            )}

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border border-white/10"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-8">
          {/* Tags */}
          {!!p.stack?.length && (
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {p.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] md:text-[10px] uppercase font-black px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-cyan-400 transition-colors">
            {p.title}
          </h3>

          {/* Text */}
          <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-400">
            {p.problem && (
              <p>
                <strong className="text-slate-200 block mb-0.5">
                  Challenge:
                </strong>
                {p.problem}
              </p>
            )}

            {p.solution && (
              <p>
                <strong className="text-slate-200 block mb-0.5">
                  Solution:
                </strong>
                {p.solution}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
