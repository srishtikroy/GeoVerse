import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Diplomacy = () => {
  const events = [
    {
      title: "How NATO Works",
      videoId: "tV5wmDhMMMQ",
      description: "The Infographics Show explains NATO's structure, decision-making process, and role in maintaining transatlantic security cooperation.",
      articles: [
        { title: "NATO Overview", url: "https://www.nato.int/nato-welcome/" },
        { title: "Collective Defense", url: "https://www.csis.org/programs/international-security-program" }
      ]
    },
    {
      title: "The United Nations Explained",
      videoId: "qsrDGh5a-6Q",
      description: "Kurzgesagt explains how the UN actually functions, the Security Council's power dynamics, and why international diplomacy often seems ineffective.",
      articles: [
        { title: "UN Security Council", url: "https://www.cfr.org/backgrounder/un-security-council" },
        { title: "Multilateral Diplomacy", url: "https://www.chathamhouse.org/topics/united-nations" }
      ]
    },
    {
      title: "China's Belt and Road Initiative Explained",
      videoId: "EvXROXiIpvQ",
      description: "PolyMatter analyzes China's ambitious infrastructure project spanning three continents and its geopolitical implications.",
      articles: [
        { title: "Belt and Road Overview", url: "https://www.cfr.org/backgrounder/chinas-massive-belt-and-road-initiative" },
        { title: "Global Infrastructure", url: "https://www.csis.org/analysis/chinas-belt-and-road" }
      ]
    },
    {
      title: "US-China Relations Explained",
      videoId: "hhMAt3BluAU",
      description: "CaspianReport examines the complex diplomatic relationship between the world's two largest economies and competing superpowers.",
      articles: [
        { title: "US-China Timeline", url: "https://www.cfr.org/timeline/us-relations-china" },
        { title: "Strategic Competition", url: "https://www.brookings.edu/project/us-china-relations/" }
      ]
    },
    {
      title: "The European Union Explained",
      videoId: "O37yJBFRrfg",
      description: "Kurzgesagt breaks down how the European Union works, from its institutions to decision-making processes affecting 450 million people.",
      articles: [
        { title: "EU Institutions", url: "https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies_en" },
        { title: "European Integration", url: "https://www.chathamhouse.org/topics/european-union" }
      ]
    },
    {
      title: "The BRICS Summit: Challenging Western Dominance",
      videoId: "aJl2Bs4vuq8",
      description: "TLDR News Global analyzes the BRICS alliance and its efforts to create an alternative to Western-dominated international institutions.",
      articles: [
        { title: "BRICS Overview", url: "https://www.cfr.org/backgrounder/brics-emerging-economies" },
        { title: "Multipolarity", url: "https://www.brookings.edu/articles/the-rise-of-the-rest/" }
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
