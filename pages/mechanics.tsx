export default function Mechanics() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="font-poppins text-4xl mb-4">How Flayme Works</h1>
      <ol className="w-full max-w-2xl glass p-6 rounded-2xl">
        <li className="mb-4">
          <strong>🔥 Deflationary Burns:</strong> Every transfer burns a small % of tokens, reducing supply.
        </li>
        <li className="mb-4">
          <strong>🗳️ Treasury Voting:</strong> Holders propose/vote on strategies for the on-chain treasury.
        </li>
        <li>
          <strong>💸 Rebase Rewards:</strong> Hold and/or vote to receive rebasing rewards automatically.
        </li>
      </ol>
    </main>
  );
}
