import React from "react";

function Button({ className, value }) {
  return (
    <>
      <button
        className={`${className} mt-4 sm:mt-5 bg-pink-500 text-gray-800 
        py-2.5 sm:py-3 px-6 sm:px-10 md:px-12 
        text-sm sm:text-md font-semibold 
        hover:bg-pink-600 transition`}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
