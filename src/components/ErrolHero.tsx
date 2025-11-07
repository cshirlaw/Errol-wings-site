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
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 pb-12 bg-black/45">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          Errol Wings Single Malt Scotch Whisky
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-lg text-white">
          Inspired by the historic airfield at Errol and a wartime story of courage and cooperation,
          crafted in Scotland for modern drinkers.
        </p>
      </div>
    </section>
  );
}
