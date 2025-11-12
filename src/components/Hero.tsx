import { TrendingUp, Users, Globe2 } from "lucide-react";
import worldMap from "@/assets/world-map.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={worldMap} 
          alt="World Map showing geopolitical regions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl drop-shadow-lg">
            Understanding Global Dynamics
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/95 md:text-xl drop-shadow-md">
            Comprehensive analysis of geopolitics, international relations, conflicts, and economic trends shaping our world
          </p>
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Globe2 className="h-5 w-5 text-accent" />
              <span>195 Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-accent" />
              <span>Global Coverage</span>
            </div>
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
