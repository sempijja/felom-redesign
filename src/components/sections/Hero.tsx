
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quality & Innovation <span className="text-gradient">for Your Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto">
              From furniture to solar panels, construction to electrical installations, we deliver excellence across Uganda and beyond.
            </p>
          </div>
          
          {/* Airbnb-inspired search bar */}
          <div className="bg-white rounded-full shadow-lg p-2 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-2 px-4 py-2 md:border-r border-gray-200 w-full md:w-auto">
              <MapPin className="text-primary h-5 w-5" />
              <div className="text-left">
                <p className="text-sm font-medium">Location</p>
                <p className="text-gray-500 text-sm">Where do you need our services?</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 md:border-r border-gray-200 w-full md:w-auto">
              <Calendar className="text-primary h-5 w-5" />
              <div className="text-left">
                <p className="text-sm font-medium">Date</p>
                <p className="text-gray-500 text-sm">When do you need us?</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 w-full md:w-auto">
              <Users className="text-primary h-5 w-5" />
              <div className="text-left">
                <p className="text-sm font-medium">Service</p>
                <p className="text-gray-500 text-sm">What service do you need?</p>
              </div>
            </div>
            <Button className="w-full md:w-auto ml-0 md:ml-2 mt-2 md:mt-0 rounded-full">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
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
