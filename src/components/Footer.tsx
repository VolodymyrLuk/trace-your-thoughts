export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">AlexiTrack Journal</h3>
            <p className="text-muted-foreground">
              Structured CBT journaling for therapy participants who struggle to name emotions and recall the week.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-it-helps")}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Why It Helps
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-muted-foreground hover:text-primary transition-smooth">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-primary transition-smooth">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AlexiTrack Journal. All rights reserved.</p>
          <p className="mt-2">
            Not a substitute for professional therapy. Designed as a support tool for therapy participants.
          </p>
        </div>
      </div>
    </footer>
  );
};
