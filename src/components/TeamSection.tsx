import boy2 from "@/assets/boy2.jpg";
import boy1 from "@/assets/boy1.jpg";
import boy3 from "@/assets/boy3.jpg";
import girl1 from "@/assets/girl1.jpg";
import girl2 from "@/assets/girl2.jpg";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

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
    color: string; // tailwind class for the image block background
  };

  const teamMembers: Member[] = [
    {
      name: "Srikar",
      title: "Full stack engineer",
      email: "srikar@gmail.com",
      image: boy1,
      color: "bg-rose-900",
    },
    {
      name: "Rajesh",
      title: "Product designer",
      email: "rajesh@gmail.com",
      image: girl2,
      color: "bg-amber-600",
    },
    {
      name: "Pujita",
      title: "Frontend engineer",
      email: "pujita@gmail.com",
      image: girl1,
      color: "bg-blue-900",
    },
    {
      name: "Utkarsh",
      title: "Backend engineer",
      email: "utkarsh@gmail.com",
      image: boy3,
      color: "bg-rose-900",
    },
    {
      name: "Amanda",
      title: "Data analyst",
      email: "amanda@gmail.com",
      image: girl1,
      color: "bg-blue-900",
    },
    {
      name: "Sahir",
      title: "Mobile developer",
      email: "sahir@gmail.com",
      image: girl2,
      color: "bg-amber-600",
    },
    {
      name: "Usama",
      title: "AI engineer",
      email: "usama@gmail.com",
      image: boy2,
      color: "bg-emerald-800",
    },
    {
      name: "Dhriti",
      title: "UX designer",
      email: "dhriti@gmail.com",
      image: girl2,
      color: "bg-amber-600",
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
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-emerald-400">{sectionEyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              {sectionTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-3">
              {sectionSubtitle}
            </p>
          </div>
          <a
            href="#contact"
            className="text-emerald-400 text-sm whitespace-nowrap hidden md:inline-flex items-center gap-1"
          >
            Learn more
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group">
              <div
                className={`rounded-xl overflow-hidden ${member.color} aspect-square flex items-center justify-center`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-4/5 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <div className="text-foreground font-semibold">
                  {member.name}
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="text-xs text-emerald-400"
                >
                  {member.email}
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy.
                </p>
                <div className="flex items-center gap-3 text-muted-foreground mt-3 text-xs">
                  <a
                    href="#"
                    aria-label="Website"
                    className="hover:text-foreground"
                  >
                    <Globe size={14} />
                  </a>
                  <a
                    href="#"
                    aria-label="Email"
                    className="hover:text-foreground"
                  >
                    <Mail size={14} />
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="hover:text-foreground"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-foreground"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
