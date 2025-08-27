import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

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
    const startIndex = (currentSet * 6) % availableSkills.length;
    return availableSkills.slice(startIndex, startIndex + 6);
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

  return (
    <section
      id="home"
      className="min-h-screen bg-hero-bg flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
          WELCOME TO BINARY
          <br />
          AND BEYOND
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Where logic meets imagination, and code becomes creation
        </p>
      </div>

      {/* Floating Skills Badges */}
      <div className="relative w-full max-w-4xl h-96 mb-20">
        {currentSkills.map((skill, index) => {
          const positions = [
            { top: "10%", left: "15%", rotation: "rotate-2" },
            { top: "25%", left: "70%", rotation: "-rotate-1" },
            { top: "60%", left: "10%", rotation: "rotate-1" },
            { top: "75%", left: "65%", rotation: "-rotate-2" },
            { top: "35%", left: "40%", rotation: "rotate-3" },
            { top: "50%", left: "80%", rotation: "-rotate-3" },
          ];

          const position = positions[index % positions.length];

          return (
            <div
              key={skill.name}
              className={`absolute ${position.rotation} transform transition-all duration-300 hover:scale-105`}
              style={{
                top: position.top,
                left: position.left,
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium text-white whitespace-nowrap">
                  {skill.name}
                </span>
                <button
                  onClick={() => removeSkill(skill.name)}
                  className="ml-2 w-4 h-4 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          EVERY BYTE TELLS A STORY.
          <br />
          HERE IS OURS.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
