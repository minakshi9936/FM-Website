import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      {/* Top line */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo1.png"
                alt="VISHVAMM Logo"
                className="h-15 w-20 object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Building innovative solutions with passion and dedication.
            </p>
          </div>

         

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-orange-600">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

           {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-orange-600">
                  Facility Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-600">
                  Supply
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left side */}
          <p className="text-xs text-neutral-400">
            © {year} VISHVAMM. All rights reserved.
          </p>

          {/* Center links */}
          <div className="flex gap-4 text-xs text-neutral-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-600">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-600">
              Terms
            </a>
            <a href="#" className="hover:text-orange-600">
              Cookies
            </a>
          </div>

          {/* Right side (social icons) */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
