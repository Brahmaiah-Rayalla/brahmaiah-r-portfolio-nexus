
const awards = [
  {
    title: "Manager Spotlight",
    description: "Outstanding leadership in cloud migration project",
    year: "2023"
  },
  {
    title: "Star of the Quarter",
    description: "Exceptional performance in Q3 2022",
    year: "2022"
  },
  {
    title: "Technical Innovation",
    description: "Published research paper on Apache Spark optimization",
    year: "2021"
  }
];

export const Awards = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
        Awards & Recognition
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="group">
            <div className="bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50 p-6 rounded-2xl border border-[#00BFFF]/20 hover:border-[#8A2BE2]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,191,255,0.3)]">
                <div className="text-2xl">🏆</div>
              </div>
              <h3 className="text-lg font-semibold text-[#00BFFF] mb-2">{award.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{award.description}</p>
              <div className="text-[#8A2BE2] font-semibold">{award.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
