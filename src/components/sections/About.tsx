
import { Heart, Shield, Zap, Building, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Quality",
      description: "We're committed to delivering products and services that exceed industry standards and client expectations."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Reliability",
      description: "We pride ourselves on being a dependable partner you can trust to deliver on time, every time."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions."
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical business practices."
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Customer Focus",
      description: "Our clients' needs drive everything we do, ensuring solutions that address real challenges."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Expertise",
      description: "Our team brings deep industry knowledge and technical skills to every project."
    },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium">ABOUT US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">The Felom Story</h2>
          <p className="text-lg text-gray-600">
            Felom Company Limited is a leading provider of high-quality products and services 
            based in Uganda. Since our inception, we have been committed to delivering excellence 
            across various sectors including furniture, solar solutions, construction, and electrical installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
