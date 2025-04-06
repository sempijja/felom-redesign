
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const products = [
    {
      title: "Office Furniture",
      description: "Ergonomic desks, chairs and storage solutions designed for productivity and comfort.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Furniture",
      rating: 4.9,
      reviews: 124
    },
    {
      title: "Solar Panel Systems",
      description: "High-efficiency solar panels and complete renewable energy systems for homes and businesses.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Energy",
      rating: 4.8,
      reviews: 89
    },
    {
      title: "Construction Materials",
      description: "Quality building materials including cement, steel, timber and finishing products.",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Construction",
      rating: 4.7,
      reviews: 156
    },
    {
      title: "Electrical Equipment",
      description: "Wiring, switches, circuit breakers, lighting fixtures and other electrical components.",
      image: "https://images.unsplash.com/photo-1544723495-432537d12f6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "Electrical",
      rating: 4.9,
      reviews: 102
    }
  ];

  return (
    <section id="products" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium">OUR PRODUCTS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of high-quality products designed to meet your specific needs
            and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="airbnb-card bg-white overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-white text-gray-800 hover:bg-white">
                  {product.tag}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6" asChild>
            <a href="#contact">
              Browse All Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
