
import { useState } from "react";
import { Briefcase, Award, TrendingUp, Shield } from "lucide-react";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "Wells Fargo",
    location: "Hyderabad",
    period: "2021 - Present",
    description: "Certified Google Cloud Engineer leading multiple Agile teams.",
    achievements: [
      "Certified Google Cloud Engineer; lead multiple Agile teams, mentoring 10+ developers on scalable micro-services design and best coding practices",
      "Architected and executed migrations to PCF Cloud, OpenShift & Kubernetes—cutting maintenance costs by 70% and improving system throughput",
      "Integrated HashiCorp Vault, PINGFederate, Splunk Observability Cloud & Elastic APM for end-to-end security and traceability",
      "Automated performance and regression testing on BlazeMeter SAAS; embedded tests in CI/CD pipelines for zero-regression releases"
    ],
    icon: Shield,
    metrics: ["70% cost reduction", "10+ developers mentored", "Zero-regression releases"]
  },
  {
    title: "Senior Software Engineer",
    company: "PAREXEL International",
    location: "Hyderabad",
    period: "2018 - 2021",
    description: "Led PCF Cloud migration of centralized TradeWorks platform.",
    achievements: [
      "Led PCF Cloud migration of a centralized TradeWorks platform built with React & Spring Boot; delivered micro-services, automated config via Spring Cloud Config, and enforced zero-downtime deployments",
      "Designed Singleton, Factory, Proxy and DAO patterns to decouple modules and enable faster onboarding of new features",
      "Implemented Spring Batch Parallel Processing (remote-chunking) to scale batch jobs by 5×; mentored peers on JMeter and JProfiler for performance tuning"
    ],
    icon: TrendingUp,
    metrics: ["5× batch scaling", "Zero-downtime deployments", "Micro-services architecture"]
  },
  {
    title: "Senior Software Engineer",
    company: "DST IT Services",
    location: "Hyderabad",
    period: "2015 - 2018",
    description: "Scaled mission-critical ETL and claims-adjudication systems.",
    achievements: [
      "Scaled mission-critical ETL and claims-adjudication systems (Exeter) using Spring Batch, JMS (Apache MQ), and Spring Integration",
      "Automated Liquibase-driven database change management; reduced deployment time by 60%",
      "Earned 'Star of the Quarter' for pioneering remote-chunking in batch processes"
    ],
    icon: Award,
    metrics: ["60% deployment time reduction", "Star of the Quarter", "ETL optimization"]
  },
  {
    title: "Software Engineer",
    company: "Kewill Transport",
    location: "Hyderabad",
    period: "2011 - 2015",
    description: "Developed multi-modal freight-management expert systems.",
    achievements: [
      "Developed multi-modal freight-management expert systems (IMS, QMS) on WebLogic and Jetty using Core Java, Servlets, JSP, EJB, Spring Core & Hibernate",
      "Built client-side modules in AJAX, Knockout JS and Thymeleaf; enforced responsive UI patterns",
      "Involved end-to-end in SDLC: design, coding, code reviews, unit testing, bug-fixing and release management"
    ],
    icon: Briefcase,
    metrics: ["Full-stack development", "Expert systems", "End-to-end SDLC"]
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
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
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
                      <IconComponent className="w-6 h-6 text-[#8A2BE2]" />
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-[#00BFFF]/20 to-[#8A2BE2]/20 text-[#00BFFF] rounded-full border border-[#00BFFF]/30"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                    
                    {expandedCard === index && (
                      <div className="mt-4 pt-4 border-t border-[#00BFFF]/20 animate-fade-in">
                        <h4 className="text-sm font-semibold text-[#8A2BE2] mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                              <span className="text-[#00BFFF] mr-2 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
