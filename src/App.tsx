import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Workshops from "./pages/Workshops";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminBlog from "./pages/AdminBlog";
import Contact from "./pages/Contact";
import WhyMeditation from "./pages/WhyMeditation";
import HowLongMeditate from "./pages/HowLongMeditate";
import PricingSchedule from "./pages/PricingSchedule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/pricing-schedule" element={<PricingSchedule />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
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
