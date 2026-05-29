"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "HOMEPAGE" },
  { href: "/menu", label: "OUR MENU" },
  { href: "/showcase", label: "SHOWCASE" },
  { href: "/visit", label: "VISIT US" },
  { href: "/order", label: "ORDER NOW" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="w-full px-6 py-6">
          <div className="flex justify-between items-center">

            <div className="hidden md:flex gap-8 text-sm tracking-wide flex-1">
              <Link href="/" className="text-white hover:text-[#c9a961] transition-colors">HOMEPAGE</Link>
              <Link href="/menu" className="text-white hover:text-[#c9a961] transition-colors">OUR MENU</Link>
              <Link href="/showcase" className="text-white hover:text-[#c9a961] transition-colors">SHOWCASE</Link>
              <Link href="/visit" className="text-white hover:text-[#c9a961] transition-colors">VISIT US</Link>
            </div>

            <Link href="/" className="flex items-center justify-center flex-1 md:flex-none">
              <Image
                src="/logos/light-version-v2.png"
                alt="The 6th Bite"
                width={200}
                height={67}
                className="w-[160px] md:w-[250px] h-auto"
                priority
              />
            </Link>

            <div className="hidden md:flex justify-end items-center gap-4 flex-1">
              <a
                href="https://wa.me/447624488331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WHATSAPP
              </a>
              <Link
                href="/order"
                className="px-6 py-2 bg-[#c9a961] text-white text-sm tracking-widest hover:bg-[#b89851] transition-all duration-300"
              >
                ORDER NOW
              </Link>
            </div>

            <button
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Image
            src="/logos/light-version-v2.png"
            alt="The 6th Bite"
            width={180}
            height={60}
            className="mb-16 opacity-80"
          />

          <nav className="flex flex-col items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light tracking-widest text-white hover:text-[#c9a961] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/447624488331"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-16 flex items-center gap-3 px-8 py-3 border border-white/30 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WHATSAPP US
          </a>
        </div>
      )}
    </>
  );
}
