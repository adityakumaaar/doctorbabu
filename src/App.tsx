import { useState, useEffect } from "react";
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
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    // Simple client-side routing
    const path = window.location.pathname;
    if (path === "/book-demo") {
      setCurrentPage("book-demo");
    } else if (path === "/start-free-trial") {
      setCurrentPage("start-free-trial");
    } else if (path === "/account-created") {
      setCurrentPage("account-created");
    } else if (path === "/pricing") {
      setCurrentPage("pricing");
    } else if (path === "/features") {
      setCurrentPage("features");
    } else {
      setCurrentPage("home");
    }

    // Handle navigation
    const handlePopState = () => {
      const newPath = window.location.pathname;
      if (newPath === "/book-demo") {
        setCurrentPage("book-demo");
      } else if (newPath === "/start-free-trial") {
        setCurrentPage("start-free-trial");
      } else if (newPath === "/account-created") {
        setCurrentPage("account-created");
      } else if (newPath === "/pricing") {
        setCurrentPage("pricing");
      } else if (newPath === "/features") {
        setCurrentPage("features");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Intercept link clicks for client-side navigation
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href) {
        const url = new URL(link.href);
        if (
          url.origin === window.location.origin &&
          (url.pathname === "/" ||
            url.pathname === "/book-demo" ||
            url.pathname === "/start-free-trial" ||
            url.pathname === "/account-created" ||
            url.pathname === "/pricing" ||
            url.pathname === "/features")
        ) {
          e.preventDefault();
          window.history.pushState({}, "", url.pathname);
          handlePopState();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (currentPage === "book-demo") {
    return (
      <>
        <BookDemoPage />
        <Toaster />
      </>
    );
  }

  if (currentPage === "start-free-trial") {
    return <StartFreeTrialPage />;
  }

  if (currentPage === "account-created") {
    return <AccountCreatedPage />;
  }

  if (currentPage === "pricing") {
    return (
      <>
        <Header />
        <PricingPage />
        <Footer />
      </>
    );
  }

  if (currentPage === "features") {
    return (
      <>
        <Header />
        <FeaturesPage />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
    </div>
  );
}