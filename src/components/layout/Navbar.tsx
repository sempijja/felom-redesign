
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-felom-gray-800">
            Felom<span className="text-felom-blue">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium">
            About
          </a>
          <a href="#services" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium">
            Services
          </a>
          <a href="#products" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium">
            Products
          </a>
          <a href="#testimonials" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium">
            Testimonials
          </a>
          <a href="#contact" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium">
            Contact
          </a>
        </nav>

        <Button 
          variant="default" 
          className="hidden md:inline-flex bg-felom-blue hover:bg-felom-blue-600"
          asChild
        >
          <a href="#contact">Get in Touch</a>
        </Button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-felom-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <a href="#about" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium py-2">
            About
          </a>
          <a href="#services" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium py-2">
            Services
          </a>
          <a href="#products" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium py-2">
            Products
          </a>
          <a href="#testimonials" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium py-2">
            Testimonials
          </a>
          <a href="#contact" className="text-felom-gray-700 hover:text-felom-blue-600 font-medium py-2">
            Contact
          </a>
          <Button 
            variant="default" 
            className="w-full bg-felom-blue hover:bg-felom-blue-600"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
