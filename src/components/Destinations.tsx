import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import greeceImg from "@/assets/greece.jpg";
import franceImg from "@/assets/france.jpg";
import egyptImg from "@/assets/egypt.jpg";
import maldivesImg from "@/assets/maldives.jpg";

const destinations = [
  {
    id: "greece",
    name: "Greece",
    image: greeceImg,
    description:
      "From the Acropolis in Athens to the white-washed houses of Santorini, it's a paradise for history lovers and beach seekers alike. Don't miss the crystal-clear waters of Mykonos and the historical treasures of Delphi.",
  },
  {
    id: "france",
    name: "France",
    image: franceImg,
    description:
      "France offers a blend of culture, romance, and elegance, attracting millions of travelers each year. Explore the Eiffel Tower in Paris, the lavender fields of Provence, and the glamorous French Riviera.",
  },
  {
    id: "egypt",
    name: "Egypt",
    image: egyptImg,
    description:
      "Marvel at the Pyramids of Giza, sail down the Nile, and explore the temples of Luxor and Karnak. Red Sea resorts like Sharm El-Sheikh also offer incredible diving and relaxation.",
  },
  {
    id: "maldives",
    name: "Maldives",
    image: maldivesImg,
    description:
      "Ideal for honeymoons and luxury escapes, it offers world-renowned diving spots and private island resorts. Experience pure serenity in one of the world's most beautiful island destinations.",
  },
];

export const Destinations = () => {
  const [activeTab, setActiveTab] = useState("greece");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-auto p-1">
            {destinations.map((dest) => (
              <TabsTrigger
                key={dest.id}
                value={dest.id}
                className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {dest.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {destinations.map((dest) => (
            <TabsContent key={dest.id} value={dest.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {dest.name}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {dest.description}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
