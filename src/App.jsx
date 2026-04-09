import Navbar from "./components/Navbar";
import DesignSection from "./components/DesignSection";
import HomeShowcaseSection from "./components/HomeShowcaseSection";
import StepsSection from "./components/StepsSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <DesignSection />
        <StepsSection />
        <HomeShowcaseSection />
      </main>
    </div>
  );
}

export default App;
