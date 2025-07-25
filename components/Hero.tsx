import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16">
      <div className="mb-8">
        <Image src="/flayme-logo.png" alt="Flayme Logo" width={110} height={180} priority />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-orange-400 via-red-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
        Deflationary. Community-Governed.<br />Yield-Generating.
      </h1>
      <p className="text-lg md:text-2xl font-inter text-slate-200 mt-6 max-w-xl text-center">
        HyperEVM token with true on-chain treasury voting, gamified rewards, and passive rebase yield.
      </p>
      <div className="flex flex-row gap-4 mt-10">
        <button className="px-6 py-3 rounded-2xl bg-gradient-to-tr from-red-500 to-orange-400 font-bold text-lg text-white shadow-xl hover:scale-105 transition">
          Connect Wallet
        </button>
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener"
          className="px-6 py-3 rounded-2xl border-2 border-red-400 text-white font-bold text-lg bg-opacity-20 hover:bg-red-700 transition"
        >
          Read Whitepaper
        </a>
      </div>
    </section>
  );
}
