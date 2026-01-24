import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function SkillsAndContact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    // Detect system preference on load
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            "service_hi7ocz3",
            "template_shn9lrc",
            form.current, // Fixed: changed from formRef to form
            "jUG-YiSTnuI9350nj"
        )
            .then(() => {
                setStatus("success");
                form.current.reset();
            })
            .catch(() => setStatus("error"))
            .finally(() => {
                setIsSending(false);
                setTimeout(() => setStatus(""), 5000);
            });
    };

    const skills = [
        { icon: "database", name: "MongoDB" },
        { icon: "settings_ethernet", name: "Express.js" },
        { icon: "deployed_code", name: "React" },
        { icon: "terminal", name: "Node.js" },
        { icon: "palette", name: "Tailwind CSS" },
        { icon: "payments", name: "Stripe" },
        { icon: "api", name: "REST APIs" },
        { icon: "code_blocks", name: "TypeScript" },
    ];

    return (
        <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#0f172a] font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-20">

                {/* ================= SKILLS SECTION ================= */}
                <section className="mb-32 pt-16">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px w-12 bg-[#4b2bee]" />
                        <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#4b2bee]">
                            Technical Arsenal
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-8 transition-all duration-300 hover:border-[#4b2bee] dark:hover:bg-white/10 group"
                            >
                                <span className="material-symbols-outlined text-[#4b2bee] text-[32px] group-hover:scale-110 transition-transform">
                                    {skill.icon}
                                </span>
                                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= CONTACT SECTION ================= */}
                <section id="contact" className="pb-32">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-[#4b2bee]" />
                        <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#4b2bee]">
                            Get in Touch
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Side: Text */}
                        <div className="lg:w-1/2">
                            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
                                Let's build something <br />
                                <span className="text-[#4b2bee] italic">extraordinary.</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-md">
                                Architecting scalable, high-performance MERN applications.
                                Ready for your next big challenge.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: "alternate_email", text: "hello@mernstack.dev" },
                                    { icon: "work", text: "linkedin.com/in/merndev" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#4b2bee] dark:hover:text-white transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#4b2bee]/50 transition-colors">
                                            <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-1/2">
                            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-xl dark:shadow-none backdrop-blur-sm">
                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest ml-1">Name</label>
                                            <input
                                                name="user_name"
                                                required
                                                type="text"
                                                className="w-full bg-slate-50 dark:bg-[#0a0a0c]/50 border border-slate-200 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4b2bee]/20 focus:border-[#4b2bee] transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest ml-1">Email</label>
                                            <input
                                                name="user_email"
                                                required
                                                type="email"
                                                className="w-full bg-slate-50 dark:bg-[#0a0a0c]/50 border border-slate-200 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4b2bee]/20 focus:border-[#4b2bee] transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-widest ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            className="w-full bg-slate-50 dark:bg-[#0a0a0c]/50 border border-slate-200 dark:border-white/10 p-4 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4b2bee]/20 focus:border-[#4b2bee] transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        disabled={isSending}
                                        type="submit"
                                        className="w-full bg-[#4b2bee] hover:bg-[#3a21c2] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-[#4b2bee]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSending ? "Sending..." : "Send Message"}
                                        {!isSending && <span className="material-symbols-outlined text-sm">send</span>}
                                    </button>

                                    {status === "success" && <p className="text-emerald-500 dark:text-emerald-400 text-center text-sm font-medium animate-pulse">✓ Message sent successfully!</p>}
                                    {status === "error" && <p className="text-rose-500 dark:text-rose-400 text-center text-sm font-medium">× Error sending message. Please try again.</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}