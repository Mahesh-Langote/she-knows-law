import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SearchProvider } from "./context/SearchContext";
import NotFound from "@/pages/not-found";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import LawDetailPage from "./pages/LawDetailPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:id" component={CategoryPage} />
      <Route path="/law/:id" component={LawDetailPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SearchProvider>
          <MainLayout>
            <Router />
          </MainLayout>
          <Toaster />
        </SearchProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
