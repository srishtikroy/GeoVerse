import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Diplomacy = () => {
  const events = [
    {
      title: "Estonia: Europe's Most Critical Border",
      videoId: "i3kQvFwNxNA",
      description: "VisualPolitik EN examines why Estonia's border with Russia has become one of the most strategically important locations in Europe for NATO and EU security.",
      articles: [
        { title: "Baltic States Security", url: "https://www.nato.int/cps/en/natohq/topics_49187.htm" },
        { title: "Russia-NATO Relations", url: "https://www.csis.org/programs/europe-russia-and-eurasia-program" }
      ]
    },
    {
      title: "CFR: U.S. Foreign Policy in the Middle East",
      videoId: "B7w9JJ03RQ0",
      description: "Council on Foreign Relations expert webinar discussing U.S. strategic interests and diplomatic challenges across the Middle East region.",
      articles: [
        { title: "Middle East Policy Brief", url: "https://www.cfr.org/backgrounder/us-policy-middle-east" },
        { title: "Regional Security Framework", url: "https://www.crisisgroup.org/middle-east-north-africa" }
      ]
    },
    {
      title: "Top 5 Geopolitics Risks for 2025",
      videoId: "Y1cgromiFzY",
      description: "Analysis of major geopolitical risks that will shape international diplomacy, from Trump's presidency to ongoing conflicts affecting global cooperation.",
      articles: [
        { title: "Global Risk Report 2025", url: "https://www.weforum.org/publications/global-risks-report-2025/" },
        { title: "Diplomatic Challenges Ahead", url: "https://www.foreignaffairs.com/year/2025" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">International Diplomacy</h1>
          <p className="text-muted-foreground max-w-3xl">
            Tracking bilateral relations, treaty negotiations, and diplomatic initiatives shaping global cooperation.
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

export default Diplomacy;
