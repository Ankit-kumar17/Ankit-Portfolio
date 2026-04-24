import { Award, ExternalLink, Calendar, Building, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "August 2025",
    description: "Earned the AWS Certified Solutions Architect Associate credential, demonstrating expertise in designing distributed systems.",
    image: "https://images.unsplash.com/photo-1558500203-34e85743b1aa?q=80&w=2070&auto=format&fit=crop", 
    verifyUrl: "https://aws.amazon.com/certification/",
  },
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    date: "May 2024",
    description: "Deep dive into modern web development. Covering React, Redux, Node.js, MongoDB, GraphQL, and TypeScript.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3f8c5b1?q=80&w=2070&auto=format&fit=crop", 
    verifyUrl: "https://fullstackopen.com/",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    date: "January 2024",
    description: "Advanced front-end development using React, UI/UX design principles, and version control.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    verifyUrl: "https://coursera.org/",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
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
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Continuous learning and validation of my professional skills.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              variants={itemVariants}
              key={cert.title}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:border-primary/50 hover:shadow-[0_0_30px_hsl(177_70%_50%/0.15)] transition-all duration-500"
            >
              {/* Image Header with Hover Action */}
              <div className="relative h-48 overflow-hidden bg-white/5">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-lg border border-white/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                {/* Meta details */}
                <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 shrink-0 opacity-70" />
                    <span className="font-medium text-foreground/80">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 shrink-0 opacity-70" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6 text-muted-foreground line-clamp-3">
                  {cert.description}
                </p>

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-glass-border">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        <PlayCircle className="w-4 h-4" />
                        Preview
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl border-white/20 bg-background/95 backdrop-blur-xl p-6">
                      <div className="rounded-xl overflow-hidden mt-4">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Full View`} 
                          className="w-full h-auto object-cover max-h-[80vh]"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Verify
                    <ExternalLink className="w-3.5 h-3.5" />
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

export default Certificates;
