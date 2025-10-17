import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-20 px-6 bg-background relative"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Standard Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-teal-500/20">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-400 text-sm font-medium">Our story</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-teal-200 to-blue-200 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are a passionate group of creators, technologists, and
            problem-solvers driven by curiosity.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Mission Statement */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Is to build innovative solutions that empower people and
                transform ideas into reality.
              </p>
            </div>

            {/* Origin Story */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Every journey begins with a spark. Ours started when a group of
                individuals, each with diverse backgrounds in technology,
                design, and entrepreneurship, realized they shared a common
                frustration: too many great ideas never become reality due to
                lack of resources, support, or the right team.
              </p>
            </div>

            {/* Growth and Philosophy */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                What began as a weekend project quickly grew into a thriving
                community of builders and learners. Our story is one of
                collaboration, resilience, and a relentless pursuit of better
                solutions. Along the way, we've learned that the best
                innovations happen when passionate people come together to solve
                real problems.
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Join us as we write the next chapter of our story.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration and innovation"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white text-sm font-medium">
                  Building the future
                </p>
              </div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
