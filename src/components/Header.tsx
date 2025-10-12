import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui setup
import { Menu, X } from "lucide-react";
import auravelLogo from '../assets/logo.svg'; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // This is for the on-scroll effect. We'll add it later if needed.
  // For now, it's transparent.

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" aria-label="Auravel Home">
            <img src={auravelLogo} alt="Auravel Logo" className="h-7 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#about" className="text-white font-medium hover:opacity-80 transition-opacity">About Us</a>
            <a href="#blogs" className="text-white font-medium hover:opacity-80 transition-opacity">Blogs</a>
            <a href="#booking" className="text-white font-medium hover:opacity-80 transition-opacity">Booking</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 font-semibold">
              Contact Us
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg rounded-lg mx-4 mt-2">
          <nav className="flex flex-col gap-2 p-4">
            <a href="#about" className="text-white p-2 rounded-md hover:bg-white/10 transition-colors">About Us</a>
            <a href="#blogs" className="text-white p-2 rounded-md hover:bg-white/10 transition-colors">Blogs</a>
            <a href="#booking" className="text-white p-2 rounded-md hover:bg-white/10 transition-colors">Booking</a>
            <a href="#contact" className="text-white p-2 rounded-md hover:bg-white/10 transition-colors">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};