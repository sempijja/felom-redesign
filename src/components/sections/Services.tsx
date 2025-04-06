
import { Lightbulb, Home, Hammer, Cpu, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Furniture Solutions",
      description: "High-quality office and home furniture designed for comfort, durability and aesthetics.",
      link: "#contact"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Solar Installations",
      description: "Renewable energy solutions for homes and businesses with professional installation and maintenance.",
      link: "#contact"
    },
    {
      icon: <Hammer className="h-8 w-8 text-primary" />,
      title: "Construction Services",
      description: "End-to-end construction services from planning and design to execution and finishing.",
      link: "#contact"
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Electrical Installations",
      description: "Safe and reliable electrical installations for residential and commercial properties.",
      link: "#contact"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Logistics & Supply",
      description: "Efficient logistics and supply chain management for businesses across Uganda.",
      link: "#contact"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Consulting",
      description: "Expert business consulting to help you navigate challenges and capture opportunities.",
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of products and services designed to meet diverse 
            needs of our clients across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="airbnb-card group">
              <div className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all group-hover:bg-primary/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80" asChild>
                  <a href={service.link}>Learn more →</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
