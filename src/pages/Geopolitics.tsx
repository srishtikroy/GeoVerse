import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Geopolitics = () => {
  const events = [
    {
      title: "Why Afghanistan is Impossible to Conquer",
      videoId: "Ab9zK8yT4_Y",
      description: "An in-depth analysis of Afghanistan's geography and history that explains why it has remained unconquerable throughout history, from Alexander the Great to modern superpowers.",
      articles: [
        { title: "Afghanistan Historical Overview", url: "https://www.cfr.org/timeline/us-war-afghanistan" },
        { title: "Geopolitical Significance", url: "https://www.aljazeera.com/news/2021/8/15/afghanistan-graveyard-of-empires" }
      ]
    },
    {
      title: "Why China Cannot Abandon North Korea",
      videoId: "Lsz0JRzBn_I",
      description: "Explores the complex strategic relationship between China and North Korea, examining why Beijing continues to support Pyongyang despite international pressure.",
      articles: [
        { title: "China-North Korea Relations", url: "https://www.cfr.org/backgrounder/china-north-korea-relationship" },
        { title: "Strategic Alliance Analysis", url: "https://www.csis.org/analysis/china-north-korea-relationship" }
      ]
    },
    {
      title: "Russia's Geography Problem",
      videoId: "HBlZlmXyR5M",
      description: "RealLifeLore examines how Russia's vast geography and lack of warm water ports have shaped its foreign policy and military strategy throughout history.",
      articles: [
        { title: "Russian Geopolitics", url: "https://www.foreignaffairs.com/articles/russia-fsu/2016-04-18/russias-perpetual-geopolitics" },
        { title: "Strategic Challenges", url: "https://www.brookings.edu/articles/russia-geography-and-geopolitics/" }
      ]
    },
    {
      title: "Why the Middle East's Borders Guarantee Forever Wars",
      videoId: "BaPWB_uwubQ",
      description: "Johnny Harris explains how artificial colonial borders created the modern Middle East's perpetual conflicts and instability.",
      articles: [
        { title: "Sykes-Picot Agreement Impact", url: "https://www.bbc.com/news/world-middle-east-36300224" },
        { title: "Colonial Legacy Analysis", url: "https://www.cfr.org/backgrounder/sunni-shia-divide" }
      ]
    },
    {
      title: "Geopolitics of the South China Sea",
      videoId: "luTPMHC7zHY",
      description: "CaspianReport analyzes the strategic importance of the South China Sea and competing territorial claims in one of the world's most contested regions.",
      articles: [
        { title: "South China Sea Disputes", url: "https://www.cfr.org/global-conflict-tracker/conflict/territorial-disputes-south-china-sea" },
        { title: "Maritime Security", url: "https://www.csis.org/programs/china-power-project/south-china-sea" }
      ]
    },
    {
      title: "Africa's Geography Problem",
      videoId: "lRjG8aFjMp4",
      description: "Wendover Productions examines how Africa's geography has shaped its development challenges and geopolitical position in the 21st century.",
      articles: [
        { title: "African Economic Development", url: "https://www.brookings.edu/project/africa-growth-initiative/" },
        { title: "Geographic Constraints", url: "https://www.worldbank.org/en/region/afr" }
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
