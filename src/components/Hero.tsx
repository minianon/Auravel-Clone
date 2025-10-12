import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// You will need to get the actual partner logos and put them in your assets folder
// These are placeholders that assume you've placed them in 'src/assets/partners/'
const partnerLogos = [
  '/src/assets/partners/partner1.svg',
  '/src/assets/partners/partner2.svg',
  '/src/assets/partners/partner3.svg',
  '/src/assets/partners/partner4.svg',
  '/src/assets/partners/partner5.svg',
  '/src/assets/partners/partner6.svg',
  '/src/assets/partners/partner7.svg',
];

export const Hero = () => {
  return (
    <section 
      className="relative h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/src/assets/bg.avif')" }}
    >
      {/* Dark overlay to make text readable. The original has a subtle gradient. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-4xl text-white">
          {/* CHANGE 1: Headline structure and styling */}
         <h1 
            className="font-extrabold mb-6 leading-tight tracking-tighter" // Keep other Tailwind classes
            style={{
              fontFamily: '"Tilt Warp", sans-serif',
              fontSize: '64px',
            }}
          >
            See the World,
            <br />
            <span className="text-[#FCA311]">Differently.</span>
          </h1>
          
          {/* CHANGE 2: Button with glassmorphism effect */}
          <Button 
            size="lg" 
            className="mt-4 group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-base font-semibold px-6 py-5 rounded-full"
          >
            More About Us
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* CHANGE 3: Partner logo banner at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 overflow-hidden">
        {/* We add a gradient mask to fade the logos at the edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
        <div className="flex w-max"> {/* Use w-max to allow the content to exceed screen width */}
          {/* We duplicate the logos to create a seamless loop */}
          <div className="flex animate-scroll">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div
                key={`p1-${i}`}
                className="flex-shrink-0 w-48 h-16 mx-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center"
              >
                {/* Replace this with actual <img> tags */}
                <img src={logo} alt={`Partner ${i + 1}`} className="h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};