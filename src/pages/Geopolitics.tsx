import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Geopolitics = () => {
  const events = [
    {
      title: "Strategic Outlook on Geopolitics 2025",
      videoId: "u5UDkZMw5ig",
      description: "Analysis of key geopolitical challenges and opportunities expected in 2025, exploring implications for global stability.",
      articles: [
        { title: "Geopolitical Trends 2025", url: "https://www.foreignaffairs.com" },
        { title: "Global Power Shifts Analysis", url: "https://www.cfr.org" }
      ]
    },
    {
      title: "Top 5 Geopolitics Risks for 2025",
      videoId: "Y1cgromiFzY",
      description: "Major geopolitical risks affecting economics, technology, international cooperation, and trade in 2025.",
      articles: [
        { title: "Trump's Second Presidency Impact", url: "https://www.brookings.edu" },
        { title: "Global Risk Assessment", url: "https://www.chathamhouse.org" }
      ]
    },
    {
      title: "Great Power Competition Analysis",
      videoId: "ws8X2rbdlXs",
      description: "Understanding the pre-war dynamics and great power rivalries shaping the modern world order.",
      articles: [
        { title: "US-China Strategic Competition", url: "https://www.csis.org" },
        { title: "NATO's Future in Multipolar World", url: "https://www.nato.int" }
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
