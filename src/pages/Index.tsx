import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GeopoliticsSection from "@/components/GeopoliticsSection";
import PoliticsSection from "@/components/PoliticsSection";
import DiplomacySection from "@/components/DiplomacySection";
import ConflictsSection from "@/components/ConflictsSection";
import EconomySection from "@/components/EconomySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GeopoliticsSection />
      <PoliticsSection />
      <DiplomacySection />
      <ConflictsSection />
      <EconomySection />
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 GeoVerse - Global Intelligence Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
