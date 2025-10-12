import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Destinations } from "@/components/Destinations";
import { CTA } from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <CTA />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;
