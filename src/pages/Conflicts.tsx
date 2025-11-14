import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Conflicts = () => {
  const events = [
    {
      title: "Ukraine War: The Complete Timeline",
      videoId: "chP-RbN5wJE",
      description: "RealLifeLore provides a comprehensive timeline of the Russia-Ukraine war from its origins to current developments on the battlefield.",
      articles: [
        { title: "Ukraine War Overview", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine" },
        { title: "Timeline of Events", url: "https://www.bbc.com/news/world-europe-60506682" }
      ]
    },
    {
      title: "Israel-Palestine Conflict Explained",
      videoId: "1wo2TLlMhiw",
      description: "Vox explains the historical roots and current dynamics of one of the world's most intractable conflicts.",
      articles: [
        { title: "Israel-Palestine Conflict", url: "https://www.cfr.org/global-conflict-tracker/conflict/israeli-palestinian-conflict" },
        { title: "Peace Process History", url: "https://www.bbc.com/news/newsbeat-44124396" }
      ]
    },
    {
      title: "The Yemen Crisis Explained",
      videoId: "SoaNkYzPAm4",
      description: "CaspianReport details the complex multi-sided civil war in Yemen involving regional powers and humanitarian catastrophe.",
      articles: [
        { title: "Yemen Humanitarian Crisis", url: "https://www.cfr.org/backgrounder/yemen-crisis" },
        { title: "Regional Proxy War", url: "https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen" }
      ]
    },
    {
      title: "Why China and India are Fighting",
      videoId: "iAkhrrmCgf8",
      description: "Johnny Harris investigates the border conflict between the world's two most populous nations in the Himalayas.",
      articles: [
        { title: "India-China Border Dispute", url: "https://www.cfr.org/global-conflict-tracker/conflict/territorial-disputes-south-china-sea" },
        { title: "Himalayan Standoff", url: "https://www.bbc.com/news/world-asia-53062484" }
      ]
    },
    {
      title: "Sudan's Forgotten War",
      videoId: "KUKWqTSiXRE",
      description: "Al Jazeera English covers the devastating civil war in Sudan that has displaced millions while receiving little international attention.",
      articles: [
        { title: "Sudan Civil War 2023", url: "https://www.crisisgroup.org/africa/horn-africa/sudan" },
        { title: "Humanitarian Crisis", url: "https://www.bbc.com/news/world-africa-65479840" }
      ]
    },
    {
      title: "Myanmar: The Hidden War",
      videoId: "Sq0EYo_ZQVU",
      description: "VICE News investigates the brutal civil war in Myanmar following the military coup and the resistance movement.",
      articles: [
        { title: "Myanmar Military Coup", url: "https://www.cfr.org/backgrounder/myanmar-history-coup-military-rule-ethnic-conflict-rohingya-crisis" },
        { title: "Civil Resistance", url: "https://www.crisisgroup.org/asia/south-east-asia/myanmar" }
      ]
    },
    {
      title: "Ethiopia's Tigray War Explained",
      videoId: "8qXzm-TvyQ4",
      description: "BBC News Africa examines the devastating conflict in Tigray and its impact on regional stability in the Horn of Africa.",
      articles: [
        { title: "Tigray Conflict Overview", url: "https://www.cfr.org/article/ethiopias-tigray-conflict" },
        { title: "Peace Agreement Analysis", url: "https://www.crisisgroup.org/africa/horn-africa/ethiopia/tigray-conflict" }
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
