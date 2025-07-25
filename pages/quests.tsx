export default function Quests() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="font-poppins text-4xl mb-4">Quests & Gamification</h1>
      <div className="glass p-6 rounded-2xl">
        <ul>
          <li>Vote 5 times → Badge unlocked</li>
          <li>Hold Flayme 30 days → Earn yield multiplier</li>
          <li>Refer a friend → Get leaderboard points</li>
        </ul>
      </div>
    </main>
  );
}
