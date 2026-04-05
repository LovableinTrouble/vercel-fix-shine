import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/hero-bg.jpg";
import Index from "./pages/Index";
import Cheats from "./pages/Cheats";
import Status from "./pages/Status";
import Credits from "./pages/Credits";
import CheatDetail from "./pages/CheatDetail";
import Updates from "./pages/Updates";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RouteBackground = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-90 saturate-110 brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/60" />
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/cheats" element={<Cheats />} />
        <Route path="/cheats/:slug" element={<CheatDetail />} />
        <Route path="/status" element={<Status />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppShell = () => (
  <>
    <RouteBackground />
    <Navbar />
    <AnimatedRoutes />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AppShell />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
