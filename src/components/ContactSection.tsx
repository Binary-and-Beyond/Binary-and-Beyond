import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParallax } from "@/hooks/use-parallax";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-contact-bg relative"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Contact us
          </h2>
          <p className="text-white/80 max-w-lg">
            Every journey begins with a spark. Ours started when a group of
            friends, each with diverse backgrounds in technology.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="First name"
                className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white"
              />
            </div>
          </div>

          <div>
            <Textarea
              placeholder="Your project description"
              rows={6}
              className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white resize-none"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="contact" size="lg" className="px-8">
              Get in touch
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
