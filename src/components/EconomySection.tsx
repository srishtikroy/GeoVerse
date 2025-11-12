import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, BarChart3, Fuel } from "lucide-react";

const EconomySection = () => {
  const globalEconomics = [
    {
      icon: TrendingUp,
      title: "Global GDP Trends",
      description: "World economic growth projections, recession risks in developed economies, emerging markets resilience, and post-pandemic recovery trajectories.",
      metrics: ["3.2% Global Growth", "Inflation Cooling", "Labor Market Shifts"]
    },
    {
      icon: Fuel,
      title: "Oil & Energy Markets",
      description: "Crude oil price volatility, OPEC+ production cuts, energy transition impact, renewable vs. fossil fuels, and geopolitical supply disruptions.",
      metrics: ["Brent $85/barrel", "OPEC+ Cuts", "Green Transition"]
    },
    {
      icon: DollarSign,
      title: "Currency & Trade Wars",
      description: "US dollar dominance, yuan internationalization, trade protectionism, tariff battles, and regional free trade agreements.",
      metrics: ["Dollar Strength", "De-dollarization", "Trade Deficits"]
    },
    {
      icon: BarChart3,
      title: "Stock Markets & Investment",
      description: "Equity market performance, tech sector dominance, emerging market opportunities, foreign direct investment flows, and crypto regulation.",
      metrics: ["S&P 500 Rally", "Emerging Markets", "FDI Flows"]
    }
  ];

  const regionalEconomics = [
    {
      region: "United States",
      status: "Mixed Signals",
      highlights: "Federal Reserve rate policy, inflation battle, tech sector layoffs, manufacturing reshoring"
    },
    {
      region: "European Union",
      status: "Slow Growth",
      highlights: "Energy crisis aftermath, ECB rate hikes, industrial competitiveness concerns, fiscal integration"
    },
    {
      region: "China",
      status: "Rebalancing",
      highlights: "Property sector crisis, youth unemployment, Belt and Road recalibration, tech crackdown easing"
    },
    {
      region: "India",
      status: "Rising Star",
      highlights: "Fastest growing major economy, digital infrastructure boom, manufacturing push, demographic dividend"
    },
    {
      region: "Middle East",
      status: "Oil-Dependent",
      highlights: "Diversification efforts (Vision 2030), oil price sensitivity, regional investment funds"
    },
    {
      region: "Africa",
      status: "Debt Challenges",
      highlights: "Debt distress in multiple countries, Chinese lending retrenchment, demographic potential"
    }
  ];

  return (
    <section id="economy" className="py-16 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Global Economy</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Economic trends, trade dynamics, energy markets, and financial systems driving the world economy
          </p>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Key Economic Indicators</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {globalEconomics.map((item, index) => (
              <Card key={index} className="p-6">
                <item.icon className="mb-4 h-10 w-10 text-accent" />
                <h4 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
                <div className="space-y-2">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                      {metric}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Regional Economic Outlook</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {regionalEconomics.map((item, index) => (
              <Card key={index} className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">{item.region}</h4>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    item.status === "Rising Star" || item.status === "Mixed Signals"
                      ? "bg-accent/20 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.highlights}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomySection;
