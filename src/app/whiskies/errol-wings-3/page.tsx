export const metadata = {
  title: 'Errol Wings — 3 Year Old Single Malt',
  description: 'Errol Wings 3 Year Old — Single Malt Scotch Whisky (Pilot’s Reserve).',
};

export default function EW3Page() {
  return (
    <article className="grid lg:grid-cols-2 gap-8">
      <div className="w-full max-w-md mx-auto rounded-2xl border bg-white p-4">
        <img
          src="/images/errol-wings-3-front.jpg"
          alt="Errol Wings 3 Year Old Single Malt — front"
          style={{ display:'block', width:'100%', height:'auto' }}
        />
      </div>

      <section className="prose prose-neutral max-w-none">
        <h1>Errol Wings — 3 Year Old Single Malt</h1>
        <p>
          A youthful, direct expression designed for international markets. The Pilot’s Reserve label reflects the aviation heritage
          in a simplified, modern presentation.
        </p>

        <h3>Details</h3>
        <ul>
          <li>Category: Single Malt Scotch Whisky</li>
          <li>Age: 3 years</li>
          <li>Bottle: 70 cl (Newton bottle in extra-white flint)</li>
        </ul>

        <h3>Logistics (typical)</h3>
        <ul>
          <li>Case: 6 × 0.7 L</li>
          <li>80 cases per Euro pallet</li>
          <li>Typical container: 26 Euro pallets (40-foot)</li>
        </ul>
      </section>
    </article>
  );
}
