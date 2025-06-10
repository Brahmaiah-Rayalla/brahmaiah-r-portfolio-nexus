
import { Shield, Award, Star } from "lucide-react";

const certifications = [
  {
    title: "Google Cloud Certified Professional Cloud Engineer",
    issuer: "Google Cloud",
    year: "2021",
    description: "Expertise in cloud architecture, migration, and management on Google Cloud Platform",
    icon: Shield,
    color: "from-[#4285F4] to-[#0F9D58]"
  },
  {
    title: "Manager Spotlight Award",
    issuer: "Wells Fargo",
    year: "2023",
    description: "Outstanding leadership in cloud migration project",
    icon: Award,
    color: "from-[#00BFFF] to-[#8A2BE2]"
  },
  {
    title: "Star of the Quarter",
    issuer: "DST IT Services", 
    year: "2022",
    description: "Exceptional performance in Q3 2022 for batch processing innovations",
    icon: Star,
    color: "from-[#FFD700] to-[#FFA500]"
  }
];

export const Certifications = () => {
  const handleCertificationClick = (cert: typeof certifications[0]) => {
    console.log(`Viewing certification: ${cert.title}`);
    alert(`${cert.title} (${cert.year})\n\nIssued by: ${cert.issuer}\n\n${cert.description}`);
  };

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
        Certifications & Awards
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <div key={index} className="group">
              <div 
                className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50 p-6 rounded-2xl border border-[#00BFFF]/20 hover:border-[#8A2BE2]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] text-center cursor-pointer h-full flex flex-col"
                onClick={() => handleCertificationClick(cert)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,191,255,0.3)] group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">{cert.title}</h3>
                <p className="text-gray-300 text-sm mb-2 flex-grow">{cert.description}</p>
                <div className="mt-auto">
                  <div className="text-[#8A2BE2] font-semibold">{cert.issuer}</div>
                  <div className="text-gray-400 text-sm">{cert.year}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
