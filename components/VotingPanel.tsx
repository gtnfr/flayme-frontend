import { useState } from "react";

export default function VotingPanel() {
  // Placeholder proposal list. Replace with real Ethers.js fetching!
  const [proposals] = useState([
    { id: 1, title: "Long BTC/ETH", description: "Open 5x long BTC/ETH on Hyperliquid", endTime: "12h" },
    { id: 2, title: "Short SOL", description: "Open 3x short SOL on Hyperliquid", endTime: "22h" }
  ]);

  return (
    <div className="bg-glass p-6 rounded-2xl shadow-lg">
      <h2 className="font-poppins text-xl mb-4 text-orange-300">Active Proposals</h2>
      <ul>
        {proposals.map((p) => (
          <li key={p.id} className="mb-4 flex flex-col md:flex-row md:items-center justify-between bg-black/40 p-4 rounded-xl">
            <div>
              <div className="text-lg text-white font-semibold">{p.title}</div>
              <div className="text-slate-400 text-sm">{p.description}</div>
              <div className="mt-1 text-xs text-blue-300">
                Ends in: {p.endTime}
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-2 md:mt-0">
              <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold hover:scale-105">
                For
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500 text-white font-bold hover:scale-105">
                Against
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
