import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Conflicts = () => {
  const events = [
    {
      title: "The Russia-Ukraine War Explained",
      videoId: "LJNtfyq3TDE",
      description: "Johnny Harris provides a comprehensive explanation of the Russia-Ukraine conflict, its historical roots, and current battlefield dynamics.",
      articles: [
        { title: "Ukraine War Overview", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-ukraine" },
        { title: "Timeline of Events", url: "https://www.bbc.com/news/world-europe-60506682" }
      ]
    },
    {
      title: "Israel-Palestine Conflict: A Simple History",
      videoId: "iRYZjOuUnlU",
      description: "Vox explains the historical roots and current dynamics of one of the world's most intractable conflicts in a clear, accessible way.",
      articles: [
        { title: "Israel-Palestine Conflict", url: "https://www.cfr.org/global-conflict-tracker/conflict/israeli-palestinian-conflict" },
        { title: "Peace Process History", url: "https://www.bbc.com/news/newsbeat-44124396" }
      ]
    },
    {
      title: "The Yemen Civil War Explained",
      videoId: "RXA8WzThPm8",
      description: "The Infographics Show details the complex multi-sided civil war in Yemen involving regional powers and humanitarian catastrophe.",
      articles: [
        { title: "Yemen Humanitarian Crisis", url: "https://www.cfr.org/backgrounder/yemen-crisis" },
        { title: "Regional Proxy War", url: "https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen" }
      ]
    },
    {
      title: "Syria's War: A 5 Minute History",
      videoId: "m-I2pReUHI8",
      description: "Vox provides a concise overview of Syria's devastating civil war, the key players, and its regional implications.",
      articles: [
        { title: "Syria Conflict", url: "https://www.cfr.org/global-conflict-tracker/conflict/civil-war-syria" },
        { title: "Regional Impact", url: "https://www.crisisgroup.org/middle-east-north-africa/eastern-mediterranean/syria" }
      ]
    },
    {
      title: "The Kashmir Conflict Explained",
      videoId: "cyayif CHKtw",
      description: "The Guardian examines the territorial dispute between India and Pakistan over Kashmir that has led to multiple wars.",
      articles: [
        { title: "Kashmir Dispute", url: "https://www.cfr.org/backgrounder/india-pakistan-kashmir-conflict" },
        { title: "Regional Tensions", url: "https://www.bbc.com/news/10537286" }
      ]
    },
    {
      title: "Afghanistan's Endless War",
      videoId: "8EDW88CBo-8",
      description: "Vox traces Afghanistan's 40+ years of continuous conflict from Soviet invasion to Taliban resurgence.",
      articles: [
        { title: "Afghanistan Timeline", url: "https://www.cfr.org/timeline/us-war-afghanistan" },
        { title: "Taliban Return", url: "https://www.bbc.com/news/world-asia-51689443" }
      ]
    },
    {
      title: "The Armenian-Azerbaijan Conflict",
      videoId: "WCefUW55a0M",
      description: "RealLifeLore explains the Nagorno-Karabakh conflict between Armenia and Azerbaijan over the disputed territory.",
      articles: [
        { title: "Nagorno-Karabakh Conflict", url: "https://www.cfr.org/global-conflict-tracker/conflict/nagorno-karabakh-conflict" },
        { title: "Regional Tensions", url: "https://www.crisisgroup.org/europe-central-asia/caucasus/nagorno-karabakh-conflict" }
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
