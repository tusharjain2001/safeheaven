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

function App() {
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

      <Footer />
    </div>
  );
}

export default App;
