import { ArrowUp } from "lucide-react";

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
        <div className="flex justify-between items-start mb-16">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-8">LOGO</h3>

            <nav className="flex gap-8">
              {navigationLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-orange-primary rounded-full flex items-center justify-center hover:bg-orange-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2025 Binary and Beyond All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
