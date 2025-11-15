import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Politics = () => {
  const events = [
    {
      title: "How European Elections Work",
      videoId: "0V5ckcTSYu8",
      description: "TLDR News EU explores the European Parliament election system and how it shapes EU politics and policy-making.",
      articles: [
        { title: "EU Electoral System", url: "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/how-parliament-works" },
        { title: "European Democracy", url: "https://www.chathamhouse.org/topics/european-union" }
      ]
    },
    {
      title: "Poland's Military Transformation",
      videoId: "ZJIlOmHZ3qg",
      description: "VisualPolitik EN analyzes Poland's dramatic shift in defense policy and massive military buildup following Russia's invasion of Ukraine.",
      articles: [
        { title: "Poland's Defense Buildup", url: "https://www.chathamhouse.org/2024/11/polands-military-transformation" },
        { title: "Eastern European Security", url: "https://www.nato.int/cps/en/natohq/topics_49187.htm" }
      ]
    },
    {
      title: "How Iran's Government Works",
      videoId: "JY5b9hLa2zw",
      description: "The Infographics Show explains the unique structure of Iran's theocratic government and the power dynamics between religious and political leadership.",
      articles: [
        { title: "Iran Political System", url: "https://www.cfr.org/backgrounder/irans-government" },
        { title: "IRGC Political Influence", url: "https://www.cfr.org/backgrounder/irans-revolutionary-guards" }
      ]
    },
    {
      title: "India's Election: The World's Biggest Democracy",
      videoId: "WvN1zm1hYj8",
      description: "Vox explains how the world's largest democracy conducts its massive elections with nearly a billion voters participating.",
      articles: [
        { title: "Indian Electoral Process", url: "https://www.bbc.com/news/world-asia-india-68775809" },
        { title: "Democracy at Scale", url: "https://carnegieendowment.org/research/asia/india" }
      ]
    },
    {
      title: "How Singapore Became So Rich",
      videoId: "rlnxFGFnJKY",
      description: "Economics Explained examines Singapore's revolutionary transformation from a poor port to one of the world's wealthiest nations.",
      articles: [
        { title: "Singapore Economic Model", url: "https://www.imf.org/en/Countries/SGP" },
        { title: "Development Success Story", url: "https://www.worldbank.org/en/country/singapore" }
      ]
    },
    {
      title: "The UK's Political Crisis Explained",
      videoId: "2hOLz9AsfqI",
      description: "TLDR News UK analyzes the breakdown of British political consensus and the factors driving political instability in Westminster.",
      articles: [
        { title: "UK Political System", url: "https://www.parliament.uk/about/how/role/" },
        { title: "Westminster Challenges", url: "https://www.chathamhouse.org/publications" }
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
