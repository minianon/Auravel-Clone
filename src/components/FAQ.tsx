import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqCategories = [
  {
    id: "bookings",
    name: "Bookings & Tours",
    questions: [
      {
        q: "How do I book a tour or experience with Auravel?",
        a: "Browse our offerings on the Auravel site, select your preferred dates and number of travelers, then click 'Book Now.' You'll enter traveler details and any special requests. After payment of the deposit, you'll receive an email confirmation with your itinerary and next steps.",
      },
      {
        q: "Can I book for multiple travelers or a group?",
        a: "Yes. When booking, specify the total number of participants. For larger groups (e.g., more than 6), you may see a prompt to contact us directly so we can arrange group rates, private guides, or customized logistics.",
      },
      {
        q: "Is it possible to customize or combine tours?",
        a: "Absolutely. After selecting a base itinerary, use the 'Customize Your Trip' option to add or remove activities, adjust duration, or upgrade accommodations. Our team reviews requests—typically within 24 hours—and sends an updated proposal.",
      },
    ],
  },
  {
    id: "payment",
    name: "Pay or Cancel",
    questions: [
      {
        q: "What payment methods are accepted?",
        a: "We accept major credit/debit cards (Visa, Mastercard, Amex), PayPal, and bank transfers. A deposit (commonly 25% of the total) is due at booking to secure your spot.",
      },
      {
        q: "What is Auravel's cancellation policy?",
        a: "Cancellations made more than 30 days before departure typically receive a full refund minus any non-refundable fees. Between 30 and 15 days, the deposit may be retained. Within 15 days, most bookings become non-refundable.",
      },
    ],
  },
  {
    id: "insurance",
    name: "Travel Insurance",
    questions: [
      {
        q: "Do I need travel insurance?",
        a: "We strongly recommend comprehensive travel insurance covering trip cancellation, medical emergencies, evacuation, lost luggage, and personal liability.",
      },
      {
        q: "Can I purchase insurance through Auravel?",
        a: "Yes. During checkout, you can add a policy from our vetted partners. Coverage options and costs are displayed clearly so you can choose the plan that fits your needs.",
      },
    ],
  },
  {
    id: "support",
    name: "Support Service",
    questions: [
      {
        q: "How can I contact Auravel for pre-trip queries?",
        a: "You can reach our team via live chat on the website (available during business hours), email at support@auravel.com (we respond within 2 business hours), or phone at +1 800 TRAVEL9.",
      },
      {
        q: "What support is available during my trip?",
        a: "We provide 24/7 emergency assistance. You'll receive local partner contacts and a dedicated Auravel on-call number for urgent issues—flight delays, medical emergencies, or unexpected changes.",
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">FAQs</h2>
        </div>

        <Tabs defaultValue="bookings" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1">
            {faqCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="text-xs md:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <Accordion type="single" collapsible className="w-full">
                {cat.questions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
