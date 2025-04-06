
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Office Furniture",
      description: "Ergonomic desks, chairs and storage solutions designed for productivity and comfort.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Furniture"
    },
    {
      title: "Solar Panel Systems",
      description: "High-efficiency solar panels and complete renewable energy systems for homes and businesses.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Energy"
    },
    {
      title: "Construction Materials",
      description: "Quality building materials including cement, steel, timber and finishing products.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Construction"
    },
    {
      title: "Electrical Equipment",
      description: "Wiring, switches, circuit breakers, lighting fixtures and other electrical components.",
      image: "https://images.unsplash.com/photo-1544723495-432537d12f6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Electrical"
    }
  ];

  return (
    <section id="products" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-felom-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-felom-gray-600">
            We offer a wide range of high-quality products designed to meet your specific needs
            and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute top-4 right-4 bg-felom-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-felom-gray-800 mb-2">{product.title}</h3>
                <p className="text-felom-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" size="sm" className="text-felom-blue border-felom-blue hover:bg-felom-blue hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-felom-blue hover:bg-felom-blue-600 inline-flex items-center gap-2" asChild>
            <a href="#contact">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
