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
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Check scroll state after animation
      setTimeout(updateScrollButtons, 300);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      // Check scroll state after animation
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

  return (
    <section
      id="services"
      className="py-20 px-6 bg-background relative"
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

        <div className="relative px-0 sm:px-14">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 z-10"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {serviceCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`${card.color} rounded-3xl p-4 sm:p-6 md:p-8 text-white relative overflow-hidden min-w-[280px] sm:min-w-[320px] md:min-w-[380px] flex-shrink-0 h-[320px] sm:h-[350px] flex flex-col`}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-tight">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    {card.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 z-10"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
