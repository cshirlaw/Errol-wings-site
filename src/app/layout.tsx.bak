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
      <span className="text-xs font-bold" style={{ color: 'var(--brand-accent)' }}>EW</span>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark />
              <span className="text-xl font-semibold" style={{ color: 'var(--brand-accent)' }}>
                Errol Wings Scotch Whisky
              </span>
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>
        <footer className="border-t mt-20">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
            Errol Wings Scotch Whisky
          </div>
        </footer>
      </body>
    </html>
  );
}
