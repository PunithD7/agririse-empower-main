import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { DashboardLayout } from "@/components/DashboardLayout";
import FloatingChat from "@/components/FloatingChat";

import Dashboard from "./pages/Dashboard";
import CropIntelligence from "./pages/CropIntelligence";
import MarketInsights from "./pages/MarketInsights";
import RiskAssessment from "./pages/RiskAssessment";
import AIAssistant from "./pages/AIAssistant";
import DiseaseDetection from "./pages/DiseaseDetection";
import FinancialInclusion from "./pages/FinancialInclusion";
import GovernmentSchemes from "./pages/GovernmentSchemes";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import ImpactPage from "./pages/ImpactPage";
import GovtSchemesInfoPage from "./pages/GovtSchemesInfoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>

              {/* Default Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Public pages */}
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/government-schemes-info" element={<GovtSchemesInfoPage />} />

              {/* Dashboard Main */}
              <Route path="/dashboard" element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              } />

              {/* Dashboard pages */}
              <Route path="/crop-intelligence" element={
                <DashboardLayout>
                  <CropIntelligence />
                </DashboardLayout>
              } />

              <Route path="/market-insights" element={
                <DashboardLayout>
                  <MarketInsights />
                </DashboardLayout>
              } />

              <Route path="/risk-assessment" element={
                <DashboardLayout>
                  <RiskAssessment />
                </DashboardLayout>
              } />

              <Route path="/ai-assistant" element={
                <DashboardLayout>
                  <AIAssistant />
                </DashboardLayout>
              } />

              <Route path="/disease-detection" element={
                <DashboardLayout>
                  <DiseaseDetection />
                </DashboardLayout>
              } />

              <Route path="/financial-inclusion" element={
                <DashboardLayout>
                  <FinancialInclusion />
                </DashboardLayout>
              } />

              <Route path="/government-schemes" element={
                <DashboardLayout>
                  <GovernmentSchemes />
                </DashboardLayout>
              } />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />

            </Routes>

            <FloatingChat />

          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
