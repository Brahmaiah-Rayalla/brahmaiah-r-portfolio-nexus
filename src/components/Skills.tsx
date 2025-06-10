
import { useState } from "react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "Google Cloud Platform", level: 95 },
      { name: "AWS", level: 85 },
      { name: "Pivotal Cloud Foundry", level: 90 }
    ]
  },
  {
    title: "Containerization",
    skills: [
      { name: "OpenShift", level: 92 },
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 90 }
    ]
  },
  {
    title: "Java & Frameworks",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Hibernate", level: 92 },
      { name: "Spring Batch", level: 90 },
      { name: "Spring Integration", level: 88 }
    ]
  },
  {
    title: "Security & Observability",
    skills: [
      { name: "HashiCorp Vault", level: 85 },
      { name: "Splunk Observability", level: 88 },
      { name: "PINGFederate", level: 82 },
      { name: "Elastic APM", level: 85 }
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "Bamboo", level: 85 },
      { name: "Harness", level: 80 },
      { name: "BlazeMeter", level: 88 }
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "Liquibase", level: 88 },
      { name: "JMeter", level: 90 },
      { name: "JProfiler", level: 85 },
      { name: "Apache MQ", level: 87 }
    ]
  }
];

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
        Skills & Technologies
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50 p-6 rounded-2xl border border-[#00BFFF]/20 hover:border-[#8A2BE2]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-[#00BFFF]">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span className="text-[#8A2BE2] text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] h-2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,191,255,0.5)]"
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: hoveredSkill === skill.name ? '0 0 20px rgba(138,43,226,0.7)' : '0 0 10px rgba(0,191,255,0.5)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
