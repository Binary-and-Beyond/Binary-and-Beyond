import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const navigationLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
  const socialLinks = [
    { name: "Discord", icon: "💬" },
    { name: "Twitter", icon: "🐦" },
    { name: "Instagram", icon: "📷" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-16 px-6 bg-footer-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="w-full md:w-auto">
            <div className="mb-8">
              <img
                src={logo}
                alt="Binary and Beyond Logo"
                className="h-8 w-auto"
              />
            </div>

            <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8">
              {navigationLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer font-medium text-left sm:text-center"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center hover:bg-orange-secondary transition-colors self-end md:self-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © 2025 Binary and Beyond All rights reserved.
          </p>

          <div className="flex gap-4 self-start sm:self-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
