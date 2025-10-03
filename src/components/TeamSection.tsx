import boy2 from "@/assets/boy2.jpg";
import boy1 from "@/assets/boy1.jpg";
import boy3 from "@/assets/boy3.jpg";
import girl1 from "@/assets/girl1.jpg";
import girl2 from "@/assets/girl2.jpg";
import srikarImage from "@/assets/Srikar.png";
import rajeshImage from "@/assets/Rajesh.jpeg";
import pujitaImage from "@/assets/Pujita.jpg";
import sahirImage from "@/assets/Sahir.png";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Srikar",
    subtitle: "Frontend Developer",
    handle: "@srikar",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/srikarmk",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Rajesh",
    subtitle: "Backend Engineer",
    handle: "@rajesh",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/rajesh",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Pujita",
    subtitle: "Frontend Engineer",
    handle: "@pujita",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/pujita",
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    title: "Utkarsh",
    subtitle: "Backend Engineer",
    handle: "@utkarsh",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/utkarsh",
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    title: "Amanda",
    subtitle: "Data Analyst",
    handle: "@amanda",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/amanda",
  },
  {
    image: "https://i.pravatar.cc/300?img=6",
    title: "Sahir",
    subtitle: "Mobile Developer",
    handle: "@sahir",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/sahir",
  },
];

const TeamSection = () => {
  const sectionEyebrow = "Our awesome team";
  const sectionTitle = "We are born for technology";
  const sectionSubtitle =
    "We make life easier for our customers and community through reliable, affordable, and useful tech innovations";

  type Member = {
    name: string;
    title: string;
    email: string;
    image: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };

  const teamMembers: Member[] = [
    {
      name: "M K Sai Srikar",
      title: "Full Stack Developer",
      email: "Srikarmks@gmail.com",
      image: srikarImage,
      github: "https://github.com/srikarmk",
      linkedin: "https://www.linkedin.com/in/srikarmk/",
      portfolio: "https://www.srikarmk.tech",
    },
    {
      name: "Rajesh Challa",
      title: "Product Designer",
      email: "rajeshchalla104@gmail.com",
      image: rajeshImage,
      github: "https://github.com/rajeshchalla10",
      linkedin: "https://www.linkedin.com/in/rajeshchallaoffical/",
      portfolio: "#",
    },
    {
      name: "Pujita Sunnapu",
      title: "Frontend Engineer",
      email: "pujitasunnapu@gmail.com",
      image: pujitaImage,
      github: "https://github.com/pujitasunnapu",
      linkedin: "https://www.linkedin.com/in/pujitasunnapu",
      portfolio: "#",
    },
    {
      name: "Sahir Mohammad",
      title: "Mobile Developer",
      email: "crsahir7@gmail.com",
      image: sahirImage,
      github: "https://github.com/crbeluga7",
      linkedin: "https://www.linkedin.com/in/sahir-mohammad/",
      portfolio: "#",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-background relative"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
        backgroundSize: "20px 20px",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">
              {sectionEyebrow}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Meet Our Amazing Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            {sectionSubtitle}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Work with us
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-square relative transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 group-hover:scale-105 group-hover:-translate-y-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>

              {/* Social links below photo */}
              <div className="mt-6 flex justify-center items-center gap-3">
                <a
                  href={member.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-emerald-500/20 transition-all duration-200 hover:scale-125 border border-white/20 ${
                    !member.github
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg hover:border-emerald-400/50"
                  }`}
                  onClick={
                    !member.github ? (e) => e.preventDefault() : undefined
                  }
                >
                  <Github
                    size={18}
                    className="text-foreground group-hover:text-emerald-400 transition-colors duration-200"
                  />
                </a>
                <a
                  href={member.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-emerald-500/20 transition-all duration-200 hover:scale-125 border border-white/20 ${
                    !member.linkedin
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:shadow-lg hover:border-emerald-400/50"
                  }`}
                  onClick={
                    !member.linkedin ? (e) => e.preventDefault() : undefined
                  }
                >
                  <Linkedin
                    size={18}
                    className="text-foreground group-hover:text-emerald-400 transition-colors duration-200"
                  />
                </a>
                {member.portfolio !== "#" && (
                  <a
                    href={member.portfolio || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Portfolio"
                    className={`bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-emerald-500/20 transition-all duration-200 hover:scale-125 border border-white/20 ${
                      !member.portfolio
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-lg hover:border-emerald-400/50"
                    }`}
                    onClick={
                      !member.portfolio ? (e) => e.preventDefault() : undefined
                    }
                  >
                    <Globe
                      size={18}
                      className="text-foreground group-hover:text-emerald-400 transition-colors duration-200"
                    />
                  </a>
                )}
              </div>

              <div className="mt-6 text-center">
                <div className="text-foreground font-bold text-xl mb-2 group-hover:text-emerald-400 transition-all duration-300 group-hover:scale-105">
                  {member.name}
                </div>
                <p className="text-muted-foreground group-hover:text-emerald-300/80 transition-all duration-300 group-hover:translate-y-1">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div style={{ width: "1000px", height: "600px", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;
