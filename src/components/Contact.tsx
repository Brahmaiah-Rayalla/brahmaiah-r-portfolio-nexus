
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#1a1a2e]/30 to-[#16213e]/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <Input 
              placeholder="Your Name" 
              className="bg-[#1a1a2e]/50 border-[#00BFFF]/30 text-white placeholder-gray-400 focus:border-[#8A2BE2]"
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="bg-[#1a1a2e]/50 border-[#00BFFF]/30 text-white placeholder-gray-400 focus:border-[#8A2BE2]"
            />
            <Textarea 
              placeholder="Your Message" 
              rows={5}
              className="bg-[#1a1a2e]/50 border-[#00BFFF]/30 text-white placeholder-gray-400 focus:border-[#8A2BE2]"
            />
            <Button className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:from-[#8A2BE2] hover:to-[#00BFFF] text-white border-0 shadow-[0_0_20px_rgba(0,191,255,0.5)]">
              Send Message
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#00BFFF] mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                Ready to discuss your next project or explore collaboration opportunities? 
                I'm always interested in challenging problems and innovative solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-[#00BFFF] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>brahmaiah.r@email.com</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-[#00BFFF] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/brahmaiah-r</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 hover:text-[#00BFFF] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span>github.com/brahmaiah-r</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#00BFFF]/20 text-center">
          <p className="text-gray-400">
            © 2024 Brahmaiah R. Made with React + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
