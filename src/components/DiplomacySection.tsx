import { Card } from "@/components/ui/card";
import { Handshake, FileText, MessageSquare, Award } from "lucide-react";

const DiplomacySection = () => {
  const bilateralRelations = [
    {
      title: "US-China Relations",
      status: "Strategic Competition",
      description: "Trade tensions, technology rivalry, Taiwan issue, climate cooperation vs. geopolitical rivalry",
      topics: ["Trade War", "Tech Decoupling", "Taiwan Strait"]
    },
    {
      title: "India-US Partnership",
      status: "Strategic Alliance",
      description: "Defense cooperation, Quad alliance, technology transfer, and shared democratic values",
      topics: ["Defense Deals", "Quad Summit", "Tech Collaboration"]
    },
    {
      title: "Russia-China Axis",
      status: "Strategic Partnership",
      description: "Energy cooperation, joint military exercises, shared opposition to US hegemony",
      topics: ["Energy Trade", "SCO", "Military Drills"]
    },
    {
      title: "EU-UK Post-Brexit",
      status: "Recalibration",
      description: "Trade agreements, Northern Ireland protocol, security cooperation, and financial services",
      topics: ["Trade Deal", "Border Issues", "Security Pact"]
    }
  ];

  const multilateralForums = [
    {
      icon: Award,
      name: "United Nations",
      focus: "Global governance, peacekeeping, humanitarian aid, Security Council reform debates"
    },
    {
      icon: Handshake,
      name: "G7 & G20",
      focus: "Economic coordination, climate finance, global health, development assistance"
    },
    {
      icon: FileText,
      name: "WTO & IMF",
      focus: "Trade disputes, economic stabilization, debt restructuring, development lending"
    },
    {
      icon: MessageSquare,
      name: "Regional Organizations",
      focus: "ASEAN, African Union, OAS - regional integration and conflict mediation"
    }
  ];

  return (
    <section id="diplomacy" className="py-16 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">International Diplomacy</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Bilateral relations, treaty negotiations, multilateral forums, and diplomatic initiatives shaping global cooperation
          </p>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Key Bilateral Relations</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {bilateralRelations.map((relation, index) => (
              <Card key={index} className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground">{relation.title}</h4>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {relation.status}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{relation.description}</p>
                <div className="flex flex-wrap gap-2">
                  {relation.topics.map((topic, idx) => (
                    <span key={idx} className="rounded-md bg-muted px-2 py-1 text-xs text-foreground">
                      {topic}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Multilateral Forums</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {multilateralForums.map((forum, index) => (
              <Card key={index} className="p-6 text-center">
                <forum.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
                <h4 className="mb-3 font-semibold text-foreground">{forum.name}</h4>
                <p className="text-sm text-muted-foreground">{forum.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiplomacySection;
