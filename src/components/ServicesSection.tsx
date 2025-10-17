import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import {
  Palette,
  Sparkles,
  Network,
  BookOpen,
  Monitor,
  FileText,
} from "lucide-react";

const ServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const serviceCards = [
    {
      id: 1,
      title: "Website Design & Development",
      icon: Palette,
      color: "bg-teal-600",
      items: [
        "Custom-built websites tailored to your brand",
        "Mobile-first, fast-loading designs for optimal performance",
      ],
    },
    {
      id: 2,
      title: "AI & Automation",
      icon: Sparkles,
      color: "bg-orange-600",
      items: [
        "Chatbots and AI-assisted inquiry handling",
        "Industry-specific digital solutions",
      ],
    },
    {
      id: 3,
      title: "Smart Systems & Integrations",
      icon: Network,
      color: "bg-purple-600",
      items: [
        "Booking and appointment systems",
        "Intelligent forms with WhatsApp integration",
        "Automated follow-ups via email or WhatsApp",
      ],
    },
    {
      id: 4,
      title: "Branding & Visual Identity",
      icon: BookOpen,
      color: "bg-red-600",
      items: [
        "Complete brand design and visual identity",
        "Social media branding and content strategy",
      ],
    },
    {
      id: 5,
      title: "Showcase & Marketing Collateral",
      icon: FileText,
      color: "bg-pink-600",
      items: [
        "Portfolio and product showcase pages",
        "Digital brochures, catalogues, and PDFs",
      ],
    },
    {
      id: 6,
      title: "SEO & Online Presence",
      icon: Monitor,
      color: "bg-indigo-600",
      items: [
        "SEO strategies for local and global visibility",
        "Google Business Profile setup and optimization",
      ],
    },
  ];

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isAtStart = container.scrollLeft <= 10;
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;

      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth =
        container.querySelector(".service-card")?.clientWidth || 280;
      container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
      setTimeout(updateScrollButtons, 300);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth =
        container.querySelector(".service-card")?.clientWidth || 280;
      container.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
      setTimeout(updateScrollButtons, 300);
    }
  };

  // Update scroll buttons on mount and scroll
  useEffect(() => {
    updateScrollButtons();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section
      id="services"
      className="pt-24 pb-20 px-6 bg-background relative"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-teal-500/20">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-400 text-sm font-medium">
              What we do best
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-teal-200 to-blue-200 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer more than just freelance services. We deliver digital
            craftsmanship that bridges logic and imagination.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden h-[350px] flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="mb-4 relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight relative z-10">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <div className="space-y-3 flex-1 relative z-10">
                    {card.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm leading-relaxed text-white/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg group-hover:bg-white/10 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4"
          >
            {serviceCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="service-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 text-white relative overflow-hidden w-[280px] flex-shrink-0 h-[320px] flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="mb-4 relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-4 leading-tight relative z-10">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <div className="space-y-3 flex-1 relative z-10">
                    {card.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm leading-relaxed text-white/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 w-16 h-16 bg-white/5 rounded-full blur-lg group-hover:bg-white/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/5 rounded-full blur-md group-hover:bg-white/10 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 flex"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 flex"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
