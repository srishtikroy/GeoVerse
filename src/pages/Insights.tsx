import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Sparkles } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      title: "India-China Border Relations",
      sentiment: "neutral",
      summary: "Recent diplomatic engagements show cautious optimism. Both nations agree to maintain existing protocols while exploring new confidence-building measures. Military disengagement continues in disputed areas.",
      topics: ["Diplomacy", "Security"],
    },
    {
      title: "Global Oil Price Trends",
      sentiment: "positive",
      summary: "Prices stabilize amid OPEC+ production adjustments and renewable energy transition. Market analysts predict moderate prices as demand patterns shift toward sustainable energy sources.",
      topics: ["Economy", "Energy"],
    },
    {
      title: "Climate Summit 2025 Outcomes",
      sentiment: "positive",
      summary: "Historic agreement reached with 195 nations committing to net-zero emissions by 2050. Developed nations pledge $300B annually for climate adaptation in developing countries.",
      topics: ["Environment", "Diplomacy"],
    },
    {
      title: "Tech Regulation Framework",
      sentiment: "neutral",
      summary: "Major tech companies collaborate on AI ethics guidelines. Framework addresses transparency, bias mitigation, and user privacy. Implementation timeline set for Q3 2025.",
      topics: ["Politics", "Technology"],
    },
  ];

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case "negative":
        return <TrendingDown className="h-5 w-5 text-red-600" />;
      default:
        return <Minus className="h-5 w-5 text-yellow-600" />;
    }
  };

  const getSentimentBadge = (sentiment: string) => {
    const colors: Record<string, string> = {
      positive: "bg-green-500/10 text-green-700 dark:text-green-400",
      negative: "bg-red-500/10 text-red-700 dark:text-red-400",
      neutral: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    };
    return colors[sentiment] || colors.neutral;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">AI-Generated Analysis</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Global Insights Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            AI-powered analysis of trending geopolitical topics
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {insights.map((insight, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-2">
                    {insight.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  {getSentimentIcon(insight.sentiment)}
                </div>
                <CardTitle className="text-xl">{insight.title}</CardTitle>
                <Badge className={getSentimentBadge(insight.sentiment)}>
                  {insight.sentiment.charAt(0).toUpperCase() + insight.sentiment.slice(1)} Sentiment
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {insight.summary}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trending Topics */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Top 5 Global Topics Today</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  "Climate Change Policies",
                  "Economic Recovery in Emerging Markets",
                  "AI Regulation & Ethics",
                  "Renewable Energy Investment",
                  "International Trade Agreements",
                ].map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-accent">
                        {index + 1}
                      </span>
                      <span className="font-medium">{topic}</span>
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Insights;
