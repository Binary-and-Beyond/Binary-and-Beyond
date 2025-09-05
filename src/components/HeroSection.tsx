import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useParallax } from "@/hooks/use-parallax";

const HeroSection = () => {
  const allSkills = [
    { name: "Web Development", icon: "🌐" },
    { name: "Product Design", icon: "🎨" },
    { name: "Building Chatbot", icon: "🤖" },
    { name: "Building AI Agent", icon: "💗" },
    { name: "Mobile Development", icon: "📱" },
    { name: "UI/UX Design", icon: "✨" },
    { name: "Data Science", icon: "📊" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "DevOps", icon: "⚙️" },
    { name: "Machine Learning", icon: "🧠" },
    { name: "Blockchain", icon: "🔗" },
    { name: "Cybersecurity", icon: "🔒" },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [removedSkills, setRemovedSkills] = useState<string[]>([]);

  // Get current 6 skills to display
  const getCurrentSkills = () => {
    const availableSkills = allSkills.filter(
      (skill) => !removedSkills.includes(skill.name)
    );
    const startIndex = (currentSet * 4) % availableSkills.length;
    return availableSkills.slice(startIndex, startIndex + 4);
  };

  const currentSkills = getCurrentSkills();

  // Auto-cycle function
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => prev + 1);
    }, 4000); // Cycle every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const removeSkill = (skillName: string) => {
    setRemovedSkills((prev) => [...prev, skillName]);
  };

  const bgRef = useParallax({ speed: 0.2, maxTranslate: 40 });

  return (
    <section
      id="home"
      className="min-h-screen bg-hero-bg flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
      style={{ backgroundAttachment: "fixed" }}
    >
      {/* Background grid pattern */}
      <div
        ref={bgRef as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 opacity-5"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Welcome to Binary
          <br />
          and Beyond
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Where logic meets imagination, and code becomes creation
        </p>
      </div>

      {/* Skills Badges in a line */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-20 max-w-6xl mx-auto px-6">
        {currentSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 px-3 md:px-4 py-2 md:py-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="text-base md:text-lg">{skill.icon}</span>
            <span className="text-xs md:text-sm font-medium text-white whitespace-nowrap">
              {skill.name}
            </span>
            <button
              onClick={() => removeSkill(skill.name)}
              className="ml-2 w-4 h-4 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
