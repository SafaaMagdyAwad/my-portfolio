export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 py-16 text-center transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
          Let’s build something extraordinary.
        </h3>
        <p className="text-slate-500 dark:text-[#9b92c9] mt-2 transition-colors">
          Open for freelance & full-time roles.
        </p>
        
        {/* Optional: Social Icons Area */}
        <div className="flex justify-center gap-6 mt-8">
          {['github', 'linkedin', 'mail'].map((icon) => (
             <span key={icon} className="material-symbols-outlined text-slate-400 hover:text-[#4b2bee] dark:text-white/30 dark:hover:text-white cursor-pointer transition-colors">
               {icon}
             </span>
          ))}
        </div>

        <p className="text-slate-400 dark:text-[#9b92c9]/40 text-sm mt-8 transition-colors">
          © {new Date().getFullYear()} AlexDev — Built with MERN & Tailwind
        </p>
      </div>
    </footer>
  );
}