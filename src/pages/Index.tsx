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

      {/* Topics Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Explore Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/geopolitics" className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all hover:border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Geopolitics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Power dynamics, strategic alliances, and critical regions shaping global order.
              </p>
              <span className="text-accent text-sm font-medium">Explore →</span>
            </a>
            
            <a href="/politics" className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all hover:border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Politics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Electoral systems, democratic institutions, and political movements worldwide.
              </p>
              <span className="text-accent text-sm font-medium">Explore →</span>
            </a>
            
            <a href="/diplomacy" className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all hover:border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Diplomacy</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Bilateral relations, treaty negotiations, and multilateral forums.
              </p>
              <span className="text-accent text-sm font-medium">Explore →</span>
            </a>
            
            <a href="/conflicts" className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all hover:border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Conflicts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Active conflicts, military strategies, and regional security crises.
              </p>
              <span className="text-accent text-sm font-medium">Explore →</span>
            </a>
            
            <a href="/economy" className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all hover:border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Economy</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Trade wars, monetary policy, and global economic developments.
              </p>
              <span className="text-accent text-sm font-medium">Explore →</span>
            </a>
            
            <a href="/map" className="group p-6 border border-border rounded-lg hover:shadow-lg transition-all hover:border-accent">
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Interactive Map</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize global events and conflicts on an interactive world map.
              </p>
              <span className="text-accent text-sm font-medium">Explore →</span>
            </a>
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
