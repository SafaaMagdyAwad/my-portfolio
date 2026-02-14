import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import axios from "axios";

export default function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const formData = new FormData(form.current);

    const data = {
        userName: formData.get("userName"),
        userEmail: formData.get("userEmail"),
        message: formData.get("message"),
    };

    try {
        // await axios.post("https://my-portfolio-api-phi.vercel.app/api/messages", data);
        await axios.post("http://localhost:3000/api/messages", data);

        setStatus("success");
        form.current.reset();
    } catch (error) {
        console.error(error);
        setStatus("error");
    } finally {
        setIsSending(false);
    }
};

    

    return (
        <div className="min-h-screen transition-colors duration-300 bg-[#020617] font-sans text-slate-100 overflow-x-hidden">

            {/* 1. ELECTRIC & REVEAL ANIMATIONS */}
            <style>{`
                @keyframes spark-travel {
                    0% { offset-distance: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { offset-distance: 100%; opacity: 0; }
                }
                @keyframes reveal-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .form-spark {
                    position: absolute;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #9987f1, #fff, #9987f1, transparent);
                    filter: blur(1px) drop-shadow(0 0 10px #9987f1);
                    offset-path: rect(0% 100% 100% 0% round 1.5rem);
                    animation: spark-travel 4s linear infinite;
                }
                .skill-card:hover {
                    box-shadow: 0 0 20px -5px var(--skill-color);
                    border-color: var(--skill-color);
                }
            `}</style>

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 mt-7 py-20 relative">
                {/* Background ambient glow */}
                <div className="fixed top-1/4 right-0 w-[400px] h-[400px] bg-[#9987f1]/5 blur-[120px] rounded-full pointer-events-none" />

                

                {/* ================= CONTACT SECTION ================= */}
                <section id="contact" className="pb-32">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Side: Text */}
                        <div className="lg:w-1/2 flex flex-col justify-center animate-[reveal-up_0.8s_ease-out]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px w-12 bg-[#9987f1]" />
                                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#9987f1]">
                                    Get in Touch
                                </h2>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-white">
                                Let's build something <br />
                                <span className="text-[#9987f1] italic">extraordinary.</span>
                            </h3>
                            <p className="text-slate-400 text-lg mb-10 max-w-md">
                                Architecting scalable, high-performance applications.
                                Currently accepting new projects and technical challenges.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: "alternate_email", text: "safaa.magdy.awad.mohammad@gmail.com" ,link:"mailto:safaa.magdy.awad.mohammad@gmail.com?subject=Hello&body=Hi%20Safaa,%0A%0AI%20would%20like%20to%20contact%20you%20regarding..."},
                                    { icon: "share", text: "linkedin.com/in/safaa-magdy-aa7381234", link: "https://www.linkedin.com/in/safaa-magdy-aa7381234/" },
                                ].map((item) => (
                                    <div
                                        key={item.text}
                                        className="flex items-center gap-4 text-slate-300 hover:text-[#9987f1] transition-colors cursor-pointer group"
                                        onClick={() => item.link && window.open(item.link, "_blank")}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#9987f1]/50 group-hover:bg-[#9987f1]/10 transition-all">
                                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Right Side: Animated Form */}
                        <div className="lg:w-1/2 relative group p-[2px] rounded-[1.6rem] overflow-hidden">
                            {/* Electric Sparks around the form */}
                            <div className="form-spark" style={{ '--dur': '4s', '--delay': '0s', width: '30%' }} />
                            <div className="form-spark" style={{ '--dur': '4s', '--delay': '-2s', width: '30%' }} />

                            <div className="relative z-10 bg-[#0a0a0c] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Name</label>
                                            <input
                                                name="userName"
                                                required
                                                type="text"
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9987f1]/20 focus:border-[#9987f1] transition-all text-white"
                                                placeholder="mohammad magdy"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Email</label>
                                            <input
                                                name="userEmail"
                                                required
                                                type="email"
                                                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9987f1]/20 focus:border-[#9987f1] transition-all text-white"
                                                placeholder="mohammad@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#9987f1]/20 focus:border-[#9987f1] transition-all text-white"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        disabled={isSending}
                                        type="submit"
                                        className="w-full relative overflow-hidden bg-[#9987f1] hover:bg-[#8675e0] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] group/btn"
                                    >
                                        {/* Button hover light effect */}
                                        <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12" />

                                        <span className="relative z-10">
                                            {isSending ? "Sending Message..." : "Send Message"}
                                        </span>
                                        {!isSending && <span className="material-symbols-outlined text-sm relative z-10">bolt</span>}
                                    </button>

                                    {status === "success" && <p className="text-emerald-400 text-center text-sm font-medium animate-bounce">✓ Sent Successfull!</p>}
                                    {status === "error" && <p className="text-rose-400 text-center text-sm font-medium">× Something wenr wrong. Retry?</p>}
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