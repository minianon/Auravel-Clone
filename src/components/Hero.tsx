import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-desert.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            See the World,{" "}
            <span className="text-primary">Differently.</span>
          </h1>
          
          <Button 
            size="lg" 
            className="mt-8 group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-lg px-8 py-6 rounded-full"
          >
            More About Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-12 mx-4 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/60 text-xs font-semibold"
              >
                PARTNER {(i % 12) + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
