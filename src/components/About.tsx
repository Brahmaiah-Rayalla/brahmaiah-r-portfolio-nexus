
export const About = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] p-1 shadow-[0_0_50px_rgba(0,191,255,0.5)]">
              <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center">
                <div className="text-6xl font-bold text-[#00BFFF]">BR</div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] opacity-20 animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-[#00BFFF]">Career Aspiration</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I aim to be associated with a progressive organization that keeps me at the cutting edge of 
              cloud technologies, containerization, and performance engineering. With 13+ years of experience 
              in enterprise Java development, I specialize in architecting scalable solutions that drive 
              business value.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-4 rounded-lg border border-[#00BFFF]/20">
                <div className="text-[#00BFFF] font-semibold">Experience</div>
                <div className="text-gray-300">13+ Years</div>
              </div>
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-4 rounded-lg border border-[#00BFFF]/20">
                <div className="text-[#00BFFF] font-semibold">Specialty</div>
                <div className="text-gray-300">Cloud Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
