import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Economy = () => {
  const events = [
    {
      title: "China's Economy is Declining, Here's Why",
      videoId: "ITvXlax3nQs",
      description: "Economics Explained analyzes the challenges facing China's economy, from property crisis to demographic decline.",
      articles: [
        { title: "China Economic Outlook", url: "https://www.cfr.org/backgrounder/chinese-economy" },
        { title: "Property Crisis", url: "https://www.brookings.edu/articles/understanding-chinas-economic-transformation/" }
      ]
    },
    {
      title: "How the US Economy Actually Works",
      videoId: "PHe0bXAIuk0",
      description: "Economics Explained breaks down the world's largest economy, its structure, and what makes it so powerful.",
      articles: [
        { title: "US Economic Overview", url: "https://www.imf.org/en/Countries/USA" },
        { title: "Economic Analysis", url: "https://www.brookings.edu/topic/u-s-economy/" }
      ]
    },
    {
      title: "Why Europe is Falling Behind",
      videoId: "CKlYyBJI8v8",
      description: "PolyMatter examines Europe's economic challenges, productivity gap, and structural issues compared to the US and China.",
      articles: [
        { title: "European Economy", url: "https://www.ecb.europa.eu/home/html/index.en.html" },
        { title: "Competitiveness", url: "https://www.bruegel.org/" }
      ]
    },
    {
      title: "India's Economy Explained",
      videoId: "hjr9r8dxjLk",
      description: "Economics Explained investigates India's rapid economic growth and whether it can sustain momentum to become a developed nation.",
      articles: [
        { title: "India Economic Outlook", url: "https://www.imf.org/en/Countries/IND" },
        { title: "Growth Prospects", url: "https://www.worldbank.org/en/country/india" }
      ]
    },
    {
      title: "How Money Works: The Dollar Explained",
      videoId: "iFDe5kUUyT0",
      description: "Kurzgesagt explains the global monetary system, why the dollar dominates, and what could replace it.",
      articles: [
        { title: "Dollar Dominance", url: "https://www.cfr.org/backgrounder/dollar-worlds-currency" },
        { title: "Currency Systems", url: "https://www.imf.org/en/About/Factsheets/Sheets/2023/reserve-currencies" }
      ]
    },
    {
      title: "Why Argentina's Economy is a Disaster",
      videoId: "MZy_njXboKI",
      description: "Economics Explained traces Argentina's decline from one of the world's richest countries to economic crisis and hyperinflation.",
      articles: [
        { title: "Argentina Crisis", url: "https://www.cfr.org/backgrounder/argentinas-economic-crisis" },
        { title: "Hyperinflation", url: "https://www.economist.com/the-americas/2023/08/17/argentinas-economy" }
      ]
    },
    {
      title: "The Global Energy Crisis Explained",
      videoId: "6dKUvo8W4WY",
      description: "TLDR News Global explains the worldwide energy crisis, its causes, and implications for economies and geopolitics.",
      articles: [
        { title: "Energy Crisis", url: "https://www.iea.org/topics/global-energy-crisis" },
        { title: "Energy Security", url: "https://www.worldbank.org/en/topic/energy" }
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
