
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-felom-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Felom<span className="text-felom-blue">.</span>
            </h3>
            <p className="text-felom-gray-300 mb-6">
              Trusted provider of high-quality products and services in Uganda and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-felom-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-felom-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-felom-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-felom-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-felom-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-felom-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="text-felom-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#testimonials" className="text-felom-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-felom-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-felom-gray-300 hover:text-white transition-colors">Furniture Solutions</a></li>
              <li><a href="#" className="text-felom-gray-300 hover:text-white transition-colors">Solar Installations</a></li>
              <li><a href="#" className="text-felom-gray-300 hover:text-white transition-colors">Construction Services</a></li>
              <li><a href="#" className="text-felom-gray-300 hover:text-white transition-colors">Electrical Installations</a></li>
              <li><a href="#" className="text-felom-gray-300 hover:text-white transition-colors">Logistics & Supply</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-felom-gray-300">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-felom-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+256 759 912 403</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-felom-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@felomcompany.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-felom-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Plot 45, Kampala Road<br />Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-felom-gray-800 pt-8">
          <div className="text-center text-felom-gray-400">
            <p>&copy; {currentYear} Felom Company Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
