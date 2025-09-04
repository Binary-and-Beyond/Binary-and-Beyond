import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-lg">
            WE OFFER MORE THAN JUST FREELANCE SERVICES. WE DELIVER DIGITAL
            CRAFTSMANSHIP THAT BRIDGES LOGIC AND IMAGINATION.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 -translate-x-14"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Website and Digital Presence Card */}
            <div className="bg-teal-primary rounded-3xl p-8 text-white relative overflow-hidden min-w-[500px] flex-shrink-0">
              <h3 className="text-2xl font-bold mb-6">
                Website and Digital Presence
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Website design and development
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Mobile-first, fast loading designs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">Booking/appointment systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Smart forms via WhatsApp integrations
                  </span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-xs text-white/80 mb-4">Our History</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold">50% Faster</div>
                    <div className="text-sm text-white/80">
                      launch of projects
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm text-white/80">
                      projects completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing and Growth Card */}
            <div className="bg-orange-primary rounded-3xl p-8 text-white relative overflow-hidden min-w-[500px] flex-shrink-0">
              <h3 className="text-2xl font-bold mb-6">Marketing and Growth</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    SEO for local and global ranking
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Google Business profile setup and optimization
                  </span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-xs text-white/80 mb-4">Our History</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold">50% Faster</div>
                    <div className="text-sm text-white/80">
                      launch of projects
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm text-white/80">
                      projects completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative & Content Card */}
            <div className="bg-purple-primary rounded-3xl p-8 text-white relative overflow-hidden min-w-[500px] flex-shrink-0">
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                03
              </div>
              <h3 className="text-2xl font-bold mb-6">Creative & Content</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Visual identity and brand design
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Portfolio or product showcase pages
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Marketing collateral (digital brochures, catalogues, PDFs)
                  </span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-xs text-white/80 mb-4">Our History</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold">50% Faster</div>
                    <div className="text-sm text-white/80">
                      launch of projects
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm text-white/80">
                      projects completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Analytics & Others Card */}
            <div className="bg-red-primary rounded-3xl p-8 text-white relative overflow-hidden min-w-[500px] flex-shrink-0">
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                04
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Data Analytics & Others
              </h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Chatbots and AI-assisted inquiry handling
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Automated follow-ups via email or WhatsApp
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">Industry-Specific Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-sm">
                    Social media branding and content strategy
                  </span>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-xs text-white/80 mb-4">Our History</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold">50% Faster</div>
                    <div className="text-sm text-white/80">
                      launch of projects
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm text-white/80">
                      projects completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10 translate-x-14"
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
