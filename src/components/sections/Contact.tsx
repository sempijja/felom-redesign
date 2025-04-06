
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-felom-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-felom-gray-600">
            Have questions or want to discuss how we can help with your project? 
            Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-felom-blue-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-felom-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-felom-gray-800 mb-1">Call Us</h3>
                  <p className="text-felom-gray-600">+256 759 912 403</p>
                  <p className="text-felom-gray-600">+256 702 223 490</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-felom-blue-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-felom-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-felom-gray-800 mb-1">Email Us</h3>
                  <p className="text-felom-gray-600">info@felomcompany.com</p>
                  <p className="text-felom-gray-600">support@felomcompany.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-felom-blue-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-felom-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-felom-gray-800 mb-1">Visit Us</h3>
                  <p className="text-felom-gray-600">
                    Plot 45, Kampala Road<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-felom-gray-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-felom-gray-700 font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-felom-gray-200 focus:border-felom-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-felom-gray-700 font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-felom-gray-200 focus:border-felom-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-felom-gray-700 font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+256 7XX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-felom-gray-200 focus:border-felom-blue"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-felom-gray-700 font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="border-felom-gray-200 focus:border-felom-blue"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="bg-felom-blue hover:bg-felom-blue-600 w-full md:w-auto"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
