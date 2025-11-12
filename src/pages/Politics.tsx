import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Politics = () => {
  const events = [
    {
      title: "Europe Launches Biggest Military Operation in 30 Years",
      videoId: "lqmqLGJX6ZM",
      description: "VisualPolitik EN explores the European Union's largest military effort in decades, analyzing the feasibility and challenges of this ambitious defense initiative.",
      articles: [
        { title: "EU Defense Integration", url: "https://www.csis.org/analysis/european-defense-integration" },
        { title: "European Security Strategy", url: "https://www.nato.int/cps/en/natohq/topics_232108.htm" }
      ]
    },
    {
      title: "Poland No Longer Trusts Anyone Except Force",
      videoId: "6Z4uy-blZAo",
      description: "VisualPolitik EN analyzes Poland's dramatic shift in defense policy and its implications for European security architecture.",
      articles: [
        { title: "Poland's Defense Buildup", url: "https://www.chathamhouse.org/2024/11/polands-military-transformation" },
        { title: "Eastern European Security", url: "https://www.brookings.edu/articles/poland-defense-strategy/" }
      ]
    },
    {
      title: "Why Iran's Military Brass Wants to Change the Capital",
      videoId: "f4g6KKGMmEI",
      description: "CaspianReport investigates why Iranian lawmakers and the IRGC support relocating the capital from Tehran, examining the political and strategic implications.",
      articles: [
        { title: "Iran Internal Politics", url: "https://carnegieendowment.org/research/middle-east/iran" },
        { title: "IRGC Political Influence", url: "https://www.cfr.org/backgrounder/irans-revolutionary-guards" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">International Politics</h1>
          <p className="text-muted-foreground max-w-3xl">
            Coverage of political systems, elections, policy changes, and democratic developments worldwide.
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

export default Politics;
