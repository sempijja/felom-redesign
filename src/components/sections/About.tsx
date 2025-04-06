
import { Code, Clock, BadgeCheck, BookOpen, Building, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <BadgeCheck className="h-6 w-6 text-felom-blue" />,
      title: "Quality",
      description: "We're committed to delivering products and services that exceed industry standards and client expectations."
    },
    {
      icon: <Clock className="h-6 w-6 text-felom-blue" />,
      title: "Reliability",
      description: "We pride ourselves on being a dependable partner you can trust to deliver on time, every time."
    },
    {
      icon: <Code className="h-6 w-6 text-felom-blue" />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions."
    },
    {
      icon: <Building className="h-6 w-6 text-felom-blue" />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical business practices."
    },
    {
      icon: <Target className="h-6 w-6 text-felom-blue" />,
      title: "Customer Focus",
      description: "Our clients' needs drive everything we do, ensuring solutions that address real challenges."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-felom-blue" />,
      title: "Expertise",
      description: "Our team brings deep industry knowledge and technical skills to every project."
    },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-felom-gray-900 mb-4">About Felom</h2>
          <p className="text-lg text-felom-gray-600">
            Felom Company Limited is a leading provider of high-quality products and services 
            based in Uganda. Since our inception, we have been committed to delivering excellence 
            across various sectors including furniture, solar solutions, construction, and electrical installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border border-felom-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-felom-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-felom-gray-800 mb-2">{value.title}</h3>
                <p className="text-felom-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
