
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a2e] to-[#16213e]">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-1 bg-[#00BFFF] rounded-full shadow-[0_0_10px_#00BFFF]"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent animate-fade-in">
            Brahmaiah R
          </h1>
          <div className="text-2xl md:text-3xl font-light mb-6 text-[#00BFFF]">
            Java Solutions Architect & Certified Google Cloud Engineer
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Designing scalable microservices & leading Agile teams for Fortune-500 enterprises
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:from-[#8A2BE2] hover:to-[#00BFFF] text-white border-0 shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:shadow-[0_0_30px_rgba(138,43,226,0.7)] transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-[#121212] shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00BFFF] rounded-full relative">
            <div className="w-1 h-3 bg-[#00BFFF] rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
