import { Card } from "@/components/ui/card";
import { Globe2, Shield, Compass } from "lucide-react";

const GeopoliticsSection = () => {
  const topics = [
    {
      icon: Globe2,
      title: "Power Dynamics",
      description: "Analysis of shifting global power structures between major powers including US-China rivalry, Russia's global positioning, and emerging middle powers like India, Brazil, and Turkey.",
      highlights: ["US-China Competition", "Multipolar World Order", "Regional Hegemonies"]
    },
    {
      icon: Shield,
      title: "Strategic Alliances",
      description: "Evolution of military and economic partnerships: NATO expansion, AUKUS formation, Quad alliance, Shanghai Cooperation Organization, and BRICS enlargement.",
      highlights: ["NATO & Article 5", "Indo-Pacific Alliances", "BRICS Expansion"]
    },
    {
      icon: Compass,
      title: "Critical Regions",
      description: "Focal points of geopolitical tension: Indo-Pacific contested waters, Middle East power vacuums, Arctic resource competition, and Sub-Saharan Africa's strategic importance.",
      highlights: ["South China Sea", "Middle East Realignment", "Arctic Competition"]
    }
  ];

  return (
    <section id="geopolitics" className="py-16 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Geopolitics</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Strategic analysis of international power relations, territorial disputes, and global influence competition
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((topic, index) => (
            <Card key={index} className="p-6 transition-shadow hover:shadow-lg">
              <topic.icon className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-3 text-xl font-semibold text-foreground">{topic.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{topic.description}</p>
              <div className="space-y-2">
                {topic.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeopoliticsSection;
