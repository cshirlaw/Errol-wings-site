import Link from 'next/link';

export default function Page() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Errol Wings</h1>
        <p className="text-lg leading-relaxed">
          A Scotch whisky project focused on clarity of style and presentation for international markets.
          Explore our range below and read the story behind the name.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/whiskies" className="rounded-lg border px-4 py-2 hover:bg-neutral-50">Our Whiskies</Link>
          <Link href="/story" className="rounded-lg border px-4 py-2 hover:bg-neutral-50">Brand Story</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">12 Year Old — Blended Scotch</h2>
          <p className="mb-3">Select single grain and vintage malts matured in bourbon oak casks.</p>
          <Link href="/whiskies/errol-wings-12" className="underline">View details</Link>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">3 Year Old — Single Malt</h2>
          <p className="mb-3">A crisp, modern expression with a streamlined label for global markets.</p>
          <Link href="/whiskies/errol-wings-3" className="underline">View details</Link>
        </div>
      </div>
    </section>
  );
}
