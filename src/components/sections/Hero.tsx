
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  // Animation effect for stats on page load
  useEffect(() => {
    const statsElements = document.querySelectorAll('.stat-number');
    
    statsElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('counted');
      }, 300 * index);
    });
  }, []);
  
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] aspect-square rounded-full bg-primary/20 blur-[80px]"></div>
        <div className="absolute -bottom-[40%] -left-[10%] w-[60%] aspect-square rounded-full bg-blue-300/30 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <span className="animate-pulse mr-2 w-2 h-2 rounded-full bg-primary"></span>
              Innovating Since 2015
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Quality & Innovation <span className="relative inline-block text-gradient">
                for Your Growth
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full transform scale-x-0 origin-left transition-transform duration-1000 animate-expand"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto">
              From furniture to solar panels, construction to electrical installations, we deliver excellence across Uganda and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 group relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-blue-600 transition-all duration-300 transform group-hover:scale-105"></span>
                <span className="relative flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-100/20 blur-xl -z-10 rounded-2xl"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-blue-900/5 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <p className="stat-number text-3xl md:text-4xl font-bold text-primary mb-2 relative before:content-['0+'] before:opacity-0 after:content-['10+'] after:opacity-0">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-blue-900/5 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <p className="stat-number text-3xl md:text-4xl font-bold text-primary mb-2 relative before:content-['0+'] before:opacity-0 after:content-['200+'] after:opacity-0">200+</p>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-blue-900/5 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <p className="stat-number text-3xl md:text-4xl font-bold text-primary mb-2 relative before:content-['0+'] before:opacity-0 after:content-['50+'] after:opacity-0">50+</p>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-blue-900/5 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                <p className="stat-number text-3xl md:text-4xl font-bold text-primary mb-2 relative before:content-['0%'] before:opacity-0 after:content-['100%'] after:opacity-0">100%</p>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle scrolling pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
