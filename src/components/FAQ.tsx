import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding calm-section">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about AlexiTrack Journal
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              What makes AlexiTrack different from generic journals?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              AlexiTrack is specifically designed for people who struggle with alexithymia-like presentations—difficulty 
              identifying and expressing emotions. Instead of open-ended questions that leave you feeling blank, we provide 
              scaffolded prompts, emotion identification ladders, body sensation selectors, and weekly recall aids. It's 
              built for therapy participants who find standard CBT logs repetitive and unhelpful.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              How do scaffolded prompts work?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              Instead of asking "How do you feel?" (which can leave you blank), scaffolded prompts offer structured choices 
              like emotion ladders (rating intensity), body sensation maps (identifying where you feel it physically), and 
              context tags (what triggered it). This turns abstract emotions into trackable, concrete data points that you 
              and your therapist can work with.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              How do I use the therapist summaries?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              Therapist summaries are completely optional. When you're ready, you can export a clean PDF summary of your 
              weekly entries, emotional patterns, and session agenda items. This helps your therapist see real data instead 
              of relying on your recall, and it closes the loop on homework by showing what you actually did. Your data 
              stays private unless you choose to share it.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              What's included in the free vs. premium tiers?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              The <strong>Free Starter Pack</strong> includes downloadable PDF templates with basic emotion ladders, body 
              sensation selectors, and weekly recall prompts—enough to get started and see if the structure works for you. 
              <strong>Premium</strong> ($14/month) adds adaptive prompt rotation to avoid stale entries, digital tracking 
              with analytics, therapist-shareable summaries, exportable agendas, and priority support. Premium comes with 
              a 14-day money-back guarantee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              Is my data private?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              Yes. Your journal entries are stored securely and are never shared without your explicit consent. Therapist 
              summaries are an optional export feature—you decide when and what to share. We don't sell your data or use 
              it for advertising. Your privacy is a priority.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              Will this replace my therapy?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              No. AlexiTrack is a tool to support your therapy, not replace it. It's designed to help you provide better 
              inputs during sessions, track progress between appointments, and make homework feel purposeful. Think of it 
              as scaffolding that helps you and your therapist work more effectively together.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              What if I'm not sure this is worth the money?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              Start with the <strong>Free Starter Pack</strong>—no credit card required. Use the templates for a few weeks 
              and see if the structured approach helps. If you decide to upgrade to Premium, we offer a 14-day money-back 
              guarantee. We designed pricing to be cost-transparent and accessible, recognizing that therapy is already 
              expensive.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
