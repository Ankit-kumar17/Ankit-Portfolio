import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechNexus Corp",
    location: "San Francisco, CA (Remote)",
    date: "Jan 2024 - Present",
    type: "work",
    description: "Leading the frontend architecture for the core flagship product. Improved application performance by 40%.",
    highlights: ["Migrated legacy codebase to React 18", "Mentored 3 junior developers", "Implemented robust CI/CD pipelines"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Creative Digital Labs",
    location: "New York, NY",
    date: "May 2023 - Dec 2023",
    type: "work",
    description: "Developed interactive UI components for various client portfolios and internal dashboards.",
    highlights: ["Built custom Tailwind UI components", "Reduced API payload size by integrating GraphQL"],
  },
  {
    role: "B.S. in Computer Science",
    company: "University of Technology",
    location: "Boston, MA",
    date: "Sep 2019 - May 2023",
    type: "education",
    description: "Graduated with honors. Specialized in Human-Computer Interaction and Software Engineering.",
    highlights: ["President of the Web Dev Club", "Dean's List 2021-2023"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background Decorators */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Experience & Education
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            My journey so far, building software and expanding my knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-10 h-10 rounded-full border-4 border-background bg-primary/10 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_hsl(177_70%_50%/0.3)]`}>
                    {exp.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Empty Spacer for alternating layout (Desktop only) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "order-1 pr-12" : "order-2 pl-12"}`}>
                    {isEven && (
                      <div className="text-right">
                        <div className="glass-card hover:border-primary/50 transition-all duration-300 p-6 rounded-2xl relative group">
                          {/* Arrow pointing to timeline */}
                          <div className="absolute top-6 -right-3 w-6 h-6 bg-glass-border transform rotate-45 border-r border-t opacity-0 md:opacity-100 hidden" />
                          <CardContent exp={exp} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout & alternating Desktop layout */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:hidden" : "md:pl-12 order-2"}`}>
                    <div className="glass-card hover:border-primary/50 transition-all duration-300 p-6 rounded-2xl group w-full text-left">
                      <CardContent exp={exp} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const CardContent = ({ exp }: { exp: typeof experiences[0] }) => (
  <>
    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
      <Calendar className="w-4 h-4" />
      {exp.date}
    </div>
    <h3 className="text-xl font-bold mb-1 text-foreground">{exp.role}</h3>
    <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
    
    <p className="text-sm text-foreground/80 leading-relaxed mb-4">
      {exp.description}
    </p>
    
    <ul className="space-y-2">
      {exp.highlights.map((highlight, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-primary/70 shrink-0 mt-0.5" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </>
);

export default Experience;
