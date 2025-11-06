import Image from 'next/image';

export const metadata = {
  title: 'Errol Wings — 12 Year Old Blended Scotch',
  description: 'Errol Wings 12 Year Old — blended Scotch matured in bourbon oak casks.',
};

export default function EW12Page() {
  return (
    <article className="grid lg:grid-cols-2 gap-8">
      <div className="relative aspect-[3/4] w-full rounded-2xl border">
        <Image src="/images/errol-wings-12-front.jpg" alt="Errol Wings 12 Year Old — front" fill sizes="(min-width:1024px) 40vw, 100vw" style={{objectFit:'contain'}}/>
      </div>

      <section className="prose prose-neutral max-w-none">
        <h1>Errol Wings — 12 Year Old</h1>
        <p>
          A blended Scotch whisky assembled from select single grain and vintage malt components, matured for at least twelve years in bourbon oak casks.
          The style balances vanilla, gentle oak and malt sweetness with a clean, rounded finish.
        </p>

        <h3>Story</h3>
        <p>
          The name honours the wartime cooperation between British and Russian pilots in Scotland.
          At the Errol airfield, aviators trained together on British aircraft heading for service overseas — a spirit of skill and shared purpose that we celebrate today.
        </p>

        <h3>Details</h3>
        <ul>
          <li>Category: Blended Scotch Whisky</li>
          <li>Age: 12 years</li>
          <li>Maturation: Bourbon oak casks</li>
          <li>Bottle: 70 cl</li>
          <li>ABV: 40%</li>
        </ul>

        <h3>Logistics (typical)</h3>
        <ul>
          <li>Case: 6 × 0.7 L</li>
          <li>80 cases per Euro pallet</li>
          <li>Typical container: 26 Euro pallets (40-foot)</li>
        </ul>
      </section>

      <div className="relative aspect-[3/4] w-full rounded-2xl border lg:col-span-2">
        <Image src="/images/errol-wings-12-back.jpg" alt="Errol Wings 12 Year Old — back label" fill sizes="100vw" style={{objectFit:'contain'}}/>
      </div>
    </article>
  );
}
