import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Errol Wings Scotch Whisky',
  description: 'Errol Wings — Scotch Whisky',
};

function BrandMark() {
  return (
    <div
      className="h-9 w-9 flex items-center justify-center rounded-full border"
      style={{ borderColor: 'var(--brand-accent)' }}
      aria-hidden
    >
      <span className="text-[9px] font-bold header-typewriter" style={{ letterSpacing: '0.12em' }}>
        EW
      </span>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b bg-[#f8f0dc]">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark />
              <span
                className="text-sm md:text-base header-typewriter"
                style={{ color: '#111827' }}
              >
                Errol Wings Scotch Whisky
              </span>
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>
        <footer className="border-t mt-20 bg-[#f8f0dc]">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs md:text-sm text-neutral-700 header-typewriter">
            Errol Wings Scotch Whisky
          </div>
        </footer>
      </body>
    </html>
  );
}
