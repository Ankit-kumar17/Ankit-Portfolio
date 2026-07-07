import { Github, Award, PlayCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const hackathons = [
  {
    title: "AI Innovation Hackathon",
    description:
      "Built an AI-powered code reviewer that automatically analyzes PRs for vulnerabilities. Won 1st place in the tooling category.",
    youtubeId: "dQw4w9WgXcQ",
    technologies: ["React", "Node.js", "OpenAI"],
    features: ["Real-time scanning", "Automated refactoring"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    certificate: {
      title: "1st Place Winner",
      organization: "Global Tech Innovators",
      date: "Oct 2025",
      image:
        "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=2070&auto=format&fit=crop",
    },
  },
  {
    title: "Web3 Sustainability",
    description:
      "Developed a dApp for tracking carbon footprint reductions on the blockchain, promoting sustainable practices.",
    youtubeId: "LXb3EKWsInQ",
    technologies: ["Next.js", "Solidity", "Polygon"],
    features: ["Immutable ledger", "Smart contracts"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    certificate: {
      title: "Best dApp",
      organization: "Web3 For Good",
      date: "Jun 2025",
      image:
        "https://images.unsplash.com/photo-1589330694653-efa6475306e1?q=80&w=2140&auto=format&fit=crop",
    },
  },
  {
    title: "FinTech Hack 2024",
    description:
      "Created an AI conversational agent that helps users budget their monthly expenses based on bank statements.",
    youtubeId: "LXb3EKWsInQ", // Placeholder
    technologies: ["React", "Python", "Plaid API"],
    features: ["Expense categorization", "Conversational UI"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    certificate: {
      title: "Top 3 Finalist",
      organization: "FinTech Global",
      date: "Jan 2024",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hackathons = () => {
  return (
    <section
      id="hackathons"
      className="section-padding relative bg-background/50"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
          >
            Hackathon Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Projects built under pressure, turning coffee into award-winning
            code.
          </motion.p>
        </div>

        {/* Hackathons Grid (3 Columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {hackathons.map((hackathon) => (
            <motion.div
              variants={itemVariants}
              key={hackathon.title}
              className="glass-card rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 hover:shadow-[0_0_30px_hsl(177_70%_50%/0.15)] transition-all duration-500 group"
            >
              {/* Top Video Emded */}
              <div className="relative w-full aspect-video bg-black/20">
                <iframe
                  src={`https://www.youtube.com/embed/${hackathon.youtubeId}?rel=0`}
                  title={`${hackathon.title} Demo Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Content body */}
              <div className="p-6 flex-1 flex flex-col relative">
                {/* Certificate Dialog Trigger (Icon Badge format) */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="absolute right-4 -top-6 w-12 h-12 bg-background/90 backdrop-blur-md rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all shadow-lg group-hover:border-primary/50"
                      title="View Certificate"
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl border-white/20 bg-background/95 backdrop-blur-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h2 className="text-2xl font-bold">
                          {hackathon.certificate.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {hackathon.certificate.organization} •{" "}
                          {hackathon.certificate.date}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl overflow-hidden mt-2">
                      <img
                        src={hackathon.certificate.image}
                        alt={`${hackathon.title} Certificate`}
                        className="w-full h-auto object-cover max-h-[70vh]"
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors pr-10">
                  {hackathon.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {hackathon.description}
                </p>

                {/* Features (compact) */}
                <div className="mb-4 space-y-1.5">
                  {hackathon.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {hackathon.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-secondary text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto pt-4 border-t border-glass-border flex items-center justify-between gap-3">
                  <a
                    href={hackathon.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold text-sm shadow-sm"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={hackathon.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-semibold text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
