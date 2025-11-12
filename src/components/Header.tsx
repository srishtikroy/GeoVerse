import logo from "@/assets/geoverse-logo-new.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GeoVerse Logo" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold text-foreground">GeoVerse</h1>
            <p className="text-xs text-muted-foreground">Global Intelligence Platform</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#geopolitics" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Geopolitics
          </a>
          <a href="#politics" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Politics
          </a>
          <a href="#diplomacy" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Diplomacy
          </a>
          <a href="#conflicts" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Conflicts
          </a>
          <a href="#economy" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Economy
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
