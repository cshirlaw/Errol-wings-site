import Link from 'next/link';

function Card({ href, title, subtitle, img, alt }: { href:string; title:string; subtitle:string; img:string; alt:string }) {
  return (
    <Link href={href} className="group block rounded-2xl border hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="mx-auto w-full max-w-sm rounded-lg border bg-white p-3">
          <img src={img} alt={alt} style={{ display:'block', width:'100%', height:'auto' }} />
        </div>
        <div className="px-1 pb-4">
          <h2 className="mt-4 text-xl font-semibold group-hover:underline">{title}</h2>
          <p className="text-neutral-600">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export const metadata = {
  title: 'Our Whiskies — Errol Wings',
  description: 'Explore the Errol Wings range',
};

export default function WhiskiesPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Our Whiskies</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        <Card
          href="/whiskies/errol-wings-12"
          title="Errol Wings — 12 Year Old"
          subtitle="Blended Scotch Whisky, matured in bourbon oak casks"
          img="/images/errol-wings-12-front.jpg"
          alt="Errol Wings 12 Year Old bottle"
        />
        <Card
          href="/whiskies/errol-wings-3"
          title="Errol Wings — 3 Year Old"
          subtitle="Single Malt Scotch Whisky — Pilot’s Reserve"
          img="/images/errol-wings-3-front.jpg?v=2"
          alt="Errol Wings 3 Year Old bottle"
        />
      </div>
    </section>
  );
}
