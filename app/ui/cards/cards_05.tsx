import React from "react";

function Card05() {
  return (
    <div className="container max-w-full h-screen flex items-center justify-center bg-black">
      <div className="relative inline-flex group">
        <div className="absolute inset-0 transition-all duration-1000 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-70 group-hover:opacity-100 animate-tilt"></div>
        <a
          href="#"
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-900 rounded-lg shadow-lg font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
           Code Eating Ants
        </a>
      </div>
    </div>
  );
}

export default Card05;
