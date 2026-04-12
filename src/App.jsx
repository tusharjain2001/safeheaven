import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import DesignSection from "./components/DesignSection";
import StepsSection from "./components/StepsSection";
import WhySafeHavenSection from "./components/WhySafeHavenSection";
import HomeShowcaseSection from "./components/HomeShowcaseSection";
import SuperRobustSection from "./components/SuperRobustSection";
import StandardsSection from "./components/StandardsSection";
import HpsSection from "./components/HpsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import QuizSection from "./components/QuizSection";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  const [page, setPage] = useState("home");

  // Allow TermsOfService to link to Privacy Policy via a custom event
  useEffect(() => {
    const handler = (e) => setPage(e.detail);
    window.addEventListener("navigate", handler);
    return () => window.removeEventListener("navigate", handler);
  }, []);

  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "privacy") {
    return <PrivacyPolicy onBack={goHome} />;
  }

  if (page === "terms") {
    return <TermsOfService onBack={goHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection />
        {/* <DesignSection /> */}
        <StepsSection />
        <WhySafeHavenSection />
        <StandardsSection />
        <HomeShowcaseSection />


        <SuperRobustSection />

        <HpsSection />
        <TestimonialsSection />
        <QuizSection />
      </main>

      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
