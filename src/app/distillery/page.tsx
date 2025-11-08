export const metadata = {
  title: 'Our Distillery — Errol Wings',
  description: 'Errol Wings distilling and maturation.',
};

export default function DistilleryPage() {
  return (
    <section className="space-y-6 typewriter">
      <h1 className="text-2xl md:text-3xl font-semibold">
        Our Distillery
      </h1>
      <p>
        Errol Wings Single Malt is produced in Scotland using traditional pot stills and carefully
        selected malted barley. The distillery partners we work with share our focus on clarity,
        quality and transparent age statements.
      </p>
      <p>
        The spirit is distilled, matured and bottled in Scotland before release under the Errol Wings
        marque, aligning the aviation-inspired story with genuine Scotch whisky credentials.
      </p>
      <p>
        Learn more about our malt distilling partner below.
      </p>
    </section>
  );
}
