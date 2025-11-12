import { Card } from "@/components/ui/card";
import { AlertTriangle, Siren, Shield } from "lucide-react";

const ConflictsSection = () => {
  const majorConflicts = [
    {
      title: "Russia-Ukraine War",
      status: "Active Conflict",
      severity: "High",
      description: "Full-scale invasion since February 2022. Eastern and southern Ukraine battlegrounds, massive humanitarian crisis, global energy and food security implications.",
      keyPoints: [
        "NATO support and weapons supply to Ukraine",
        "Russian annexation of Ukrainian territories",
        "International sanctions on Russia",
        "Nuclear rhetoric and escalation risks"
      ]
    },
    {
      title: "Israel-Hamas Conflict",
      status: "Active Conflict",
      severity: "High",
      description: "Gaza conflict escalated in October 2023. Civilian casualties, hostage situation, regional instability with potential Iran involvement.",
      keyPoints: [
        "Gaza humanitarian crisis and blockade",
        "West Bank tensions and settlements",
        "Regional escalation fears (Hezbollah, Iran)",
        "Two-state solution prospects"
      ]
    },
    {
      title: "Afghanistan-Pakistan Tensions",
      status: "Border Conflict",
      severity: "Medium",
      description: "Post-Taliban takeover instability. Cross-border terrorism, TTP attacks in Pakistan, refugee crisis, and Durand Line disputes.",
      keyPoints: [
        "TTP insurgency from Afghan soil",
        "Border skirmishes and fence disputes",
        "Afghan refugee deportations from Pakistan",
        "Economic collapse in Afghanistan"
      ]
    },
    {
      title: "Myanmar Civil War",
      status: "Active Conflict",
      severity: "High",
      description: "Military junta vs. pro-democracy forces and ethnic armies. Rohingya crisis continues, regional refugee flows.",
      keyPoints: [
        "Military coup aftermath (2021)",
        "Ethnic armed organizations resistance",
        "Rohingya genocide recognition",
        "China's strategic interests"
      ]
    },
    {
      title: "Yemen Civil War",
      status: "Active Conflict",
      severity: "High",
      description: "Saudi-led coalition vs. Houthi rebels. Proxy war between Saudi Arabia and Iran, humanitarian catastrophe.",
      keyPoints: [
        "Houthi control of northern Yemen",
        "Saudi-UAE coalition intervention",
        "Red Sea shipping threats",
        "Worst humanitarian crisis globally"
      ]
    },
    {
      title: "Sahel Region Conflicts",
      status: "Active Insurgency",
      severity: "High",
      description: "Jihadist insurgencies across Mali, Burkina Faso, Niger. Military coups, French troop withdrawal, Russian Wagner presence.",
      keyPoints: [
        "Islamic State and Al-Qaeda affiliates",
        "Series of military coups (2020-2023)",
        "French Operation Barkhane exit",
        "Wagner Group expanding influence"
      ]
    }
  ];

  const frozenConflicts = [
    { name: "Kashmir", description: "India-Pakistan dispute, Line of Control tensions" },
    { name: "South China Sea", description: "Territorial claims by China, Philippines, Vietnam" },
    { name: "Nagorno-Karabakh", description: "Armenia-Azerbaijan dispute, 2020 war aftermath" },
    { name: "Taiwan Strait", description: "China-Taiwan tensions, US strategic ambiguity" }
  ];

  return (
    <section id="conflicts" className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Global Conflicts</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Active wars, insurgencies, territorial disputes, and frozen conflicts affecting international stability
          </p>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Active Conflicts</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {majorConflicts.map((conflict, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <h4 className="text-lg font-semibold text-foreground">{conflict.title}</h4>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    conflict.severity === "High" 
                      ? "bg-destructive/20 text-destructive" 
                      : "bg-orange-500/20 text-orange-600"
                  }`}>
                    {conflict.severity}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{conflict.description}</p>
                <div className="space-y-2">
                  {conflict.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-foreground">
                      <Siren className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Frozen Conflicts & Tensions</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {frozenConflicts.map((conflict, index) => (
              <Card key={index} className="p-5">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">{conflict.name}</h4>
                    <p className="text-xs text-muted-foreground">{conflict.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConflictsSection;
