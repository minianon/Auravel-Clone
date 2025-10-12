import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Floyd Miles",
    role: "Vice President, GoPro",
    content:
      "Professional, punctual, and totally worth it. I booked a family package to Greece through Auravel. The hotel was perfect, the tours were amazing, and the customer service was excellent. Everything went exactly as planned.",
  },
  {
    name: "Jane Cooper",
    role: "CEO, Airbnb",
    content:
      "It was the honeymoon of our dreams! Auravel handled everything — from the flights to our overwater villa in the Maldives. We didn't have to stress about a single detail. Just pure relaxation and romance. Can't wait to book our next trip!",
  },
  {
    name: "Kristin Watson",
    role: "Co-Founder, Strapi",
    content:
      "Auravel made me fall in love with traveling again. Their local guide in Paris was so knowledgeable, and the itinerary was perfectly balanced between sightseeing and relaxation. Highly recommended!",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Stories from Real Customers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-12 h-12 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
