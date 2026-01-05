import React from "react";

function Card({ img, title, desc, classname }) {
  return (
    <div
      className={`group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition 
      p-3 sm:p-4 lg:p-4 ${classname}`}
    >
      {/* Image */}
      <div className="overflow-hidden pt-4 sm:pt-5 lg:pt-0">
        <img
          src={img}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3">
        <h3 className="text-lg sm:text-xl font-bold leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 mt-3 sm:mt-4 text-sm leading-relaxed">
          {desc}
        </p>

        <button className="mt-4 sm:mt-5 text-pink-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          Read More <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
