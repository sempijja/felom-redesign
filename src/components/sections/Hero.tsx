
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality & Innovation <span className="text-gradient">for Your Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto">
              From furniture to solar panels, construction to electrical installations, we deliver excellence across Uganda and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="rounded-md">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-md">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
