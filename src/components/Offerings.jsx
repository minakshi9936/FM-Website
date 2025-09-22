import React from "react";
import { Building2, ShieldCheck, Wrench, Leaf, Bug, Package, Gift, Recycle } from "lucide-react";

export default function Offerings() {
  const offerings = [
    {
      title: "Integrated Facility Management",
      items: [
        { text: "Housekeeping & Janitorial", icon: Building2 },
        { text: "Security & Surveillance", icon: ShieldCheck },
        { text: "Technical Maintenance", icon: Wrench },
        { text: "Gardening & Landscaping", icon: Leaf },
        { text: "Pest Control", icon: Bug },
      ],
    },
    {
      title: "Supply Chain & Procurement",
      items: [
        { text: "Eco-friendly Cleaning Solutions", icon: Recycle },
        { text: "Office Stationery & Supplies", icon: Package },
        { text: "Tissue & Hygiene Products", icon: Leaf },
        { text: "Corporate Gifting & Packaging", icon: Gift },
        { text: "Green Products for Sustainability", icon: Recycle },
      ],
    },
  ];

  return (
    <section id="offerings" className="py-20 px-6 lg:px-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-400 mb-6 tracking-wide drop-shadow-lg">
        Key <span className="text-black">Offerings</span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-orange-500 rounded"></span>
      </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-orange-100"
            >
              <h3 className="font-semibold text-2xl mb-6 text-gray-800 border-b pb-2 border-gray-200">
                {offering.title}
              </h3>
              <ul className="space-y-4 text-left">
                {offering.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-lg text-gray-700 hover:text-orange-600 transition"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Icon size={20} />
                      </div>
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
