export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all">
      <div className="w-full max-w-[1024px]">
        {/* Adaptive Glass Effect */}
        <header className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl flex items-center justify-between px-6 py-3 shadow-none transition-colors duration-300">
          
          <div className="flex items-center gap-3">
            <div className=" p-1.5 rounded-lg flex items-center justify-center shadow-lg">
              <span className=""><img src="LOGO.png" width={50} height={50} /></span>
              {/* <span className="font-family-Algerian bg-gradient from #9987f1 to white">
                SM
              </span> */}
            </div>
            <h2 className="text-lg  font-bold text-white">Safaa Magdy</h2>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {[{title: "About", href: "/#about"}, {title: "Projects", href: "/projects"}, {title: "Contact", href: "/contact"}].map((link) => (
              <a 
                key={link} 
                href={typeof link === 'object' ? link.href : '#'} 
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {typeof link === 'object' ? link.title : link}
              </a>
            ))}
            {/* on click redirect to watsapp with message */}
            <button onClick={() => window.open("https://wa.me/+201067605447?text=Hello%20Safaa,%20I%20would%20like%20to%20hire%20you.", "_blank")} className="rounded-xl h-10 px-5 bg-[#9987f1] text-white text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#9987f1]/20">
              Hire Me
            </button>
          </div>

          <span className="md:hidden material-symbols-outlined text-white cursor-pointer">menu</span>
        </header>
      </div>
    </nav>
  );
}