import Image from 'next/image';

export const metadata = {
  title: 'Brand Story — Errol Wings',
  description: 'The Errol Wings story',
};

export default function StoryPage() {
  return (
    <section className="prose prose-neutral max-w-3xl">
      <h1>Brand Story</h1>
      <p>
        Errol Wings is a tribute to the wartime cooperation between British and Russian pilots during the Second World War.
        Near the village of Errol in Scotland, aviators trained side by side on British aircraft that were bound for the Eastern Front.
        The shared discipline, skill and courage shown there inspired the name of our whisky.
      </p>
      <p>
        Our 12-year-old blended Scotch brings together carefully selected single grain and vintage malt whiskies matured in bourbon oak casks,
        crafted to deliver balance, character and a long finish. The range now also includes a three-year-old single malt that continues the tradition
        with a cleaner, youthful profile intended for broader international audiences.
      </p>
      <p className="text-sm text-neutral-500">
        Note: Label elements used on earlier bottlings reflected the historical theme. Current and future releases streamline those elements for
        clarity across markets.
      </p>

      <div className="not-prose mt-8 grid gap-6 sm:grid-cols-2">
        <div className="relative aspect-[3/4] rounded-lg border">
          <Image src="/images/errol-wings-12-front.jpg" alt="Errol Wings 12 Year Old — front" fill sizes="(min-width: 640px) 50vw, 100vw" style={{objectFit:'contain'}}/>
        </div>
        <div className="relative aspect-[3/4] rounded-lg border">
          <Image src="/images/errol-wings-12-back.jpg" alt="Errol Wings 12 Year Old — back" fill sizes="(min-width: 640px) 50vw, 100vw" style={{objectFit:'contain'}}/>
        </div>
      </div>
    </section>
  );
}
