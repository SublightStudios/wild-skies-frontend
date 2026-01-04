import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import GameplaySection from "@/components/GameplaySection";
import AirshipsSection from "@/components/AirshipsSection";
import TimelineSection from "@/components/TimelineSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ws-darker">
      <Navbar />
      <HomeSection />
      <GameplaySection />
      <AirshipsSection />
      <TimelineSection />
      <Footer />
    </main>
  );
}
