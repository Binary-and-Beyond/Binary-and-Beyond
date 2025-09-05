import portfolio1 from "@/assets/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useParallax } from "@/hooks/use-parallax";

const PortfolioSection = () => {
  // Variables for easy customization
  const sectionTitle = "Our portfolio";
  const sectionSubtitle =
    "Every pixel, every line crafted to go beyond the binary.";
  const primaryCategory = "Website";
  const secondaryCategory = "Mobile App";
  const tertiaryCategory = "Web App";

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Binary and Beyond",
      category: primaryCategory,
    },
    {
      image: portfolio2,
      title: "Project Alpha",
      category: secondaryCategory,
    },
    {
      image: portfolio1,
      title: "Digital Solutions",
      category: tertiaryCategory,
    },
    {
      image: portfolio2,
      title: "Innovation Hub",
      category: primaryCategory,
    },
    {
      image: portfolio1,
      title: "Tech Vision",
      category: secondaryCategory,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-background relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-lg">{sectionSubtitle}</p>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute top-6 right-6">
              <span className="bg-orange-primary text-white px-3 py-1 rounded-full text-sm">
                {currentItem.category}
              </span>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {currentItem.title}
              </h3>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {portfolioItems.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
