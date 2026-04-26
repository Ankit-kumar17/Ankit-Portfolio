import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  Youtube,
  BookOpen,
} from "lucide-react";
import { TypewriterText } from "./ui/Typewriter";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ankit-kumar-abbbb0336/",
    hoverColor:
      "hover:border-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Ankit-kumar17",
    hoverColor:
      "hover:border-[#6e5494] hover:shadow-[0_0_20px_rgba(110,84,148,0.3)]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/Ankit_s_Kumar",
    hoverColor:
      "hover:border-[#1da1f2] hover:shadow-[0_0_20px_rgba(29,161,242,0.3)]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@ankitkumar-f5q3t?si=JD30dwzvH-Z0l8HR",
    hoverColor:
      "hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/ankits_kumar/",
    hoverColor:
      "hover:border-[#ffa116] hover:shadow-[0_0_20px_rgba(255,161,22,0.3)]",
  },
  {
    name: "SoloLearn",
    icon: BookOpen,
    url: "https://www.sololearn.com/en/profile/35621844",
    hoverColor:
      "hover:border-[#2ec4b6] hover:shadow-[0_0_20px_rgba(46,196,182,0.3)]",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0 stagger-1">
              Hi, I am <span className="gradient-text">Ankit Kumar</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 animate-slide-up opacity-0 stagger-2 h-10">
              <TypewriterText />
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed animate-slide-up opacity-0 stagger-3">
              I am a passionate frontend developer specializing in{" "}
              <span className="text-primary font-medium">React</span>. I love
              building clean and user-friendly web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-slide-up opacity-0 stagger-4">
              <a
                href="https://drive.google.com/file/d/1gEWFBOJEq74-wpXnj_saQ_JGjxxA5P3o/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 glow-sm"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-glass-border text-foreground font-semibold hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 flex-wrap animate-slide-up opacity-0 stagger-5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg glass-card transition-all duration-300 group ${link.hoverColor}`}
                  aria-label={link.name}
                  title={link.name}
                >
                  <link.icon
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-110" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full group p-2">
                {/* Caterpillar Animation Border */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_4s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <linearGradient
                      id="caterpillar-grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#caterpillar-grad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="100 200"
                    style={{
                      animation:
                        "caterpillar 2s ease-in-out infinite alternate",
                    }}
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#caterpillar-grad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="40 260"
                    strokeDashoffset="-150"
                  />
                </svg>

                {/* Inner Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-background/50 backdrop-blur-sm border-2 border-background">
                  <img
                    src="/profile.jpg"
                    alt="Ankit Kumar"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Online indicator */}
              <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-emerald-500 border-4 border-background z-20 animate-pulse" />

              {/* Floating decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-xl glass-card flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Code2 size={20} className="text-primary" />
              </div>
              <div
                className="absolute -bottom-2 -left-4 w-12 h-12 rounded-xl glass-card flex items-center justify-center animate-float"
                style={{ animationDelay: "3s" }}
              >
                <span className="text-lg">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
