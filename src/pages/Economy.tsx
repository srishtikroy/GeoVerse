import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Economy = () => {
  const events = [
    {
      title: "Global Economic Outlook 2025",
      videoId: "dQw4w9WgXcQ",
      description: "IMF and World Bank forecasts on global growth, inflation trends, and economic policy challenges.",
      articles: [
        { title: "IMF World Economic Outlook", url: "https://www.imf.org" },
        { title: "Global Growth Projections", url: "https://www.worldbank.org" }
      ]
    },
    {
      title: "US-China Trade War Impact",
      videoId: "dQw4w9WgXcQ",
      description: "Analysis of tariffs, supply chain disruptions, and economic decoupling between superpowers.",
      articles: [
        { title: "Trade War Timeline", url: "https://www.piie.com" },
        { title: "Supply Chain Analysis", url: "https://www.mckinsey.com" }
      ]
    },
    {
      title: "Cryptocurrency and CBDC Developments",
      videoId: "dQw4w9WgXcQ",
      description: "Digital currency trends, central bank digital currencies, and the future of global finance.",
      articles: [
        { title: "CBDC Global Survey", url: "https://www.bis.org" },
        { title: "Crypto Regulation Updates", url: "https://www.coindesk.com" }
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
