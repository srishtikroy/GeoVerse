import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Conflicts = () => {
  const events = [
    {
      title: "Why France is Actually Preparing for War With Russia",
      videoId: "fiD24uEvY1U",
      description: "RealLifeLore examines France's military preparations and strategic positioning in response to Russian aggression in Europe, including detailed analysis of French intervention capabilities.",
      articles: [
        { title: "France Military Strategy", url: "https://www.atlanticcouncil.org/blogs/new-atlanticist/france-defense-strategy/" },
        { title: "European Defense Readiness", url: "https://www.nato.int/cps/en/natohq/topics_232108.htm" }
      ]
    },
    {
      title: "Why Cambodia & Thailand Are Moving Towards War",
      videoId: "if6uRH13ZCg",
      description: "RealLifeLore analyzes the escalating tensions between Cambodia and Thailand over territorial disputes and historical grievances that could lead to military conflict.",
      articles: [
        { title: "Southeast Asian Tensions", url: "https://www.csis.org/programs/southeast-asia-program" },
        { title: "ASEAN Security Challenges", url: "https://www.cfr.org/backgrounder/asean-and-us-relations" }
      ]
    },
    {
      title: "1,000 Days of War in Ukraine",
      videoId: "vf2vSoWsmgI",
      description: "Comprehensive analysis of the Ukraine conflict after 1,000 days, including Russia's IRBM strike, military trends, and the current state of forces on both sides.",
      articles: [
        { title: "Ukraine War Timeline", url: "https://www.understandingwar.org" },
        { title: "Military Balance Analysis", url: "https://www.iiss.org/publications/strategic-comments/2024/ukraine-war-assessment/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Global Conflicts</h1>
          <p className="text-muted-foreground max-w-3xl">
            Monitoring active conflicts, military operations, and security crises affecting international stability.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${event.videoId}`}
                    title={event.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{event.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Related Articles:</p>
                    {event.articles.map((article, idx) => (
                      <a
                        key={idx}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-accent hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {article.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <footer className="border-t border-border bg-muted/30 py-8 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 GeoVerse - Global Intelligence Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Conflicts;
