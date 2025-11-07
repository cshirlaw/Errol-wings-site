import Link from 'next/link';
import ErrolHero from '../components/ErrolHero';

export default function Page() {
  return (
    <section className="space-y-8">
      <ErrolHero />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Errol Wings — 3 Year Old Single Malt</h2>
          <p className="mb-3">
            Pilot&apos;s Reserve: a youthful single malt that carries the Errol Wings story forward
            in a contemporary, accessible style.
          </p>
          <Link href="/whiskies/errol-wings-3" className="underline">
            View details
          </Link>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-2">Errol Wings — 12 Year Old Blend</h2>
          <p className="mb-3">
            Earlier limited release: a 12-year-old blended Scotch, matured in bourbon oak casks.
          </p>
          <Link href="/whiskies/errol-wings-12" className="underline">
            View details
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border p-6">
        <h2 className="text-lg font-semibold mb-2">Discover the Story</h2>
        <p className="mb-3">
          Errol Wings pays tribute to a covert WWII ferry route and the pilots who trained at the
          Errol airfield in Scotland. The whisky honours shared effort rather than glorifying conflict.
        </p>
        <Link href="/story" className="underline">
          Read the full story
        </Link>
      </div>
    </section>
  );
}
