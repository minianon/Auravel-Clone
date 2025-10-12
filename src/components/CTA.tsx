import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let us guide your next great story.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Auravel offers a seamless travel booking experience with handpicked
            destinations, competitive prices, and 24/7 support. Our user-friendly
            platform makes it easy to plan your dream trip in just a few clicks.
            With expert travel consultants and trusted partners worldwide, your
            journey is in safe hands.
          </p>
          <Button size="lg" className="group">
            More
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
