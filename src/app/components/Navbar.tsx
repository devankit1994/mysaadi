"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LoginModal from "./LoginModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  function handleNavClick() {
    setMobileMenuOpen(false);
  }

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl px-4 mx-auto flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              style={{ letterSpacing: "0.05em" }}
              onClick={handleNavClick}
            >
              <Image
                src="/wedding-rings.svg"
                alt="Wedding Rings"
                width={32}
                height={32}
                className="w-8 h-8 drop-shadow-md transition-transform group-hover:scale-110"
                style={{ minWidth: "2rem" }}
              />
              <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
                MySaadi
              </span>
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
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
            <button
              className="ml-6 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 cursor-pointer"
              style={{ letterSpacing: "0.04em" }}
              onClick={() => setLoginOpen(true)}
            >
              <span className="flex items-center gap-2">Login</span>
            </button>
          </div>
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            type="button"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-50"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 w-86 h-full bg-white shadow-lg z-50 flex flex-col p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-1">
                <Image
                  src="/wedding-rings.svg"
                  alt="Wedding Rings"
                  width={26}
                  height={26}
                  className="w-7 h-7 drop-shadow-md transition-transform group-hover:scale-110"
                  style={{ minWidth: "2rem" }}
                />
                <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-wide">
                  MySaadi
                </span>
              </div>
              <button
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                type="button"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-center transition-colors font-medium text-lg px-2 py-1 rounded ${
                      isActive
                        ? "text-pink-600 font-bold underline underline-offset-4"
                        : "text-gray-700 hover:text-pink-600"
                    }`}
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                className="mt-6 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 text-white shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 cursor-pointer"
                style={{ letterSpacing: "0.04em" }}
                onClick={() => {
                  setLoginOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </button>
            </nav>
          </div>
          {/* Animation keyframes */}
          <style jsx global>{`
            @keyframes slide-in {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slide-in {
              animation: slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </div>
      )}
      {loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
    </>
  );
}
