import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    try {
      console.log('Form submitted:', formData);

      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:brahmaiah.r@email.com';
  };
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/brahmaiah-r', '_blank');
  };
  const handleGithubClick = () => {
    window.open('https://github.com/brahmaiah-r', '_blank');
  };
  return <section id="contact" className="py-20 px-6 bg-gradient-to-r from-[#1a1a2e]/30 to-[#16213e]/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="bg-[#1a1a2e]/50 border-[#00BFFF]/30 text-white placeholder-gray-400 focus:border-[#8A2BE2]" required />
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="bg-[#1a1a2e]/50 border-[#00BFFF]/30 text-white placeholder-gray-400 focus:border-[#8A2BE2]" required />
            <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" rows={5} className="bg-[#1a1a2e]/50 border-[#00BFFF]/30 text-white placeholder-gray-400 focus:border-[#8A2BE2]" required />
            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:from-[#8A2BE2] hover:to-[#00BFFF] text-white border-0 shadow-[0_0_20px_rgba(0,191,255,0.5)] disabled:opacity-50">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          
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
              <button onClick={handleEmailClick} className="flex items-center space-x-3 text-gray-300 hover:text-[#00BFFF] transition-colors duration-300 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>royal.b67@gmail.com</span>
              </button>
              <button onClick={handleLinkedInClick} className="flex items-center space-x-3 text-gray-300 hover:text-[#00BFFF] transition-colors duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/brahmaiah-rayalla-51541452/</span>
              </button>
              <button onClick={handleGithubClick} className="flex items-center space-x-3 text-gray-300 hover:text-[#00BFFF] transition-colors duration-300 cursor-pointer">
                <Github className="w-5 h-5" />
                <span>github.com/Brahmaiah-Rayalla</span>
              </button>
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
    </section>;
};