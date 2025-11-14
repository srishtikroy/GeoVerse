import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Geopolitics = () => {
  const events = [
    {
      title: "Why Afghanistan is Impossible to Conquer",
      videoId: "wB_hjqZQ1UY",
      description: "An in-depth analysis of Afghanistan's geography and history that explains why it has remained unconquerable throughout history, from Alexander the Great to modern superpowers.",
      articles: [
        { title: "Afghanistan Historical Overview", url: "https://www.cfr.org/timeline/us-war-afghanistan" },
        { title: "Geopolitical Significance", url: "https://www.aljazeera.com/news/2021/8/15/afghanistan-graveyard-of-empires" }
      ]
    },
    {
      title: "Why China Cannot Abandon North Korea",
      videoId: "ZswGbDn99r8",
      description: "Explores the complex strategic relationship between China and North Korea, examining why Beijing continues to support Pyongyang despite international pressure.",
      articles: [
        { title: "China-North Korea Relations", url: "https://www.cfr.org/backgrounder/china-north-korea-relationship" },
        { title: "Strategic Alliance Analysis", url: "https://www.csis.org/analysis/china-north-korea-relationship" }
      ]
    },
    {
      title: "Russia's Geography Problem",
      videoId: "v3C_5bsdQWg",
      description: "RealLifeLore examines how Russia's vast geography and lack of warm water ports have shaped its foreign policy and military strategy throughout history.",
      articles: [
        { title: "Russian Geopolitics", url: "https://www.foreignaffairs.com/articles/russia-fsu/2016-04-18/russias-perpetual-geopolitics" },
        { title: "Strategic Challenges", url: "https://www.brookings.edu/articles/russia-geography-and-geopolitics/" }
      ]
    },
    {
      title: "Why the Middle East's Borders Guarantee Forever Wars",
      videoId: "Jey_CKbkVJQ",
      description: "Johnny Harris explains how artificial colonial borders created the modern Middle East's perpetual conflicts and instability.",
      articles: [
        { title: "Sykes-Picot Agreement Impact", url: "https://www.bbc.com/news/world-middle-east-36300224" },
        { title: "Colonial Legacy Analysis", url: "https://www.cfr.org/backgrounder/sunni-shia-divide" }
      ]
    },
    {
      title: "The Power of Geography: Ten Maps that Tell You Everything",
      videoId: "GqBZ8jbN3xk",
      description: "Tim Marshall discusses how geography determines the fate of nations, from Russia's vast plains to China's river systems.",
      articles: [
        { title: "Prisoners of Geography", url: "https://www.theguardian.com/books/2015/oct/02/prisoners-of-geography-tim-marshall-review" },
        { title: "Geographic Determinism", url: "https://www.foreignaffairs.com/reviews/capsule-review/2016-02-16/prisoners-geography-ten-maps-explain-everything-about-world" }
      ]
    },
    {
      title: "India vs China: The Battle for Influence in the Indian Ocean",
      videoId: "jBgYiEaV4CU",
      description: "Wendover Productions analyzes the strategic competition between India and China for dominance in the Indian Ocean region.",
      articles: [
        { title: "Indo-Pacific Strategy", url: "https://www.cfr.org/backgrounder/chinas-massive-belt-and-road-initiative" },
        { title: "Maritime Silk Road", url: "https://carnegieendowment.org/research/asia/india" }
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
