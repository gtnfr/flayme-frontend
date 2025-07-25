export default function StatCounters() {
  // These are placeholders! Replace with live data fetching as needed.
  return (
    <section className="flex flex-row justify-center gap-12 py-8">
      <div className="glass rounded-xl px-8 py-4 text-center">
        <div className="text-2xl font-bold text-orange-400">12,345,678</div>
        <div className="text-slate-300">Total Supply</div>
      </div>
      <div className="glass rounded-xl px-8 py-4 text-center">
        <div className="text-2xl font-bold text-blue-400">$1,234,567</div>
        <div className="text-slate-300">TVL</div>
      </div>
      <div className="glass rounded-xl px-8 py-4 text-center">
        <div className="text-2xl font-bold text-green-400">42%</div>
        <div className="text-slate-300">APY</div>
      </div>
    </section>
  );
}
