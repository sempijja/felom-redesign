
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  // Update title and description
  useEffect(() => {
    document.title = "Felom Company Limited | Quality & Innovation";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Felom Company Limited - Trusted provider of high-quality products and services in Uganda and beyond. From furniture to solar panels, construction to electrical installations.");
    }

    // Add class to specific elements for animation
    const elementsToAnimate = document.querySelectorAll("section > div > div");
    elementsToAnimate.forEach((element) => {
      element.classList.add("animate-on-scroll");
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollAnimations />
    </div>
  );
};

export default Index;
