import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager at TechNexus",
    quote: "Ankit is an exceptional developer who consistently delivers high-quality code. His ability to translate complex design requirements into flawless, accessible UI components is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Lead Organizer, Global Hack",
    quote: "Working alongside Ankit during the Hackathon was incredible. He stepped up as a natural leader, architected our entire backend, and was the primary reason our team took home first place.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Software Engineer",
    quote: "One of the quickest learners I've ever mentored. Ankit doesn't just copy-paste solutions; he dives deep into the 'why' behind architectural decisions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative bg-background/50">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            What People Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I take pride in producing great work and being a reliable team player.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2 sm:p-4">
                  <div className="glass-card h-full p-8 rounded-2xl flex flex-col relative group hover:border-primary/50 transition-colors duration-300">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    
                    <p className="text-foreground/90 leading-relaxed flex-1 italic mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* The carousel navigation buttons */}
            <div className="hidden sm:block">
              <CarouselPrevious className="bg-glass-card border-glass-border hover:bg-primary hover:text-white" />
              <CarouselNext className="bg-glass-card border-glass-border hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
