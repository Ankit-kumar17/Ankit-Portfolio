import { Heart, Linkedin, Github, Twitter, Code2, Youtube, BookOpen } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ankit-kumar-abbbb0336/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Ankit-kumar17",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/ankits_kumar/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/Ankit_s_Kumar",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@ankitkumar-f5q3t?si=JD30dwzvH-Z0l8HR",
  },
  {
    name: "SoloLearn",
    icon: BookOpen,
    url: "https://www.sololearn.com/en/profile/35621844",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-glass-border relative overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-custom">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" className="text-3xl ak-pattern-logo">
            Ak
          </a>

          {/* Quick Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg hover:bg-secondary transition-all duration-300 group hover:-translate-y-1"
                aria-label={link.name}
                title={link.name}
              >
                <link.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-glass-border" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart size={14} className="text-destructive animate-pulse" /> by{" "}
            <span className="gradient-text font-medium">Ankit Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
