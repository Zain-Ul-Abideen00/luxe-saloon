import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Droplet, Palette } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, styling, and treatments for all hair types. From classic to contemporary looks.",
    price: "From $85",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description: "Professional coloring services including highlights, balayage, and color correction.",
    price: "From $120",
  },
  {
    icon: Sparkles,
    title: "Spa Treatments",
    description: "Rejuvenating facial treatments, massages, and relaxation therapies for total wellness.",
    price: "From $95",
  },
  {
    icon: Droplet,
    title: "Nail Services",
    description: "Manicures, pedicures, and nail art by certified technicians using premium products.",
    price: "From $45",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Indulge in our comprehensive range of beauty and wellness services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-elegant">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-semibold text-lg">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
