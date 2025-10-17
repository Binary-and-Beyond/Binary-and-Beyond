import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Sparkles, Rocket, Heart, Coffee, Zap, Star } from "lucide-react";

const ContactSection = () => {
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const funMessages = [
    "🚀 Ready to launch something amazing?",
    "🎨 Let's create digital magic together!",
    "💡 Got an idea? We've got the skills!",
    "🎯 Your next big project starts here!",
    "🌟 Let's turn your vision into reality!",
  ];

  const [currentMessage, setCurrentMessage] = useState(funMessages[0]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Change message based on progress
    const filledFields = Object.values({ ...formData, [field]: value }).filter(
      (v) => v.length > 0
    ).length;
    if (filledFields < funMessages.length) {
      setCurrentMessage(funMessages[filledFields]);
    }
  };

  const floatingIcons = [
    { Icon: Sparkles, delay: "0s", duration: "3s" },
    { Icon: Rocket, delay: "0.5s", duration: "4s" },
    { Icon: Heart, delay: "1s", duration: "3.5s" },
    { Icon: Coffee, delay: "1.5s", duration: "4.5s" },
    { Icon: Zap, delay: "2s", duration: "3s" },
    { Icon: Star, delay: "2.5s", duration: "4s" },
  ];

  return (
    <section
      id="contact"
      className="pt-24 pb-20 px-6 bg-gradient-to-br from-teal-primary/80 via-purple-primary/60 to-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <Icon
            key={index}
            className="absolute text-white/10 animate-bounce"
            size={24}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Fun header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
            <span className="text-white/90 text-sm font-medium">
              Let's create something amazing
            </span>
            <Sparkles
              className="w-4 h-4 text-yellow-400 animate-spin"
              style={{ animationDirection: "reverse" }}
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Let's Chat!
          </h2>

          <div className="text-xl md:text-2xl text-white/80 mb-4 min-h-[2rem] transition-all duration-500">
            {currentMessage}
          </div>

          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to bring your wildest tech dreams to life? Drop us a line and
            let's make some digital magic happen! 🪄
          </p>
        </div>

        {/* Fun form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="block text-white/80 text-sm font-medium mb-2 transition-colors duration-200 group-hover:text-white">
                  What should we call you? 🙋‍♂️
                </label>
                <Input
                  placeholder="Your awesome name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setHoveredField("name")}
                  onBlur={() => setHoveredField(null)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-teal-400 focus:ring-teal-400/20 focus:bg-white/15 transition-all duration-300 rounded-xl h-12"
                />
                {hoveredField === "name" && (
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
                  </div>
                )}
              </div>

              <div className="relative group">
                <label className="block text-white/80 text-sm font-medium mb-2 transition-colors duration-200 group-hover:text-white">
                  Where can we reach you? 📧
                </label>
                <Input
                  type="email"
                  placeholder="your.email@awesome.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setHoveredField("email")}
                  onBlur={() => setHoveredField(null)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-orange-primary focus:ring-orange-primary/20 focus:bg-white/15 transition-all duration-300 rounded-xl h-12"
                />
                {hoveredField === "email" && (
                  <div className="absolute -top-2 -right-2">
                    <Zap className="w-5 h-5 text-blue-400 animate-bounce" />
                  </div>
                )}
              </div>
            </div>

            <div className="relative group">
              <label className="block text-white/80 text-sm font-medium mb-2 transition-colors duration-200 group-hover:text-white">
                Tell us about your amazing project! 🚀
              </label>
              <Textarea
                placeholder="Describe your project, dreams, or just say hi! We love hearing from creative minds like yours..."
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                onFocus={() => setHoveredField("message")}
                onBlur={() => setHoveredField(null)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-primary focus:ring-purple-primary/20 focus:bg-white/15 transition-all duration-300 rounded-xl resize-none"
              />
              {hoveredField === "message" && (
                <div className="absolute -top-2 -right-2">
                  <Rocket className="w-5 h-5 text-pink-400 animate-bounce" />
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-gradient-to-r from-teal-primary via-orange-primary to-purple-primary hover:from-teal-primary/90 hover:via-orange-primary/90 hover:to-purple-primary/90 text-white font-semibold px-12 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
