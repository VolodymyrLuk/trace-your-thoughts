import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom text-center">
        <h1 className="mb-6 leading-tight">
          When therapists ask about your feelings or needs—
          <span className="text-primary block mt-2">and you're just blank</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          AlexiTrack Journal is a CBT journaling system for therapy participants who struggle to name emotions, 
          recall the past week, and answer open-ended questions—using scaffolded prompts, emotion ladders, and 
          body-based cues instead.
        </p>

        <div className="max-w-3xl mx-auto mb-12 space-y-4 text-left">
          <BenefitItem>
            Guided emotion identification ladders and body sensation selectors to replace "I don't know" moments with trackable data
          </BenefitItem>
          <BenefitItem>
            Weekly recall aids and context tags so sessions stop going in circles and start building on real insights
          </BenefitItem>
          <BenefitItem>
            Therapist-shareable summaries and exportable session agendas to close the loop on homework and clarify what exercises accomplish
          </BenefitItem>
          <BenefitItem>
            Adaptive prompts that rotate to avoid repetitive, stale rational replies when nothing changes
          </BenefitItem>
          <BenefitItem>
            Freemium access with premium templates for cost-sensitive users who want clear value
          </BenefitItem>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => scrollToSection("email-capture")}
          >
            Get the Free Starter Pack
          </Button>
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection("how-it-works")}
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 bg-card/50 p-4 rounded-lg border border-border">
    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
    <p className="text-foreground text-lg">{children}</p>
  </div>
);
