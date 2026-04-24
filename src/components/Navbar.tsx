import { useState, useEffect } from "react";
import { Menu, X, FileText, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          <img src="/new-logo.png" alt="A Logo" className="h-10 w-auto object-contain rounded-xl border border-primary/30 shadow-[0_0_15px_hsl(177_70%_50%/0.3)] hover:shadow-[0_0_25px_hsl(177_70%_50%/0.5)] transition-shadow duration-300" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* CTA Button */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              <FileText className="w-4 h-4" />
              View resume
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl h-[85vh] p-0 border-white/20 bg-background/95 backdrop-blur-xl flex flex-col overflow-hidden">
            <div className="flex-1 w-full h-full p-4 md:p-8">
              <iframe 
                src="https://drive.google.com/file/d/1gEWFBOJEq74-wpXnj_saQ_JGjxxA5P3o/preview" 
                className="w-full h-full rounded-lg bg-white"
                title="Resume PDF"
              />
            </div>
          </DialogContent>
        </Dialog>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-xl animate-scale-in">
          <ul className="flex flex-col py-4">
            <li className="px-6 py-2 border-b border-glass-border mb-2 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Theme</span>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-6 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-4 pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium">
                    <FileText className="w-4 h-4" />
                    View resume
                  </button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-4xl h-[85vh] p-4 border-white/20 bg-background/95 backdrop-blur-xl flex flex-col rounded-xl">
                  <iframe 
                    src="https://drive.google.com/file/d/1gEWFBOJEq74-wpXnj_saQ_JGjxxA5P3o/preview" 
                    className="w-full h-full rounded-lg bg-white mt-4"
                    title="Resume PDF"
                  />
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
