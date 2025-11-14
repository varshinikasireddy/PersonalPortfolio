import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-8 bg-black border-t border-neutral-800">
      <p className="text-sm text-neutral-300 mb-2">
        Designed & Developed with 🩵 by varshinikasireddy.
      </p>
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} varshinikasireddy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;