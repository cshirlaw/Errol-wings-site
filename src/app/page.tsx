export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">RSD Whisky</h1>
        <p className="mt-3 text-slate-600">
          Rutherford, Shirlaw &amp; Denholm Ltd — advisory and prestige bottlings in Scotch whisky.
        </p>

        <section className="prose prose-slate mt-8">
          <h2>What we do</h2>
          <p>
            We advise on cask acquisition, quality assurance, bespoke bottlings and export-ready
            brand expressions for international markets.
          </p>
          <ul>
            <li>Single cask prestige projects</li>
            <li>Packaging, design, and bottling oversight</li>
            <li>Compliance, logistics, and quality control</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
