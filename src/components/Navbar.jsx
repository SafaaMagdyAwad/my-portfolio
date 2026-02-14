import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const navLinks = [
    { title: "About", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Skills", href: "/skills" },
    { title: "Education", href: "/education" },
  ];

  // Detect current path + hash
  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };

    updatePath();
    window.addEventListener("hashchange", updatePath);
    window.addEventListener("popstate", updatePath);

    return () => {
      window.removeEventListener("hashchange", updatePath);
      window.removeEventListener("popstate", updatePath);
    };
  }, []);
  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
      {/* ELECTRIC KEYFRAMES */}
      <style>{`
        @keyframes border-glow {
          0%, 100% { border-color: rgba(153, 135, 241, 0.2); box-shadow: 0 0 0px rgba(153, 135, 241, 0); }
          50% { border-color: rgba(153, 135, 241, 0.6); box-shadow: 0 0 15px rgba(153, 135, 241, 0.1); }
        }
        .electric-border {
          animation: border-glow 4s infinite ease-in-out;
        }
      `}</style>

      <div className="w-full max-w-[1024px] relative">
        <header className="electric-border backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl flex items-center justify-between px-6 py-3 transition-all duration-300">

          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative p-1 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="absolute inset-0 bg-[#9987f1] blur-md opacity-20 group-hover:opacity-50 transition-opacity" />
              <img src="LOGO.png" width={45} height={45} alt="Logo" className="relative z-10" />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Safaa Magdy
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group
                    ${isActive
                      ? "text-[#9987f1]"
                      : "text-white/70 hover:text-[#9987f1]"
                    }`}
                >
                  {link.title}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#9987f1] transition-all
                      ${isActive
                        ? "w-full shadow-[0_0_8px_#9987f1]"
                        : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              );
            })}
            <NavLink
              to="/contact"
              className={({ isActive }) =>`relative flex items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-[#9987f1] text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(153,135,241,0.4)] transition-all active:scale-95 ${isActive
                  ? "bg-[#9987f1] text-white shadow-[0_0_20px_rgba(153,135,241,0.6)]"
                  : "bg-[#9987f1] text-white hover:shadow-[0_0_20px_rgba(153,135,241,0.4)]"
                }`}
            >
              Hire Me
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1"
          >
            <span className="material-symbols-outlined !text-3xl transition-transform active:scale-75">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </header>

        {/* Mobile Menu */}
        <div
          className={`
          absolute top-full left-0 right-0 mt-3 p-4 
          bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl
          flex flex-col gap-4 transition-all duration-300 origin-top
          md:hidden ${isOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
            }
        `}
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;

            return (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-xl transition-all font-medium border-l-2
                  ${isActive
                    ? "text-[#9987f1] border-[#9987f1] bg-white/5"
                    : "text-white/80 hover:text-[#9987f1] border-transparent hover:border-[#9987f1]"
                  }`}
              >
                {link.title}
              </a>
            );
          })}
          <NavLink
            to="/contact"
            className={({ isActive }) =>`w-full py-4 bg-[#9987f1] text-white rounded-xl font-bold flex items-center justify-center gap-2 ${isActive
                ? "bg-[#9987f1] text-white shadow-[0_0_20px_rgba(153,135,241,0.6)]"
                : "bg-[#9987f1] text-white hover:shadow-[0_0_20px_rgba(153,135,241,0.4)]"
              }`}
          >
            <span className="material-symbols-outlined text-sm">bolt</span>
            Hire Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
