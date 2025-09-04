import boy2 from "@/assets/boy2.jpg";
import boy1 from "@/assets/boy1.jpg";
import boy3 from "@/assets/boy3.jpg";
import girl1 from "@/assets/girl1.jpg";
import girl2 from "@/assets/girl2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TeamSection = () => {
  // Variables for easy customization
  const missionText =
    "WE ARE A PASSIONATE GROUP OF CREATORS, TECHNOLOGISTS, AND PROBLEM-SOLVERS DRIVEN BY CURIOSITY. OUR MISSION IS TO BUILD INNOVATIVE SOLUTIONS THAT EMPOWER PEOPLE AND TRANSFORM IDEAS INTO REALITY.";
  const sectionTitle = "OUR TEAM";
  const sectionSubtitle = "MEET THE CREATORS BEHIND THE MAGIC";

  const teamMembers = [
    {
      name: "Srikar MK",
      title: "AI Engineer and Full Stack Developer",
      image: boy1,
    },
    {
      name: "Rajesh Challa",
      title: "Agentic and Frontend Developer",
      image: boy2,
    },
    {
      name: "Pujita Sunnapu",
      title: "Data Analyst",
      image: girl1,
    },
    {
      name: "Utkarsh",
      title: "UX Designer",
      image: girl2,
    },
    {
      name: "Usama",
      title: "Backend Developer", 
      image: boy3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
    );
  };

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 3);

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <p className="text-white text-sm leading-relaxed">
              {missionText.split("OUR MISSION").map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && (
                    <span className="font-bold">OUR MISSION</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* Team Members - Right Column */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="flex gap-6">
                {visibleMembers.map((member, index) => (
                  <div key={index} className="group flex-shrink-0">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-gray-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-medium text-red-500 uppercase tracking-wide mb-1">
                        {member.title}
                      </p>
                      <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {teamMembers.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index >= currentIndex && index < currentIndex + 3
                          ? "bg-primary"
                          : "bg-muted"
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
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
