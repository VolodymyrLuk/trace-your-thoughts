import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BeforeSection } from "@/components/BeforeSection";
import { AfterSection } from "@/components/AfterSection";
import { ProductSection } from "@/components/ProductSection";
import { EmailCapture } from "@/components/EmailCapture";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BeforeSection />
        <AfterSection />
        <ProductSection />
        <EmailCapture />
        <PricingSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
