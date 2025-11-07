import Link from 'next/link';

function Dial({
  href,
  title,
  subtitle,
  emphasis,
}: {
  href: string;
  title: string;
  subtitle: string;
  emphasis?: 'primary' | 'secondary' | 'ghost';
}) {
  const base =
    'relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full border text-[9px] md:text-[10px] tracking-wide uppercase transition-colors';
  const ring =
    'absolute inset-1 rounded-full border border-white/10 pointer-events-none';
  const dot =
    'absolute w-1 h-1 rounded-full bg-white/70 top-2 right-[22%] pointer-events-none';

  let style = 'border-white/50 bg-black/30 text-white hover:bg-white hover:text-black';
  if (emphasis === 'secondary') {
    style = 'border-white/40 bg-black/20 text-white hover:bg-white/90 hover:text-black';
  }
  if (emphasis === 'ghost') {
    style = 'border-white/25 bg-transparent text-white hover:bg-white/15';
  }

  return (
    <Link href={href} className={`${base} ${style}`}>
      <div className={ring} />
      <div className={dot} />
      <div className="text-[8px] md:text-[9px] opacity-80">ERROL WINGS</div>
      <div className="mt-1 font-semibold text-[9px] md:text-[10px] text-center">
        {title}
      </div>
      <div className="mt-0.5 text-[7px] md:text-[8px] text-center opacity-80 leading-snug">
        {subtitle}
      </div>
    </Link>
  );
}

export default function ErrolHero() {
  return (
    <section
      className="relative -mx-4 md:-mx-8 mb-0 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <img
        src="/images/errol-wings-hero.jpg"
        alt="Errol Wings Single Malt Scotch Whisky"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-16 py-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Errol Wings Single Malt Scotch Whisky
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-lg text-white">
            Inspired by the historic airfield at Errol and a wartime story of courage and cooperation,
            crafted in Scotland for modern drinkers.
          </p>
        </div>

        {/* Cockpit dial style CTAs */}
        <div className="flex flex-wrap gap-4 md:gap-6 mt-8 mb-2">
          <Dial
            href="/whiskies/errol-wings-3"
            title="3 Year Old Single Malt"
            subtitle="Pilot's Reserve · View details"
            emphasis="primary"
          />
          <Dial
            href="/whiskies/errol-wings-12"
            title="12 Year Old Blend"
            subtitle="Earlier release · View details"
            emphasis="secondary"
          />
          <Dial
            href="/story"
            title="Discover the Story"
            subtitle="Top Secret Route · Read more"
            emphasis="ghost"
          />
        </div>
      </div>
    </section>
  );
}
