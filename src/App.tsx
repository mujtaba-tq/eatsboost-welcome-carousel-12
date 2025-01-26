import ReactGA from "react-ga4";

ReactGA.initialize("G-D1RXHH6J5W"); // Replace with your GA4 Measurement ID
ReactGA.send("pageview"); // Tracks the first page load

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import WhatIsEatsBoost from "./pages/WhatIsEatsBoost";
import HowItWorks from "./pages/HowItWorks";
import CallToAction from "./pages/CallToAction";
import EaterySearch from "./pages/EaterySearch";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/what-is-eatsboost" element={<WhatIsEatsBoost />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/download" element={<CallToAction />} />
            <Route path="/eatery-search" element={<EaterySearch />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
