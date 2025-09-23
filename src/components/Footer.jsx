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
              <li></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm border-t border-yellow-500/20 pt-4">
          © {new Date().getFullYear()} Vishvam Management Services Pvt. Ltd. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
