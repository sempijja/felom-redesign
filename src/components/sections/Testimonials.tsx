
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "David Mutaasa",
    role: "CEO, Kampala Office Solutions",
    content: "Felom has been our trusted furniture supplier for over 5 years. Their attention to detail, quality products and excellent customer service have made them our first choice for all office installations.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Sarah Aceng",
    role: "Director, Green Energy Uganda",
    content: "The solar installation by Felom has significantly reduced our energy costs and provided us with reliable power. Their technical team was professional and completed the project ahead of schedule.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "John Omondi",
    role: "Property Developer",
    content: "Working with Felom on our residential project was a pleasure. They delivered high-quality construction services and were responsive to our needs throughout the process.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4
  },
  {
    name: "Grace Nakato",
    role: "Operations Manager, Entebbe Hotel",
    content: "The electrical installations provided by Felom were top-notch. They addressed all our requirements and ensured safety compliance at every step of the project.",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section bg-felom-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-felom-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-felom-gray-600">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about Felom.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "w-4 h-4", 
                                  i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                )} 
                              />
                            ))}
                          </div>
                          <p className="text-felom-gray-600 italic mb-4">{testimonial.content}</p>
                          <div>
                            <h4 className="font-semibold text-felom-gray-800">{testimonial.name}</h4>
                            <p className="text-sm text-felom-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors duration-300",
                  activeIndex === index 
                    ? "bg-felom-blue" 
                    : "bg-felom-gray-300 hover:bg-felom-gray-400"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
