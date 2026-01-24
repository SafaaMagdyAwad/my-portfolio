export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all">
      <div className="w-full max-w-[1024px]">
        {/* Adaptive Glass Effect */}
        <header className="backdrop-blur-md bg-white/70 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-between px-6 py-3 shadow-lg dark:shadow-none transition-colors duration-300">
          
          <div className="flex items-center gap-3">
            <div className="bg-[#4b2bee] p-1.5 rounded-lg flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[24px] text-white">terminal</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Safaa Magdy</h2>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {[{title: "About", href: "/#about"}, {title: "Projects", href: "/projects"}, {title: "Contact", href: "/contact"}].map((link) => (
              <a 
                key={link} 
                href={typeof link === 'object' ? link.href : '#'} 
                className="text-slate-600 dark:text-white/70 hover:text-[#4b2bee] dark:hover:text-white text-sm font-medium transition-colors"
              >
                {typeof link === 'object' ? link.title : link}
              </a>
            ))}
            {/* on click redirect to watsapp with message */}
            <button onClick={() => window.open("https://wa.me/+201067605447?text=Hello%20Safaa,%20I%20would%20like%20to%20hire%20you.", "_blank")} className="rounded-xl h-10 px-5 bg-[#4b2bee] text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#4b2bee]/20">
              Hire Me
            </button>
          </div>

          <span className="md:hidden material-symbols-outlined text-slate-900 dark:text-white cursor-pointer">menu</span>
        </header>
      </div>
    </nav>
  );
}