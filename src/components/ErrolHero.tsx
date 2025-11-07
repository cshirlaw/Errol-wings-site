import Link from 'next/link';

export default function ErrolHero() {
  return (
    <section
      className="relative mb-8 -mx-4 md:-mx-8 overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      <img
        src="/images/errol-wings-hero.jpg"
        alt="Errol Wings Single Malt Scotch Whisky"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 pb-12 bg-black/45 space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Errol Wings Single Malt Scotch Whisky
        </h1>
        <p className="max-w-2xl text-sm md:text-lg text-white">
          Inspired by the historic airfield at Errol and a wartime story of courage and cooperation,
          crafted in Scotland for modern drinkers.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            href="/whiskies/errol-wings-3"
            className="px-4 py-2 rounded-full border border-white/80 bg-black/40 text-white text-xs md:text-sm tracking-wide uppercase hover:bg-white hover:text-black transition-colors"
          >
            3 Year Old Single Malt · View details
          </Link>
          <Link
            href="/whiskies/errol-wings-12"
            className="px-4 py-2 rounded-full border border-white/60 bg-black/30 text-white text-xs md:text-sm tracking-wide uppercase hover:bg-white/90 hover:text-black transition-colors"
          >
            12 Year Old Blend · View details
          </Link>
          <Link
            href="/story"
            className="px-4 py-2 rounded-full border border-white/40 bg-transparent text-white text-xs md:text-sm tracking-wide uppercase hover:bg-white/20 transition-colors"
          >
            Discover the Story
          </Link>
        </div>
      </div>
    </section>
  );
}
