import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-background border-b border-border">
      <div className="text-sm font-medium">LOGO</div>

      <div className="text-lg font-bold">Binary & Beyond</div>

      <Button variant="hero" size="sm">
        Get in touch
      </Button>
    </header>
  );
};

export default Header;
