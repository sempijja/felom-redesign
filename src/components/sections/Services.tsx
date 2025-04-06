
import { Lightbulb, HomeIcon, Hammer, Cpu, Truck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8 text-felom-blue" />,
      title: "Furniture Solutions",
      description: "High-quality office and home furniture designed for comfort, durability and aesthetics.",
      link: "#contact"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-felom-blue" />,
      title: "Solar Installations",
      description: "Renewable energy solutions for homes and businesses with professional installation and maintenance.",
      link: "#contact"
    },
    {
      icon: <Hammer className="h-8 w-8 text-felom-blue" />,
      title: "Construction Services",
      description: "End-to-end construction services from planning and design to execution and finishing.",
      link: "#contact"
    },
    {
      icon: <Cpu className="h-8 w-8 text-felom-blue" />,
      title: "Electrical Installations",
      description: "Safe and reliable electrical installations for residential and commercial properties.",
      link: "#contact"
    },
    {
      icon: <Truck className="h-8 w-8 text-felom-blue" />,
      title: "Logistics & Supply",
      description: "Efficient logistics and supply chain management for businesses across Uganda.",
      link: "#contact"
    },
    {
      icon: <Users className="h-8 w-8 text-felom-blue" />,
      title: "Consulting",
      description: "Expert business consulting to help you navigate challenges and capture opportunities.",
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="section bg-felom-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-felom-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-felom-gray-600">
            We offer a comprehensive range of products and services designed to meet diverse 
            needs of our clients across various sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-felom-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] duration-300">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-felom-gray-800 mb-2">{service.title}</h3>
                <p className="text-felom-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="p-0 text-felom-blue hover:text-felom-blue-700" asChild>
                  <a href={service.link}>Learn more &rarr;</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
