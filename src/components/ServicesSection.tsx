import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground max-w-lg">
            WE OFFER MORE THAN JUST FREELANCE SERVICES. WE DELIVER DIGITAL
            CRAFTSMANSHIP THAT BRIDGES LOGIC AND IMAGINATION.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Website and Digital Presence Card */}
          <div className="bg-teal-primary rounded-3xl p-8 text-white relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-6">
              Website and Digital Presence
            </h3>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="text-sm">Website design and development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="text-sm">
                  Mobile-first, fast loading designs
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="text-sm">Booking/appointment systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="text-sm">
                  Smart forms via WhatsApp integrations
                </span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-xs text-white/80 mb-4">Our History</p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-3xl font-bold">50% Faster</div>
                  <div className="text-sm text-white/80">
                    launch of projects
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-sm text-white/80">
                    projects completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing and Growth Card */}
          <div className="bg-orange-primary rounded-3xl p-8 text-white relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-6">Marketing and Growth</h3>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="text-sm">
                  SEO for local and global ranking
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span className="text-sm">
                  Google Business profile setup and optimization
                </span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-xs text-white/80 mb-4">Our History</p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-3xl font-bold">50% Faster</div>
                  <div className="text-sm text-white/80">
                    launch of projects
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">5</div>
                  <div className="text-sm text-white/80">
                    projects completed
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
