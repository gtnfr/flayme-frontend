export default function Docs() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="font-poppins text-4xl mb-4">Documentation</h1>
      <div className="glass p-6 rounded-2xl">
        <ul>
          <li><strong>Tokenomics:</strong> Deflation, rebasing, treasury voting.</li>
          <li><strong>Audits:</strong> TBA</li>
          <li><strong>Contracts:</strong> 0xYourContractAddress</li>
        </ul>
        <a href="/whitepaper.pdf" download className="text-blue-400 underline mt-4 block">
          Download Whitepaper
        </a>
      </div>
    </main>
  );
}
