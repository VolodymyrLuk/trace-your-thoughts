import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container-custom px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">AlexiTrack Journal</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("why-it-helps")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Why It Helps
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            FAQs
          </button>
          <Button variant="cta" size="lg" onClick={() => scrollToSection("email-capture")}>
            Get the Free Starter Pack
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container-custom px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("why-it-helps")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Why It Helps
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left text-foreground hover:text-primary transition-smooth py-2"
            >
              FAQs
            </button>
            <Button variant="cta" size="lg" onClick={() => scrollToSection("email-capture")} className="w-full">
              Get the Free Starter Pack
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
