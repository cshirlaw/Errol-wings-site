export const metadata = {
  title: 'Errol Wings — 3 Year Old Single Malt',
  description: 'Errol Wings 3 Year Old — Single Malt Scotch Whisky (Pilot’s Reserve).',
};

export default function EW3Page() {
  return (
    <article className="space-y-10">
      {/* Bottle intro */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full max-w-md mx-auto rounded-2xl border bg-white p-4">
          <img
            src="/images/errol-wings-3-front.jpg"
            alt="Errol Wings 3 Year Old Single Malt — front"
            style={{ display: 'block', width: '50%', margin: '0 auto', height: 'auto' }}
          />
        </div>
        <div className="typewriter">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Errol Wings — 3 Year Old Single Malt
          </h1>
          <p className="mb-2">
            Pilot&apos;s Reserve 3 Year Old is the core Errol Wings expression: a defined single
            malt Scotch whisky with clear age, origin and an aviation-inspired identity.
          </p>
          <p className="mb-0">
            Scroll to explore the mission, the craft and the flavour through the panels below.
          </p>
        </div>
      </section>

      {/* Story panels from supplied artwork */}
      <section className="space-y-6">
        <div className="rounded-2xl border border-black/10 bg-[#f2e0c3] overflow-hidden">
          <img
            src="/images/top-secret.png"
            alt="Errol Wings — Top Secret Mission"
            className="w-full h-auto block"
          />
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#f2e0c3] overflow-hidden">
          <img
            src="/images/crafted.png"
            alt="Crafted in Scotland — The Single Malt Journey"
            className="w-full h-auto block"
          />
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#f2e0c3] overflow-hidden">
          <img
            src="/images/organoleptic.png"
            alt="Organoleptic Characteristics of Errol Wings 3 Year Old"
            className="w-full h-auto block"
          />
        </div>
      </section>
    </article>
  );
}
