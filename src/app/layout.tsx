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

const navItems: {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}[] = [
  { href: '/', label: 'Home' },
  {
    href: '/whiskies',
    label: 'Our Whiskies',
    children: [
      { href: '/whiskies/errol-wings-3', label: 'Errol Wings 3 Year Old' },
      { href: '/whiskies/errol-wings-12', label: 'Errol Wings 12 Year Old' },
    ],
  },
  { href: '/story', label: 'Brand Story' },
  {
    href: '/distillery',
    label: 'Our Distillery',
    children: [
      { href: '/distillery/malt-distiller', label: 'Malt Distiller' },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="border-b bg-[#f8f0dc]">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3">
                <BrandMark />
                <span className="text-sm md:text-base header-typewriter">
                  Errol Wings Scotch Whisky
                </span>
              </Link>
              <nav className="flex items-center gap-4 text-[10px] md:text-xs header-typewriter">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.href} className="relative group">
                      <Link
                        href={item.href}
                        className="px-2 py-1 border border-transparent hover:border-black/40 hover:bg-black/5 transition-colors"
                      >
                        {item.label}
                      </Link>
                      <div className="absolute right-0 mt-1 hidden group-hover:block">
                        <div className="min-w-[180px] rounded-md border border-black/30 bg-[#f8f0dc] shadow-md py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-1 text-[9px] hover:bg-black/5"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-2 py-1 border border-transparent hover:border-black/40 hover:bg-black/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
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
