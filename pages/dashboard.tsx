import VotingPanel from "../components/VotingPanel";
import PnLChart from "../components/PnLChart";

export default function Dashboard() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-black via-slate-900 to-flayme-orange">
      <h1 className="font-poppins text-3xl text-white mb-8">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <VotingPanel />
        <PnLChart />
      </div>
    </main>
  );
}
