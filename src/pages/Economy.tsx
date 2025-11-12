import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Economy = () => {
  const events = [
    {
      title: "Why the US & Venezuela Are On The Brink of War",
      videoId: "d-Mh-ndtqAY",
      description: "RealLifeLore explores the economic and political tensions between the United States and Venezuela that could escalate into military confrontation, examining oil resources and regional stability.",
      articles: [
        { title: "US-Venezuela Relations", url: "https://www.cfr.org/backgrounder/us-venezuela-relations" },
        { title: "Latin America Oil Politics", url: "https://www.csis.org/programs/americas-program" }
      ]
    },
    {
      title: "How Rwanda is Conquering Their 100x Larger Neighbor",
      videoId: "0N34UFbWpFk",
      description: "RealLifeLore analyzes Rwanda's economic and military expansion into the Democratic Republic of Congo, examining resource competition and regional economic power dynamics.",
      articles: [
        { title: "Central Africa Resource Wars", url: "https://www.crisisgroup.org/africa/central-africa" },
        { title: "DRC Economic Impact", url: "https://www.worldbank.org/en/country/drc" }
      ]
    },
    {
      title: "We're Living In a Pre-War World",
      videoId: "ws8X2rbdlXs",
      description: "Hal Brands discusses how great power war is no longer unthinkable and the economic implications of rising global tensions and military buildups.",
      articles: [
        { title: "Defense Spending Trends", url: "https://www.sipri.org/research/armament-and-disarmament" },
        { title: "Economic Impact of War Preparation", url: "https://www.brookings.edu/articles/economic-consequences-of-great-power-competition/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Global Economy</h1>
          <p className="text-muted-foreground max-w-3xl">
            Economic analysis covering trade, finance, monetary policy, and global market developments.
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

export default Economy;
