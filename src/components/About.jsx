import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 lg:px-20 bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/ok.png')" }} // 🔹 replace with your image
      ></div>*/}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold  text-orange-400 mb-6 tracking-wide drop-shadow-lg">
            About <span className="text-black">Us</span>
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-orange-500 rounded"></span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed mb-8 text-black">
            <span className="font-semibold text-orange-500">
              Vishvam Management Services Pvt. Ltd.
            </span>
            {" "} is a professionally managed company delivering end-to-end Facility
            Management and Specialized Supply Services to corporates,
            institutions, residential societies, and industrial clients across
            India. With a focus on quality, efficiency, and sustainability, we
            help organizations streamline their operational infrastructure so
            they can focus on their core objectives. Our tailored solutions are
            designed to enhance workplace productivity, safety, and hygiene
            while reducing overhead and operational risks.
          </p>

          {/* Value Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Integrity & Transparency",
              "Client-Centric Approach",
              "Experienced Team",
              "PAN India Presence",
              "Safety & Compliance",
              "Green & Sustainable Practices",
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 border border-orange-400/50 rounded-xl shadow-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="block font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group w-[90%] lg:w-[80%]">
            {/* Gradient Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Image */}
            <img
              src="/bg1.jpg" // 🔹 replace with your image
              alt="About Vishvam Management"
              className="relative rounded-2xl shadow-lg w-full object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
