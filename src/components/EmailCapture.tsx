import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const EmailCapture = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName.trim() || !email.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide both your name and email.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please provide a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Check your email for the Free Starter Pack. We'll send you a downloadable PDF with scaffolded prompts to get started.",
      });
      setFirstName("");
      setEmail("");
    }, 1000);
  };

  return (
    <section id="email-capture" className="section-padding bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container-custom max-w-2xl">
        <div className="bg-card p-8 md:p-12 rounded-2xl border-2 border-primary/20 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
              <Mail size={32} />
            </div>
            <h2 className="mb-4">Get the Free Starter Pack</h2>
            <p className="text-lg text-muted-foreground">
              Receive a downloadable PDF with scaffolded emotion prompts, body sensation selectors, 
              and weekly recall templates—ready to use today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="firstName" className="text-base">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-2 h-12 text-base"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-base">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 h-12 text-base"
                required
              />
            </div>

            <Button 
              type="submit" 
              variant="cta" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Get My Free Starter Pack"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. Unsubscribe anytime. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
