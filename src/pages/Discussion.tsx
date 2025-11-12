import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Discussion = () => {
  const discussions = [
    {
      author: "Sarah Chen",
      initials: "SC",
      topic: "Climate Policy Impact on Developing Nations",
      content: "The recent climate agreements place significant burden on emerging economies. While the goals are admirable, we need more nuanced approaches that account for different developmental stages.",
      likes: 24,
      replies: 8,
      verified: true,
    },
    {
      author: "Marcus Johnson",
      initials: "MJ",
      topic: "AI in Geopolitical Analysis",
      content: "How reliable is AI-generated analysis for predicting international conflicts? We should be cautious about over-relying on algorithmic predictions for complex human affairs.",
      likes: 15,
      replies: 12,
      verified: false,
    },
    {
      author: "Priya Sharma",
      initials: "PS",
      topic: "Economic Recovery Patterns",
      content: "Interesting to see Southeast Asian economies bouncing back faster than predicted. Tech sector growth and strong domestic consumption are key drivers.",
      likes: 31,
      replies: 5,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">AI-Moderated Community</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Discussion & Debate Hub</h1>
          <p className="text-muted-foreground text-lg">
            Share insights and engage in thoughtful discussions about global events
          </p>
        </div>

        {/* New Post */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Start a Discussion</CardTitle>
            <CardDescription>
              Share your perspective on global events. AI moderation ensures constructive dialogue.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="What's your take on current global events?"
              className="mb-4"
              rows={4}
            />
            <Button className="bg-primary hover:bg-primary/90">
              <MessageSquare className="mr-2 h-4 w-4" />
              Post Discussion
            </Button>
          </CardContent>
        </Card>

        {/* Discussion Feed */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Discussions</h2>
          
          {discussions.map((discussion, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all animate-fade-in">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {discussion.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{discussion.author}</span>
                      {discussion.verified && (
                        <Badge variant="outline" className="bg-green-500/10 text-green-700 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg mb-2">{discussion.topic}</CardTitle>
                    <CardDescription className="text-base">
                      {discussion.content}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-accent transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-accent transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Banner */}
        <Card className="mt-8 bg-accent/5 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-2">AI-Powered Moderation</h3>
                <p className="text-sm text-muted-foreground">
                  Our platform uses advanced AI to detect toxic content, fact-check claims, 
                  and maintain constructive discussions. Users earn credibility scores based 
                  on verified contributions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Discussion;
