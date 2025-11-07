export const metadata = {
  title: 'Errol Wings — 12 Year Old Blended Scotch',
  description: 'Errol Wings 12 Year Old — blended Scotch matured in bourbon oak casks.',
};

export default function EW12Page() {
  return (
    <article className="grid lg:grid-cols-2 gap-8">
      <div className="w-full max-w-md mx-auto rounded-2xl border bg-white p-4">
        <img
          src="/images/errol-wings-12-front.jpg"
          alt="Errol Wings 12 Year Old — front"
          style={{ display: 'block', width: '70%', margin: '0 auto', height: 'auto' }}
        />
      </div>

      <section className="prose prose-neutral max-w-none">
        <h1>Errol Wings — 12 Year Old Blended Scotch</h1>
        <p>
          A limited blended Scotch release assembled from select single grain and malt components,
          each matured for at least twelve years in bourbon oak casks.
        </p>
        <p>
          The 12 Year Old reflects the original Errol Wings concept and remains part of the brand&apos;s history.
        </p>

        <h2>Details</h2>
        <ul>
          <li>Category: Blended Scotch Whisky</li>
          <li>Age: 12 years</li>
          <li>Maturation: Bourbon oak casks</li>
          <li>Bottle: 70 cl</li>
          <li>ABV: 40%</li>
        </ul>

        <h2>Typical Logistics</h2>
        <ul>
          <li>Case: 6 × 0.7 L</li>
          <li>Approx. 80 cases per Euro pallet</li>
          <li>Typical container: 26 Euro pallets (40-foot)</li>
        </ul>
      </section>
    </article>
  );
}
