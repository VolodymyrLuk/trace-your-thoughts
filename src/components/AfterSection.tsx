import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const AfterSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container-custom">
        <h2 className="text-center mb-4">Imagine therapy sessions</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">with clear inputs and visible progress</p>

        <div className="max-w-4xl mx-auto space-y-8">
          <OutcomeBlock
            title="Answering prompts feels doable"
            description="Scaffolded choices and body cues replace blank moments with trackable emotions and needs"
          />

          <OutcomeBlock
            title="Weekly summaries make recall easy"
            description="Sessions build on real data instead of going in circles"
          />

          <OutcomeBlock
            title="Homework gets revisited with clear purpose"
            description="Adaptive prompts avoid stale repetition—confidence and engagement return, and the cost feels justified"
          />
        </div>

        <div className="mt-12 p-8 bg-card rounded-lg border-2 border-secondary/40 max-w-4xl mx-auto">
          <h3 className="mb-4 text-secondary">A new paradigm</h3>
          <p className="text-lg text-foreground leading-relaxed">
            A CBT journal designed for feeling-identification challenges—scaffolded prompts, body-based cues, 
            and therapist-ready insights instead of open-ended blanks.
          </p>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection("email-capture")}
          >
            Get the Free Starter Pack
          </Button>
        </div>
      </div>
    </section>
  );
};

const OutcomeBlock = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-smooth">
    <div className="flex items-start gap-4">
      <Sparkles className="text-secondary shrink-0 mt-1" size={28} />
      <div>
        <h3 className="mb-3 text-secondary">{title}</h3>
        <p className="text-foreground text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);
