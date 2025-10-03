import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import LiquidEther from "./LiquidEther.js";

import TextType from "./TextType";

const HeroSection = () => {
  const allSkills = [
    { name: "Web Development", icon: "🌐" },
    { name: "Product Design", icon: "🎨" },
    { name: "Building Chatbot", icon: "🤖" },
    { name: "Building AI Agent", icon: "🖥️  " },
    { name: "Mobile Development", icon: "📱" },
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Data Science", icon: "📊" },
    { name: "Cloud Computing", icon: "☁️" },
    { name: "DevOps", icon: "⚙️" },
    { name: "Machine Learning", icon: "🧠" },
    { name: "Blockchain", icon: "🔗" },
    { name: "Cybersecurity", icon: "🔒" },
  ];

  // const [currentSet, setCurrentSet] = useState(0);
  // const [removedSkills, setRemovedSkills] = useState<string[]>([]);

  // // Get current 6 skills to display
  // const getCurrentSkills = () => {
  //   const availableSkills = allSkills.filter(
  //     (skill) => !removedSkills.includes(skill.name)
  //   );
  //   const startIndex = (currentSet * 4) % availableSkills.length;
  //   return availableSkills.slice(startIndex, startIndex + 4);
  // };

  // const currentSkills = getCurrentSkills();

  // // Auto-cycle function
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSet((prev) => prev + 1);
  //   }, 4000); // Cycle every 4 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // const removeSkill = (skillName: string) => {
  //   setRemovedSkills((prev) => [...prev, skillName]);
  // };

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex flex-col justify-center items-center px-6 pt-24 pb-20 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      {/* <div
        className="absolute inset-0 opacity-5"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div> */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#2DD4BF", "#14B8A6", "#0F766E"]}
          mouseForce={25}
          cursorSize={120}
          resolution={0.6}
          autoDemo={true}
          autoSpeed={0.8}
          autoIntensity={2.5}
          style={{ width: "100%", height: "100%" }}
          className="w-full h-full"
        />
      </div>

      {/* Fixed badge positioned absolutely */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-white/90 text-sm font-medium">
            Available for new projects
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10 mt-20">
        <TextType
          text={["Welcome to Innovation"]}
          typingSpeed={75}
          pauseDuration={10}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
        />

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "2s" }}
        >
          Where logic meets imagination, and code becomes creation
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "2.5s" }}
        >
          <a
            href="#portfolio"
            className="group bg-gradient-to-r from-teal-primary to-purple-primary hover:from-teal-primary/90 hover:to-purple-primary/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            View Our Work
            <div className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
              🎯
            </div>
          </a>
          <a
            href="#contact"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20 flex items-center gap-2"
          >
            Start a Project
            <div className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300">
              🚀
            </div>
          </a>
        </div>
      </div>

      {/* Skills Badges in a line */}
      {/* <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-20 max-w-6xl mx-auto px-6">
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
      </div> */}
    </section>
  );
};

export default HeroSection;
