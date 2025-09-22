import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Vishvam Management Services Pvt. Ltd. | All Rights Reserved.
      </p>
    </footer>
  );
}
