import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HowIWork from "./pages/HowIWork";
import Services from "./pages/Services";
import Sessions from "./pages/Sessions";
import Articles from "./pages/Articles";
import ArticlePost from "./pages/ArticlePost";
import AdminBlog from "./pages/AdminBlog";
import Contact from "./pages/Contact";
import WhyMeditation from "./pages/WhyMeditation";
import HowLongMeditate from "./pages/HowLongMeditate";
import PricingSchedule from "./pages/PricingSchedule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ArticleIdRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/articles/${id}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/sessions/pricing-schedule" element={<PricingSchedule />} />
          <Route path="/workshops" element={<Navigate to="/sessions" replace />} />
          <Route path="/workshops/pricing-schedule" element={<Navigate to="/sessions/pricing-schedule" replace />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticlePost />} />
          <Route path="/admin/articles" element={<AdminBlog />} />
          <Route path="/blog" element={<Navigate to="/articles" replace />} />
          <Route path="/blog/:id" element={<ArticleIdRedirect />} />
          <Route path="/admin/blog" element={<Navigate to="/admin/articles" replace />} />
          <Route path="/meditate/why-meditation" element={<WhyMeditation />} />
          <Route path="/meditate/how-long-should-i-meditate" element={<HowLongMeditate />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
