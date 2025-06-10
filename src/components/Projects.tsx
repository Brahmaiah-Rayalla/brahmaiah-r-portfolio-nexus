
import { useState } from "react";
import { Code } from "lucide-react";

const projects = [
  {
    title: "TradeWorks",
    description: "International trade processing system",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    color: "from-[#00BFFF]"
  },
  {
    title: "Safety Information System",
    description: "Regulatory compliance portal",
    tech: ["Java", "Angular", "Oracle"],
    color: "from-[#8A2BE2]"
  },
  {
    title: "Exeter Claims Adjudication",
    description: "Healthcare domain product",
    tech: ["Spring", "Hibernate", "MySQL"],
    color: "from-[#00CED1]"
  },
  {
    title: "InterModal System (DHL)",
    description: "Freight logistics management",
    tech: ["Java EE", "JSF", "SQL Server"],
    color: "from-[#FF6B6B]"
  },
  {
    title: "Quote Management System",
    description: "Global freight rates management",
    tech: ["Spring Boot", "Microservices", "Redis"],
    color: "from-[#4ECDC4]"
  }
];

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
        Projects Gallery
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`bg-gradient-to-br ${project.color} to-transparent p-0.5 rounded-2xl transition-all duration-300 ${hoveredProject === index ? 'scale-105 shadow-[0_0_40px_rgba(0,191,255,0.3)]' : ''}`}>
              <div className="bg-[#121212] p-6 rounded-2xl h-full">
                <div className="flex items-center justify-between mb-4">
                  <Code className="w-8 h-8 text-[#00BFFF]" />
                  <div className="w-3 h-3 rounded-full bg-[#8A2BE2] animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-[#00BFFF]/20 to-[#8A2BE2]/20 text-[#00BFFF] rounded-full border border-[#00BFFF]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF]/10 to-[#8A2BE2]/10 rounded-2xl flex items-center justify-center animate-fade-in">
                    <div className="text-center">
                      <div className="text-white font-semibold mb-2">View Details</div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] mx-auto"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
