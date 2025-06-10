
import { useState } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "Wells Fargo",
    location: "Hyderabad",
    period: "2019 - Present",
    description: "Migrated applications to PCF Cloud; cut maintenance cost by 70%.",
    achievements: [
      "Led cloud migration initiatives reducing operational costs",
      "Implemented microservices architecture",
      "Mentored team of 8 developers"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "PAREXEL International",
    location: "Hyderabad",
    period: "2017 - 2019",
    description: "Built centralized trade finance platform with React & Spring Boot.",
    achievements: [
      "Developed full-stack applications",
      "Improved system performance by 40%",
      "Established CI/CD pipelines"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "DST IT Solutions",
    location: "Hyderabad",
    period: "2015 - 2017",
    description: "Scaled batch jobs via Spring Batch Parallel Processing.",
    achievements: [
      "Optimized batch processing systems",
      "Reduced processing time by 60%",
      "Implemented monitoring solutions"
    ]
  },
  {
    title: "Software Engineer",
    company: "Kewill Transport",
    location: "Hyderabad",
    period: "2011 - 2015",
    description: "Developed freight logistics expert system for DHL.",
    achievements: [
      "Built logistics management systems",
      "Integrated with external APIs",
      "Delivered projects on time and budget"
    ]
  }
];

export const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
        Experience Timeline
      </h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00BFFF] to-[#8A2BE2]"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-[#00BFFF] rounded-full shadow-[0_0_20px_rgba(0,191,255,0.7)] z-10"></div>
              
              {/* Card */}
              <div className="ml-16 flex-1">
                <div 
                  className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50 p-6 rounded-2xl border border-[#00BFFF]/20 hover:border-[#8A2BE2]/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(0,191,255,0.2)]"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#00BFFF] mb-1">{exp.title}</h3>
                      <p className="text-lg text-white">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.location} • {exp.period}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-[#8A2BE2]" />
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  {expandedCard === index && (
                    <div className="mt-4 pt-4 border-t border-[#00BFFF]/20 animate-fade-in">
                      <h4 className="text-sm font-semibold text-[#8A2BE2] mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                            <span className="text-[#00BFFF] mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
