import { ExternalLink, Github, ShoppingCart, CheckSquare, User, ArrowRight, Lightbulb, Target, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "Built a full-stack e-commerce application using React, Node.js, and MongoDB. Implemented product listings, search & filter, cart functionality, and user authentication.",
    icon: ShoppingCart,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-primary to-cyan-400",
    caseStudy: {
      problem: "Local businesses lacked a unified, affordable platform to transition their sales online with customized inventory management.",
      solution: "Developed a scalable full-stack application that provides an intuitive admin dashboard and a seamless shopping experience for customers.",
      features: ["Real-time inventory sync", "Stripe payment integration", "JWT based Authentication"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    }
  },
  {
    title: "Task Management System",
    description: "Created a responsive task manager with React and REST APIs. Users can create, update, delete, and track daily tasks with real-time UI updates.",
    icon: CheckSquare,
    technologies: ["React", "REST API", "CSS", "JavaScript"],
    gradient: "from-accent to-purple-400",
    caseStudy: {
      problem: "Teams struggled with context switching between heavy project management tools for simple daily tasks.",
      solution: "Designed a lightweight, lightning-fast Kanban-style board focused entirely on daily micro-tasks to boost developer productivity.",
      features: ["Drag and drop interfaces", "Optimistic UI rendering", "Detailed analytics dashboard"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    }
  },
  {
    title: "Developer Portfolio Website",
    description: "Designed and developed a personal portfolio using React showcasing skills, projects, and contact features with a modern and mobile-friendly design.",
    icon: User,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-emerald-500 to-teal-400",
    caseStudy: {
      problem: "Standard text resumes failed to adequately display interactive frontend skills and design systems.",
      solution: "Engineered a world-class, premium glassmorphic portfolio utilizing modern UI patterns to act as a living resume and interactive playground.",
      features: ["Dark mode native", "Responsive Framer animations", "Serverless contact forms"],
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
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
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            A selection of projects that showcase my skills and passion for development
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Dialog>
              <DialogTrigger asChild>
                <div className="group relative cursor-pointer h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 hover:shadow-[0_0_30px_hsl(177_70%_50%/0.15)] transition-all duration-500">
                    {/* Project Header */}
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                      </div>
                      
                      {/* Icon */}
                      <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <project.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Read More Overlay */}
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-semibold text-lg flex items-center gap-2">
                          Read Case Study <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* Enhanced Case Study Modal */}
              <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto border-white/20 bg-background/95 backdrop-blur-xl p-0">
                <div className={`p-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                   {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                    </div>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 bg-black/30 rounded text-white/90">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <section>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-400" />
                      The Problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-blue-400" />
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.caseStudy.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground bg-secondary/50 p-3 rounded-lg border border-white/5">
                          <CheckSquare className="w-4 h-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-glass-border">
                    <a
                      href={project.caseStudy.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.caseStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all font-semibold"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Ankit-kumar17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-glass-border hover:border-primary/50 hover:bg-secondary/50 transition-all font-medium"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
