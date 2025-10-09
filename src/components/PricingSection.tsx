import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="pricing" className="section-padding calm-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade when you're ready for advanced features. No hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Free Starter Pack"
            price="$0"
            period="forever"
            description="Perfect for getting started with structured journaling"
            features={[
              "Basic emotion identification ladders",
              "Body sensation selector templates",
              "Weekly recall prompts",
              "Downloadable PDF worksheets",
              "Email support",
            ]}
            ctaText="Get the Free Starter Pack"
            ctaVariant="outline"
            onCTA={() => scrollToSection("email-capture")}
          />

          <PricingCard
            title="Premium"
            price="$14"
            period="per month"
            description="Full access to all features with a 14-day no-risk trial"
            features={[
              "Everything in Free, plus:",
              "Adaptive prompt rotation (avoid stale entries)",
              "Therapist-shareable session summaries",
              "Exportable homework agendas",
              "Advanced emotion tracking analytics",
              "Priority support",
              "14-day money-back guarantee",
            ]}
            ctaText="Start 14-Day Trial"
            ctaVariant="cta"
            onCTA={() => {
              // Stripe integration would go here
              alert("Stripe integration coming soon! For now, get the free starter pack.");
              scrollToSection("email-capture");
            }}
            highlighted
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Cost-sensitive pricing:</strong> We understand therapy is expensive. Premium is priced to be 
            less than a single therapy co-pay, and the free tier remains robust for those who need it.
          </p>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  ctaVariant,
  onCTA,
  highlighted = false,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaVariant: "cta" | "outline";
  onCTA: () => void;
  highlighted?: boolean;
}) => (
  <div
    className={`bg-card p-8 rounded-xl border-2 shadow-lg transition-smooth hover:shadow-xl ${
      highlighted ? "border-primary scale-105" : "border-border"
    }`}
  >
    {highlighted && (
      <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary rounded-full">
        Most Popular
      </div>
    )}
    
    <h3 className="mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold text-primary">{price}</span>
      <span className="text-muted-foreground ml-2">/ {period}</span>
    </div>
    <p className="text-muted-foreground mb-6">{description}</p>

    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="text-secondary shrink-0 mt-0.5" size={20} />
          <span className="text-foreground">{feature}</span>
        </li>
      ))}
    </ul>

    <Button 
      variant={ctaVariant} 
      size="lg" 
      className="w-full"
      onClick={onCTA}
    >
      {ctaText}
    </Button>
  </div>
);
