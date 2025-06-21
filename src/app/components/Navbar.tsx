"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from 'next/image';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            style={{ letterSpacing: "0.05em" }}
          >
            <Image
              src="/wedding-rings.svg"
              alt="Wedding Rings"
              className="w-8 h-8 drop-shadow-md transition-transform group-hover:scale-110"
              style={{ minWidth: "2rem" }}
            />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
              MySaadi
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive
                    ? "text-pink-600 font-bold underline underline-offset-4"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow">
          <div className="flex flex-col px-4 md:px-8 py-2 space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors font-medium ${
                    isActive
                      ? "text-pink-600 font-bold underline underline-offset-4"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
