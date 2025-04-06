
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-felom-gray-50 to-felom-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-felom-gray-900 mb-6 leading-tight">
            Empowering Growth with <span className="text-felom-blue">Quality</span> & <span className="text-felom-green">Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-felom-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto">
            At Felom Company Limited, we deliver excellence across various sectors, helping clients meet their growth challenges in Uganda and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16">
            <Button 
              size="lg" 
              className="bg-felom-blue hover:bg-felom-blue-600 text-white font-medium px-8"
              asChild
            >
              <a href="#services">Explore Our Services</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-felom-gray-300 text-felom-gray-700 hover:bg-felom-gray-100"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-felom-blue mb-2">10+</p>
              <p className="text-sm text-felom-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-felom-blue mb-2">200+</p>
              <p className="text-sm text-felom-gray-600">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-felom-blue mb-2">50+</p>
              <p className="text-sm text-felom-gray-600">Team Members</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-felom-blue mb-2">100%</p>
              <p className="text-sm text-felom-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
