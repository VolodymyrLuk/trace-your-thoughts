import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export const BeforeSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="why-it-helps" className="section-padding calm-section">
      <div className="container-custom">
        <h2 className="text-center mb-4">Feeling lost when therapists ask—</h2>
        <p className="text-center text-xl text-muted-foreground mb-16">and sessions go in circles</p>

        <div className="max-w-4xl mx-auto space-y-8">
          <PainPoint
            title="Questions about feelings or needs leave a blank"
            description="'I genuinely don't know the answers most of the time,' even when rephrased or asked from a different angle. 'I have quite a hard time finding answers to questions about my feelings or needs.' 'When she rephrases them or asks from a different angle, I still feel lost.'"
          />

          <PainPoint
            title="Hard to recall emotional states over the past week"
            description="'It's hard for me to recall or describe details about my emotional state over the past week,' so therapy inputs are sparse and sessions repeat without new ground. 'We end up going in circles.'"
          />

          <PainPoint
            title="Homework feels pointless without follow-up"
            description="'I don't know what these exercises are supposed to accomplish so it's difficult to stay invested in them.' Homework like CBT diaries isn't followed up, leaving unclear what exercises are meant to do. When the same automatic thoughts and rational replies occur daily without belief change—'hearing this the x-th time without anything changing...it made me feel worse.'"
          />

          <PainPoint
            title="Cost pressure with no visible progress"
            description="'I'm not making progress and I don't feel like I've gained new insight or tools.' Four months without progress, no new insight or tools, and strong cost pressure—'monetarily I just can't afford to keep financing this if it doesn't do anything for me.' 'I'm strongly considering discontinuing.'"
          />
        </div>

        <div className="mt-12 p-8 bg-card rounded-lg border-2 border-primary/20 max-w-4xl mx-auto">
          <h3 className="mb-4 text-primary">It's not about willpower or resistance</h3>
          <p className="text-lg text-foreground leading-relaxed">
            Open-ended questions and static logs weren't built for alexithymia-like presentations, where feeling 
            identification and recall need structure, not more questions.
          </p>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection("how-it-works")}
          >
            See How AlexiTrack Builds That Structure
          </Button>
        </div>
      </div>
    </section>
  );
};

const PainPoint = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
    <div className="flex items-start gap-4">
      <XCircle className="text-destructive shrink-0 mt-1" size={28} />
      <div>
        <h3 className="mb-3 text-destructive">{title}</h3>
        <p className="text-foreground leading-relaxed italic">{description}</p>
      </div>
    </div>
  </div>
);
