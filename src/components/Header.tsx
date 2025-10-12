import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold">auravel</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About Us
            </a>
            <a href="#blogs" className="text-foreground/80 hover:text-foreground transition-colors">
              Blogs
            </a>
            <a href="#booking" className="text-foreground/80 hover:text-foreground transition-colors">
              Booking
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact Us
            </a>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#blogs" className="text-foreground/80 hover:text-foreground transition-colors">
                Blogs
              </a>
              <a href="#booking" className="text-foreground/80 hover:text-foreground transition-colors">
                Booking
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
