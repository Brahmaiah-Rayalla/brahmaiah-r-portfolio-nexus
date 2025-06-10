
export const Performance = () => {
  const handleLearnMore = (topic: string) => {
    // In a real app, this could navigate to detailed pages or open modals
    console.log(`Learning more about ${topic}`);
    alert(`Learn more about ${topic} - This would open detailed information in a real application.`);
  };

  return (
    <section id="performance" className="py-20 px-6 bg-gradient-to-r from-[#1a1a2e]/30 to-[#16213e]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
          Performance & Cloud Migrations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* OpenShift Migration */}
          <div className="text-center group cursor-pointer" onClick={() => handleLearnMore('OpenShift & Kubernetes')}>
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,191,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">K8s</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] rounded-full opacity-20 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#00BFFF] mb-2 group-hover:text-[#8A2BE2] transition-colors">OpenShift & Kubernetes</h3>
            <p className="text-gray-300">Seamless migration to container orchestration platforms</p>
          </div>
          
          {/* Performance Testing */}
          <div className="text-center group cursor-pointer" onClick={() => handleLearnMore('BlazeMeter Performance Testing')}>
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#8A2BE2] to-[#00BFFF] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(138,43,226,0.3)] group-hover:scale-110 transition-transform duration-300">
                <div className="text-xl font-bold text-white">70%</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2] to-[#00BFFF] rounded-full opacity-20 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#8A2BE2] mb-2 group-hover:text-[#00BFFF] transition-colors">Cost Reduction</h3>
            <p className="text-gray-300">BlazeMeter SAAS performance testing automation</p>
          </div>
          
          {/* Microservices */}
          <div className="text-center group cursor-pointer" onClick={() => handleLearnMore('PCF Cloud Microservices')}>
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00CED1] to-[#FF6B6B] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,206,209,0.3)] group-hover:scale-110 transition-transform duration-300">
                <div className="text-lg font-bold text-white">PCF</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1] to-[#FF6B6B] rounded-full opacity-20 animate-pulse"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#00CED1] mb-2 group-hover:text-[#FF6B6B] transition-colors">Cloud Microservices</h3>
            <p className="text-gray-300">PCF Cloud & Spring Boot microservices architecture</p>
          </div>
        </div>
        
        {/* Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-8 rounded-2xl border border-[#00BFFF]/20 hover:border-[#00BFFF]/50 transition-all duration-300 cursor-pointer"
            onClick={() => handleLearnMore('Regression Testing Automation')}
          >
            <div className="text-4xl font-bold text-[#00BFFF] mb-2">100%</div>
            <div className="text-lg text-white mb-2">Regression Coverage</div>
            <div className="text-gray-400">Automated testing implementation</div>
          </div>
          
          <div 
            className="bg-gradient-to-r from-[#8A2BE2]/10 to-[#00BFFF]/10 p-8 rounded-2xl border border-[#8A2BE2]/20 hover:border-[#8A2BE2]/50 transition-all duration-300 cursor-pointer"
            onClick={() => handleLearnMore('Batch Processing Optimization')}
          >
            <div className="text-4xl font-bold text-[#8A2BE2] mb-2">60%</div>
            <div className="text-lg text-white mb-2">Performance Gain</div>
            <div className="text-gray-400">Optimized batch processing systems</div>
          </div>
        </div>
      </div>
    </section>
  );
};
