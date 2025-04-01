
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrintingPage from "./pages/PrintingPage";
import MailingPage from "./pages/MailingPage";
import PromotionalPage from "./pages/PromotionalPage";
import PolicyPage from "./pages/PolicyPage";
import NotFound from "./pages/NotFound";
import EagleImagesPage from "./pages/EagleImagesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/printing" element={<PrintingPage />} />
          <Route path="/eagle-images" element={<EagleImagesPage />} />
          <Route path="/mailing" element={<MailingPage />} />
          <Route path="/promotional" element={<PromotionalPage />} />
          <Route path="/policies" element={<PolicyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
