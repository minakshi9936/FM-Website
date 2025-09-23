// src/components/Contact.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

export default function Contact() {
  return (
    <section
      id = "contact" className="py-20 px-6 lg:px-20 bg-gradient-to-b from-orange-50 to-white"
      style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}
    >
      {/* Gradient Overlay */}
     {/* <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-yellow-900/20"></div> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
         <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-6 tracking-wide drop-shadow-lg">
        Contact <span className="text-black">Us</span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 rounded"></span>
      </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Have questions? We’d love to hear from you. Reach out through any of
            the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white backdrop-blur-xl border border-yellow-400/30 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-400 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6 text-black">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-orange-400 text-2xl" />
                <p>
                  Vishvam Management Services Pvt. Ltd. <br />
                  Head Office - B114, Ground Floor, Sector 64, Noida - 201301 <br/>
                  Mumbai Branch - 301,Durgesh Park, Kalher, Bhiwandi - 421302
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-orange-400 text-2xl" />
                <p>+91 7972867943, +91 9718354082</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-orange-400 text-2xl" />
                <p>info@vishvamindia.com</p>
              </div>
            </div>
          </div>

          {/* Google Form CTA */}
          <div className="bg-white backdrop-blur-xl border border-yellow-400/30 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-orange-400 mb-6">
              Connect With Us
            </h2>
            <p className="text-black mb-6">
              Fill out our Google Form and we’ll get back to you as soon as
              possible.
            </p>
            <a
              href="https://forms.gle/amcd6iD4dYxfMhTG8"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-3 bg-orange-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
            >
              Go to Form
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
  {/* ✅ WhatsApp Floating Button */}
            <a
              href="https://wa.me/917972867943"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-[9999]"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
    </section>
  );
}
