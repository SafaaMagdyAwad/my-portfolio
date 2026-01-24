import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { NavLink } from "react-router-dom";

// Optimized Dummy Data with filled Problems/Solutions
const projectsData = [
  {
    title: "Online Exam Platform امتحاني",
    stack: ["React.js", "REST Api"],
    category: "React",
    problem: "Students frequently attempted to cheat or bypass time limits during online exams.",
    solution: "Developed device fingerprinting, anti-refresh mechanisms to prevent timer resets, and real-time activity logging.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://online-exam-front.vercel.app/",
    github: "#"
  },
  {
    title: "Online Exam API امتحاني",
    stack: ["Node.js", "MongoDB", "Express"],
    category: "Node.js",
    problem: "Security vulnerabilities allowing multiple entries and data manipulation during testing.",
    solution: "Built a robust backend with unique student identification, anti-refresh logic, and automated email recovery via SMTP.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://online-exam-five-chi.vercel.app/api-docs/",
    github: "#"
  },
  {
    title: "Terhal Guide API ترحال",
    stack: ["Node.js", "Express", "GPT-4"],
    category: "Node.js",
    problem: "Tourists often lack instant, personalized information about local historical sites.",
    solution: "Integrated GPT-4 to create an AI tour guide that provides real-time answers and personalized location suggestions.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://backend-mu-ten-26.vercel.app",
    github: "#"
  },
  {
    title: "Terhal Tour Guide App ترحال",
    stack: ["React", "GPT-4"],
    category: "React",
    problem: "Difficulty in finding nearby guides and activities based on real-time environmental factors.",
    solution: "Implemented live geolocation tracking and AI-driven recommendations based on current weather and proximity.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://v1-ashy-alpha.vercel.app/",
    github: "#"
  },
  {
    title: "Modern E-Commerce Store API",
    stack: [ "Stripe", "Fawry", "Node.js"],
    category: "Node.js", 
    problem: "The need for a seamless, secure checkout experience supporting both international and local payment gateways.",
    solution: "Integrated Stripe and Fawry payment APIs with a secure Node.js backend to process transactions safely.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://online-storenode.vercel.app",
    github: "#"
  },
  {
    title: "Modern E-Commerce Store",
    stack: ["React","tailwind"],
    category: "React", 
    problem: "The need for a seamless, secure checkout experience supporting both international and local payment gateways.",
    solution: "Integrated Stripe and Fawry payment APIs with a secure Node.js backend to process transactions safely.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://online-store-sigma-five.vercel.app",
    github: "#"
  },
  {
    //نظام محادثه مع الذكاء الاصطناعي زي شات جي بي تي
    title: " openAI Chatbot",
    stack: ["React", "node js", "openAi", "GPT-4"],
    category: "OpenAI", // Changed to a string for simpler filtering
    problem: "Users need an intuitive chat interface to interact with AI models for various queries.",
    solution: "Built a responsive chat interface with real-time messaging and context-aware responses using GPT-4.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    liveDemo: "https://open-9r6wx21kz-safaa-magdys-projects.vercel.app/",
    github: "#"
  }

];
export default function Projects() {
  const [filter, setFilter] = useState("All Projects");

  const categories = ["All Projects", "React", "Node.js", "OpenAI"];

  const filteredProjects = filter === "All Projects" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="dark p-5 bg-[#131022] font-sans text-slate-100 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4b2bee]/10 border border-[#4b2bee]/20 text-[#4b2bee] text-xs font-bold uppercase mb-6 tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4b2bee] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4b2bee]" />
          </span>
          Available for Projects
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Featured Engineering <span className="text-[#4b2bee] italic">Projects</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Architecting scalable, high-performance applications with modern tech stacks and real-world impact.
        </p>
      </section>

      {/* Filtering Logic */}
      <section className="flex flex-wrap justify-center gap-3 pb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`h-11 px-8 rounded-full text-sm font-semibold transition-all duration-300 border ${
              filter === cat
                ? "bg-[#4b2bee] border-[#4b2bee] text-white shadow-lg shadow-[#4b2bee]/30 scale-105"
                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((p, index) => (
            <div 
                key={index} 
                className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.08] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131022] via-transparent to-transparent opacity-80" />
                
                {/* Actions (visible on hover) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                  <NavLink to={p.liveDemo} className="bg-white text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition">
                    Live Demo
                  </NavLink>
                  <NavLink to={p.github} className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-xl text-sm font-bold hover:bg-white/20 transition">
                    GitHub
                  </NavLink>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-black px-2.5 py-1 rounded-md bg-[#4b2bee]/10 text-[#7c62f5] border border-[#4b2bee]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#4b2bee] transition-colors">{p.title}</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                    <p className="text-slate-400">
                        <strong className="text-slate-200 font-semibold block mb-1">Challenge:</strong>
                        {p.problem}
                    </p>
                    <p className="text-slate-400">
                        <strong className="text-[#4b2bee] font-semibold block mb-1">Solution:</strong>
                        {p.solution}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
            <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No projects found in this category.</p>
            </div>
        )}
      </main>

      <Footer />
    </div>
  );
}