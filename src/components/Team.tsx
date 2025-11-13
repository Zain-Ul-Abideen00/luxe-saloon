import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Sophia Martinez",
    role: "Master Stylist & Owner",
    specialty: "Color Specialist",
    experience: "15+ years",
  },
  {
    name: "James Chen",
    role: "Senior Stylist",
    specialty: "Precision Cuts",
    experience: "12+ years",
  },
  {
    name: "Emma Williams",
    role: "Spa Director",
    specialty: "Skincare & Wellness",
    experience: "10+ years",
  },
  {
    name: "Isabella Rodriguez",
    role: "Nail Technician",
    specialty: "Nail Art & Design",
    experience: "8+ years",
  },
];

export const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Experts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our passionate team of professionals dedicated to your beauty and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center hover-lift border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-elegant">
                  <span className="text-4xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">{member.specialty}</p>
                <p className="text-sm font-semibold text-accent">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
