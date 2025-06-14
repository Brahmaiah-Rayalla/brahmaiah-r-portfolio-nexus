
export const About = () => {
  return <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
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
            <h3 className="text-2xl font-semibold mb-6 text-[#00BFFF]">Career Aspiration</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With 13+ years of experience spearheading enterprise-level Java solutions, I am a Solutions Architect dedicated to building resilient, scalable, and high-performance systems that power modern business. I excel at leading the entire architectural lifecycle, from strategic design and technology selection to hands-on implementation and performance tuning.
            </p>
            
            <div className="space-y-6 mb-8">
              {/* Cloud-Native Architecture */}
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-4 rounded-lg border border-[#00BFFF]/20">
                <h4 className="text-lg font-bold text-[#00BFFF] mb-3">🚀 Cloud-Native Architecture</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Designing and deploying distributed systems on OpenShift, PCF, GCP, and AWS, leveraging Kubernetes for orchestration and Docker for containerization. Successfully led migrations from on-premise data centers to the cloud, resulting in ~30% reduction in TCO for key applications.
                </p>
              </div>

              {/* Microservices & API Design */}
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-4 rounded-lg border border-[#00BFFF]/20">
                <h4 className="text-lg font-bold text-[#00BFFF] mb-3">⚡ Microservices & API Design</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Architecting secure, decoupled microservices using Spring Boot and Quarkus, interconnected via RESTful APIs and event-driven patterns with Apache Kafka or RabbitMQ. Focus on Domain-Driven Design (DDD) ensures solutions aligned with business domains.
                </p>
              </div>

              {/* Performance & Resilience */}
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-4 rounded-lg border border-[#00BFFF]/20">
                <h4 className="text-lg font-bold text-[#00BFFF] mb-3">🎯 Performance & Resilience</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Proactively identifying and resolving system bottlenecks through advanced performance tuning, load testing, and implementing observability stacks (ElasticAPM, Splunk Observability Cloud, BlazeMeter). Designing for failure with self-healing systems achieving 99.99% uptime.
                </p>
              </div>

              {/* DevOps & Automation */}
              <div className="bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 p-4 rounded-lg border border-[#00BFFF]/20">
                <h4 className="text-lg font-bold text-[#00BFFF] mb-3">🔧 DevOps & Automation</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Championing automation culture by building robust CI/CD pipelines (Jenkins, GitHub Actions) and employing Infrastructure as Code (Harness) to ensure rapid, reliable, and repeatable deployments.
                </p>
              </div>
            </div>

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
    </section>;
};
