"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EcoScout (FYP)",
    category: "AI / Computer Vision",
    description: "Engineered real-time AI video analytics to detect vehicle littering and smoke emissions.",
    link: "https://github.com/Saqibb786/EcoScout",
  },
  {
    id: 2,
    title: "Multi-Class Emotion Recognition",
    category: "NLP / Deep Learning",
    description: "Developed a multi-label NLP model using GRU and BERT to classify emotions from text.",
    link: "https://github.com/Saqibb786/Emotion-Recognition-from-textual-data",
  },
  {
    id: 3,
    title: "Heart Stroke Prediction",
    category: "Machine Learning",
    description: "Trained a machine learning model to predict heart stroke likelihood based on health metrics.",
    link: "https://github.com/Saqibb786/Heart-Stroke-Prediction",
    liveLink: "https://heartstrokeprediction-by-saqib.streamlit.app/",
  },
  {
    id: 4,
    title: "OCR Tool",
    category: "Python / FastAPI",
    description: "Built a fast and reliable FastAPI service for optical character recognition and image-to-text conversion.",
    link: "https://github.com/Saqibb786/OCR-Dashboard-in-Python",
  },
  {
    id: 5,
    title: "GameHub Clone",
    category: "React / TypeScript",
    description: "Designed a responsive game discovery platform featuring a clean, component-driven React UI.",
    link: "https://github.com/Saqibb786/GameHub",
    liveLink: "https://game-hub-by-saqib.vercel.app",
  },
  {
    id: 6,
    title: "DevPeaks",
    category: "Full Stack / TypeScript",
    description: "Architected a comprehensive developer platform to track progress, showcase skills, and build community.",
    link: "https://github.com/Saqibb786/DevPeaks",
    liveLink: "https://devpeaksolutions.vercel.app/",
  },
  {
    id: 7,
    title: "Aspen",
    category: "React Native / Mobile",
    description: "Created an interactive React Native mobile application focused on smooth, intuitive user navigation.",
    link: "https://github.com/Saqibb786/Aspen",
  },
  {
    id: 8,
    title: "Heart & Diabetes Prediction",
    category: "Machine Learning",
    description: "Implemented KNN and Naive Bayes algorithms to assess and predict heart and diabetes risks.",
    link: "https://github.com/Saqibb786/Heart_Diabetes_Prediction_FastApi",
  },
  {
    id: 9,
    title: "Vaultify",
    category: "Java / Backend",
    description: "Programmed a secure Java banking backend featuring robust transaction processing logic.",
    link: "https://github.com/Saqibb786/Vaultify"
  },
  {
    id: 10,
    title: "AI Chef",
    category: "React / AI",
    description: "Built an intelligent recipe generator utilizing React to dynamically create culinary ideas.",
    link: "https://github.com/Saqibb786/AI-Chef"
  },
  {
    id: 11,
    title: "Meme Generator",
    category: "React / Frontend",
    description: "Developed an interactive React application for creating custom memes via dynamic image APIs.",
    link: "https://github.com/Saqibb786/Meme-Generator"
  },
  {
    id: 12,
    title: "React Static Pages",
    category: "React / Frontend",
    description: "Constructed foundational static pages to master React components, styling, and structure.",
    link: "https://github.com/Saqibb786/Practice-React"
  },
  {
    id: 13,
    title: "Travel Journal",
    category: "React / Frontend",
    description: "Designed a digital travel diary utilizing React architecture to map out global destinations.",
    link: "https://github.com/Saqibb786/Travel-Journal---React"
  },
  {
    id: 14,
    title: "HR Real Estate",
    category: "Full Stack / Next.js",
    description: "Launched a premium real estate platform for DHA Lahore properties using Next.js 14 and Prisma.",
    link: "https://github.com/Saqibb786/HRRealEstate"
  },
  {
    id: 15,
    title: "CLI Expense Tracker",
    category: "Python / Scripting",
    description: "Scripted a persistent Python command-line application for tracking personal expenses via CSV.",
    link: "https://github.com/Saqibb786/Expense-Tracker"
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(6); // Default to desktop

  // Adjust limit based on screen size
  useEffect(() => {
    const handleResize = () => {
       if (window.innerWidth < 768) {
           setVisibleLimit(3);
       } else {
           setVisibleLimit(6);
       }
    };
    
    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, visibleLimit);

  return (
    <section id="projects" className="relative w-full py-32 px-4 md:px-12 bg-[#121212] text-white z-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-neutral-200 text-balance"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Invisible Full Card Link */}
              <a 
                href={project.liveLink || project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-0" 
                aria-label={`View project: ${project.title}`}
              />

              {/* Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex-grow relative z-10 pointer-events-none">
                <div className="flex justify-between items-start mb-8 pointer-events-auto">
                   <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">{project.category}</span>
                   <div className="flex gap-4 items-center">
                       {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-neutral-500 hover:text-white transition-colors p-1" 
                            aria-label="GitHub Repository"
                            title="View Source Code"
                          >
                             <Github className="w-5 h-5" />
                          </a>
                       )}
                       {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-neutral-500 hover:text-white transition-colors p-1" 
                            aria-label="Live Demo"
                            title="View Live Site"
                          >
                             <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                       )}
                   </div>
                </div>
  
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-neutral-100 transition-colors text-balance">{project.title}</h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed text-pretty">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Collapsible Button */}
        {projects.length > visibleLimit && (
            <div className="mt-12 text-center">
                 <button
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                    aria-label={showAll ? "Show fewer projects" : "Show more projects"}
                  >
                      {showAll ? (
                          <>Show Less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                          <>Show More ({projects.length - visibleLimit} hidden) <ChevronDown className="w-4 h-4" /></>
                      )}
                  </button>
            </div>
        )}

        <div className="mt-8 text-center">
             <a 
               href="https://github.com/Saqibb786?tab=repositories" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-all font-medium group"
             >
                View all Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </a>
        </div>
        

      </div>
    </section>
  );
}
