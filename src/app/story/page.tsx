export const metadata = {
  title: 'Brand Story — Errol Wings',
  description: 'The Errol Wings story',
};

export default function StoryPage() {
  return (
    <div className="paper-page min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {/* Top Secret Mission */}
        <div className="grid md:grid-cols-2 gap-8 items-start paper-panel">
          <div className="typewriter">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              “ERROL WINGS” — TOP SECRET MISSION
            </h1>
            <p className="mb-4">
              Errol Wings Single Malt Whisky takes its name from a little-known wartime story. During
              the Second World War, aircraft and crews passed through Scotland on discreet routes
              towards the Eastern Front. The airfield at Errol, on the banks of the Tay, served as a
              training and staging point on this hidden journey.
            </p>
            <p className="mb-4">
              The brand is a nod to those operations: careful, disciplined work carried out away from
              the spotlight. It honours the professionalism of pilots, engineers and ground staff who
              contributed to the outcome without ever appearing in headlines.
            </p>
            <p className="mb-2">
              Errol Wings does not glorify conflict. It quietly acknowledges service, resolve and
              cooperation — and turns that spirit into a modern, characterful Scotch whisky.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-md rounded-xl border border-black/10 bg-[#e5d2ae] shadow-sm overflow-hidden">
              <img
                src="/images/errol-story-top-secret.jpg"
                alt="Errol Wings Top Secret mission artwork"
                className="w-full h-auto block"
              />
            </div>
            <div className="w-full max-w-md rounded-xl border border-black/15 bg-[#e5d2ae] shadow-sm p-3">
              <img
                src="/images/pilot.jpg"
                alt="Historic pilot imagery linked to Errol Wings story"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        {/* Whisky Worthy of the Memory of Heroes */}
        <div className="grid md:grid-cols-2 gap-8 items-center paper-panel">
          <div className="order-2 md:order-1 typewriter">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              ERROL WINGS — WHISKY WORTHY OF THE MEMORY OF HEROES
            </h2>
            <p className="mb-4">
              Errol Wings is made to be shared: honest in its origins, clear in its presentation and
              rooted in Scotland. It preserves the memory of real people and real places without
              slipping into pastiche.
            </p>
            <p className="mb-4">
              Every bottle is a reminder that difficult work and shared courage are what bring
              results — in the air, on the ground, and at the stills. The Errol Wings crest and
              aircraft motif are there as a quiet salute to those efforts.
            </p>
            <p className="mb-2">
              The range begins with a defined 3 Year Old Single Malt and includes the earlier 12 Year
              Old blended Scotch release. Together they form a straightforward, credible whisky
              offer with a distinctive aviation story.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md rounded-xl border border-black/10 bg-[#e5d2ae] shadow-sm overflow-hidden">
              <img
                src="/images/errol-story-heroes.jpg"
                alt="Errol Wings bottle and archival imagery"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
