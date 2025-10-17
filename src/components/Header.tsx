import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Binary and Beyond Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            Get in touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-xl border-b border-white/10">
          <nav className="px-6 py-4 space-y-4">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm py-2"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 mt-4"
            >
              Get in touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
