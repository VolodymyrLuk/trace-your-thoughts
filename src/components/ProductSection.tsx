import { Button } from "@/components/ui/button";
import { ListChecks, TrendingUp, Share2 } from "lucide-react";

export const ProductSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="how-it-works" className="section-padding calm-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">Introducing AlexiTrack Journal</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A CBT journaling system with emotion ladders, body sensation selectors, weekly recall aids, and 
            therapist-shareable summaries, built for people who feel 'blank' when asked about feelings or needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <StepCard
            icon={<ListChecks size={40} />}
            step="1"
            title="Scaffold"
            description="Choose from emotion ladders, body sensation prompts, and context tags instead of open-ended questions"
          />
          <StepCard
            icon={<TrendingUp size={40} />}
            step="2"
            title="Track"
            description="Daily micro-entries with weekly summaries that make recall easy and sessions productive"
          />
          <StepCard
            icon={<Share2 size={40} />}
            step="3"
            title="Share"
            description="Export therapist-ready agendas and homework summaries to close the loop and clarify purpose"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-primary/5 p-8 rounded-lg border border-primary/20 mb-12">
          <h3 className="mb-4 text-primary">Message from the founder</h3>
          <p className="text-lg text-foreground leading-relaxed italic">
            "This journal exists for those who struggle to name feelings or recall the week—because therapy 
            shouldn't go in circles, and homework shouldn't feel pointless."
          </p>
        </div>

        <div className="text-center space-y-6">
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
              onClick={() => scrollToSection("pricing")}
            >
              Upgrade to Premium
            </Button>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Therapist-shareable summaries are optional, data stays private, and premium templates are 
            cost-transparent with a 14-day no-risk trial.
          </p>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ 
  icon, 
  step, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  step: string; 
  title: string; 
  description: string;
}) => (
  <div className="bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-smooth text-center">
    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary rounded-full">
      Step {step}
    </div>
    <h3 className="mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);
