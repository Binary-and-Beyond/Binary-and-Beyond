import portfolio1 from "@/assets/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio2.jpg";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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
      visitUrl: "https://example.com/binary-beyond",
      githubUrl: "https://github.com/example/binary-beyond",
    },
    {
      image: portfolio2,
      title: "Project Alpha",
      category: secondaryCategory,
      visitUrl: "https://example.com/project-alpha",
      githubUrl: "https://github.com/example/project-alpha",
    },
    {
      image: portfolio1,
      title: "Digital Solutions",
      category: tertiaryCategory,
      visitUrl: "https://example.com/digital-solutions",
      githubUrl: "https://github.com/example/digital-solutions",
    },
    {
      image: portfolio2,
      title: "Innovation Hub",
      category: primaryCategory,
      visitUrl: "https://example.com/innovation-hub",
      githubUrl: "https://github.com/example/innovation-hub",
    },
    {
      image: portfolio1,
      title: "Tech Vision",
      category: secondaryCategory,
      visitUrl: "https://example.com/tech-vision",
      githubUrl: "https://github.com/example/tech-vision",
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
      className="pt-24 pb-20 px-6 bg-background relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: "20px 20px",
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
          {/* Main Card Display */}
          <div className="relative rounded-3xl overflow-hidden group shadow-2xl">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-72 md:h-96 object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Animated border - only shows on hover */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>

            {/* Top buttons - Visit and GitHub */}
            <div className="absolute top-6 left-6 flex gap-3 z-10">
              <a
                href={currentItem.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-105 shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                Visit
              </a>
              <a
                href={currentItem.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 border border-white/30 hover:scale-105 shadow-lg"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Category badge */}
            <div className="absolute top-6 right-6 z-10">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                {currentItem.category}
              </span>
            </div>

            {/* Project title */}
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                {currentItem.title}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-orange-primary scale-110"
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200"
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
