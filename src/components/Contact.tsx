import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your look? Book your appointment today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-muted-foreground">hello@luxesalon.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">123 Luxury Lane, Beverly Hills, CA 90210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Hours</h3>
                <p className="text-muted-foreground">Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <Input type="text" placeholder="Your Name" className="h-12" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="h-12" />
            </div>
            <div>
              <Input type="tel" placeholder="Phone Number" className="h-12" />
            </div>
            <div>
              <Textarea
                placeholder="Tell us about your desired service..."
                className="min-h-[120px]"
              />
            </div>
            <Button
              variant="hero"
              size="lg"
              className="w-full text-lg"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Thank you! We'll contact you soon to confirm your appointment.");
              }}
            >
              Book Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
