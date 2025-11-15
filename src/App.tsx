import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Geopolitics from "./pages/Geopolitics";
import Politics from "./pages/Politics";
import Diplomacy from "./pages/Diplomacy";
import Conflicts from "./pages/Conflicts";
import Economy from "./pages/Economy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/geopolitics" element={<Geopolitics />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/diplomacy" element={<Diplomacy />} />
          <Route path="/conflicts" element={<Conflicts />} />
          <Route path="/economy" element={<Economy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
