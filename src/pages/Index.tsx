import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why GeoVerse?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your comprehensive platform for understanding the forces shaping our world through expert analysis, videos, and in-depth articles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Curated</h3>
              <p className="text-sm text-muted-foreground">
                Carefully selected content from leading geopolitics analysts and think tanks worldwide.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Video Insights</h3>
              <p className="text-sm text-muted-foreground">
                Watch in-depth analysis from top channels like CaspianReport, VisualPolitik, and RealLifeLore.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Backed by Research</h3>
              <p className="text-sm text-muted-foreground">
                Every topic linked to authoritative articles from CFR, Brookings, and other prestigious sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major World Events */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Major World Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed about the most significant developments shaping our world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-red-500/20 text-red-500">Conflict</span>
                <span className="text-xs text-muted-foreground">Ongoing</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ukraine War: 1000+ Days</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The Russia-Ukraine conflict continues with evolving military strategies, international support, and diplomatic efforts for resolution.
              </p>
              <a href="/conflicts" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-orange-500/20 text-orange-500">Politics</span>
                <span className="text-xs text-muted-foreground">Breaking</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Trump's Second Term</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Global powers repositioning as Trump returns to presidency, reshaping US foreign policy and international relations.
              </p>
              <a href="/politics" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-red-500/20 text-red-500">Conflict</span>
                <span className="text-xs text-muted-foreground">Critical</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Middle East Crisis</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Israel-Hamas conflict continues affecting regional stability, humanitarian situation, and international diplomatic efforts.
              </p>
              <a href="/conflicts" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-blue-500/20 text-blue-500">Economy</span>
                <span className="text-xs text-muted-foreground">Developing</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">US-China Trade Tensions</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Economic decoupling, tariff wars, and supply chain restructuring reshape global trade and economic power dynamics.
              </p>
              <a href="/economy" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-purple-500/20 text-purple-500">Geopolitics</span>
                <span className="text-xs text-muted-foreground">Evolving</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">European Defense Buildup</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Europe launches largest military operation in 30 years, strengthening NATO capabilities amid growing security concerns.
              </p>
              <a href="/geopolitics" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-orange-500/20 text-orange-500">Politics</span>
                <span className="text-xs text-muted-foreground">Recent</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Syria Regime Change</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Assad regime ousted after decades of rule, creating new power dynamics and uncertainty in the Middle East region.
              </p>
              <a href="/politics" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-purple-500/20 text-purple-500">Geopolitics</span>
                <span className="text-xs text-muted-foreground">Rising</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Indo-Pacific Tensions</h3>
              <p className="text-sm text-muted-foreground mb-3">
                South China Sea disputes intensify with increased military presence, AUKUS formation, and regional alliance shifts.
              </p>
              <a href="/geopolitics" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-green-500/20 text-green-500">Diplomacy</span>
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Climate Negotiations</h3>
              <p className="text-sm text-muted-foreground mb-3">
                COP summits drive international cooperation on climate finance, emissions targets, and sustainable development goals.
              </p>
              <a href="/diplomacy" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>

            <div className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all bg-card">
              <div className="flex items-start gap-3 mb-3">
                <span className="px-2 py-1 text-xs font-semibold rounded bg-blue-500/20 text-blue-500">Economy</span>
                <span className="text-xs text-muted-foreground">Impact</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Economic Slowdown</h3>
              <p className="text-sm text-muted-foreground mb-3">
                IMF warns of dim prospects as trade tensions, inflation pressures, and policy shifts create economic uncertainty.
              </p>
              <a href="/economy" className="text-accent text-sm font-medium hover:underline">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 GeoVerse - Global Intelligence Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
