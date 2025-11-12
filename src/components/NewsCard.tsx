import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  source: string;
  url: string;
  imageUrl?: string;
}

const NewsCard = ({ title, summary, category, source, url, imageUrl }: NewsCardProps) => {
  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Politics: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
      Economy: "bg-green-500/10 text-green-700 dark:text-green-400",
      Conflict: "bg-red-500/10 text-red-700 dark:text-red-400",
      Environment: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      Diplomacy: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    };
    return colors[cat] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50 hover:border-accent/50 animate-fade-in">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={getCategoryColor(category)}>{category}</Badge>
          <span className="text-xs text-muted-foreground">{source}</span>
        </div>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 line-clamp-3">
          <Sparkles className="inline h-3 w-3 text-accent mr-1" />
          {summary}
        </CardDescription>
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn"
          onClick={() => window.open(url, "_blank")}
        >
          Read Full Article
          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
