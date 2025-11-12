import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Map = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Interactive World Map</h1>
          <p className="text-muted-foreground">
            Click on any region to explore live geopolitical insights and news
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')] opacity-20 bg-cover bg-center" />
            <div className="relative text-center">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-4 animate-pulse" />
              <p className="text-xl font-semibold mb-2">Interactive Map Coming Soon</p>
              <p className="text-muted-foreground max-w-md">
                We'll integrate Mapbox or Leaflet to visualize global events with clickable country markers
              </p>
            </div>
          </div>
        </Card>

        {/* Regional Insights */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Regional Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-green-500/10 text-green-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Stable
                  </Badge>
                  <span className="text-xs text-muted-foreground">Asia-Pacific</span>
                </div>
                <CardTitle className="text-lg">India & Southeast Asia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strong economic growth continues with tech sector leading innovation. 
                  Regional trade agreements strengthen economic ties.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Monitoring
                  </Badge>
                  <span className="text-xs text-muted-foreground">Middle East</span>
                </div>
                <CardTitle className="text-lg">Peace Talks Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Diplomatic channels show promise as regional powers engage in dialogue. 
                  De-escalation measures being implemented.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                  <span className="text-xs text-muted-foreground">Europe</span>
                </div>
                <CardTitle className="text-lg">Climate Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  EU nations lead global climate initiatives. Record renewable energy 
                  investments and ambitious carbon reduction targets.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
