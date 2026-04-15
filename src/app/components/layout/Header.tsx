'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Computing', href: '/faculty/computing' },
  { name: 'Business', href: '/faculty/business' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <div>
              <div className="text-lg font-extrabold leading-tight text-slate-900 md:text-xl">
                SLIIT GPA Calculator
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navigationLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://www.seoservicessrilanka.com/"
              target="_blank"
              rel="dofollow"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              About
            </a>

            <Link
              href="/#calculator"
              className="ml-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              Calculate GPA
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-slate-100 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              <span className={`mb-1 block h-0.5 w-5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`mb-1 block h-0.5 w-5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-slate-200 py-3 lg:hidden">
            <div className="space-y-1">
              {navigationLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.seoservicessrilanka.com/"
                target="_blank"
                rel="dofollow"
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Link
                href="/#calculator"
                className="mt-3 block rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculate GPA
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
