import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-contact-bg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">CONTACT US</h2>
          <p className="text-white/80 max-w-lg">
            EVERY JOURNEY BEGINS WITH A SPARK. OURS STARTED WHEN A GROUP OF
            FRIENDS, EACH WITH DIVERSE BACKGROUNDS IN TECHNOLOGY.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="First Name"
                className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white"
              />
            </div>
          </div>

          <div>
            <Textarea
              placeholder="Your Project Description"
              rows={6}
              className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white resize-none"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="contact" size="lg" className="px-8">
              GET IN TOUCH
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
