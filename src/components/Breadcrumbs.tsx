'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function formatSegment(segment: string): string {
  if (!segment) return '';
  if (segment === 'whiskies') return 'Our Whiskies';
  if (segment === 'errol-wings-3') return 'Errol Wings 3 Year Old';
  if (segment === 'errol-wings-12') return 'Errol Wings 12 Year Old';
  if (segment === 'story') return 'Brand Story';
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumbs({ placement }: { placement: 'header' | 'footer' }) {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);

  const isHome = segments.length === 0;
  if (isHome && placement === 'footer') {
    return (
      <nav aria-label="Breadcrumb" className="header-typewriter text-[9px] md:text-[10px]">
        HOME
      </nav>
    );
  }

  const classes =
    placement === 'header'
      ? 'header-typewriter text-[8px] md:text-[9px] text-neutral-700'
      : 'header-typewriter text-[8px] md:text-[9px] text-neutral-700';

  return (
    <nav aria-label="Breadcrumb" className={classes}>
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:underline">
            HOME
          </Link>
        </li>
        {segments.map((seg, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const label = formatSegment(seg);
          return (
            <li key={href} className="flex items-center gap-1">
              <span>/</span>
              {index === segments.length - 1 ? (
                <span>{label}</span>
              ) : (
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
