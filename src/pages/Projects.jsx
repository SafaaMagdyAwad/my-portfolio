import React, { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ElectricBorder } from "../components/ElectricBorder";

// ==========================
// Data
// ==========================
const PROJECTS = [
  {
    title: "Online Exam Platform امتحاني",
    stack: ["React.js", "REST Api"],
    category: "React",
    problem:
      "Students frequently attempted to cheat or bypass time limits during online exams.",
    solution:
      "Developed device fingerprinting, anti-refresh mechanisms to prevent timer resets, and real-time activity logging.",
    image: "Emti7ani.png",
    liveDemo: "https://online-exam-front.vercel.app/",
    github: "",
  },
  {
    title: "Online Exam API امتحاني",
    stack: ["Node.js", "MongoDB", "Express"],
    category: "Node.js",
    problem:
      "Security vulnerabilities allowing multiple entries and data manipulation during testing.",
    solution:
      "Built a robust backend with unique student identification, anti-refresh logic, and automated email recovery via SMTP.",
    image: "Emti7aniAPI.png",
    liveDemo: "https://online-exam-five-chi.vercel.app/api-docs/",
    github: "",
  },
  {
    title: "Terhal Guide API ترحال",
    stack: ["Node.js", "Express", "GPT-4"],
    category: "Node.js",
    problem:
      "Tourists often lack instant, personalized information about local historical sites.",
    solution:
      "Integrated GPT-4 to create an AI tour guide that provides real-time answers and personalized location suggestions.",
    image: "ter7alapi.png",
    liveDemo: "https://backend-mu-ten-26.vercel.app/api-docs/",
    github: "https://github.com/Terhal-tour/Backend",
  },
  {
    title: "Terhal Tour Guide App ترحال",
    stack: ["React", "GPT-4", "Geolocation"],
    category: "React",
    problem:
      "Difficulty in finding nearby guides and activities based on real-time environmental factors.",
    solution:
      "Implemented live geolocation tracking and AI-driven recommendations based on current weather and proximity.",
    image: "Ter7al.png",
    liveDemo: "https://v1-ashy-alpha.vercel.app/",
    github: "https://github.com/Terhal-tour/v1",
  },
  {
    title: "Modern E-Commerce Store API",
    stack: ["Stripe", "Fawry", "Node.js"],
    category: "Node.js",
    problem:
      "The need for a seamless, secure checkout experience supporting both international and local payment gateways.",
    solution:
      "Integrated Stripe and Fawry payment APIs with a secure Node.js backend to process transactions safely.",
    image: "storeApi.png",
    liveDemo: "https://online-storenode.vercel.app/api-docs/",
    github: "https://github.com/SafaaMagdyAwad/online-storenode",
  },
  {
    title: "Modern E-Commerce Store",
    stack: ["React", "Tailwind"],
    category: "React",
    problem:
      "The need for a seamless, secure checkout experience supporting both international and local payment gateways.",
    solution:
      "Integrated Stripe and Fawry payment APIs with a secure Node.js backend to process transactions safely.",
    image: "Store.png",
    liveDemo: "https://online-store-sigma-five.vercel.app",
    github: "https://github.com/SafaaMagdyAwad/online-store",
  },
  {
    title: "openAI Chatbot",
    stack: ["React", "node js", "openAi", "GPT-4"],
    category: "OpenAI",
    problem:
      "Users need an intuitive chat interface to interact with AI models for various queries.",
    solution:
      "Built a responsive chat interface with real-time messaging and context-aware responses using GPT-4.",
    image: "chatgpt.png",
    liveDemo: "https://open-ai-two-theta.vercel.app/",
    github: "https://github.com/SafaaMagdyAwad/open-ai",
  },
  {
    title: "Topics Laravel MVC",
    stack: ["Laravel", "PHP", "MySQL", "Redis"],
    category: "Laravel",
    problem:
      "Standard web applications often face performance bottlenecks when sending bulk emails (newsletters), leading to slow page loads and potential server timeouts. Additionally, default authentication flows often lack specific business rules, like 'Active' status verification before login.",
    solution:
      "Engineered a high-performance MVC application using Laravel Queues to handle email processing asynchronously in the background. Customized the Authentication lifecycle to enforce account activation gates and optimized the data layer with realistic seeders for better QA testing. Built a custom Artisan Command to automate subscriber communication.",
    image: "laravelmvc.png",
    liveDemo: "https://safaamagdyawad.github.io/Topics/",
    github: "https://github.com/SafaaMagdyAwad/Topics",
  },
  {
    title: "MedLap",
    stack: ["React", "Tailwind"],
    category: "React",
    problem: "",
    solution: "",
    image: "MidLab.png",
    liveDemo: "https://medical-lap-nine.vercel.app/",
    github: "https://github.com/SafaaMagdyAwad/MedicalLap",
  },
  {
    title: "Restaurant",
    stack: ["React", "Tailwind"],
    category: "React",
    problem: "",
    solution: "",
    image: "Resturant.png",
    liveDemo: "https://resturant-five-lake.vercel.app/",
    github: "https://github.com/SafaaMagdyAwad/Resturant",
  },
  {
    title: "Clinic API",
    stack: ["Nest.js", "MongoDB"],
    category: "Nest.js",
    problem:
      "Building a scalable backend API for a clinic system with authentication, role-based access, and appointment management.",
    solution:
      "Developed a RESTful API using Nest.js and MongoDB with JWT authentication, user roles (Admin/Doctor/Patient), validation, modular architecture, and a robust appointment system that prevents booking on unavailable times or slots already booked by other patients.",
    image: "/clinic-api.png",
    liveDemo:
      "https://github.com/SafaaMagdyAwad/clinic-nest/blob/master/README.md",
    github: "https://github.com/SafaaMagdyAwad/clinic-nest",
  },
  {
    title: "Restaurant API",
    stack: ["Node.js", "Express"],
    category: "Node.js",
    problem: "",
    solution: "",
    image: "resturantAPI.png",
    liveDemo: "https://restaurant-api-henna.vercel.app/api-docs/",
    github: "https://github.com/SafaaMagdyAwad/restaurant-api",
  },
];

const CATEGORIES = [
  "All Projects",
  "React",
  "Node.js",
  "Nest.js",
  "OpenAI",
  "Laravel",
];

// ==========================
// Component
// ==========================
export default function Projects() {
  const [filter, setFilter] = useState("All Projects");

  useEffect(() => {
    // Auto dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "All Projects") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen relative bg-[#020617] font-display text-slate-100 antialiased selection:bg-[#9987f1]/30 overflow-x-hidden transition-colors duration-500">
      {/* Background grid (moved to CSS class) */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#9987f1]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <Navbar />

      <div className="relative z-10 flex flex-col items-center pt-32 pb-20">
        <div className="max-w-[1280px] w-full px-6">
          {/* Filter */}
          <section className="flex flex-wrap justify-center gap-3 py-16 px-4 animate-project">
            {CATEGORIES.map((cat) => {
              const active = filter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={[
                    "h-11 px-8 rounded-full text-sm font-semibold transition-all duration-300 border",
                    active
                      ? "bg-[#9987f1] border-[#9987f1] text-white shadow-lg shadow-[#9987f1]/40 scale-105"
                      : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </section>

          {/* Projects */}
          <main className="pb-32">
            {filteredProjects.length > 0 ? (
              <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
                {filteredProjects.map((p, index) => (
                  <div
                    key={`${p.title}-${index}`}
                    className="animate-project break-inside-avoid mb-10"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <ElectricBorder p={p} index={index} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 animate-project">
                <p className="text-slate-500 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
