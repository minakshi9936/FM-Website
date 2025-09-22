import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-gradient-to-r from-orange-400 via-orange-300 to-red-100 overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/30 backdrop-blur-md shadow-sm z-30">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logo1.png"
            alt="Company Logo"
            className="w-20 h-14 bg-white p-1 rounded shadow"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-yellow-700 font-medium">
          <a href="#home" className="hover:text-orange-600 text-lg">
            Home
          </a>
          <a href="#about" className="hover:text-orange-600 text-lg">
            About
          </a>
          <a href="#services" className="hover:text-orange-600 text-lg">
            Services
          </a>
          <a href="#contact" className="hover:text-orange-600 text-lg">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-yellow-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden z-20">
            <a
              href="#home"
              className="hover:text-orange-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-orange-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-orange-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-orange-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="flex flex-col justify-center h-screen px-6 md:px-10 lg:px-20 text-left text-white relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Integrated Facility Management
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          Delivering End-to-End Facility & Supply Services
        </h2>
        <p className="max-w-xl text-base md:text-lg mb-8 opacity-90">
          We provide tailored solutions to enhance workplace productivity,
          safety, and hygiene while reducing operational risks for corporates,
          institutions, and industries across India.
        </p>
        <a
  href="/src/assets/Vishvam Profile.pdf"
  target="_blank" // opens in new tab
  rel="noopener noreferrer"
  className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-md w-fit shadow-md hover:bg-gray-100 transition"
>
  See More
</a>

      </div>

      {/* Flowing Line Backgrounds */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-70">
        {/* Line 1 */}
        <svg
          className="absolute w-[200%] h-full animate-[wave_10s_linear_infinite]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            d="M0,160 C360,300 1080,20 1440,160 V320 H0 Z"
          />
          <defs>
            <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#FF1493" />
            </linearGradient>
          </defs>
        </svg>

        {/* Line 2 */}
        <svg
          className="absolute w-[200%] h-full animate-[wave_15s_linear_infinite]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            d="M0,220 C400,100 1040,300 1440,220 V320 H0 Z"
          />
          <defs>
            <linearGradient id="grad2" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FFA500" />
              <stop offset="50%" stopColor="#FF6347" />
              <stop offset="100%" stopColor="#FF00FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Line 3 */}
        <svg
          className="absolute w-[200%] h-full animate-[wave_20s_linear_infinite]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="url(#grad3)"
            strokeWidth="1"
            d="M0,100 C500,200 940,50 1440,100 V320 H0 Z"
          />
          <defs>
            <linearGradient id="grad3" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="50%" stopColor="#FF4500" />
              <stop offset="100%" stopColor="#FF69B4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow Circles */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full mix-blend-overlay filter blur-2xl opacity-40 animate-spin-slow"></div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white">↓</span>
        </div>
      </div>
    </div>
  );
}
