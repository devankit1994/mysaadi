import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4 shadow-inner">
      <div className="max-w-7xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 flex items-center justify-center">
            <svg
              viewBox="0 0 60 60"
              width="32"
              height="32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="MySaadi logo"
            >
              <g
                transform="translate(5,3)"
                stroke="#F3F4F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g transform="translate(0,4)">
                  <path
                    d="M18.1327868,0.932322573 C15.5547756,1.92192834 14.5880122,5.65000968 15.9734603,9.25922531 C17.3573726,12.8644401 23,15.5000002 23,15.5000002 C23,15.5000002 28.9253523,12.8644401 30.3092646,9.25922531 C31.6947127,5.65000968 30.7279493,1.92192834 28.1499381,0.932322573 C26.5272972,0.30944908 24.653089,0.919921664 23.1413624,2.35789076 C23.1413624,2.35789076 19.7554277,0.30944908 18.1327868,0.932322573 Z"
                    fill="#E65F58"
                  />
                  <path d="M26.9244035,46.8154782 C29.294794,48.2040416 32.054444,49 35,49 C43.836556,49 51,41.836556 51,33 C51,24.163444 43.836556,17 35,17 C26.163444,17 19,24.163444 19,33 C19,36.2290072 19.9565195,39.2346073 21.6016685,41.7489103" />
                  <path d="M20.1652501,20.1484669 C18.4248387,19.409055 16.5101893,19 14.5,19 C6.49187113,19 0,25.4918711 0,33.5 C0,41.5081289 6.49187113,48 14.5,48 C22.5081289,48 29,41.5081289 29,33.5 C29,30.1794472 27.8838346,27.1195888 26.0062229,24.675144" />
                </g>
              </g>
            </svg>
          </span>
          <span className="font-semibold text-lg tracking-wide">MySaadi</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-400 transition-colors">
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-pink-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-pink-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
            href="#"
            aria-label="Twitter"
            className="hover:text-pink-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.64 4.08A12.7 12.7 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 0 0 3.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.59a9.1 9.1 0 0 0 2.23-2.32z" />
            </svg>
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
            </svg>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="hover:text-pink-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} MySaadi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
