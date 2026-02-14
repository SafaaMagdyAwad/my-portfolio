import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Server } from 'lucide-react';

const TimelineItem = ({ date, title, organization, description, icon: Icon, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-12 h-12 rounded-full">
        <Icon className="mx-auto text-white" size={20} />
      </div>
      <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-blue-500/30">
        <span className="mb-3 font-bold text-blue-400 text-sm">{date}</span>
        <h3 className="mb-1 font-bold text-white text-xl">{title}</h3>
        <h4 className="mb-2 font-semibold text-gray-400 text-md">{organization}</h4>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ProfessionalJourney = () => {
  const milestones = [
    {
      date: "2023",
      title: "B.Sc. Computer Science & Electrical Engineering",
      organization: "Faculty of Engineering",
      description: "Graduated with Excellence & Honors. Ranked 4th in the department.",
      icon: GraduationCap,
    },
    {
      date: "Jan 2024",
      title: "Fintech Training",
      organization: "Java Spring Boot Focus",
      description: "Intensive training in financial technology systems and backend architecture.",
      icon: Server,
    },
    {
      date: "Apr - Dec 2024",
      title: "Backend Specialist Training",
      organization: "Egyptian Council",
      description: "Deep dive into PHP and Laravel framework for enterprise applications.",
      icon: Code,
    },
    {
      date: "Feb - Aug 2025",
      title: "ITI 9-Month Program (4 Months Specialized)",
      organization: "Information Technology Institute",
      description: "Full Stack Development specializing in the MERN Stack (Mongo, Express, React, Node).",
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-black py-16 min-h-screen font-sans">
      <div className="container mx-auto px-4 w-full h-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-2">My Professional Path</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-blue-500 h-full border" style={{ left: '50%' }}></div>
          {milestones.map((item, index) => (
            <TimelineItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJourney;