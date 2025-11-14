import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Economy = () => {
  const events = [
    {
      title: "How China's Economy Actually Works",
      videoId: "3Ev1F0Y_3zw",
      description: "PolyMatter breaks down China's unique economic model, its strengths and vulnerabilities, and implications for global markets.",
      articles: [
        { title: "China Economic Model", url: "https://www.cfr.org/backgrounder/chinese-economy" },
        { title: "State Capitalism Analysis", url: "https://www.brookings.edu/articles/understanding-chinas-economic-transformation/" }
      ]
    },
    {
      title: "The Debt Crisis Explained",
      videoId: "3ugDU2qNcyg",
      description: "Economics Explained analyzes global debt levels, sovereign debt crises, and their potential impact on the world economy.",
      articles: [
        { title: "Global Debt Monitor", url: "https://www.imf.org/en/Topics/sovereign-debt" },
        { title: "Debt Sustainability", url: "https://www.worldbank.org/en/topic/debt" }
      ]
    },
    {
      title: "Why Europe is Falling Behind",
      videoId: "lFhd3uRdLwI",
      description: "Money & Macro examines Europe's economic stagnation, productivity challenges, and structural issues compared to the US and Asia.",
      articles: [
        { title: "European Economic Outlook", url: "https://www.economist.com/europe/2024/01/04/europes-economy-is-under-pressure-from-all-sides" },
        { title: "Competitiveness Gap", url: "https://www.bruegel.org/comment/europes-productivity-problem" }
      ]
    },
    {
      title: "India's Economic Rise",
      videoId: "tVz6XqwKL7I",
      description: "Bloomberg Originals investigates India's rapid economic growth and whether it can sustain momentum to become a developed nation.",
      articles: [
        { title: "India Economic Outlook", url: "https://www.imf.org/en/Countries/IND" },
        { title: "Manufacturing Push", url: "https://carnegieendowment.org/research/asia/india" }
      ]
    },
    {
      title: "The Coming Currency War",
      videoId: "xguam0TKMw8",
      description: "CaspianReport analyzes de-dollarization efforts by BRICS nations and the battle for global currency dominance.",
      articles: [
        { title: "Dollar Dominance", url: "https://www.cfr.org/backgrounder/dollar-worlds-currency" },
        { title: "BRICS Currency Plans", url: "https://www.atlanticcouncil.org/blogs/econographics/the-dollars-dominance-under-challenge/" }
      ]
    },
    {
      title: "Why Argentina's Economy Collapsed",
      videoId: "s-qHKx8WXbU",
      description: "Wendover Productions traces Argentina's decline from one of the world's richest countries to economic crisis and hyperinflation.",
      articles: [
        { title: "Argentina Economic Crisis", url: "https://www.cfr.org/backgrounder/argentinas-economic-crisis" },
        { title: "Milei's Reforms", url: "https://www.economist.com/the-americas/2024/01/11/javier-mileis-economic-shock-therapy" }
      ]
    },
    {
      title: "Oil: The Most Valuable Resource",
      videoId: "D9XKN4nqSRc",
      description: "RealLifeLore explains why oil remains the world's most strategic commodity and how it shapes global power dynamics.",
      articles: [
        { title: "Energy Geopolitics", url: "https://www.cfr.org/backgrounder/oil-dependence-and-us-foreign-policy" },
        { title: "OPEC Influence", url: "https://www.iea.org/topics/oil" }
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
