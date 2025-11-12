import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Geopolitics = () => {
  const events = [
    {
      title: "How Russia Plans to Rule Eurasia by River",
      videoId: "VtE5sTpkn7k",
      description: "CaspianReport analyzes Russia's strategy of building inland ports and linking them with the Northern Sea Route and Trans-Siberian Railway, transforming Siberia into the logistics heart of Eurasia.",
      articles: [
        { title: "Russia's Arctic Strategy", url: "https://www.cfr.org/backgrounder/russias-arctic-ambitions" },
        { title: "Northern Sea Route Development", url: "https://www.csis.org/analysis/northern-sea-route" }
      ]
    },
    {
      title: "How the World is Preparing for Trump's Return",
      videoId: "wEX2MMyK6ps",
      description: "CaspianReport examines how global powers are repositioning themselves ahead of potential shifts in U.S. foreign policy under a second Trump presidency.",
      articles: [
        { title: "Trump's Foreign Policy Impact", url: "https://www.brookings.edu/articles/donald-trumps-foreign-policy-record/" },
        { title: "Global Response to U.S. Elections", url: "https://www.chathamhouse.org/2024/11/what-trump-presidency-means-world" }
      ]
    },
    {
      title: "Strategic Outlook on Geopolitics 2025",
      videoId: "u5UDkZMw5ig",
      description: "Analysis of key geopolitical challenges and opportunities expected in 2025, exploring implications for global stability and business strategies.",
      articles: [
        { title: "Geopolitical Trends 2025", url: "https://www.foreignaffairs.com" },
        { title: "Global Power Shifts Analysis", url: "https://www.atlanticcouncil.org" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Geopolitics</h1>
          <p className="text-muted-foreground max-w-3xl">
            In-depth analysis of international power dynamics, strategic competitions, and global developments shaping our world.
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

export default Geopolitics;
