import Hero from "../components/Hero";
import StatCounters from "../components/StatCounters";

export default function Home() {
  return (
    <main className="min-h-screen bg-hero-gradient">
      <Hero />
      <StatCounters />
    </main>
  );
}
