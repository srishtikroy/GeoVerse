import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Conflicts = () => {
  const events = [
    {
      title: "Ukraine War: Strategic Analysis",
      videoId: "dQw4w9WgXcQ",
      description: "Comprehensive analysis of the ongoing conflict in Ukraine, military strategies, and international responses.",
      articles: [
        { title: "Ukraine War Updates", url: "https://www.understandingwar.org" },
        { title: "NATO Support Analysis", url: "https://www.atlanticcouncil.org" }
      ]
    },
    {
      title: "Israel-Hamas Conflict",
      videoId: "dQw4w9WgXcQ",
      description: "Coverage of the Gaza conflict, humanitarian crisis, and regional implications for Middle East stability.",
      articles: [
        { title: "Gaza Humanitarian Crisis", url: "https://www.un.org" },
        { title: "Regional Security Impact", url: "https://www.crisisgroup.org" }
      ]
    },
    {
      title: "South China Sea Tensions",
      videoId: "dQw4w9WgXcQ",
      description: "Analysis of territorial disputes and military posturing in the contested waters of the South China Sea.",
      articles: [
        { title: "Maritime Security Report", url: "https://amti.csis.org" },
        { title: "ASEAN Response", url: "https://asean.org" }
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
