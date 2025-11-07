import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

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
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <BrandMark />
                <span className="text-sm md:text-base header-typewriter">
                  Errol Wings Scotch Whisky
                </span>
              </Link>
            </div>
            <Breadcrumbs placement="header" />
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>

        <footer className="border-t mt-20 bg-[#f8f0dc]">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            <div className="text-[9px] md:text-[10px] header-typewriter text-neutral-700">
              Errol Wings Scotch Whisky
            </div>
            <Breadcrumbs placement="footer" />
          </div>
        </footer>
      </body>
    </html>
  );
}
