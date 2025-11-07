export default function ErrolHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/errol-wings-hero.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 px-6 py-12 md:px-10 md:py-16 bg-gradient-to-t from-black/45 via-black/20 to-transparent text-white">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Errol Wings Single Malt Scotch Whisky
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg">
          Inspired by the historic airfield at Errol and a wartime story of courage and cooperation,
          Errol Wings is crafted in Scotland as a clean, characterful single malt for modern drinkers.
        </p>
      </div>
    </section>
  );
}
