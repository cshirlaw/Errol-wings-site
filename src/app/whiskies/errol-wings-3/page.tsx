export const metadata = {
  title: 'Errol Wings — 3 Year Old Single Malt',
  description: 'Errol Wings 3 Year Old — Single Malt Scotch Whisky (Pilot’s Reserve).',
};

export default function EW3Page() {
  return (
    <article className="space-y-10">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full max-w-md mx-auto rounded-2xl border bg-white p-4">
          <img
            src="/images/errol-wings-3-front.jpg"
            alt="Errol Wings 3 Year Old Single Malt — front"
            style={{ display: 'block', width: '50%', margin: '0 auto', height: 'auto' }}
          />
        </div>
        <div className="prose prose-neutral max-w-none">
          <h1>Errol Wings — 3 Year Old Single Malt</h1>
          <p>
            Pilot&apos;s Reserve is the modern expression of the Errol Wings story: a bright, approachable single malt
            Scotch whisky distilled and matured in Scotland, designed for today&apos;s bars and retailers.
          </p>
          <p>
            Clean lines, aviation-inspired branding and clear age and origin statements make it easy to understand
            while retaining a distinctive character.
          </p>
        </div>
      </section>

      <section className="prose prose-neutral max-w-none">
        <h2>Crafted in Scotland — The Single Malt Journey</h2>
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3>1. Grain Preparation</h3>
            <p>Barley is soaked, germinated and dried to release natural sugars.</p>
          </div>
          <div>
            <h3>2. Wort &amp; Fermentation</h3>
            <p>Hot water and yeast transform the grain&apos;s sweetness into a rich, aromatic wort.</p>
          </div>
          <div>
            <h3>3. Distillation</h3>
            <p>The spirit is distilled in traditional copper stills for clarity and character.</p>
          </div>
          <div>
            <h3>4. Maturation &amp; Bottling</h3>
            <p>Matured in oak casks, then bottled as a defined single malt Scotch whisky.</p>
          </div>
        </div>
      </section>

      <section className="prose prose-neutral max-w-none">
        <h2>Organoleptic Characteristics</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3>1. Colour</h3>
            <p>Deep amber with warm copper highlights.</p>
          </div>
          <div>
            <h3>2. Aroma</h3>
            <p>
              Soft oak, malt sweetness, citrus hints and light floral notes.
            </p>
          </div>
          <div>
            <h3>3. Taste</h3>
            <p>
              Smooth and well-balanced, gentle sweetness followed by delicate spice.
            </p>
          </div>
          <div>
            <h3>4. Finish</h3>
            <p>
              Clean, warming finish with subtle oak and barley notes.
            </p>
          </div>
        </div>
      </section>

      <section className="prose prose-neutral max-w-none">
        <h2>Key Facts</h2>
        <ul>
          <li>Category: Single Malt Scotch Whisky</li>
          <li>Age: 3 years</li>
          <li>Bottle: 70 cl (Newton bottle, extra-white flint)</li>
          <li>Positioning: Aviation-inspired, modern, export-ready.</li>
        </ul>
      </section>
    </article>
  );
}
