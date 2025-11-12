import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flag, Vote, Users2 } from "lucide-react";

const PoliticsSection = () => {
  const indiaTopics = [
    { title: "Electoral Politics", content: "General elections, state assembly polls, coalition dynamics, and rise of regional parties" },
    { title: "Policy Reforms", content: "Economic liberalization, digital India initiatives, agricultural reforms, and social welfare schemes" },
    { title: "Federal Structure", content: "Center-state relations, cooperative federalism, and inter-state disputes" },
    { title: "Democratic Institutions", content: "Parliamentary proceedings, judicial activism, Election Commission, and press freedom" }
  ];

  const usaTopics = [
    { title: "Presidential Politics", content: "Executive powers, presidential campaigns, bipartisan dynamics, and federal governance" },
    { title: "Congressional Affairs", content: "Legislative process, House and Senate dynamics, committee hearings, and bill progression" },
    { title: "Electoral System", content: "Electoral college, campaign finance, voting rights, and election security measures" },
    { title: "Judicial System", content: "Supreme Court nominations, federal judiciary, landmark rulings, and constitutional interpretation" }
  ];

  const globalTopics = [
    { title: "United States", content: "Presidential system, congressional politics, Republican-Democrat polarization, electoral dynamics" },
    { title: "European Union", content: "EU integration challenges, Brexit aftermath, populist movements, and fiscal policy coordination" },
    { title: "Latin America", content: "Left-wing resurgence, democratic backsliding in Venezuela, Brazil's political volatility" },
    { title: "Middle East", content: "Authoritarianism, Arab Spring legacy, Iran's political system, and Saudi reforms" },
    { title: "Africa", content: "Democratic transitions, military coups in Sahel, electoral integrity, and youth movements" },
    { title: "Russia", content: "Putin's consolidation of power, opposition suppression, and constitutional changes" }
  ];

  return (
    <section id="politics" className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Global Politics</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive coverage of domestic politics, governance systems, and political transformations worldwide
          </p>
        </div>

        <Tabs defaultValue="india" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="india">India</TabsTrigger>
          <TabsTrigger value="usa">United States</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
        </TabsList>

          <TabsContent value="india" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {indiaTopics.map((topic, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-3">
                    <Flag className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="usa" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {usaTopics.map((topic, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-3">
                    <Vote className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="global" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {globalTopics.map((topic, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-3">
                    <Users2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PoliticsSection;
