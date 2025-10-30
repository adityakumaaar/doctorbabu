import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Clients } from "./components/Clients";
import { Testimonials } from "./components/Testimonials";
import { Features } from "./components/Features";
import { Cohorts } from "./components/Cohorts";
import { HowItWorks } from "./components/HowItWorks";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BookDemoPage } from "./components/BookDemoPage";
import { StartFreeTrialPage } from "./components/StartFreeTrialPage";
import { AccountCreatedPage } from "./components/AccountCreatedPage";
import { PricingPage } from "./components/PricingPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { SecurityPage } from "./components/SecurityPage";
import { Toaster } from "./components/ui/sonner";
import { useEffect } from "react";

// ScrollToTop component to handle scrolling on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout component for pages that need header and footer
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

// Home page component
function HomePage() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Clients />
      <Testimonials />
      <Features />
      <Cohorts />
      <HowItWorks />
      <CTA />
    </main>
  );
}

// Protected route component for AccountCreatedPage
function ProtectedAccountCreated() {
  const fromStartFreeTrial = sessionStorage.getItem("fromStartFreeTrial") === "true";

  if (!fromStartFreeTrial) {
    return <Navigate to="/start-free-trial" replace />;
  }

  return <AccountCreatedPage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route 
          path="/book-demo" 
          element={
            <>
              <BookDemoPage />
              <Toaster />
            </>
          } 
        />
        <Route
          path="/start-free-trial"
          element={
            <StartFreeTrialPage
              onSuccess={() => {
                sessionStorage.setItem("fromStartFreeTrial", "true");
              }}
            />
          }
        />
        <Route path="/account-created" element={<ProtectedAccountCreated />} />
        <Route
          path="/pricing"
          element={
            <Layout>
              <PricingPage />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout>
              <FeaturesPage />
            </Layout>
          }
        />
        <Route
          path="/security"
          element={
            <Layout>
              <SecurityPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}