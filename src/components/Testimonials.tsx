import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Absolutely incredible experience! The attention to detail and luxurious atmosphere made me feel like royalty. My hair has never looked better!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text: "The team here is exceptional. Professional, friendly, and truly talented. I've been coming here for years and wouldn't go anywhere else.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    text: "From the moment I walked in, I felt pampered and cared for. The spa treatments are divine, and the results speak for themselves!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Love</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
