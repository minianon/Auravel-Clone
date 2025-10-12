import { Card } from "@/components/ui/card";
import { Hotel, MapPin, Plane } from "lucide-react";

const services = [
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "From budget stays to luxury resorts, we book accommodations that match your travel style and budget. Enjoy exclusive rates and handpicked hotels in every corner of the globe.",
  },
  {
    icon: MapPin,
    title: "Tour Guide Services",
    description:
      "Make the most of your journey with our experienced local tour guides. Whether you're exploring ancient landmarks or hidden gems, our guides provide deep cultural insights and personalized experiences.",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "We help you find the best flight deals to your dream destination. Whether it's a domestic getaway or an international adventure, we offer competitive prices, flexible options, and 24/7 support.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
